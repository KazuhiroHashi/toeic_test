#!/usr/bin/env python3
"""記号(A. B. C. D.)の音声を、声ごとに1本ずつ作って4つに切り分ける。

なぜこうするか:
  edge-tts は「A.」のような極端に短い発話が苦手で、かすれた不自然な音になる。
  「A. B. C. D.」と続けて読ませると、どれも正しく『エイ・ビー・シー・ディー』と発音される。
  そこで1本の音声として作り、無音の位置で4つに切り分けて部品として使い回す。

記号の音は全問題で共通なので、声ごとに4ファイル(全8声で32ファイル)あれば足りる。

使い方(Mac のターミナルで):
  /usr/bin/python3 tools/build_letters.py

必要なもの:
  - edge-tts   /usr/bin/python3 -m pip install --user edge-tts
  - ffmpeg     brew install ffmpeg
               (Anaconda の ffmpeg は壊れていることがあるので Homebrew 版を推奨)

出力: assets/audio/letters/<声の名前>/A.mp3 〜 D.mp3
"""
import asyncio
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("edge-tts が見つかりません。先に実行してください:")
    print("  /usr/bin/python3 -m pip install --user edge-tts")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "audio" / "letters"

FFMPEG = os.environ.get("FFMPEG") or shutil.which("ffmpeg")
FFPROBE = os.environ.get("FFPROBE") or shutil.which("ffprobe")

# 登場人物の声(build_audio_manifest.js の V と一致させること)
VOICES = [
    "en-US-GuyNeural", "en-US-JennyNeural",
    "en-GB-RyanNeural", "en-GB-SoniaNeural",
    "en-AU-WilliamNeural", "en-AU-NatashaNeural",
    "en-CA-LiamNeural", "en-CA-ClaraNeural",
]

LETTERS = ["A", "B", "C", "D"]
TEXT = "A. B. C. D."
PAD = 0.05          # 切り出しの前後に残す余白(秒)
# 無音の検出条件。1つ目でうまく3か所に分かれなければ、順に緩めて試す
DETECT = [(-40, 0.12), (-35, 0.10), (-45, 0.15), (-30, 0.08), (-50, 0.18)]


def die(msg: str) -> None:
    print(msg)
    sys.exit(1)


def duration(path: Path) -> float:
    r = subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=noprint_wrappers=1:nokey=1", str(path)],
                       capture_output=True)
    try:
        return float(r.stdout.decode().strip())
    except ValueError:
        die(f"音声の長さを取得できませんでした: {path}")


def silences(path: Path, noise: int, dur: float) -> list:
    """内部の無音区間 [(start, end), ...] を返す。"""
    r = subprocess.run([FFMPEG, "-i", str(path), "-af",
                        f"silencedetect=noise={noise}dB:d={dur}", "-f", "null", "-"],
                       capture_output=True)
    log = r.stderr.decode("utf-8", "ignore")
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
    total = duration(path)
    out = []
    for i, s in enumerate(starts):
        e = ends[i] if i < len(ends) else total
        # 先頭・末尾の無音は区切りではないので除く
        if s > 0.08 and e < total - 0.08:
            out.append((s, e))
    return out


def cut(src: Path, dst: Path, start: float, end: float) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([FFMPEG, "-y", "-loglevel", "error", "-ss", f"{max(0, start):.3f}",
                    "-to", f"{end:.3f}", "-i", str(src),
                    "-codec:a", "libmp3lame", "-b:a", "64k", str(dst)],
                   check=True, capture_output=True)


async def synth(voice: str, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    # 速度は変えない(引き延ばすと短い音が歪むため)
    tts = edge_tts.Communicate(TEXT, voice)
    await tts.save(str(path))


async def main() -> None:
    if not FFMPEG or not FFPROBE:
        die("ffmpeg / ffprobe が見つかりません。\n"
            "  brew install ffmpeg\n"
            "  FFMPEG=$(brew --prefix)/bin/ffmpeg FFPROBE=$(brew --prefix)/bin/ffprobe "
            "/usr/bin/python3 tools/build_letters.py")

    ok = ng = 0
    for voice in VOICES:
        whole = OUT / voice / "_all.mp3"
        print(f"{voice} …", end=" ", flush=True)
        try:
            await synth(voice, whole)
        except Exception as e:  # noqa: BLE001
            print(f"生成失敗 ({e})")
            ng += 1
            continue

        gaps = []
        for noise, d in DETECT:
            gaps = silences(whole, noise, d)
            if len(gaps) == 3:
                break
        if len(gaps) != 3:
            print(f"区切りを3か所に特定できませんでした(検出 {len(gaps)} か所)。"
                  f"この声は手動で確認してください: {whole}")
            ng += 1
            continue

        total = duration(whole)
        bounds = [(0.0, gaps[0][0]),
                  (gaps[0][1], gaps[1][0]),
                  (gaps[1][1], gaps[2][0]),
                  (gaps[2][1], total)]
        for i, (s, e) in enumerate(bounds):
            cut(whole, OUT / voice / f"{LETTERS[i]}.mp3", s - PAD, e + PAD)
        whole.unlink(missing_ok=True)
        print("OK")
        ok += 1

    print(f"\n完了: 成功 {ok} 声 / 失敗 {ng} 声")
    print(f"出力先: {OUT}")
    print("\n聞いて確認する例:")
    print("  for f in assets/audio/letters/en-GB-SoniaNeural/*.mp3; do afplay \"$f\"; done")
    print("\n問題なければ:")
    print("  node tools/build_audio_manifest.js")
    print("  /usr/bin/python3 tools/generate_audio.py")


if __name__ == "__main__":
    asyncio.run(main())
