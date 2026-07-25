#!/usr/bin/env python3
"""mp3 の前後に焼き付いている無音を刈り取る。

edge-tts が作る mp3 には前後に 0.2〜0.4 秒ほどの無音が入っている。
そのぶん、記号(A.)と説明文のあいだが指定値(0ms)より長く聞こえる。
このスクリプトで無音を削ると、manifest で指定した間隔がそのまま再生の間隔になる。

使い方(Mac のターミナルで。ffmpeg が必要):
  python3 tools/trim_silence.py            … Part 1・2 の音声だけ刈り取る(既定・安全)
  python3 tools/trim_silence.py --all      … すべての音声を刈り取る
  python3 tools/trim_silence.py --dry-run  … 対象と削減量を表示するだけ

ffmpeg が無い場合:
  conda install -c conda-forge ffmpeg    (Anaconda を使っている場合)
  brew install ffmpeg                    (Homebrew を使っている場合)

- 一度刈り取ったファイルは assets/audio/.trimmed.json に記録し、二重に刈り取らない
- 元に戻したいときは、対象の mp3 を消して python3 tools/generate_audio.py を実行し直す
"""
import concurrent.futures
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

# 別の場所の ffmpeg を使いたいときは環境変数で指定できる
#   FFMPEG=/opt/homebrew/bin/ffmpeg python3 tools/trim_silence.py
FFMPEG = os.environ.get("FFMPEG") or shutil.which("ffmpeg")

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "assets" / "audio"
STATE = AUDIO / ".trimmed.json"

# 削りすぎると語頭・語尾が欠けて「かすれた」ように聞こえる。
# 前後に残す無音を多めに取り、無音の判定も厳しめ(小さい音まで残す)にしている。
KEEP = "0.12"        # 前後に残す無音(秒)
THRESHOLD = "-55dB"  # これより小さい音だけを無音とみなす

FILTER = (
    f"silenceremove=start_periods=1:start_duration=0:start_silence={KEEP}"
    f":start_threshold={THRESHOLD}:detection=peak,areverse,"
    f"silenceremove=start_periods=1:start_duration=0:start_silence={KEEP}"
    f":start_threshold={THRESHOLD}:detection=peak,areverse"
)


def targets(all_parts: bool) -> list:
    files = sorted(AUDIO.rglob("*.mp3"))
    if all_parts:
        return files
    # 既定は Part 1・2 のみ(記号と説明文のあいだが問題になる箇所)
    return [f for f in files if "p1-" in f.parent.name or "p2-" in f.parent.name]


def preflight() -> None:
    """ffmpeg が実際に動くかを先に1回だけ確かめる。
    壊れた ffmpeg(依存ライブラリ欠落など)で全ファイル失敗するのを防ぐ。"""
    if not FFMPEG:
        print("ffmpeg が見つかりません。下のどちらかを実行してください:")
        print("  brew install ffmpeg")
        print("  conda install -c conda-forge ffmpeg -y")
        sys.exit(1)
    try:
        r = subprocess.run([FFMPEG, "-version"], capture_output=True, timeout=30)
    except Exception as e:  # noqa: BLE001
        print(f"ffmpeg を実行できませんでした: {e}")
        sys.exit(1)
    if r.returncode != 0:
        msg = r.stderr.decode("utf-8", "ignore").strip()
        print(f"ffmpeg({FFMPEG})が壊れています。エラー:")
        print("  " + msg.splitlines()[0] if msg else "  (詳細不明)")
        print("")
        print("対処(どちらか):")
        print("  1) Homebrew の ffmpeg を使う")
        print("     brew install ffmpeg")
        print("     FFMPEG=$(brew --prefix)/bin/ffmpeg python3 tools/trim_silence.py")
        print("  2) conda の ffmpeg を入れ直す")
        print("     conda install -c conda-forge ffmpeg freetype --force-reinstall -y")
        sys.exit(1)


def trim(path: Path) -> tuple:
    tmp = path.with_suffix(".trim.mp3")
    before = path.stat().st_size
    cmd = [FFMPEG, "-y", "-loglevel", "error", "-i", str(path),
           "-af", FILTER, "-codec:a", "libmp3lame", "-b:a", "64k", str(tmp)]
    try:
        subprocess.run(cmd, check=True, capture_output=True)
    except subprocess.CalledProcessError as e:
        tmp.unlink(missing_ok=True)
        return (path, 0, e.stderr.decode("utf-8", "ignore")[:200])
    if not tmp.exists() or tmp.stat().st_size == 0:
        tmp.unlink(missing_ok=True)
        return (path, 0, "出力が空でした")
    after = tmp.stat().st_size
    tmp.replace(path)
    return (path, before - after, None)


def main() -> None:
    preflight()

    all_parts = "--all" in sys.argv
    dry = "--dry-run" in sys.argv

    # --reset: 処理済みの記録を消す(音声を作り直したあと、もう一度刈り取りたいとき)
    if "--reset" in sys.argv:
        STATE.unlink(missing_ok=True)
        print("処理済みの記録を消しました。次回は全ファイルが対象になります。")
        return

    state = {}
    if STATE.exists():
        try:
            state = json.loads(STATE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            state = {}

    files = targets(all_parts)
    todo = [f for f in files if state.get(f.relative_to(ROOT).as_posix()) != "trimmed"]
    print(f"対象 {len(files)} 個のうち、未処理 {len(todo)} 個を刈り取ります"
          f"({'全パート' if all_parts else 'Part 1・2 のみ'})。")
    if dry:
        print("--dry-run なので実行しません。")
        return
    if not todo:
        print("処理するものはありません。")
        return

    saved = done = fail = 0
    aborted = False
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
        for path, diff, err in ex.map(trim, todo):
            done += 1
            if err:
                fail += 1
                if fail <= 3:
                    print(f"\n  失敗: {path.relative_to(ROOT)} ({err})")
                # 立て続けに失敗するのは環境の問題。全件試しても無駄なので止める
                if fail >= 10 and saved == 0:
                    aborted = True
                    break
            else:
                saved += diff
                state[path.relative_to(ROOT).as_posix()] = "trimmed"
            print(f"\r  {done}/{len(todo)}  削減 {saved // 1024} KB  失敗 {fail}", end="")
    print()
    if aborted:
        STATE.write_text(json.dumps(state, ensure_ascii=False, indent=0), encoding="utf-8")
        print("連続で失敗したため中止しました。ffmpeg の環境に問題があります。")
        print("音声ファイルは書き換えていないので、そのままで安全です。")
        print("対処: brew install ffmpeg のうえ")
        print("      FFMPEG=$(brew --prefix)/bin/ffmpeg python3 tools/trim_silence.py")
        sys.exit(1)
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=0), encoding="utf-8")
    print("完了。アプリで聞いて確認してから、次でコミットしてください:")
    print("  git add -A && git commit -m '音声の前後の無音を除去' && git push origin main")


if __name__ == "__main__":
    main()
