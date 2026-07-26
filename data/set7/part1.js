// セット7 part1(上級レベル)
// 無人写真2枚(s7-02 / s7-05)、複数人写真2枚(s7-01 / s7-04)を含む。
// 誤答は being + 過去分詞(進行中の動作)と have been + 過去分詞(完了・状態)の取り違えを狙う。
window.TOEIC_DATA_7 = window.TOEIC_DATA_7 || {};
window.TOEIC_DATA_7.part1 = [
  {
    "id": "s7p1-01",
    "image": "assets/part1/s7-01.jpg",
    "speaker": "M",
    "choices": [
      "Travelers are retrieving bags from a carousel.",
      "A suitcase is being weighed at a counter.",
      "Passengers have been seated in a waiting area.",
      "An agent is stamping a document."
    ],
    "answer": 1,
    "translation": "(A) 旅行者が回転式コンベヤーから荷物を受け取っています。\n(B) スーツケースがカウンターで計量されているところです。\n(C) 乗客が待合スペースに着席しています。\n(D) 係員が書類にスタンプを押しています。",
    "explanation": "空港のチェックインカウンターで、係員の前にある計量台にスーツケースが載せられている=『is being weighed』。人が写っている写真では being + 過去分詞は誤答であることが多いが、この写真のように『まさに誰かの手で処理されている最中』なら正解になり得る。ここが上級の狙い。(A)は手荷物受取所の場面で写真と違う。(C)は待合スペースに座っている人がいないので誤り。(D)の係員(agent)は写っているが、スタンプを押す動作はしていない。写っている人・物の名前だけで選ばないこと。"
  },
  {
    "id": "s7p1-02",
    "image": "assets/part1/s7-02.jpg",
    "speaker": "W",
    "choices": [
      "Visitors are gathered in front of a display.",
      "A painting is being removed from its frame.",
      "Some artwork is being carried through a doorway.",
      "Several framed pictures have been mounted on a wall."
    ],
    "answer": 3,
    "translation": "(A) 来館者が展示物の前に集まっています。\n(B) 絵が額縁から取り外されているところです。\n(C) 作品が出入口から運び込まれているところです。\n(D) 何枚かの額入りの絵が壁に取り付けられています。",
    "explanation": "無人の展示室。額に入った絵が壁に掛かった『状態』を表す『have been mounted』が正解。人が1人も写っていないので、動作主が必要な(A)はもちろん、(B)(C)の being + 過去分詞(誰かが今その作業をしている最中)もすべて誤り。無人写真では『have been + 過去分詞(=完了した状態)』が正解、『be being + 過去分詞(=進行中)』が誤答、という対比を必ず押さえる。主語が複数(Several framed pictures)なので have been になっている点も確認。"
  },
  {
    "id": "s7p1-03",
    "image": "assets/part1/s7-03.jpg",
    "speaker": "M",
    "choices": [
      "A man is loading paper into a copier.",
      "A man is being handed a stack of documents.",
      "Some pages have been posted on a bulletin board.",
      "A man is unplugging a machine from an outlet."
    ],
    "answer": 0,
    "translation": "(A) 男性がコピー機に用紙を補充しています。\n(B) 男性が書類の束を手渡されているところです。\n(C) 何枚かの紙が掲示板に貼られています。\n(D) 男性が機械のコンセントを抜いています。",
    "explanation": "男性が開けた給紙トレイに用紙の束を入れている=『loading paper into a copier』。(B)は『is being handed(手渡されている最中)』で、渡す相手がいなければ成立しない。写真には男性1人しかいないので誤り。(C)は掲示板に紙が貼られた状態を表すが、そのような掲示物は写っていない。(D)は同じ機械を扱っていても動作が違う。紙・機械という共通の要素で誘う誤答なので、動詞まで聞き取ること。"
  },
  {
    "id": "s7p1-04",
    "image": "assets/part1/s7-04.jpg",
    "speaker": "W",
    "choices": [
      "Some bins have been stacked against a fence.",
      "A truck is being loaded with sacks.",
      "Two workers are sorting items into separate bins.",
      "One of the workers is writing on a clipboard."
    ],
    "answer": 2,
    "translation": "(A) いくつかの容器がフェンスに寄せて積み上げられています。\n(B) トラックに袋が積み込まれているところです。\n(C) 2人の作業員が品物を別々の容器に仕分けています。\n(D) 作業員の1人がクリップボードに書き込んでいます。",
    "explanation": "回収場で2人の作業員が瓶や缶を種類ごとの容器に入れている=『sorting items into separate bins』。複数人の写真では『2人が共通して何をしているか』を表す文が正解になりやすい。(A)の容器は地面に並んでおり、積み上げられてはいない。(B)のトラックは写っておらず、積み込みも行われていない。(D)は作業員は写っているが、書き込む動作はしていない。『One of the workers』のように一部の人だけを指す選択肢は、その人物の動作が写真と一致するか個別に確認する。"
  },
  {
    "id": "s7p1-05",
    "image": "assets/part1/s7-05.jpg",
    "speaker": "M",
    "choices": [
      "A worker is filling a hole with gravel.",
      "Traffic cones have been placed around an opening in the pavement.",
      "Some cones are being loaded into a truck.",
      "Pedestrians are stepping over a barrier."
    ],
    "answer": 1,
    "translation": "(A) 作業員が穴に砂利を詰めています。\n(B) 歩道の掘削箇所の周りに三角コーンが置かれています。\n(C) いくつかのコーンがトラックに積み込まれているところです。\n(D) 歩行者が柵をまたいでいます。",
    "explanation": "人のいない工事箇所の写真。コーンが掘削部分を囲むように置かれた『状態』=『have been placed』が正解。作業員も歩行者も写っていないので(A)(D)は誤り。(C)は同じ cones を使った音のひっかけで、『are being loaded(今積み込まれている最中)』は動作主が必要なため無人の写真では誤り。無人写真での have been + 過去分詞 と be being + 過去分詞 の区別が、この問題の得点源。"
  },
  {
    "id": "s7p1-06",
    "image": "assets/part1/s7-06.jpg",
    "speaker": "W",
    "choices": [
      "A notice is being taped to a window.",
      "A sign has been mounted above a doorway.",
      "A woman is drawing a curtain across a window.",
      "A woman is unlocking a shop door."
    ],
    "answer": 0,
    "translation": "(A) 貼り紙が窓に貼られているところです。\n(B) 看板が出入口の上に取り付けられています。\n(C) 女性が窓にカーテンを引いています。\n(D) 女性が店の扉の鍵を開けています。",
    "explanation": "女性が店の窓ガラスに紙を当ててテープで留めている=『is being taped(今まさに貼られている最中)』。動作主が写っているので being + 過去分詞が成立する。(B)は『has been mounted(取り付けられた状態)』で、同じ『掲示物』の話でも完了した状態を表すため、今作業中のこの写真とは食い違う。(A)と(B)の対比がこの問題の核心。(C)(D)は窓・扉という写っている物を使った誤答で、動作が異なる。"
  }
];
