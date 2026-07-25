#!/bin/bash
# ナレーター候補の声を聞き比べる(Mac用)
#
#   bash tools/preview_narrators.sh                                  … 候補6声 + 登場人物6声
#   bash tools/preview_narrators.sh en-US-EmmaNeural en-US-AvaNeural … 指定した声だけ
#
# 気に入った声の名前を tools/build_audio_manifest.js の
#   var NARRATOR = "...";
# に書いてから、
#   node tools/build_audio_manifest.js && node tools/clean_narration.js && python3 tools/generate_audio.py
# を実行するとナレーション部分だけ作り直せます。

set -e
TEXT="Questions 32 through 34 refer to the following conversation. Number 32. Why is the woman calling?"
OUT=$(mktemp -d)

# 選ぶときの基準は「アクセント」より『年齢感』。
# 登場人物(下で再生)と年齢層が重なっていない声を選ぶと、進行役だとすぐ分かる。
VOICES=(
  "en-US-MichelleNeural"    # 女・落ち着いた大人(現在の設定)
  "en-US-AriaNeural"        # 女・標準的な30代アナウンサー調
  "en-US-EmmaNeural"        # 女・明瞭で若め
  "en-US-AvaNeural"         # 女・自然で若め
  "en-US-ChristopherNeural" # 男・低く硬い(年配寄り)
  "en-US-BrianNeural"       # 男・軽めで若め
)

# 引数で声を指定したら、それだけを聞く(登場人物の再生は省略)
ONLY=0
if [ "$#" -gt 0 ]; then VOICES=("$@"); ONLY=1; fi

# ナレーターは登場人物より少しゆっくり読ませて「進行役」と分かるようにしている
NRATE="-8%"

for v in "${VOICES[@]}"; do
  echo ""
  echo "▶ $v"
  edge-tts --voice "$v" --rate=$NRATE --text "$TEXT" --write-media "$OUT/$v.mp3" >/dev/null 2>&1
  afplay "$OUT/$v.mp3"
done

if [ "$ONLY" = "1" ]; then
  echo ""
  echo "一時ファイル: $OUT"
  exit 0
fi

echo ""
echo "比較のため、会話に出てくる登場人物の声も聞きます"
echo "(これらと『年齢感』が重なっていない声を選んでください)"
CHARS=(
  "en-US-GuyNeural:アメリカ男性"
  "en-US-JennyNeural:アメリカ女性"
  "en-CA-LiamNeural:カナダ男性"
  "en-CA-ClaraNeural:カナダ女性"
  "en-GB-SoniaNeural:イギリス女性"
  "en-AU-WilliamNeural:オーストラリア男性"
)
for entry in "${CHARS[@]}"; do
  v="${entry%%:*}"; label="${entry##*:}"
  echo ""
  echo "▶ $v (登場人物・$label)"
  edge-tts --voice "$v" --rate=-5% --text "Hi, Emily. I heard the client moved our presentation up to Thursday." --write-media "$OUT/$v.mp3" >/dev/null 2>&1
  afplay "$OUT/$v.mp3"
done

echo ""
echo "一時ファイル: $OUT"
