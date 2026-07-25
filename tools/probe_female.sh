#!/bin/bash
# 記号を単独で読ませたときの女性の声を確認する(Mac用)
#   bash tools/probe_female.sh
set -e
OUT=$(mktemp -d)
say () {
  echo ""
  echo "▶ $1  ($2)"
  /usr/bin/python3 -m edge_tts --voice "$1" --rate=-5% --text "A." \
    --write-media "$OUT/$1.mp3" >/dev/null 2>&1 || true
  if [ -s "$OUT/$1.mp3" ]; then afplay "$OUT/$1.mp3"; else echo "   (この声は使えません)"; fi
  sleep 0.3
}
echo "═══ 記号「A.」だけを読ませた音 ═══"
say en-US-GuyNeural     "アメリカ男性(問題なし)"
say en-US-JennyNeural   "アメリカ女性"
say en-GB-LibbyNeural   "イギリス女性(新)"
say en-GB-SoniaNeural   "イギリス女性(旧・問題あり)"
say en-AU-NatashaNeural "オーストラリア女性"
say en-CA-ClaraNeural   "カナダ女性"
echo ""
echo "「エイ」と言い切っているものと、そうでないものを教えてください。"
