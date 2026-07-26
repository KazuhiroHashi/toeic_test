# Part 7 分割作成タスク(共通仕様)

Part 7 は1ファイルが大きいので、**複数人で分担して断片(フラグメント)を作り、あとで結合する**。
あなたは指示された1つの断片ファイルだけを Write で作る。他のファイルは読むだけ。

## 先に必ず読むもの

1. `/workspace/toeic_test/tools/HARD2_SPEC.md`(上級レベルの狙いと難しさの作り方)
2. `/workspace/toeic_test/tools/AGENT_SPEC.md`(Part 7 のデータ構造・出題内訳)
3. `/workspace/toeic_test/data/set6/part7.js`(**形式の見本**。フィールド名・構造だけまねる。内容は絶対にコピーしない)
4. `/workspace/toeic_test/tools/DEDUP_BANLIST.md`(既出題材)

## 出力ファイルの形

断片は次の1行だけの宣言にする。**`window.TOEIC_DATA_*` には代入しない。**

```js
window.__FRAG = [
  { id: "...", title: "...", passages: [...], translation: "...", questions: [...] },
  ...
];
```

配列の要素は、`data/set6/part7.js` の要素とまったく同じ形の完成したオブジェクト。
書き終えたら `node --check <出力パス>` を実行して構文エラーが無いことを確認する。

## オブジェクトの形(見本と完全一致させる)

```js
{
  id: "s8p7-01",
  title: "シングル 1(テキストメッセージのやり取り)",
  passages: [
    { docType: "Text-message chain", text: "…英文本文…" }
  ],
  translation: "…文書全体の日本語訳…",
  questions: [
    {
      q: "What is the purpose of the message?",
      choices: ["…", "…", "…", "…"],
      answer: 2,
      explanation: "…日本語の解説…"
    }
  ]
}
```

- `docType` は英語(E-mail / Advertisement / Article / Notice / Memo / Text-message chain / Online chat / Invoice / Schedule / Form / Letter / Web page / Press release / Job posting / Receipt / Itinerary など)。
- `title` は日本語で「シングル 3(Eメール)」「ダブル 1(お知らせ+Eメール)」「トリプル 2(料金表+Eメール+Eメール)」の形式。
- 選択肢は必ず4つ。`answer` は添字(0=A)。
- ダブルは `passages` が2つ、トリプルは3つ。

## 絶対に守ること

- **正解位置を A/B/C/D におおよそ均等に散らす。**同じ位置が3問続かない。
- `explanation` は日本語。強調は『』。Markdownの `**` は絶対に使わない。
- 解説内で選択肢を指す (A)(B)(C)(D) は、必ず実際の配列位置と一致させる。
- **正解は必ず本文の言い換え(パラフレーズ)。**本文の語句をそのまま含む誤答を各問に1つ入れる。
- 【最重要】**ある設問の答えが、同じ文書の他の設問の文・選択肢から推測できてはならない。**書き終えたら全設問を読み返して自己点検する。
- 正解が2つあり得る問題・正解が無い問題を作らない。必ず自分で解き直す。
- 固有名詞・企業名・人名・場面が既存セット(セット1〜10)と重複しないこと。
- 難単語を並べて難しくしない。TOEICに出る自然な業務英語の範囲で、構造・情報の突き合わせで難しくする。

## 最終メッセージ

短く。作った文書数と設問数、出力パス、各文書の題材を1行ずつ。**本文は貼らない。**
