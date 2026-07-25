#!/bin/bash
# 記号(A)の書き方を変えて、正しく『エイ』と読まれるものを探す(Mac用)
#
#   bash tools/probe_letters.sh
#
# 記号と説明文を1つの音声にできれば、切り分け処理そのものが不要になる。
# 各パターンで「エイ」と聞こえるか、説明文との区切りが自然かを確かめる。

set -e
P="/usr/bin/python3 -m edge_tts"
V="en-GB-SoniaNeural"     # 一番問題が出ていたイギリス人女性
S="A man is sweeping a walkway."
OUT=$(mktemp -d)

say () {   # $1=番号  $2=説明  $3=読ませる文
  echo ""
  echo "▶ $1: $2"
  echo "   [$3]"
  /usr/bin/python3 -m edge_tts --voice "$V" --rate=-5% --text "$3" \
    --write-media "$OUT/$1.mp3" >/dev/null 2>&1 || true
  if [ -s "$OUT/$1.mp3" ]; then afplay "$OUT/$1.mp3"; else echo "   (生成に失敗)"; fi
  sleep 0.4
}

echo "════════════════════════════════════════"
echo " 記号と説明文をひとつづきにした場合の読まれ方"
echo " 『エイ』と正しく読まれ、かつ区切りが自然なものを選んでください"
echo "════════════════════════════════════════"

say 1 "現在の形(ピリオド)"       "A. $S"
say 2 "かっこ"                   "(A) $S"
say 3 "閉じかっこのみ"           "A) $S"
say 4 "コロン"                   "A: $S"
say 5 "ダッシュ"                 "A - $S"
say 6 "セミコロン"               "A; $S"
say 7 "改行"                     "A.
$S"

echo ""
echo "════════════════════════════════════════"
echo " 参考: 記号だけを単独で読ませた場合(かすれる形)"
echo "════════════════════════════════════════"
say 8 "単独のA."                 "A."

echo ""
echo "1〜7 のうち、『エイ』とはっきり読まれたものの番号を教えてください。"
echo "複数あれば、区切りの自然さで一番良かったものも教えてください。"
echo "一時ファイル: $OUT"
