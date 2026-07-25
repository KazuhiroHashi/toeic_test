#!/usr/bin/env python3
"""TOEIC リスニング音声を edge-tts(無料・Microsoftニューラル音声)で一括生成する。

使い方(Mac のターミナルで):
  1) pip3 install edge-tts
  2) リポジトリのルートで:  python3 tools/generate_audio.py

- tools/audio_manifest.json に従い、assets/audio/ 以下へ mp3 を生成する
- 既に存在するファイルはスキップするので、失敗しても再実行すれば続きから進む
- 全部で200個超・数分かかる。終わったら git add / commit / push すればアプリに反映される
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
CONCURRENCY = 4   # 同時生成数(多すぎるとサーバーに拒否されることがある)
RATE = "-5%"      # 少しゆっくりめ(本番程度)。標準速なら "+0%"

async def synth(sem: asyncio.Semaphore, clip: dict) -> str:
    out = ROOT / clip["file"]
    if out.exists() and out.stat().st_size > 0:
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
                    return "ok"
            except Exception as e:  # noqa: BLE001
                if attempt == 2:
                    print(f"\n  失敗: {clip['file']} ({e})")
                    return "fail"
                await asyncio.sleep(2 * (attempt + 1))
    return "fail"

async def main() -> None:
    clips = json.loads(MANIFEST.read_text(encoding="utf-8"))
    print(f"{len(clips)} クリップを生成します(既存はスキップ)…")
    sem = asyncio.Semaphore(CONCURRENCY)
    done = ok = skip = fail = 0
    tasks = [asyncio.create_task(synth(sem, c)) for c in clips]
    for t in asyncio.as_completed(tasks):
        r = await t
        done += 1
        ok += r == "ok"
        skip += r == "skip"
        fail += r == "fail"
        print(f"\r  {done}/{len(clips)}  新規:{ok} スキップ:{skip} 失敗:{fail}", end="")
    print()
    if fail:
        print(f"{fail} 件失敗しました。もう一度実行すると失敗分だけ再試行します。")
        sys.exit(1)
    print("完了! 生成された assets/audio/ をコミットしてください:")
    print("  git add assets/audio && git commit -m 'リスニング音声を追加' && git push")

if __name__ == "__main__":
    asyncio.run(main())
