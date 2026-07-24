// Part 1: 写真描写問題(実写モノクロ写真を使用)
// 本番同様、説明文は印刷されず音声のみ。写真を見て最も適切な描写文を選ぶ。
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part1 = [
  {
    id: "p1-01",
    image: "assets/part1/p1-01.png",
    speaker: "M",
    choices: [
      "A man is sweeping a walkway.",
      "A man is putting on his jacket.",
      "A woman is sitting on a bench.",
      "A man is planting a tree."
    ],
    answer: 0,
    translation: "(A) 男性が歩道を掃いています。\n(B) 男性が上着を着ているところです。\n(C) 女性がベンチに座っています。\n(D) 男性が木を植えています。",
    explanation: "男性がほうきで落ち葉のある歩道を掃いている=sweeping a walkway。(B)の put on は『着る動作』で、すでに着ているので誤り。ベンチには誰も座っておらず、木を植えてもいない。"
  },
  {
    id: "p1-02",
    image: "assets/part1/p1-02.png",
    speaker: "W",
    choices: [
      "She is wiping down a window.",
      "She is placing a glass on a table.",
      "Customers are being seated.",
      "She is hanging a picture on the wall."
    ],
    answer: 1,
    translation: "(A) 彼女は窓を拭いています。\n(B) 彼女はテーブルにグラスを置いています。\n(C) 客が席に案内されています。\n(D) 彼女は壁に絵を掛けています。",
    explanation: "エプロン姿の女性がテーブルにグラスを置いている=placing a glass on a table。店内は無人なので(C)『客が案内されている』は誤り。窓拭きや絵を掛ける動作もしていない。"
  },
  {
    id: "p1-03",
    image: "assets/part1/p1-03.png",
    speaker: "M",
    choices: [
      "He is weighing some vegetables.",
      "He is pushing a shopping cart.",
      "He is arranging fruit in a display.",
      "He is paying at the register."
    ],
    answer: 2,
    translation: "(A) 彼は野菜の重さを量っています。\n(B) 彼はショッピングカートを押しています。\n(C) 彼は陳列棚に果物を並べています。\n(D) 彼はレジで支払いをしています。",
    explanation: "エプロン姿の店員が木箱にリンゴを並べている=arranging fruit in a display。量りやカート、レジは絵になく、店員は客ではないので支払いもしていない。"
  },
  {
    id: "p1-04",
    image: "assets/part1/p1-04.png",
    speaker: "M",
    choices: [
      "He is loading boxes onto a truck.",
      "He is operating a forklift.",
      "He is sealing a cardboard box.",
      "He is placing a box on a shelf."
    ],
    answer: 3,
    translation: "(A) 彼は箱をトラックに積み込んでいます。\n(B) 彼はフォークリフトを操作しています。\n(C) 彼は段ボール箱を封しています。\n(D) 彼は棚に箱を置いています。",
    explanation: "倉庫で男性が箱を棚に載せている=placing a box on a shelf。トラックやフォークリフトは写っておらず、箱を封じる動作もしていない。手前の台車(pallet jack)に注意を引くひっかけに惑わされないこと。"
  },
  {
    id: "p1-05",
    image: "assets/part1/p1-05.png",
    speaker: "W",
    choices: [
      "A man is waiting on a platform.",
      "A man is boarding a train.",
      "A man is climbing the stairs.",
      "Passengers are getting off the train."
    ],
    answer: 0,
    translation: "(A) 男性がホームで待っています。\n(B) 男性が電車に乗り込んでいます。\n(C) 男性が階段を上っています。\n(D) 乗客が電車から降りています。",
    explanation: "スーツケースの取っ手を持った男性が、ホームに立って電車を見ている=waiting on a platform。まだ乗り込んでおらず(boarding は誤り)、階段も他の乗客も写っていない。"
  },
  {
    id: "p1-06",
    image: "assets/part1/p1-06.png",
    speaker: "M",
    choices: [
      "He is writing on the whiteboard.",
      "He is typing on a laptop.",
      "He is setting a stack of papers on a table.",
      "He is pouring coffee into a cup."
    ],
    answer: 2,
    translation: "(A) 彼はホワイトボードに書いています。\n(B) 彼はノートパソコンで入力しています。\n(C) 彼は書類の束をテーブルに置いています。\n(D) 彼はカップにコーヒーを注いでいます。",
    explanation: "会議室で男性が書類の束をテーブルに置いている=setting a stack of papers on a table。ホワイトボードは空白で書いておらず、パソコンやコーヒーカップは机上にあるが、彼はそれらを操作・注いではいない(存在する物で誤答を誘うひっかけ)。"
  }
];
