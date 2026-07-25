#!/usr/bin/env python3
"""記号(A. B. C. D.)の音声を、声ごとに1本ずつ作って4つに切り分ける。

なぜこうするか:
  edge-tts は「A.」のような極端に短い発話が苦手で、かすれた不自然な音になる。
  「A. B. C. D.」と続けて読ませると、どれも正しく『エイ・ビー・シー・ディー』と発音される。
  そこで1本の音声として作り、4つに切り分けて部品として使い回す。

なぜ「A.」単独ではダメか:
  edge-tts は文中の A を『文字のエイ』ではなく『冠詞の a(ア)』として読む。
  冠詞は弱く短く発音されるため、かすれた不明瞭な音になる。
  文字を連続させたときだけ『文字として読む』と判定される。

切り分け方:
  文字と文字のあいだは完全な無音ではなく『小さい音』なので、
  検出の閾値を高め(-12dB など)まで含めて段階的に探す。
  edge-tts 7.x は WordBoundary(語ごとの位置)を返さないため、
  タイムスタンプ方式は使えない(将来返すようになれば自動でそちらを使う)。

記号の音は全問題で共通なので、声ごとに4ファイル(全8声で32ファイル)あれば足りる。

使い方(Mac のターミナルで):
  FFMPEG=$(brew --prefix)/bin/ffmpeg FFPROBE=$(brew --prefix)/bin/ffprobe \
    /usr/bin/python3 tools/build_letters.py

必要なもの:
  - edge-tts   /usr/bin/python3 -m pip install --user edge-tts
  - ffmpeg     brew install ffmpeg

出力: assets/audio/letters/<声の名前>/A.mp3 〜 D.mp3
"""
import asyncio
import itertools
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

HEAD_PAD = 0.06     # 各文字の前に残す余白(秒)
TAIL_PAD = 0.16     # 各文字の後に残す余白(秒)。語尾の余韻を切らないため
MIN_SEG = 0.15      # 切り出した1文字の最低の長さ(秒)
MAX_SEG = 0.90      # 切り出した1文字の最大の長さ(秒)。長すぎ=切れていない
EDGE = 0.08         # これより端に寄った無音は「先頭/末尾の無音」とみなす
GAP_PAD = 0.05      # 切り出し位置を無音側へ少し広げる量(秒)

# 文字と文字のあいだは「完全な無音」ではなく「小さい音」なので、
# 閾値を高め(-12dB など)にしないと検出できない声がある。
NOISES = [-12, -15, -18, -20, -22, -25, -30, -35, -40]
DURATIONS = [0.03, 0.04, 0.05, 0.07, 0.09]


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


async def synth(voice: str, path: Path) -> list:
    """音声を保存し、各語の [開始秒, 終了秒] を返す。速度は変えない
    (短い音を引き延ばすと歪むため)。"""
    path.parent.mkdir(parents=True, exist_ok=True)
    tts = edge_tts.Communicate(TEXT, voice)
    audio = bytearray()
    marks = []
    async for chunk in tts.stream():
        if chunk["type"] == "audio":
            audio.extend(chunk["data"])
        elif chunk["type"] == "WordBoundary":
            # offset / duration は 100ナノ秒単位
            s = chunk["offset"] / 1e7
            marks.append([s, s + chunk["duration"] / 1e7])
    path.write_bytes(bytes(audio))
    return marks


def bounds_from_marks(marks: list, total: float):
    """タイムスタンプから4文字分の切り出し区間を作る。"""
    if len(marks) != 4:
        return None
    out = []
    for i, (s, e) in enumerate(marks):
        start = max(0.0, s - HEAD_PAD)
        end = e + TAIL_PAD
        if i + 1 < len(marks):
            end = min(end, marks[i + 1][0] - 0.02)   # 次の文字に食い込ませない
        end = min(end, total)
        out.append((start, end))
    if valid(out):
        return out
    return None


def valid(bounds) -> bool:
    return all(MIN_SEG <= e - s <= MAX_SEG for s, e in bounds)


def silences(path: Path, noise: int, dur: float) -> list:
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
        if s > 0.08 and e < total - 0.08:
            out.append((s, e))
    return out


