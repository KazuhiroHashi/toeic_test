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
cp index.html "$OUT"/
cp -R css js data assets "$OUT"/

# アプリ版の目印。js/app.js がこれを見て、アプリ用の振る舞いに切り替える
cat > "$OUT/app-build.js" <<'EOF'
/* このファイルはアプリ版のビルドにだけ含まれる。
   Web版(GitHub Pages)には存在しないので、window.TOEIC_APP_BUILD は undefined になる。 */
window.TOEIC_APP_BUILD = {
  platform: "ios",
  // 全セットを最初から開ける(App Store の買い切り版)。
  // アプリ内課金にする場合は false にして、課金の判定結果で解放する。
  unlockAll: true
};
EOF

# index.html に app-build.js の読み込みを差し込む(Web版の index.html は変えない)
node - "$OUT/index.html" <<'EOF'
var fs = require("fs");
var p = process.argv[2];
var h = fs.readFileSync(p, "utf8");
if (h.indexOf("app-build.js") < 0) {
  // 他のどの js よりも先に読ませる
  h = h.replace(/<script /, '<script src="app-build.js"></script>\n  <script ');
  fs.writeFileSync(p, h, "utf8");
}
EOF

echo ""
echo "── 中身の確認 ──"
node tools/check_app_bundle.js

echo ""
echo "www/ の容量: $(du -sh "$OUT" | cut -f1)"
echo "✓ できました。次は: npx cap sync ios"
