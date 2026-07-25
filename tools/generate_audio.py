#!/usr/bin/env python3
"""TOEIC リスニング音声を edge-tts(無料・Microsoftニューラル音声)で一括生成する。

使い方(Mac のターミナルで):
  1) pip3 install edge-tts
  2) リポジトリのルートで:  python3 tools/generate_audio.py

- tools/audio_manifest.json に従い、assets/audio/ 以下へ mp3 を生成する
- 生成した内容(英文・声・速さ)を assets/audio/.state.json に記録しておき、
  次回は『内容が変わっていないファイルだけ』スキップする。
  問題文を直したり読み上げ方を変えたりした箇所は自動で作り直されるので、
  古い音声が残ったままになることがない
- 失敗しても再実行すれば続きから進む
- 終わったら git add / commit / push すればアプリに反映される
"""
import asyncio
import json
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("edge-tts が見つかりません。先に `pip3 install edge-tts` を実行してください。")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = Path(__file__).resolve().parent / "audio_manifest.json"
STATE = ROOT / "assets" / "audio" / ".state.json"
CONCURRENCY = 4   # 同時生成数(多すぎるとサーバーに拒否されることがある)
RATE = "-5%"      # 少しゆっくりめ(本番程度)。標準速なら "+0%"


def spec(clip: dict) -> str:
    """そのファイルが何をどう読み上げたものかを表す文字列(変更検出用)。"""
    return "|".join([
        clip["voice"],
        clip.get("rate", RATE),
        clip.get("pitch", ""),
        clip["text"],
    ])


async def synth(sem: asyncio.Semaphore, clip: dict, state: dict) -> str:
    out = ROOT / clip["file"]
    want = spec(clip)
    if out.exists() and out.stat().st_size > 0 and state.get(clip["file"]) == want:
        return "skip"
    out.parent.mkdir(parents=True, exist_ok=True)
    # ナレーターなど、クリップ個別に速さ・高さが指定されていればそれを使う
    kwargs = {"rate": clip.get("rate", RATE)}
    if clip.get("pitch"):
        kwargs["pitch"] = clip["pitch"]
    async with sem:
        for attempt in range(3):
            try:
                tts = edge_tts.Communicate(clip["text"], clip["voice"], **kwargs)
                await tts.save(str(out))
                if out.exists() and out.stat().st_size > 0:
                    state[clip["file"]] = want
                    return "ok"
            except Exception as e:  # noqa: BLE001
                if attempt == 2:
                    print(f"\n  失敗: {clip['file']} ({e})")
                    return "fail"
                await asyncio.sleep(2 * (attempt + 1))
    return "fail"


def cleanup_orphans(clips: list, state: dict) -> int:
    """manifest に無くなった古い mp3 を削除する(記号の分割などで番号がずれた分)。"""
    wanted = {c["file"] for c in clips}
    removed = 0
    audio_dir = ROOT / "assets" / "audio"
    for mp3 in audio_dir.rglob("*.mp3"):
        rel = mp3.relative_to(ROOT).as_posix()
        if rel not in wanted:
            mp3.unlink()
            state.pop(rel, None)
            removed += 1
    return removed


async def main() -> None:
    clips = json.loads(MANIFEST.read_text(encoding="utf-8"))
    state = {}
    if STATE.exists():
        try:
            state = json.loads(STATE.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            state = {}

    orphans = cleanup_orphans(clips, state)
    if orphans:
        print(f"不要になった古い音声を {orphans} 個削除しました。")

    # 既存ファイルがあるのに記録が無い場合(初回の移行時)は、内容が一致するとみなせないので作り直す
    todo = [c for c in clips
            if not ((ROOT / c["file"]).exists() and state.get(c["file"]) == spec(c))]
    print(f"全 {len(clips)} クリップ中、{len(todo)} 個を生成します"
          f"(変更なし {len(clips) - len(todo)} 個はスキップ)…")
    if not todo:
        print("すべて最新です。生成するものはありません。")
        return

    sem = asyncio.Semaphore(CONCURRENCY)
    done = ok = fail = 0
    tasks = [asyncio.create_task(synth(sem, c, state)) for c in clips]
    try:
        for t in asyncio.as_completed(tasks):
            r = await t
            done += 1
            ok += r == "ok"
            fail += r == "fail"
            print(f"\r  {done}/{len(clips)}  新規:{ok} 失敗:{fail}", end="")
    finally:
        print()
        STATE.parent.mkdir(parents=True, exist_ok=True)
        STATE.write_text(json.dumps(state, ensure_ascii=False, indent=0), encoding="utf-8")

    if fail:
        print(f"{fail} 件失敗しました。もう一度実行すると失敗分だけ再試行します。")
        sys.exit(1)
    print("完了! 生成された assets/audio/ をコミットしてください:")
    print("  git add assets/audio && git commit -m 'リスニング音声を更新' && git push origin main")


if __name__ == "__main__":
    asyncio.run(main())
