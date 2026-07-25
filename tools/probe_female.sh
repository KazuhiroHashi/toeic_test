#!/bin/bash
# 女性の声を聞き比べる(Mac用)
#   bash tools/probe_female.sh
# Part 1 の選択肢を、いま使っている女性4声＋代替候補で読ませる。

set -e
OUT=$(mktemp -d)
S="A. A man is sweeping a walkway."

say () {
  echo ""
  echo "▶ $1  ($2)"
  /usr/bin/python3 -m edge_tts --voice "$1" --rate=-5% --text "$S" \
    --write-media "$OUT/$1.mp3" >/dev/null 2>&1 || true
  if [ -s "$OUT/$1.mp3" ]; then afplay "$OUT/$1.mp3"; else echo "   (この声は使えません)"; fi
  sleep 0.3
}

echo "═══ いま使っている女性4声 ═══"
say en-US-JennyNeural   "アメリカ"
say en-GB-SoniaNeural   "イギリス ← 問題の声"
say en-AU-NatashaNeural "オーストラリア"
say en-CA-ClaraNeural   "カナダ"

echo ""
echo "═══ イギリス人女性の代替候補 ═══"
say en-GB-LibbyNeural   "イギリス 代替1"
say en-GB-MaisieNeural  "イギリス 代替2"

echo ""
echo "═══ 参考: 問題のない男性 ═══"
say en-US-GuyNeural     "アメリカ男性"

echo ""
echo "どの女性が自然に聞こえたか教えてください。"
