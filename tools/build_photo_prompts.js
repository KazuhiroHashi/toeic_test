#!/usr/bin/env node
// Part 1 の写真プロンプト集を data/setK/part1.js から自動生成する。
//
//   node tools/build_photo_prompts.js 7 8 9 10 > tools/PART1_PHOTO_PROMPTS_S7-10.md
//
// 正解の選択肢を「写す場面」、残り3つを「写さないもの(誤答)」として書き出す。

var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var sets = process.argv.slice(2);
if (!sets.length) { console.error("使い方: node tools/build_photo_prompts.js 7 8 9 10"); process.exit(1); }

function load(k) {
  global.window = {};
  require(path.join(ROOT, "data", "set" + k, "part1.js"));
  return global.window["TOEIC_DATA_" + k].part1;
}

var out = [];
out.push("# Part 1 写真の作り方(セット" + sets[0] + "〜" + sets[sets.length - 1] + "・全" + (sets.length * 6) + "枚)");
out.push("");
out.push("> このページは iPhone でも作業できます。各プロンプトのコードブロック右上のコピーボタンを押して、ChatGPT アプリに貼り付けてください。");
out.push("");
out.push("## 手順(3ステップ)");
out.push("");
out.push("1. 下のプロンプトをコピーして ChatGPT に貼り、画像を作る(1枚ずつ)。");
out.push("2. できた画像を、指定の **ファイル名** で保存する。");
out.push("3. 全部そろったら [アップロード画面](https://github.com/KazuhiroHashi/toeic_test/upload/main/assets/part1) を開き、画像を選んで「Commit changes」。");
out.push("");
out.push("### コツ");
out.push("");
out.push("- 白黒(モノクロ)で統一すると本番の雰囲気に近くなります。");
out.push("- 顔がはっきり写る必要はありません。**動作が分かること**が大事です。");
out.push("- 各プロンプトの「写さないもの」は誤答の選択肢です。**写り込むと問題が成立しなくなる**ので必ず確認してください。");
out.push("- ChatGPT が出すのは `.png` です。アップロード後にこちらで `.jpg` へ圧縮します(ファイル名は `.png` のままで構いません)。");
out.push("");

sets.forEach(function (k) {
  var arr = load(k);
  out.push("---");
  out.push("");
  out.push("# セット" + k);
  out.push("");
  arr.forEach(function (item) {
    var file = path.basename(item.image).replace(/\.jpg$/, ".png");
    var right = item.choices[item.answer];
    var wrong = item.choices.filter(function (_, i) { return i !== item.answer; });
    out.push("## " + file);
    out.push("");
    out.push("**写す場面:** " + right);
    out.push("");
    out.push("```text");
    out.push("Create a realistic black-and-white photograph for a TOEIC Part 1 listening test.");
    out.push("Scene: " + right);
    out.push("Requirements:");
    out.push("- Photorealistic, natural lighting, everyday business or daily-life setting.");
    out.push("- The action must be clearly visible and unambiguous.");
    out.push("- Do NOT show any of these (they are the wrong answers): " + wrong.join(" / "));
    out.push("- No text, no logos, no watermarks in the image.");
    out.push("- Horizontal (4:3) composition, monochrome.");
    out.push("```");
    out.push("");
    out.push("**写さないもの(誤答):** " + wrong.join(" / "));
    out.push("");
  });
});

process.stdout.write(out.join("\n"));
