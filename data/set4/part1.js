// セット4 part1(監査反映・正解位置均等化済み)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part1 = [
  {
    "id": "s4p1-01",
    "image": "assets/part1/s4-01.png",
    "speaker": "M",
    "choices": [
      "A cook is washing dishes in a sink.",
      "A cook is chopping vegetables on a cutting board.",
      "A cook is taking off his apron.",
      "A cook is stirring a pot on the stove."
    ],
    "answer": 1,
    "translation": "(A) 料理人が流しで皿を洗っています。\n(B) 料理人がまな板で野菜を刻んでいます。\n(C) 料理人がエプロンを外しているところです。\n(D) 料理人がコンロで鍋をかき混ぜています。",
    "explanation": "厨房で料理人が包丁を使い、まな板の上で野菜を刻んでいる=chopping vegetables on a cutting board が写真中心の動作。(D)の take off は『外す動作』だが、エプロンはすでに身に着けた状態なので誤り。流しやコンロは写っていても、その場所で皿洗いや鍋の混ぜ作業はしていない。"
  },
  {
    "id": "s4p1-02",
    "image": "assets/part1/s4-02.png",
    "speaker": "W",
    "choices": [
      "Some books are being taken out of a box.",
      "A woman is reading at a desk.",
      "A woman is stacking books onto a cart.",
      "A woman is reaching for a book on a shelf."
    ],
    "answer": 3,
    "translation": "(A) 何冊かの本が箱から取り出されているところです。\n(B) 女性が机で読書をしています。\n(C) 女性がカートに本を積み重ねています。\n(D) 女性が棚の本に手を伸ばしています。",
    "explanation": "図書館で女性が書棚に向かって腕を上げ、本に手を伸ばしている=reaching for a book on a shelf。(A)のカートや(C)の机での読書は動作が違う。(D)は箱が写真になく、being taken out という進行中の受動も成立しない。棚の本という共通の題材で誤答を誘うひっかけ。"
  },
  {
    "id": "s4p1-03",
    "image": "assets/part1/s4-03.png",
    "speaker": "M",
    "choices": [
      "A man is locking up a bicycle.",
      "Some bicycles have been lined up along a railing.",
      "A bicycle is being loaded onto a rack.",
      "People are riding their bicycles down a path."
    ],
    "answer": 1,
    "translation": "(A) 男性が自転車に鍵をかけています。\n(B) 何台かの自転車が柵に沿って並べられています。\n(C) 自転車がラックに積み込まれているところです。\n(D) 人々が小道で自転車に乗っています。",
    "explanation": "人が写っていない写真。複数の自転車が柵に沿って停められた状態=have been lined up along a railing(状態を表す受動態)が正解。無人なので(A)(B)の人の動作、(D)の being loaded という進行中の動作はいずれも誤り。無人写真では人の動作の選択肢を切る、という基本の型。"
  },
  {
    "id": "s4p1-04",
    "image": "assets/part1/s4-04.png",
    "speaker": "W",
    "choices": [
      "A car is being washed.",
      "A man is pumping gas into a vehicle.",
      "A car is parked inside a garage.",
      "A man is changing a flat tire."
    ],
    "answer": 0,
    "translation": "(A) 車が洗われているところです。\n(B) 男性が車に給油しています。\n(C) 車が車庫の中に停められています。\n(D) 男性がパンクしたタイヤを交換しています。",
    "explanation": "作業員がスポンジで車体を洗っている=A car is being washed(being+過去分詞で『今まさに洗われている』進行中の受動態)。(B)の parked は『停まったまま動きのない状態』で、洗車という動作を表せないため誤り。給油やタイヤ交換はしていない。being washed と is parked の区別を問う典型問題。"
  },
  {
    "id": "s4p1-05",
    "image": "assets/part1/s4-05.png",
    "speaker": "M",
    "choices": [
      "A worker is watering some plants.",
      "A worker is sweeping the driveway.",
      "A worker is painting a fence.",
      "A worker is mowing the lawn."
    ],
    "answer": 2,
    "translation": "(A) 作業員が植物に水をやっています。\n(B) 作業員が私道を掃いています。\n(C) 作業員が柵を塗っています。\n(D) 作業員が芝を刈っています。",
    "explanation": "作業員がローラーまたは刷毛で木の柵を塗っている=painting a fence が中心の動作。屋外の庭という場面から連想しやすい(A)芝刈り・(C)水やり・(D)掃除を並べたひっかけだが、いずれも写真の動作とは違う。動詞(paint / mow / water / sweep)を正確に聞き分ける問題。"
  },
  {
    "id": "s4p1-06",
    "image": "assets/part1/s4-06.png",
    "speaker": "W",
    "choices": [
      "Some boats are tied up at a dock.",
      "A boat is being pulled out of the water.",
      "Passengers are boarding a ferry.",
      "People are fishing from a boat."
    ],
    "answer": 0,
    "translation": "(A) 何隻かのボートが波止場につながれています。\n(B) ボートが水から引き上げられているところです。\n(C) 乗客がフェリーに乗り込んでいます。\n(D) 人々がボートから釣りをしています。",
    "explanation": "人のいない港の写真。複数のボートが桟橋につながれた状態=tied up at a dock が正解。無人なので(B)の釣りや(D)の乗船といった人の動作は誤り。(C)の being pulled out も引き上げる人や動きがなく成立しない。水辺という題材から人の動作を連想させるひっかけ。"
  }
];
