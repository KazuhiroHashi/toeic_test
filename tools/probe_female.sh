#!/bin/bash
# Part 1・2 で記号を読ませる候補の声を確認する(Mac用)
#   bash tools/probe_female.sh
set -e
OUT=$(mktemp -d)
n=0
say () {
  n=$((n+1))
  echo ""
  echo "▶ $n: $2"
  /usr/bin/python3 -m edge_tts --voice "$1" --rate=-5% --text "A." \
    --write-media "$OUT/$n.mp3" >/dev/null 2>&1 || true
  if [ -s "$OUT/$n.mp3" ]; then afplay "$OUT/$n.mp3"; else echo "   (生成できません)"; fi
  sleep 0.4
}
echo "═══ 未確認の3声 ═══"
say en-GB-RyanNeural     "Ryan(イギリス男性)"
say en-AU-WilliamNeural  "William(オーストラリア男性)"
say en-CA-ClaraNeural    "Clara(カナダ女性)"
echo ""
echo "═══ 確認済み ═══"
say en-US-JennyNeural    "Jenny(アメリカ女性・一番良い)"
say en-US-GuyNeural      "Guy(アメリカ男性・問題なし)"
say en-CA-LiamNeural     "Liam(カナダ男性)"
echo ""
echo "1〜3 のうち、4番の Jenny のように下げて言い切っていないものがあれば番号を教えてください。"
echo "全部問題なければ「全部OK」で構いません。"