def silence_spans(path: Path, noise: int, dur: float, total: float) -> list:
    r = subprocess.run([FFMPEG, "-i", str(path), "-af",
                        f"silencedetect=noise={noise}dB:d={dur}", "-f", "null", "-"],
                       capture_output=True)
    log = r.stderr.decode("utf-8", "ignore")
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", log)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", log)]
    return [(s, ends[i] if i < len(ends) else total) for i, s in enumerate(starts)]


def bounds_from_silence(path: Path, total: float):
    """無音の位置から4文字分の切り出し区間を探す。

    区切りは『長い無音の上位3つ』ではなく、
    『4つの長さが最も均等になる組み合わせ』を選ぶ。
    A〜D はほぼ同じ長さで読まれるので、これが最も確実。
    """
    best = None
    for noise in NOISES:
        for d in DURATIONS:
            spans = silence_spans(path, noise, d, total)
            speech_start, speech_end = 0.0, total
            interior = []
            for (s, e) in spans:
                if s <= EDGE:                  # 先頭の無音
                    speech_start = max(speech_start, e)
                elif e >= total - EDGE:        # 末尾の無音
                    speech_end = min(speech_end, s)
                else:
                    interior.append((s, e))
            if len(interior) < 3:
                continue
            for combo in itertools.combinations(interior, 3):
                segs = [
                    (speech_start, combo[0][0]),
                    (combo[0][1], combo[1][0]),
                    (combo[1][1], combo[2][0]),
                    (combo[2][1], speech_end),
                ]
                lens = [e - s for s, e in segs]
                if min(lens) < MIN_SEG or max(lens) > MAX_SEG:
                    continue
                score = max(lens) - min(lens)   # ばらつきが小さいほど良い
                if best is None or score < best[0]:
                    # 切り出し位置を無音側へ少し広げて、語頭・語尾を欠けさせない
                    padded = []
                    for i, (a, b) in enumerate(segs):
                        lo = combo[i - 1][1] if i > 0 else 0.0
                        hi = combo[i][0] if i < 3 else total
                        padded.append((max(lo, a - GAP_PAD), min(hi, b + GAP_PAD)))
                    best = (score, padded)
    return best[1] if best else None


# 切り出した各ファイルの前後の無音を整える(末尾に長い無音が残ると間延びするため)
TIDY = ("silenceremove=start_periods=1:start_duration=0:start_silence=0.08"
        ":start_threshold=-45dB:detection=peak,areverse,"
        "silenceremove=start_periods=1:start_duration=0:start_silence=0.08"
        ":start_threshold=-45dB:detection=peak,areverse")


def cut(src: Path, dst: Path, start: float, end: float) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([FFMPEG, "-y", "-loglevel", "error", "-ss", f"{max(0, start):.3f}",
                    "-to", f"{end:.3f}", "-i", str(src), "-af", TIDY,
                    "-codec:a", "libmp3lame", "-b:a", "64k", str(dst)],
                   check=True, capture_output=True)


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
            marks = await synth(voice, whole)
        except Exception as e:  # noqa: BLE001
            print(f"生成失敗 ({e})")
            ng += 1
            continue

        total = duration(whole)
        how = "タイムスタンプ"
        bounds = bounds_from_marks(marks, total)
        if bounds is None:
            how = "無音検出"
            bounds = bounds_from_silence(whole, total)
        if bounds is None:
            print("切り分けできませんでした。検出できた区切りの数:")
            for noise in NOISES:
                row = " ".join(f"{d}s→{len(silences(whole, noise, d))}" for d in DURATIONS)
                print(f"    {noise}dB: {row}")
            print(f"  手動で確認してください: {whole}")
            ng += 1
            continue

        for i, (s, e) in enumerate(bounds):
            cut(whole, OUT / voice / f"{LETTERS[i]}.mp3", s, e)
        whole.unlink(missing_ok=True)
        lens = " ".join(f"{duration(OUT / voice / (L + '.mp3')):.2f}s" for L in LETTERS)
        print(f"OK({how}: {lens})")
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
