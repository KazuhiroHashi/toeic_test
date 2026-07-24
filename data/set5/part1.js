// Part 1: 写真描写問題(実写モノクロ写真を使用)
// 本番同様、説明文は印刷されず音声のみ。写真を見て最も適切な描写文を選ぶ。
window.TOEIC_DATA_5 = window.TOEIC_DATA_5 || {};
window.TOEIC_DATA_5.part1 = [
  {
    id: "s5p1-01",
    image: "assets/part1/s5-01.png",
    speaker: "W",
    choices: [
      "A woman is watering some plants.",
      "A woman is trimming a hedge.",
      "A woman is putting on a pair of gloves.",
      "A woman is filling a bucket with soil."
    ],
    answer: 0,
    translation: "(A) 女性が植物に水をやっています。\n(B) 女性が生垣を刈り込んでいます。\n(C) 女性が手袋をはめているところです。\n(D) 女性がバケツに土を入れています。",
    explanation: "手袋をした女性がじょうろで鉢植えに水をやっている=watering some plants。(C)の put on は『身につける動作』を表すが、手袋はすでにはめ終えているので誤り。生垣を刈る道具もバケツも写っておらず、土を入れる動作もしていない。"
  },
  {
    id: "s5p1-02",
    image: "assets/part1/s5-02.png",
    speaker: "M",
    choices: [
      "A man is tuning a piano.",
      "A man is playing a guitar.",
      "A man is setting up a microphone stand.",
      "A man is folding a chair."
    ],
    answer: 1,
    translation: "(A) 男性がピアノを調律しています。\n(B) 男性がギターを弾いています。\n(C) 男性がマイクスタンドを立てています。\n(D) 男性が椅子を折りたたんでいます。",
    explanation: "スツールに座った男性がギターを弾いている=playing a guitar。ピアノは写っていない。手前にマイクスタンドはあるが、彼はそれを組み立てておらず、椅子を折りたたむ動作もしていない(写っている物で誤答を誘うひっかけ)。"
  },
  {
    id: "s5p1-03",
    image: "assets/part1/s5-03.png",
    speaker: "M",
    choices: [
      "A man is changing a tire.",
      "A man is driving a vehicle.",
      "A man is examining the engine of a car.",
      "A man is closing the hood of a car."
    ],
    answer: 2,
    translation: "(A) 男性がタイヤを交換しています。\n(B) 男性が車を運転しています。\n(C) 男性が車のエンジンを点検しています。\n(D) 男性が車のボンネットを閉めています。",
    explanation: "整備士が開いたボンネットに身をかがめてエンジンをのぞき込んでいる=examining the engine。タイヤを外す様子はなく、運転もしていない。(D)はボンネットが開いた状態なので『閉める』は逆の動作で誤り。"
  },
  {
    id: "s5p1-04",
    image: "assets/part1/s5-04.png",
    speaker: "W",
    choices: [
      "People are gathered for a meeting.",
      "A projector is being adjusted.",
      "Some documents are being handed out.",
      "Chairs have been arranged around a table."
    ],
    answer: 3,
    translation: "(A) 人々が会議のために集まっています。\n(B) プロジェクターが調整されているところです。\n(C) 書類が配られているところです。\n(D) 椅子がテーブルの周りに並べられています。",
    explanation: "無人の会議室で、椅子がテーブルを囲んで並べられた状態=Chairs have been arranged(状態を表す受動態)。写真に人はいないので、(A)『集まっている』、(B)『調整している』、(C)『配られている』のような人の動作を含む描写はすべて誤り。"
  },
  {
    id: "s5p1-05",
    image: "assets/part1/s5-05.png",
    speaker: "W",
    choices: [
      "A woman is rolling paint onto a wall.",
      "A woman is hanging wallpaper.",
      "A woman is climbing a ladder.",
      "A woman is opening a can of paint."
    ],
    answer: 0,
    translation: "(A) 女性がローラーで壁にペンキを塗っています。\n(B) 女性が壁紙を貼っています。\n(C) 女性がはしごを上っています。\n(D) 女性がペンキの缶を開けています。",
    explanation: "女性がローラーで壁にペンキを塗っている=rolling paint onto a wall。壁紙を貼ってはおらず、はしごも上っていない。足元にペンキの缶はあるが、彼女はそれを開ける動作をしていない(存在する物で誤答を誘うひっかけ)。"
  },
  {
    id: "s5p1-06",
    image: "assets/part1/s5-06.png",
    speaker: "M",
    choices: [
      "A barber is sweeping the floor.",
      "A man is washing his hands.",
      "A customer's hair is being cut.",
      "A man is looking in a mirror."
    ],
    answer: 2,
    translation: "(A) 理容師が床を掃いています。\n(B) 男性が手を洗っています。\n(C) 客の髪が切られているところです。\n(D) 男性が鏡をのぞいています。",
    explanation: "理容師がはさみで客の髪を切っている最中=hair is being cut(being+過去分詞で進行中の動作)。床を掃く動作や手を洗う様子はない。(D)は正面に鏡があるが、客はうつむいており鏡をのぞき込んではいない(写っている物で誤答を誘うひっかけ)。"
  }
];
