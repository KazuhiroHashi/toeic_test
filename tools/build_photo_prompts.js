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

// 題材そのものが文字を持つもの(お知らせ・看板・掲示など)。
// これらに「文字を入れるな」と指示すると、場面の指示と矛盾して
// 生成側がどちらかを無視してしまう。文字は許し、答えを漏らさない条件だけ課す。
var TEXT_SUBJECT = /\b(notice|sign|signs|poster|banner|menu|schedule|chart|bulletin board|whiteboard|nameplate|price tag|label)\b/i;

function buildPrompt(right, wrong) {
  var lines = [
    "Create a realistic black-and-white photograph for a TOEIC Part 1 listening test.",
    "Scene: " + right,
    "Requirements:",
    "- Photorealistic, natural lighting, everyday business or daily-life setting.",
    "- The action must be clearly visible and unambiguous.",
    "- Do NOT show any of these (they are the wrong answers): " + wrong.join(" / ")
  ];
  if (TEXT_SUBJECT.test(right)) {
    // 例: お知らせを貼る場面。紙が白紙では場面が成立しないので文字は許す。
    // ただし『notice』のような答えそのものの語が写ると、写真が答えを教えてしまう。
    lines.push("- The printed matter may carry a few lines of plain text so that it looks real, but keep the wording generic and unrelated to the action. Do NOT print any word that names what is happening (for example the words in the scene sentence above). Small and not the focus of the photo.");
    lines.push("- No logos and no watermarks.");
  } else {
    lines.push("- No text, no logos, no watermarks in the image.");
  }
  lines.push("- Horizontal (4:3) composition, monochrome.");
  return lines.join("\n");
}

var DATA = [];

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
    var prompt = buildPrompt(right, wrong);
    DATA.push({ set: k, file: file, scene: right, wrong: wrong, prompt: prompt });

    out.push("## " + file);
    out.push("");
    out.push("**写す場面:** " + right);
    if (TEXT_SUBJECT.test(right)) {
      out.push("");
      out.push("> この場面は掲示物そのものが題材なので、文字が入ること自体は問題ありません。ただし**『" + right + "』の答えを教えてしまう語(notice など)が読めてしまうと、写真がヒントになります。**できた画像を見て、そういう語が大きく写っていたら作り直してください。");
    }
    out.push("");
    out.push("```text");
    out.push(prompt);
    out.push("```");
    out.push("");
    out.push("**写さないもの(誤答):** " + wrong.join(" / "));
    out.push("");
  });
});

// 作業ページ(HTML)と共有するデータも書き出しておく
if (process.env.PHOTO_JSON) {
  require("fs").writeFileSync(process.env.PHOTO_JSON, JSON.stringify(DATA, null, 1), "utf8");
}

process.stdout.write(out.join("\n"));
