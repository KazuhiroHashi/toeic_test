#!/bin/bash
# アプリに詰めるファイルだけを www/ に集める。
#
#   bash tools/build_app.sh
#
# Web版(GitHub Pages)とアプリ版は同じソースを使う。
# ここでは、アプリに要らないもの(tools/ や reviews/ や .git)を除いて
# www/ を作り直すだけ。www/ は git には入れない(.gitignore 済み)。

set -eu
cd "$(dirname "$0")/.."

OUT=www

echo "══ www/ を作り直します ══"
rm -rf "$OUT"
mkdir -p "$OUT"

# アプリに必要なものだけ
# privacy.html はフッターからリンクしている。同梱しないとアプリ内でリンク切れになり、
# 審査でも「プライバシーポリシーが開けない」と指摘される。
cp index.html privacy.html "$OUT"/
cp -R css js data assets "$OUT"/

# アプリ版の目印。js/app.js がこれを見て、アプリ用の振る舞いに切り替える
cat > "$OUT/app-build.js" <<'EOF'
/* このファイルはアプリ版のビルドにだけ含まれる。
   Web版(GitHub Pages)には存在しないので、window.TOEIC_APP_BUILD は undefined になる。 */
window.TOEIC_APP_BUILD = {
  platform: "ios",

  /* 全セットを最初から開けるか。
     アプリ内課金で売るので false。購入の判定は js/iap.js が行う。
     買い切り(アプリ自体に値段を付ける)に変える場合は true にし、iap を消す。 */
  unlockAll: false,

  /* アプリ内課金。App Store Connect で作る商品IDと必ず一致させること。
     一致していないと購入画面が出ない。 */
  iap: {
    productId: "com.toeicworkbook.app.unlockall"
  }
};
EOF

# アプリ版だけ index.html に app-build.js を差し込む(名称は Web版と同じ)
node - "$OUT/index.html" <<'EOF'
var fs = require("fs");
var p = process.argv[2];
var h = fs.readFileSync(p, "utf8");

// app-build.js を、他のどの js よりも先に読ませる
if (h.indexOf("app-build.js") < 0) {
  h = h.replace(/<script /, '<script src="app-build.js"></script>\n  <script ');
  fs.writeFileSync(p, h, "utf8");
}

/* 商標の扱いについて:
   アプリ名・画面表示ともに「TOEIC(R) 総合問題集」を使う。第三者の対策アプリが
   (R) と ETS 所定の免責文を添えて名称に使うのは App Store で一般的な運用。
   免責文は index.html のフッターに常時表示している。ここを消してはいけない。 */
var after = fs.readFileSync(p, "utf8");
if (after.indexOf("app-build.js") < 0) {
  console.error("NG: app-build.js の読み込みを差し込めませんでした。");
  process.exit(1);
}
if (after.indexOf("登録商標です") < 0) {
  console.error("NG: 商標の免責文がフッターにありません。App Store 提出の根拠になる記載なので必須です。");
  process.exit(1);
}
EOF

echo ""
echo "── 中身の確認 ──"
node tools/check_app_bundle.js

echo ""
echo "www/ の容量: $(du -sh "$OUT" | cut -f1)"
echo "✓ できました。次は: npx cap sync ios"
