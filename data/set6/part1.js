// Part 1: 写真描写問題(実写モノクロ写真を使用)
// 本番同様、説明文は印刷されず音声のみ。写真を見て最も適切な描写文を選ぶ。
window.TOEIC_DATA_6 = window.TOEIC_DATA_6 || {};
window.TOEIC_DATA_6.part1 = [
  {
    id: "s6p1-01",
    image: "assets/part1/s6-01.png",
    speaker: "M",
    choices: [
      "Some diners are seated under an umbrella.",
      "A server is carrying a tray of beverages.",
      "A waiter is wiping off an outdoor table.",
      "The umbrellas are being folded up."
    ],
    answer: 1,
    translation: "(A) 何人かの客がパラソルの下に座っています。\n(B) 給仕係が飲み物のトレーを運んでいます。\n(C) ウェイターが屋外のテーブルを拭いています。\n(D) パラソルがたたまれているところです。",
    explanation: "テラス席で給仕係がトレーに飲み物をのせて運んでいる=carrying a tray of beverages。テーブルは空いており(A)『客が座っている』は誤り。テーブルを拭く動作もしていない。(D)の being folded up は『たたまれている最中』を表すが、パラソルは開いたままで誰も操作していないので誤り。"
  },
  {
    id: "s6p1-02",
    image: "assets/part1/s6-02.png",
    speaker: "M",
    choices: [
      "He is changing a flat tire.",
      "He is filling the tank with fuel.",
      "He is examining the engine.",
      "The vehicle is being lifted on a hoist."
    ],
    answer: 2,
    translation: "(A) 彼はパンクしたタイヤを交換しています。\n(B) 彼はタンクに燃料を入れています。\n(C) 彼はエンジンを点検しています。\n(D) 車がリフトで持ち上げられているところです。",
    explanation: "整備士がボンネットを開けてエンジンをのぞき込んでいる=examining the engine。タイヤ交換や給油はしておらず、車は地面に置かれたままなので(D)の being lifted『持ち上げられている最中』も誤り。tire や fuel は車の連想語で誘うひっかけ。"
  },
  {
    id: "s6p1-03",
    image: "assets/part1/s6-03.png",
    speaker: "W",
    choices: [
      "A woman is planting flowers in a garden bed.",
      "A woman is watering plants with a hose.",
      "A woman is mowing the lawn.",
      "A woman is trimming a hedge with shears."
    ],
    answer: 0,
    translation: "(A) 女性が花壇に花を植えています。\n(B) 女性がホースで植物に水をやっています。\n(C) 女性が芝を刈っています。\n(D) 女性が植木ばさみで生垣を刈り込んでいます。",
    explanation: "女性がひざをつき、移植ごて(trowel)で花壇に花を植えている=planting flowers in a garden bed。手にしているのはホースでも芝刈り機でもなく、植木ばさみでもない。hose・mow・shears はいずれも庭仕事の連想で誤答を誘うひっかけ。"
  },
  {
    id: "s6p1-04",
    image: "assets/part1/s6-04.png",
    speaker: "M",
    choices: [
      "People are boarding a boat.",
      "A man is casting a fishing line.",
      "Sailboats are sailing across the water.",
      "Several boats are docked at a pier."
    ],
    answer: 3,
    translation: "(A) 人々がボートに乗り込んでいます。\n(B) 男性が釣り糸を投げています。\n(C) ヨットが水面を進んでいます。\n(D) 数隻のボートが桟橋に停泊しています。",
    explanation: "無人の港で複数のボートが桟橋につながれて停泊している=docked at a pier という状態描写が正解。写真に人はいないので(A)『乗り込んでいる』(B)『釣り糸を投げている』という人の動作はすべて誤り。ボートは停泊中で進んでいないため(C)の sailing も誤り。"
  },
  {
    id: "s6p1-05",
    image: "assets/part1/s6-05.png",
    speaker: "W",
    choices: [
      "She is stacking books on a cart.",
      "She is reaching for a book on a shelf.",
      "She is reading at a desk.",
      "The shelves have been emptied."
    ],
    answer: 1,
    translation: "(A) 彼女はカートに本を積んでいます。\n(B) 彼女は棚の本に手を伸ばしています。\n(C) 彼女は机で本を読んでいます。\n(D) 棚は空にされています。",
    explanation: "女性が本棚の前に立ち、棚の一冊に手を伸ばしている=reaching for a book on a shelf。カートに積む動作や机で読む動作はしていない。棚には本がぎっしり並んでいるため(D)の have been emptied『空にされた』という状態も事実に反する。"
  },
  {
    id: "s6p1-06",
    image: "assets/part1/s6-06.png",
    speaker: "M",
    choices: [
      "A chef is chopping vegetables on a cutting board.",
      "A chef is washing dishes in a sink.",
      "A chef is stirring a pot on the stove.",
      "A chef is putting on an apron."
    ],
    answer: 0,
    translation: "(A) 料理人がまな板で野菜を切っています。\n(B) 料理人がシンクで皿を洗っています。\n(C) 料理人がコンロの鍋をかき混ぜています。\n(D) 料理人がエプロンを身につけているところです。",
    explanation: "厨房で料理人がまな板の上の野菜を包丁で切っている=chopping vegetables on a cutting board。皿洗いはしておらず、コンロや鍋は写っていても本人はかき混ぜていない(存在する物で誤答を誘うひっかけ)。(D)の put on は『身につける動作』を表すが、エプロンはすでに着用済みなので誤り(put on と wear の区別)。"
  }
];
