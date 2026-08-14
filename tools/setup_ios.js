#!/usr/bin/env node
// npx cap add ios のあとに1回だけ実行して、iOS 側に手を入れる。
//
//   node tools/setup_ios.js
//
// やること(どちらも『Web版にはできないこと』= 審査 Guideline 4.2 への回答になる):
//
//   1. マナーモードでも音が鳴るようにする
//      Safari は本体のマナーモードがオンだと音を出さない。TOEIC のリスニングを
//      練習しようとしてマナーモードに気づかない、というのは実際に起きる事故。
//      AVAudioSession を .playback にすると、アプリ版だけこれを回避できる。
//
//   2. 画面をロックしても音声が続くようにする
//      通勤中にポケットに入れたままリスニングできる。ブラウザでは切れる。
//
// 何度実行しても二重に適用されない。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var APPDELEGATE = path.join(ROOT, "ios/App/App/AppDelegate.swift");
var PLIST = path.join(ROOT, "ios/App/App/Info.plist");

if (!fs.existsSync(APPDELEGATE)) {
  console.error("ios/ がありません。先に次を実行してください:");
  console.error("  npm install");
  console.error("  bash tools/build_app.sh");
  console.error("  npx cap add ios");
  process.exit(1);
}

var changed = [];

/* ---- 1. AppDelegate.swift に音声セッションの設定を入れる ---- */
var sw = fs.readFileSync(APPDELEGATE, "utf8");

if (sw.indexOf("AVAudioSession") >= 0) {
  console.log("・AppDelegate.swift … 設定済み(そのまま)");
} else {
  if (sw.indexOf("import AVFoundation") < 0) {
    sw = sw.replace(/import UIKit/, "import UIKit\nimport AVFoundation");
  }
  // didFinishLaunchingWithOptions の中の最初の return true の直前に入れる
  var m = sw.match(/(func application\([^)]*didFinishLaunchingWithOptions[\s\S]*?)(\n(\s*)return true)/);
  if (!m) {
    console.error("AppDelegate.swift の形が想定と違います。手作業で入れてください(手順は tools/APPSTORE_HOWTO.md)。");
    process.exit(1);
  }
  var indent = m[3];
  var snippet =
    "\n" + indent + "// リスニング音声を、本体がマナーモードでも鳴らし、画面ロック中も続ける。\n" +
    indent + "// ブラウザ版ではできないため、アプリ版だけの利点になっている。\n" +
    indent + "do {\n" +
    indent + "    try AVAudioSession.sharedInstance().setCategory(.playback, mode: .spokenAudio)\n" +
    indent + "    // 同梱の音声は 24kHz。出力を 48kHz に固定しておくと、画面収録した動画で\n" +
    indent + "    // 音だけ2倍速になる(収録側が 48kHz 前提で書き出す)現象を防げる。\n" +
    indent + "    try AVAudioSession.sharedInstance().setPreferredSampleRate(48000)\n" +
    indent + "    try AVAudioSession.sharedInstance().setActive(true)\n" +
    indent + "} catch {\n" +
    indent + "    // 設定できなくても通常再生は続けられるので、ここでは落とさない\n" +
    indent + "}\n";
  sw = sw.replace(m[0], m[1] + snippet + m[2]);
  fs.writeFileSync(APPDELEGATE, sw, "utf8");
  changed.push("AppDelegate.swift(マナーモード対策 + ロック中の再生)");
}

/* ---- 2. Info.plist に背景再生と暗号化の申告を入れる ---- */
var pl = fs.readFileSync(PLIST, "utf8");
var add = "";

if (pl.indexOf("UIBackgroundModes") < 0) {
  add += "\t<key>UIBackgroundModes</key>\n\t<array>\n\t\t<string>audio</string>\n\t</array>\n";
}
// 独自の暗号化を使っていないことの申告。入れておくと提出のたびに聞かれずに済む
if (pl.indexOf("ITSAppUsesNonExemptEncryption") < 0) {
  add += "\t<key>ITSAppUsesNonExemptEncryption</key>\n\t<false/>\n";
}

if (add) {
  pl = pl.replace(/\n<\/dict>\n<\/plist>/, "\n" + add + "</dict>\n</plist>");
  fs.writeFileSync(PLIST, pl, "utf8");
  changed.push("Info.plist(背景再生・暗号化の申告)");
} else {
  console.log("・Info.plist … 設定済み(そのまま)");
}

console.log("");
if (changed.length) {
  changed.forEach(function (c) { console.log("✓ " + c); });
  console.log("");
  console.log("次は Xcode で実機に入れて、次の2つを必ず確かめてください。");
  console.log("  1. 本体をマナーモードにしてもリスニングの音が鳴ること");
  console.log("  2. 再生中に電源ボタンで画面を消しても音が続くこと");
} else {
  console.log("変更はありませんでした。");
}
