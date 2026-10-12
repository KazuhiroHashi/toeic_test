#!/usr/bin/env node
// npx cap add android のあとに1回だけ実行して、Android 側に手を入れる。
//
//   node tools/setup_android.js
//
// setup_ios.js の Android 版。やることは3つだけ。
//
//   1. 課金の権限を入れる
//      Google Play の課金を使うアプリは com.android.vending.BILLING が要る。
//      Capacitor の雛形には入っていない。
//
//   2. リリース用の署名の設定を入れる
//      Capacitor の雛形は debug 署名しか持っていない。debug 署名の AAB は
//      Play Console が受け取らないので、鍵ファイルから署名する設定を足す。
//      鍵の場所とパスワードは android/keystore.properties に書く(CI が作る。
//      この中身は絶対にコミットしない)。ファイルが無いときは今までどおり
//      debug 署名のまま動くので、手元のお試しビルドは壊れない。
//
//   3. バージョン番号を外から指定できるようにする
//      雛形は versionCode 1 / versionName "1.0" の直書き。Play は同じ
//      versionCode を二度受け取らないので、実行のたびに増やす必要がある。
//      -PtoeicVersionCode=12 -PtoeicVersionName=1.0.1 で渡せるようにする。
//
// 何度実行しても二重に適用されない。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var MANIFEST = path.join(ROOT, "android/app/src/main/AndroidManifest.xml");
var GRADLE = path.join(ROOT, "android/app/build.gradle");

if (!fs.existsSync(MANIFEST) || !fs.existsSync(GRADLE)) {
  console.error("android/ がありません。先に次を実行してください:");
  console.error("  npm install");
  console.error("  bash tools/build_app.sh android");
  console.error("  npx cap add android");
  process.exit(1);
}

var changed = [];

/* ---- 1. AndroidManifest.xml に課金の権限を入れる ---- */
var mf = fs.readFileSync(MANIFEST, "utf8");
if (mf.indexOf("com.android.vending.BILLING") >= 0) {
  console.log("・AndroidManifest.xml … 設定済み(そのまま)");
} else {
  var anchor = '<uses-permission android:name="android.permission.INTERNET" />';
  if (mf.indexOf(anchor) < 0) {
    console.error("AndroidManifest.xml の形が想定と違います。手作業で次の1行を足してください:");
    console.error('  <uses-permission android:name="com.android.vending.BILLING" />');
    process.exit(1);
  }
  mf = mf.replace(
    anchor,
    anchor + "\n\n" +
    "    <!-- アプリ内課金(Google Play Billing)。これが無いと購入画面が出ない。 -->\n" +
    '    <uses-permission android:name="com.android.vending.BILLING" />'
  );
  fs.writeFileSync(MANIFEST, mf, "utf8");
  changed.push("AndroidManifest.xml(課金の権限)");
}

/* ---- 2 と 3. build.gradle に署名とバージョンの設定を入れる ---- */
var gr = fs.readFileSync(GRADLE, "utf8");

if (gr.indexOf("keystore.properties") >= 0) {
  console.log("・app/build.gradle … 設定済み(そのまま)");
} else {
  if (gr.indexOf("apply plugin: 'com.android.application'") < 0) {
    console.error("app/build.gradle の形が想定と違います。手順は tools/PLAYSTORE_HOWTO.md を見てください。");
    process.exit(1);
  }
  gr = gr.replace(
    "apply plugin: 'com.android.application'\n",
    "apply plugin: 'com.android.application'\n\n" +
    "// リリース署名の鍵。android/keystore.properties に書く(CI が実行のたびに作る)。\n" +
    "// 無い場合は debug 署名のまま。手元で動作を見るだけならそれで足りる。\n" +
    "def keystorePropertiesFile = rootProject.file(\"keystore.properties\")\n" +
    "def keystoreProperties = new Properties()\n" +
    "if (keystorePropertiesFile.exists()) {\n" +
    "    keystorePropertiesFile.withInputStream { keystoreProperties.load(it) }\n" +
    "}\n"
  );

  // signingConfigs を android { } の先頭に入れる
  gr = gr.replace(
    /android \{\n/,
    "android {\n" +
    "    signingConfigs {\n" +
    "        release {\n" +
    "            if (keystorePropertiesFile.exists()) {\n" +
    "                storeFile rootProject.file(keystoreProperties['storeFile'])\n" +
    "                storePassword keystoreProperties['storePassword']\n" +
    "                keyAlias keystoreProperties['keyAlias']\n" +
    "                keyPassword keystoreProperties['keyPassword']\n" +
    "            }\n" +
    "        }\n" +
    "    }\n"
  );

  // release ビルドでその署名を使う
  gr = gr.replace(
    /        release \{\n            minifyEnabled false\n/,
    "        release {\n" +
    "            // 鍵が無いときは debug 署名のまま(手元のお試し用)。\n" +
    "            if (keystorePropertiesFile.exists()) {\n" +
    "                signingConfig signingConfigs.release\n" +
    "            }\n" +
    "            minifyEnabled false\n"
  );

  // バージョン番号を外から渡せるようにする
  gr = gr.replace(
    /        versionCode 1\n        versionName "1\.0"\n/,
    "        // Play は同じ versionCode を二度受け取らない。CI が実行番号を渡す。\n" +
    "        versionCode project.hasProperty('toeicVersionCode') ? toeicVersionCode.toInteger() : 1\n" +
    "        versionName project.hasProperty('toeicVersionName') ? toeicVersionName : \"1.0\"\n"
  );

  fs.writeFileSync(GRADLE, gr, "utf8");

  var missing = [];
  if (gr.indexOf("signingConfig signingConfigs.release") < 0) missing.push("リリース署名の設定");
  if (gr.indexOf("toeicVersionCode") < 0) missing.push("バージョン番号の受け渡し");
  if (missing.length) {
    console.error("NG: app/build.gradle に入れられませんでした: " + missing.join(" / "));
    console.error("雛形の形が変わっています。tools/PLAYSTORE_HOWTO.md の手順で手作業で入れてください。");
    process.exit(1);
  }
  changed.push("app/build.gradle(リリース署名・バージョン番号)");
}

console.log("");
if (changed.length) {
  changed.forEach(function (c) { console.log("✓ " + c); });
  console.log("");
  console.log("次は AAB を作ります:");
  console.log("  cd android && ./gradlew bundleRelease");
} else {
  console.log("変更はありませんでした。");
}
