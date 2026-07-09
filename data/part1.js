// Part 1: 写真描写問題(モノクロのオリジナルイラスト使用。イラストは自作のため著作権フリー)
// 本番同様、説明文は印刷されず音声のみ。イラストを見て最も適切な描写文を選ぶ。
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part1 = [
  {
    id: "p1-01",
    image: "assets/part1/p1-01.svg",
    speaker: "W",
    choices: [
      "She is talking on the phone.",
      "She is typing on a computer.",
      "She is opening a window.",
      "She is filing some documents."
    ],
    answer: 1,
    translation: "(A) 彼女は電話で話しています。\n(B) 彼女はコンピューターで入力しています。\n(C) 彼女は窓を開けています。\n(D) 彼女は書類をファイルしています。",
    explanation: "机に向かいノートパソコンに手を伸ばしている=typing on a computer。Part 1は『今している動作』を現在進行形で正しく描写した文を選ぶ。電話・窓・書類は絵に存在しない。"
  },
  {
    id: "p1-02",
    image: "assets/part1/p1-02.svg",
    speaker: "M",
    choices: [
      "A man is repairing a bicycle.",
      "Some people are riding bicycles.",
      "Some bicycles are parked in a row.",
      "A bicycle is lying on the ground."
    ],
    answer: 2,
    translation: "(A) 男性が自転車を修理しています。\n(B) 何人かの人が自転車に乗っています。\n(C) 何台かの自転車が並んで停められています。\n(D) 自転車が地面に倒れています。",
    explanation: "人が写っていない写真では、人の動作(repairing / riding)を含む選択肢は自動的に誤り。物の状態を受動態で表した parked in a row(並んで停められている)が正解。"
  },
  {
    id: "p1-03",
    image: "assets/part1/p1-03.svg",
    speaker: "W",
    choices: [
      "The men are shaking hands.",
      "The men are moving a table.",
      "One of the men is writing on a board.",
      "The men are putting on their jackets."
    ],
    answer: 0,
    translation: "(A) 男性たちは握手をしています。\n(B) 男性たちはテーブルを動かしています。\n(C) 男性の1人がボードに書いています。\n(D) 男性たちは上着を着ているところです。",
    explanation: "2人が手を取り合っている=shaking hands。(D)の put on は『着る』という動作。すでに着ている状態なら wear を使うので、着る動作をしていないこの絵では誤り(put on / wear の区別はPart 1頻出)。"
  },
  {
    id: "p1-04",
    image: "assets/part1/p1-04.svg",
    speaker: "M",
    choices: [
      "A man is pushing a cart.",
      "Some boxes are being opened.",
      "A cart is being loaded onto a truck.",
      "Some boxes have been stacked on a cart."
    ],
    answer: 3,
    translation: "(A) 男性が台車を押しています。\n(B) 箱が開けられているところです。\n(C) 台車がトラックに積み込まれているところです。\n(D) 箱が台車の上に積み重ねられています。",
    explanation: "have been + 過去分詞は『すでに〜された状態』。箱は積まれた状態なので(D)。(B)(C)の be being + 過去分詞は『今まさに人が〜している最中』の意味で、作業する人が写っていないため誤り。この区別がPart 1最大の得点ポイント。"
  },
  {
    id: "p1-05",
    image: "assets/part1/p1-05.svg",
    speaker: "W",
    choices: [
      "A man is planting a tree.",
      "A man is trimming some bushes.",
      "A man is watering a plant.",
      "A man is carrying a ladder."
    ],
    answer: 2,
    translation: "(A) 男性が木を植えています。\n(B) 男性が茂みを刈り込んでいます。\n(C) 男性が植物に水をやっています。\n(D) 男性がはしごを運んでいます。",
    explanation: "じょうろで鉢植えに水をやっている=watering a plant。plant(植える)/ water(水をやる)/ trim(刈る)は同じ園芸の場面で混同を誘う定番の動詞セット。"
  },
  {
    id: "p1-06",
    image: "assets/part1/p1-06.svg",
    speaker: "M",
    choices: [
      "People are seated around the table.",
      "Chairs have been arranged around a table.",
      "Chairs are being moved into a room.",
      "The table is being cleaned."
    ],
    answer: 1,
    translation: "(A) 人々がテーブルの周りに座っています。\n(B) 椅子がテーブルの周りに配置されています。\n(C) 椅子が部屋に運び込まれているところです。\n(D) テーブルが掃除されているところです。",
    explanation: "無人の部屋の写真。人がいないので(A)(C)(D)はすべて誤り。物の配置済みの状態を表す have been arranged(配置されている)が正解。『無人の部屋+状態受動態』はPart 1の頻出パターン。"
  }
];
