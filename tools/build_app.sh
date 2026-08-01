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

# アプリ版だけ index.html を書き換える(Web版の index.html は一切変えない)
node - "$OUT/index.html" <<'EOF'
var fs = require("fs");
var p = process.argv[2];
var h = fs.readFileSync(p, "utf8");

// 1. app-build.js を、他のどの js よりも先に読ませる
if (h.indexOf("app-build.js") < 0) {
  h = h.replace(/<script /, '<script src="app-build.js"></script>\n  <script ');
}

// 2. 画面に出る名前から TOEIC を外す。
//    TOEIC は ETS の登録商標で、Apple は他社商標を製品名として使うことを認めていない。
//    アプリ名だけ変えても画面の見出しが「TOEIC 総合問題集」のままでは意味がないため、
//    アプリ版のビルドでだけ差し替える。フッターの商標表示(事実の記載)はそのまま残す。
var APP_NAME = "英語スコア模試";
h = h.replace(/<title>[^<]*<\/title>/, "<title>" + APP_NAME + "</title>");
h = h.replace(/(<h1><a href="#" id="home-link">)[^<]*(<\/a><\/h1>)/, "$1" + APP_NAME + "$2");
h = h.replace(/(<p class="subtitle">)[^<]*(<\/p>)/,
  "$1Part 1〜7 形式・全200問(解説・全訳付き)$2");

fs.writeFileSync(h.length ? p : p, h, "utf8");

// 差し替えが効いたかを確かめる。効いていなければビルドを止める。
var after = fs.readFileSync(p, "utf8");
var head = after.split("</header>")[0];
if (head.indexOf("TOEIC") >= 0) {
  console.error("");
  console.error("NG: 画面の見出しに TOEIC が残っています。index.html の形が変わった可能性があります。");
  process.exit(1);
}
if (after.indexOf("app-build.js") < 0) {
  console.error("NG: app-build.js の読み込みを差し込めませんでした。");
  process.exit(1);
}
EOF

echo ""
echo "── 中身の確認 ──"
node tools/check_app_bundle.js

echo ""
echo "www/ の容量: $(du -sh "$OUT" | cut -f1)"
echo "✓ できました。次は: npx cap sync ios"
