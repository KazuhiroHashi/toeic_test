#!/bin/bash
# 記号を「言い切らせる」書き方を探す(Mac用)
#   bash tools/probe_female.sh
set -e
OUT=$(mktemp -d)
n=0
say () {   # $1=声  $2=読ませる文  $3=説明
  n=$((n+1))
  echo ""
  echo "▶ $n: $3   [$2]"
  /usr/bin/python3 -m edge_tts --voice "$1" --rate=-5% --text "$2" \
    --write-media "$OUT/$n.mp3" >/dev/null 2>&1 || true
  if [ -s "$OUT/$n.mp3" ]; then afplay "$OUT/$n.mp3"; else echo "   (生成できません)"; fi
  sleep 0.3
}

echo "═══ イギリス女性 Libby ═══"
say en-GB-LibbyNeural   "A."   "ピリオド(現在)"
say en-GB-LibbyNeural   "A!"   "感嘆符"
say en-GB-LibbyNeural   "A"    "記号なし"

echo ""
echo "═══ オーストラリア女性 Natasha ═══"
say en-AU-NatashaNeural "A."   "ピリオド(現在)"
say en-AU-NatashaNeural "A!"   "感嘆符"
say en-AU-NatashaNeural "A"    "記号なし"

echo ""
echo "═══ 参考: 言い切れているアメリカ女性 Jenny ═══"
say en-US-JennyNeural   "A."   "ピリオド"

echo ""
echo "1〜6 のうち、Jenny(7番)のように下げて言い切っている番号を教えてください。"
