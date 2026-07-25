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
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "assets" / "audio"
STATE = AUDIO / ".trimmed.json"

KEEP = "0.03"        # 前後に残す無音(秒)。0 にすると語頭が欠けることがある
THRESHOLD = "-45dB"  # これより小さい音を無音とみなす

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


def trim(path: Path) -> tuple:
    tmp = path.with_suffix(".trim.mp3")
    before = path.stat().st_size
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", str(path),
           "-af", FILTER, "-codec:a", "libmp3lame", "-q:a", "4", str(tmp)]
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
    if shutil.which("ffmpeg") is None:
        print("ffmpeg が見つかりません。先にどちらかを実行してください:")
        print("  conda install -c conda-forge ffmpeg")
        print("  brew install ffmpeg")
        sys.exit(1)

    all_parts = "--all" in sys.argv
    dry = "--dry-run" in sys.argv

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
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:
        for path, diff, err in ex.map(trim, todo):
            done += 1
            if err:
                fail += 1
                print(f"\n  失敗: {path.relative_to(ROOT)} ({err})")
            else:
                saved += diff
                state[path.relative_to(ROOT).as_posix()] = "trimmed"
            print(f"\r  {done}/{len(todo)}  削減 {saved // 1024} KB  失敗 {fail}", end="")
    print()
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=0), encoding="utf-8")
    print("完了。アプリで聞いて確認してから、次でコミットしてください:")
    print("  git add -A && git commit -m '音声の前後の無音を除去' && git push origin main")


if __name__ == "__main__":
    main()
