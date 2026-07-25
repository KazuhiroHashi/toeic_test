#!/bin/bash
# Part 1〜4 を1問(1セット)ずつ通しで聞く(Mac用)
#
#   bash tools/play_sample.sh          … セット1から出題
#   bash tools/play_sample.sh s3       … セット3から出題
#
# 音声を最後まで聞いたあと、スクリプト・設問・正解を表示します。

set -e
SET="${1:-s1}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PREFIX=""
[ "$SET" != "s1" ] && PREFIX="$SET"

play_task () {   # $1=タスクid  $2=見出し
  local dir="$ROOT/assets/audio/$SET/$1"
  echo ""
  echo "════════════════════════════════════════"
  echo "  $2"
  echo "════════════════════════════════════════"
  if [ ! -d "$dir" ]; then
    echo "  音声がありません: $dir"
    echo "  (python3 tools/generate_audio.py を実行してください)"
    return
  fi
  for f in $(cd "$dir" && ls *.mp3 | sort -n); do
    afplay "$dir/$f"
  done
}

play_task "${PREFIX}p1-01" "Part 1 写真描写(写真を見ながら聞いてください)"
echo ""
echo "→ 写真: $ROOT/assets/part1/${PREFIX}p1-01.png"

play_task "${PREFIX}p2-01" "Part 2 応答問題(選択肢は印刷されません。音声だけで解きます)"
play_task "${PREFIX}p3-01" "Part 3 会話問題(会話のあと設問が3つ読まれます)"
play_task "${PREFIX}p4-01" "Part 4 説明文問題(トークのあと設問が3つ読まれます)"

echo ""
echo "════════════════════════════════════════"
echo "  スクリプトと正解"
echo "════════════════════════════════════════"
node "$ROOT/tools/sample_script.js" "${PREFIX}p1-01" "${PREFIX}p2-01" "${PREFIX}p3-01" "${PREFIX}p4-01"
