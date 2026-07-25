#!/bin/bash
# A / B / C / D の読み上げ方を聞き比べる(Mac用)
#
#   bash tools/preview_letters.sh
#
# 目的:記号(A〜D)が説明文とくっついて「ア」に潰れる問題を直すため、
# 「記号だけを別に読ませて間を空ける」方式が良いかを耳で確認する。

set -e
OUT=$(mktemp -d)
VOICE="en-US-GuyNeural"
RATE="-5%"

say () {  # $1=出力名  $2=読ませる文
  edge-tts --voice "$VOICE" --rate=$RATE --text "$2" --write-media "$OUT/$1.mp3" >/dev/null 2>&1 || true
  if [ ! -s "$OUT/$1.mp3" ]; then echo "  (生成に失敗しました: $2)"; return 1; fi
}

S1="A man is sweeping a walkway."
S2="A man is putting on his jacket."
S3="A woman is sitting on a bench."
S4="A man is planting a tree."

echo ""
echo "════════════════════════════════════════"
echo " 1. 【現在】記号と説明文をつなげて読む(問題のある形)"
echo "════════════════════════════════════════"
say old_a "A. $S1" && afplay "$OUT/old_a.mp3"
say old_b "B. $S2" && afplay "$OUT/old_b.mp3"

echo ""
echo "════════════════════════════════════════"
echo " 2. 【変更案】記号を別に読み、0.5秒あけてから説明文"
echo "════════════════════════════════════════"
for pair in "A:$S1" "B:$S2" "C:$S3" "D:$S4"; do
  L="${pair%%:*}"; T="${pair#*:}"
  say "L_$L" "$L" && afplay "$OUT/L_$L.mp3"
  sleep 0.5
  say "T_$L" "$T" && afplay "$OUT/T_$L.mp3"
  sleep 0.7
done

echo ""
echo "════════════════════════════════════════"
echo " 3. 記号の読ませ方の候補(どれが一番はっきり『エイ/ビー/シー/ディー』か)"
echo "════════════════════════════════════════"
echo "▶ 候補1: A B C D(文字だけ)"
for L in A B C D; do say "v1_$L" "$L" && afplay "$OUT/v1_$L.mp3"; sleep 0.3; done
echo "▶ 候補2: A. B. C. D.(ピリオド付き)"
for L in A B C D; do say "v2_$L" "$L." && afplay "$OUT/v2_$L.mp3"; sleep 0.3; done
echo "▶ 候補3: (A) (B) (C) (D)(かっこ付き)"
for L in A B C D; do say "v3_$L" "($L)" && afplay "$OUT/v3_$L.mp3"; sleep 0.3; done

echo ""
echo "1 より 2 が良ければ、この方式で本番の音声を作り直します。"
echo "3 でどれが一番はっきり聞こえたか(候補1/2/3)も教えてください。"
echo "一時ファイル: $OUT"
