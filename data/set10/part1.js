// セット10 part1(上級レベル)
// 無人写真2枚(s10-02 / s10-05)、複数人写真2枚(s10-01 / s10-04)を含む。
// 誤答は being + 過去分詞(進行中の動作)と have been + 過去分詞(完了・状態)の取り違えを狙う。
//
// 写真の情景(あとから画像生成するときの指示。セット1〜9と場面が重複しないこと)
//   s10-01 縫製工房。大きな裁断台に女性2人。手前の女性が立って紙の型紙を布地にまち針で留めている。
//          奥の女性は椅子に座ってミシンで縫っている。壁ぎわの棚に布のロールが立てて並ぶ。
//          隅にマネキンが1体あるが、誰も触っていない。床に布は積まれていない。
//   s10-02 無人のコインランドリー。ドラム式洗濯機が横一列。いくつかは扉が開いたまま。
//          手前の折りたたみ台にたたんだタオルが積まれている。横に車輪付きのランドリーカート。
//          壁に利用案内の貼り紙。人は1人も写っていない。
//   s10-03 サーバールーム。男性技術者1人が機器ラックの前にしゃがみ、
//          スイッチにLANケーブルを差し込んでいる。ラックの扉は開いたまま。
//          ケーブルはラック側面に束ねて固定されている。工具箱は床に置かれているが手には持っていない。
//   s10-04 ビルの陸屋根。ヘルメット姿の作業員2人が、太陽光パネル1枚を両側から持ち、
//          金属の架台の上へ下ろしているところ。奥にはすでに設置済みのパネルが列をなす。
//          脇に工具箱。はしごは写っていない。シートで覆われたパネルもない。
//   s10-05 無人の宴会場。白いクロスを掛けた丸テーブルが複数。皿・グラス・畳んだナプキンがセット済み。
//          椅子はテーブルにきちんと収められている(壁ぎわに積み上げてはいない)。
//          中央に小さな花の飾り。天井にシャンデリア。人は1人も写っていない。
//   s10-06 生花店の店内。女性店員1人が作業台で花束を紙で包んでいる。
//          床にはバケツに入った切り花が並ぶ。棚に鉢植え。台の上にリボンの巻き。
//          花瓶に生けている場面ではなく、客も写っていない。
window.TOEIC_DATA_10 = window.TOEIC_DATA_10 || {};
window.TOEIC_DATA_10.part1 = [
  {
    "id": "s10p1-01",
    "image": "assets/part1/s10-01.jpg",
    "speaker": "W",
    "choices": [
      "A woman is threading a sewing machine.",
      "One of the women is pinning a pattern to a piece of fabric.",
      "Bolts of cloth have been stacked on the floor.",
      "A garment is being fitted on a mannequin."
    ],
    "answer": 1,
    "translation": "(A) 女性がミシンに糸を通しています。\n(B) 女性の1人が型紙を布地にまち針で留めています。\n(C) 布のロールが床に積み上げられています。\n(D) 衣服がマネキンに着せ付けられているところです。",
    "explanation": "縫製工房で、立っている女性が紙の型紙を布地にまち針で留めている=『pinning a pattern to a piece of fabric』。複数人が写る写真では『One of the women』のように一部の人だけを指す選択肢が出るので、その人物の動作が写真と一致するかを個別に確かめる。(A)は奥の女性がミシンを使っているが、動作は『縫っている』であって『糸を通している(threading)』ではない。同じ道具でも動詞が違えば誤り。(C)は『have been stacked(積み上げられた状態)』だが、布のロールは棚に立てて並んでいるので状態が食い違う。(D)の『is being fitted』は誰かが今まさに着せ付けている最中を表す。マネキンは写っているが誰も触れていないので誤り。写っている物の名前だけで選ばないこと。"
  },
  {
    "id": "s10p1-02",
    "image": "assets/part1/s10-02.jpg",
    "speaker": "M",
    "choices": [
      "An attendant is folding laundry at a counter.",
      "Clothes are being loaded into a washer.",
      "A cart is being pushed toward the machines.",
      "Some towels have been stacked on a counter."
    ],
    "answer": 3,
    "translation": "(A) 係員がカウンターで洗濯物をたたんでいます。\n(B) 衣類が洗濯機に入れられているところです。\n(C) カートが洗濯機の方へ押されているところです。\n(D) タオルがカウンターに積まれています。",
    "explanation": "無人のコインランドリー。たたんだタオルが台に積まれた『状態』を表す『have been stacked』が正解。人が1人も写っていないので、動作主が必要な(A)はもちろん、(B)(C)の『be being + 過去分詞(誰かが今その作業をしている最中)』もすべて誤り。無人写真では『have been + 過去分詞(=完了した状態)』が正解、『be being + 過去分詞(=進行中)』が誤答、という対比を必ず押さえる。洗濯機・カートという写っている物の名前で選ばせるひっかけ。"
  },
  {
    "id": "s10p1-03",
    "image": "assets/part1/s10-03.jpg",
    "speaker": "M",
    "choices": [
      "A man is plugging a cable into a piece of equipment.",
      "A man is being handed a tool.",
      "The doors of a cabinet have been closed.",
      "A man is carrying a box down an aisle."
    ],
    "answer": 0,
    "translation": "(A) 男性が機器にケーブルを差し込んでいます。\n(B) 男性が工具を手渡されているところです。\n(C) 収納棚の扉が閉められています。\n(D) 男性が箱を通路に沿って運んでいます。",
    "explanation": "サーバールームで男性がラック内の機器にケーブルを差し込んでいる=『plugging a cable into a piece of equipment』。(B)の『is being handed』は渡す相手がいなければ成立しない。写真には男性1人しかいないので誤り。工具箱が写っていても、手渡しの動作は起きていない。(C)は『have been closed(閉められた状態)』だが、ラックの扉は開いたままなので状態が逆。無人写真だけでなく、人が写る写真でも状態の受動態は『今どうなっているか』と必ず突き合わせる。(D)は同じ人物でも動作が違う。"
  },
  {
    "id": "s10p1-04",
    "image": "assets/part1/s10-04.jpg",
    "speaker": "W",
    "choices": [
      "Workers are climbing onto the roof from a ladder.",
      "One of the workers is drilling into a wall.",
      "A panel is being lowered onto a frame.",
      "Some panels have been covered with a tarp."
    ],
    "answer": 2,
    "translation": "(A) 作業員がはしごから屋根に登っています。\n(B) 作業員の1人が壁に穴を開けています。\n(C) パネルが架台の上へ下ろされているところです。\n(D) 何枚かのパネルがシートで覆われています。",
    "explanation": "屋上で2人の作業員が太陽光パネルを両側から持ち、架台の上へ下ろしている=『is being lowered onto a frame』。『be being + 過去分詞』は誤答であることが多いが、この写真のように動作主が写っていて、まさにその手で処理されている最中なら正解になり得る。ここが上級の狙い。(D)は同じ panels を使いながら『have been covered(覆われた状態)』を表し、設置済みのパネルは露出しているので誤り。(C)と(D)の対比がこの問題の核心。(A)のはしごは写っておらず、2人はすでに屋根の上にいる。(B)は作業員は写っているが、壁に穴を開けてはいない。"
  },
  {
    "id": "s10p1-05",
    "image": "assets/part1/s10-05.jpg",
    "speaker": "M",
    "choices": [
      "Guests are being seated at the tables.",
      "A server is filling the water glasses.",
      "Chairs have been stacked along a wall.",
      "The tables have been set with plates and glassware."
    ],
    "answer": 3,
    "translation": "(A) 客がテーブルに案内されて着席しているところです。\n(B) 給仕係が水のグラスを満たしています。\n(C) 椅子が壁ぎわに積み上げられています。\n(D) テーブルに皿とグラス類がセットされています。",
    "explanation": "開宴前の無人の宴会場。皿・グラス・ナプキンが並べられた『状態』を表す『have been set』が正解。(C)も同じ『have been + 過去分詞』の形だが、椅子は各テーブルに収められており壁ぎわに積み上げられてはいないので誤り。上級では『状態の受動態が2つ並び、写真と合うのは一方だけ』という作りになる。形が同じというだけで選ばず、最後の語句まで写真と突き合わせること。人が1人も写っていないので、(A)の『are being seated(今案内されている最中)』と(B)の人の動作は初めから消せる。"
  },
  {
    "id": "s10p1-06",
    "image": "assets/part1/s10-06.jpg",
    "speaker": "W",
    "choices": [
      "A woman is wrapping a bouquet in paper.",
      "Some flowers are being placed into buckets.",
      "A customer is being handed a receipt.",
      "A woman is arranging flowers in a vase."
    ],
    "answer": 0,
    "translation": "(A) 女性が花束を紙で包んでいます。\n(B) 花がバケツに入れられているところです。\n(C) 客がレシートを手渡されているところです。\n(D) 女性が花瓶に花を生けています。",
    "explanation": "生花店で女性店員が作業台の上で花束を紙で包んでいる=『wrapping a bouquet in paper』。(B)は切り花がバケツに入った状態は写真と合うが、『are being placed(今入れられている最中)』という進行中の動作は誰も行っていないので誤り。状態と動作の区別がそのまま正誤を分ける。(C)は客が写っていないので成立しない。(D)は花という共通の題材で誘う誤答だが、女性が扱っているのは花瓶ではなく包装紙。花・バケツ・花瓶と連想しやすい語が並ぶので、動詞と目的語の組み合わせまで聞き取ること。"
  }
];
