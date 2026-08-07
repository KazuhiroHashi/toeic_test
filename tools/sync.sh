#!/bin/bash
# 音声の作成から GitHub への反映まで、まとめて安全に行う。
#
#   bash tools/sync.sh
#
# やること(この順番):
#   1. GitHub の最新を取り込む(rebase)
#   2. 問題データを検査する(問題数・id・解説・題材の重複・答えの漏れ)
#   3. 音声の一覧を作り直す
#   4. 足りない音声だけを生成する
#   5. 出題に必要な音声がそろっているか検査する ← ここで落ちたら push しない
#   6. コミットして push する
#
# 途中で失敗したら、その場で止まって理由を表示します。
# もう一度同じコマンドを実行すれば、続きから進みます。

set -u
cd "$(dirname "$0")/.." || exit 1

PY=/usr/bin/python3
[ -x "$PY" ] || PY=python3

step() { echo ""; echo "════ $1 ════"; }
die()  { echo ""; echo "✗ $1"; exit 1; }

step "1/6 GitHub の最新を取り込む"
# 手元に未コミットの変更があると rebase できないので、先に退避する
STASHED=no
if ! git diff --quiet || ! git diff --cached --quiet; then
  git stash push -u -m "sync.sh 一時退避" >/dev/null && STASHED=yes
  echo "手元の変更を一時退避しました。"
fi
if ! GIT_EDITOR=true git pull --rebase origin main; then
  [ "$STASHED" = yes ] && git stash pop >/dev/null
  die "取り込みに失敗しました。表示された内容をそのまま伝えてください。"
fi
if [ "$STASHED" = yes ]; then
  git stash pop >/dev/null || die "退避した変更を戻せませんでした。git status を確認してください。"
  echo "退避した変更を戻しました。"
fi

step "2/6 問題データを検査する"
node tools/check_integrity.js || die "問題データに不備があります。上の行を見てください。"
echo ""
echo "-- 題材の重複(参考) --"
node tools/check_duplicates.js | tail -5
echo ""
echo "-- 答えの漏れ(参考) --"
node tools/check_leak.js | tail -5
echo ""
echo "-- Part 7 の構成 --"
node tools/check_part7_order.js || die "Part 7 の構成が本番と違います。上の行を見てください。"
echo ""
echo "-- 解説の選択肢記号 --"
node tools/check_labels.js || die "解説の (A)(B)(C)(D) が実際の選択肢とずれています。"
echo ""
echo "-- 4分の1模試が50問になるか --"
node tools/check_mock.js || die "4分の1模試の問題数が50問にならなくなります。"

step "3/6 音声の一覧を作り直す"
node tools/build_audio_manifest.js || die "一覧の作成に失敗しました。"

step "4/6 足りない音声を作る(数分かかることがあります)"
"$PY" tools/generate_audio.py || die "音声の生成に失敗しました。もう一度実行すれば続きから進みます。"

step "5/6 音声がそろっているか検査"
node tools/check_audio.js || die "音声が足りません。上の一覧を見て、もう一度実行してください。"

step "6/6 GitHub へ反映"
git add -A
if git diff --cached --quiet; then
  echo "変更はありません。"
else
  git commit -m "音声とデータを更新" || die "コミットに失敗しました。"
fi
if ! git push origin main; then
  echo "push が拒否されたので、取り込み直して再試行します…"
  GIT_EDITOR=true git pull --rebase origin main || die "取り込みに失敗しました。"
  git push origin main || die "push に失敗しました。表示された内容をそのまま伝えてください。"
fi

echo ""
echo "✓ 完了しました。数分後に https://toeic.bridge-ai-tokyo.com/ に反映されます。"
