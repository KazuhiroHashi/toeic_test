// セット8 part1(上級レベル・800〜900点向け)
// 無人写真2枚(状態を表す have been+過去分詞)、複数人の写真2枚を含む。
// 誤答は being+過去分詞(進行中の動作)と have been+過去分詞(状態)の取り違えを狙う。
window.TOEIC_DATA_8 = window.TOEIC_DATA_8 || {};
window.TOEIC_DATA_8.part1 = [
  {
    "id": "s8p1-01",
    "image": "assets/part1/s8-01.jpg",
    "speaker": "M",
    "choices": [
      "Vendors are setting up their stalls.",
      "Some crates are being unloaded from a truck.",
      "An awning has been extended over a stall.",
      "Shoppers are lined up at a counter."
    ],
    "answer": 2,
    "translation": "(A) 売り子が屋台を設営しています。\n(B) 木箱がトラックから降ろされているところです。\n(C) 日よけが屋台の上に張り出されています。\n(D) 買い物客がカウンターに並んでいます。",
    "explanation": "開店前の屋外市場。人は一人も写っておらず、屋台の上に日よけの布が張り出された『状態』だけが見える=has been extended。人がいない写真では、人の動作を述べた(A)(D)は選べない。(B)の being+過去分詞は『今まさに降ろしている進行中の動作』を表し、降ろす人が必要だが誰もいないので誤り。木箱は屋台の脇に積まれたままである点に注意。"
  },
  {
    "id": "s8p1-02",
    "image": "assets/part1/s8-02.jpg",
    "speaker": "W",
    "choices": [
      "A drawing is being rolled up.",
      "Some colleagues are gathered around a table.",
      "One of them is hanging a poster on the wall.",
      "They are seated in a waiting area."
    ],
    "answer": 1,
    "translation": "(A) 図面が丸められているところです。\n(B) 同僚たちがテーブルを囲んで集まっています。\n(C) そのうちの一人が壁にポスターを貼っています。\n(D) 彼らは待合スペースに座っています。",
    "explanation": "設計事務所で、大きな図面を広げたテーブルを3人が立って囲んでいる=are gathered around a table。(A)は being+過去分詞で『今まさに丸めている進行中の動作』を表すが、図面は平らに広げられたままなので誤り。壁には図面が何枚か留めてあるが、貼っている最中の人はいないので(C)は誤り。全員立っているので(D)の seated も誤り。写っている物(図面・壁の掲示)につられないこと。"
  },
  {
    "id": "s8p1-03",
    "image": "assets/part1/s8-03.jpg",
    "speaker": "M",
    "choices": [
      "He is crouching next to a bicycle.",
      "He is riding a bicycle down a path.",
      "A bicycle is being lifted onto a truck.",
      "He is locking a bicycle to a rack."
    ],
    "answer": 0,
    "translation": "(A) 男性が自転車のそばにしゃがんでいます。\n(B) 男性が小道を自転車で走っています。\n(C) 自転車がトラックに積み込まれているところです。\n(D) 男性が自転車をラックに施錠しています。",
    "explanation": "歩道で、スタンドで立てた自転車の横に男性がしゃがみ、レンチを手にしている=crouching next to a bicycle。乗っていないので(B)は誤り。(C)は being+過去分詞で『今まさに積み込んでいる進行中の動作』を表すが、自転車は地面に立ったままでトラックも写っていない。鍵をかける動作もしていないので(D)も誤り。同じ bicycle という語がすべての選択肢に入っており、聞き分けるべきは動詞の部分。"
  },
  {
    "id": "s8p1-04",
    "image": "assets/part1/s8-04.jpg",
    "speaker": "W",
    "choices": [
      "A tool is being handed to an assistant.",
      "Some tools have been laid out on a workbench.",
      "A drawer is being pulled open.",
      "A workbench is being wiped down."
    ],
    "answer": 1,
    "translation": "(A) 工具が助手に手渡されているところです。\n(B) 工具が作業台の上に並べられています。\n(C) 引き出しが引き開けられているところです。\n(D) 作業台が拭かれているところです。",
    "explanation": "人が一人も写っていない作業場の写真。木製の作業台の上にレンチやドライバーが等間隔で並んだ『状態』=(B)の『have been laid out』が正解。(A)(C)(D)はいずれも『being 過去分詞』で『今まさに誰かが手渡している/引き開けている/拭いている』という進行中の受動態を表すが、動作をする人が写っていないので成立しない。無人写真では、この『being 過去分詞』(進行中)と『have been 過去分詞』(状態)の区別がそのまま得点差になる。"
  },
  {
    "id": "s8p1-05",
    "image": "assets/part1/s8-05.jpg",
    "speaker": "M",
    "choices": [
      "Two men are lifting a piece of furniture.",
      "A cabinet is being assembled on the floor.",
      "One of the men is measuring a doorway.",
      "Some furniture has been covered with sheets."
    ],
    "answer": 0,
    "translation": "(A) 男性2人が家具を持ち上げています。\n(B) キャビネットが床で組み立てられているところです。\n(C) 男性の1人が戸口を測っています。\n(D) 家具にシートがかけられています。",
    "explanation": "男性2人が向かい合い、両端を持って戸棚を床から持ち上げている=(A)の『are lifting』が正解。写っているのは持ち上げる動作だけなので、組み立てる(B)・測る(C)は誤り。(D)の『has been covered』は覆われた『状態』を表すが、家具はむき出しのまま運ばれているので誤り。複数人の写真では『何人が』『それぞれ何をしているか』を音声が読み上げる前に見ておくと取りこぼしが減る。"
  },
  {
    "id": "s8p1-06",
    "image": "assets/part1/s8-06.jpg",
    "speaker": "W",
    "choices": [
      "She is adjusting a microphone stand.",
      "She is unrolling a cable across the stage.",
      "A speaker is being mounted on a pole.",
      "She is stepping down from a platform."
    ],
    "answer": 0,
    "translation": "(A) 女性がマイクスタンドの高さを調節しています。\n(B) 女性がステージ上でケーブルを伸ばしています。\n(C) スピーカーが支柱に取り付けられているところです。\n(D) 女性が壇から降りようとしています。",
    "explanation": "女性が両手でマイクスタンドの支柱を握り、高さを合わせている=(A)の『adjusting』が正解。足元にケーブルは見えるが女性は触れていないので(B)は誤り。(C)は『being 過去分詞』で『今まさに取り付けている最中』を表すが、スピーカーはすでに設置済みで作業する人もいない。女性は壇上に立ったままなので(D)も誤り。会場設営という場面から連想される動作を並べたひっかけ。"
  }
];
