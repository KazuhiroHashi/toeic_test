#!/bin/bash
# ナレーター候補の声を聞き比べる(Mac用)
#
#   bash tools/preview_narrators.sh
#
# 気に入った声の名前を tools/build_audio_manifest.js の
#   var NARRATOR = "...";
# に書いてから、
#   node tools/build_audio_manifest.js && node tools/clean_narration.js && python3 tools/generate_audio.py
# を実行するとナレーション部分だけ作り直せます。

set -e
TEXT="Questions 32 through 34 refer to the following conversation. Number 32. Why is the woman calling?"
OUT=$(mktemp -d)

VOICES=(
  "en-US-AndrewNeural"      # 男・落ち着いた進行役(現在の設定)
  "en-US-BrianNeural"       # 男・やや軽め
  "en-US-ChristopherNeural" # 男・低め
  "en-US-EmmaNeural"        # 女・明瞭
  "en-US-MichelleNeural"    # 女・低め
  "en-US-AriaNeural"        # 女・標準
)

for v in "${VOICES[@]}"; do
  echo ""
  echo "▶ $v"
  edge-tts --voice "$v" --rate=-5% --text "$TEXT" --write-media "$OUT/$v.mp3" >/dev/null 2>&1
  afplay "$OUT/$v.mp3"
done

echo ""
echo "比較のため、会話に出てくる声も聞いてみます(この声と似ていないものを選んでください)"
for v in en-US-GuyNeural en-US-JennyNeural; do
  echo ""
  echo "▶ $v (登場人物)"
  edge-tts --voice "$v" --rate=-5% --text "Hi, Emily. I heard the client moved our presentation up to Thursday." --write-media "$OUT/$v.mp3" >/dev/null 2>&1
  afplay "$OUT/$v.mp3"
done

echo ""
echo "一時ファイル: $OUT"
