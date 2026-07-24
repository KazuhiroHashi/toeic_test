// Part 1: 写真描写問題(実写モノクロ写真を使用)
// 本番同様、説明文は印刷されず音声のみ。写真を見て最も適切な描写文を選ぶ。
window.TOEIC_DATA_3 = window.TOEIC_DATA_3 || {};
window.TOEIC_DATA_3.part1 = [
  {
    id: "s3p1-01",
    image: "assets/part1/s3-01.png",
    speaker: "M",
    choices: [
      "A woman is examining a document.",
      "A woman is filing folders in a cabinet.",
      "A woman is typing on a keyboard.",
      "A woman is talking on the phone."
    ],
    answer: 0,
    translation: "(A) 女性が書類に目を通しています。\n(B) 女性がキャビネットにフォルダーをしまっています。\n(C) 女性がキーボードで入力しています。\n(D) 女性が電話で話しています。",
    explanation: "机に着いた女性が一枚の書類を手に取って読んでいる=examining a document。机上にノートパソコンはあるが手を触れていないので(C)の typing は誤り。キャビネットや電話の動作もしていない(写っている物で誤答を誘うひっかけ)。"
  },
  {
    id: "s3p1-02",
    image: "assets/part1/s3-02.png",
    speaker: "W",
    choices: [
      "A worker is climbing a ladder.",
      "A worker is wearing a hard hat.",
      "A worker is putting on his gloves.",
      "Some bricks are being stacked."
    ],
    answer: 1,
    translation: "(A) 作業員がはしごを上っています。\n(B) 作業員がヘルメットをかぶっています。\n(C) 作業員が手袋をはめているところです。\n(D) れんがが積まれているところです。",
    explanation: "工事現場で作業員がヘルメットをかぶった状態で立っている=wearing a hard hat。wear は『身につけている状態』を表す。(C)の put on は『身につける動作』で、手袋はすでにはめているので誤り。はしごを上る動作はなく、(D)は being+過去分詞で『今まさに積んでいる進行中の動作』を表すが、れんがを積む人はいないので誤り。"
  },
  {
    id: "s3p1-03",
    image: "assets/part1/s3-03.png",
    speaker: "M",
    choices: [
      "A chef is washing dishes in a sink.",
      "A chef is stirring a pot on the stove.",
      "A chef is chopping some vegetables.",
      "A chef is taking food out of an oven."
    ],
    answer: 2,
    translation: "(A) 料理人が流しで皿を洗っています。\n(B) 料理人がコンロの鍋をかき混ぜています。\n(C) 料理人が野菜を刻んでいます。\n(D) 料理人がオーブンから料理を取り出しています。",
    explanation: "厨房で料理人が包丁を使って野菜を刻んでいる=chopping some vegetables。奥のコンロに鍋はあるが、彼はかき混ぜていないので(B)は誤り。皿洗いやオーブンからの取り出しもしていない(背景の物で誤答を誘うひっかけ)。"
  },
  {
    id: "s3p1-04",
    image: "assets/part1/s3-04.png",
    speaker: "W",
    choices: [
      "People are strolling through the park.",
      "A gardener is trimming the hedges.",
      "Leaves are being raked into piles.",
      "Some benches have been placed along the path."
    ],
    answer: 3,
    translation: "(A) 人々が公園を散歩しています。\n(B) 庭師が生け垣を刈り込んでいます。\n(C) 落ち葉が熊手で山にかき集められているところです。\n(D) ベンチが小道沿いに置かれています。",
    explanation: "無人の公園で、小道沿いにベンチが設置されている状態=have been placed。人が写っていないので(A)の散歩や(B)の庭師の動作は誤り。(C)は being+過去分詞で『今まさにかき集めている進行中の動作』を表すが、作業している人はいないので誤り。人のいない写真では人の動作を述べた選択肢は選ばない。"
  },
  {
    id: "s3p1-05",
    image: "assets/part1/s3-05.png",
    speaker: "M",
    choices: [
      "Some vehicles are stopped at an intersection.",
      "A bus is pulling out of a station.",
      "Pedestrians are crossing the street.",
      "A traffic light is being installed."
    ],
    answer: 0,
    translation: "(A) 何台かの車が交差点で停まっています。\n(B) バスが停留所から発車しています。\n(C) 歩行者が通りを横断しています。\n(D) 信号機が設置されているところです。",
    explanation: "交差点で数台の車が信号待ちで停まっている=are stopped at an intersection。バスは停留所に停車中で発車していないので(B)は誤り。歩行者は歩道で待っており横断していないので(C)も誤り。(D)は being+過去分詞で『今まさに設置している進行中の動作』を表すが、作業員はいないので誤り。"
  },
  {
    id: "s3p1-06",
    image: "assets/part1/s3-06.png",
    speaker: "W",
    choices: [
      "A customer is pouring some coffee.",
      "A barista is wiping down the counter.",
      "A cup is being handed to a customer.",
      "Some pastries are being arranged in a case."
    ],
    answer: 2,
    translation: "(A) 客がコーヒーを注いでいます。\n(B) 店員がカウンターを拭いています。\n(C) カップが客に手渡されているところです。\n(D) 焼き菓子がケースに並べられているところです。",
    explanation: "カフェのカウンター越しに、店員がカップを客へ手渡している最中=being handed to a customer。ここでは実際に手渡す動作が進行中なので being+過去分詞が正しく使える。コーヒーを注いでいるのは店員ではなく客でもないので(A)は誤り。カウンターを拭く動作はしておらず、ケースに焼き菓子を並べている人もいないので(B)(D)も誤り。"
  }
];
