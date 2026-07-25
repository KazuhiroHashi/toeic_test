// Part 7: 読解問題(本番と同じ構成:シングル10文書29問+ダブル2セット10問+トリプル3セット15問=54問)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part7 = [
  {
    id: "p7-01",
    title: "シングル 1(テキストメッセージのやり取り)",
    passages: [
      {
        docType: "Text-message chain",
        text: "Kenji Mori (10:12 A.M.)\nSarah, are you still on the fourth floor? I'm fairly sure my laptop bag is sitting on the table in Meeting Room C.\n\nSarah Klein (10:14 A.M.)\nI'm two doors down from it. Is this urgent?\n\nKenji Mori (10:15 A.M.)\nVery. I'm already across town at Westside Partners, and every file for the eleven o'clock walkthrough is on that machine.\n\nSarah Klein (10:16 A.M.)\nGive me a second... it's here, under a pile of handouts.\n\nKenji Mori (10:17 A.M.)\nThat's one crisis off my list. Tom is driving to this same building at ten thirty — any chance he could bring it over?\n\nSarah Klein (10:18 A.M.)\nHe signed out about ten minutes ago, but I'll reach him on his mobile. He can double back for it. Figure on ten fifty.\n\nKenji Mori (10:19 A.M.)\nThat still leaves me time to open the files. Lunch is on me next week."
      }
    ],
    translation: "ケンジ・モリ(午前10:12):サラ、まだ4階にいる? ノートパソコンのバッグを会議室Cのテーブルに置いてきた気がするんだ。\nサラ・クライン(午前10:14):その2つ隣の部屋にいるわ。急ぎ?\nケンジ・モリ(午前10:15):かなり急ぎ。もう街の反対側のウェストサイド・パートナーズにいて、11時の説明会の資料が全部そのパソコンに入っているんだ。\nサラ・クライン(午前10:16):ちょっと待って……あったわ、配布資料の山の下。\nケンジ・モリ(午前10:17):これで危機が1つ消えた。トムが10時半に同じビルに車で来るんだけど、持ってきてもらえないかな?\nサラ・クライン(午前10:18):10分ほど前に退館したけど、携帯にかけてみる。引き返せるはずよ。10時50分と見ておいて。\nケンジ・モリ(午前10:19):それならファイルを開く時間は残る。来週はランチをおごるよ。",
    questions: [
      {
        q: "Why does Mr. Mori write to Ms. Klein?",
        choices: [
          "To ask her to look for something he left behind",
          "To reserve Meeting Room C for a walkthrough",
          "To ask her to attend a client meeting for him",
          "To warn her that he will arrive late"
        ],
        answer: 0,
        explanation: "最初のメッセージ『会議室Cのテーブルにバッグを置いてきた気がする』が根拠。置き忘れた物を探してほしいという依頼で、(A)が言い換え。(B)は本文の語 Meeting Room C をそのまま含むひっかけで、部屋を予約する話は出てこない。"
      },
      {
        q: "At 10:17 A.M., what does Mr. Mori most likely mean when he writes, \"That's one crisis off my list\"?",
        choices: [
          "He has canceled one of his appointments.",
          "He wants Ms. Klein to write down several tasks.",
          "He has finished solving a client's problem.",
          "He is relieved that the computer has been found."
        ],
        answer: 3,
        explanation: "意図問題。直前でサラが『あったわ』と見つけたことへの返答なので、『心配事が1つ片づいた=見つかって安心した』という意味の(D)が正解。list という語につられた(B)、crisis を仕事上の問題ととった(C)は誤り。"
      },
      {
        q: "What will Tom most likely do?",
        choices: [
          "Sign out of the building at ten thirty",
          "Lead the eleven o'clock walkthrough",
          "Interrupt his trip to collect the bag",
          "Send the files to Mr. Mori by e-mail"
        ],
        answer: 2,
        explanation: "サラの He signed out about ten minutes ago ... He can double back for it(すでに出発したが引き返せる)から、トムは移動を中断して取りに戻ると分かる。(A)は本文の sign out と ten thirty をそのまま使ったひっかけで、退館は10時8分ごろ。"
      }
    ]
  },
  {
    id: "p7-02",
    title: "シングル 2(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "SUMMIT COWORKING — Now Open in the Harbor District\n\nA professional place to work, without signing a long-term lease.\n\nMembership options:\n1. Day Pass ($25) — a seat in the shared hall, 9 A.M. to 6 P.M.\n2. Flex Plan ($180 a month) — a seat in the shared hall at any hour, plus four hours of meeting-room time each month\n3. Dedicated Desk ($320 a month) — a desk that is yours alone, entry at any hour, ten hours of meeting-room time each month, and a locker for your equipment\n4. Private Office ($750 a month) — a room you can lock, seating for four, meeting rooms with no limit, and a phone line of your own\n\nEvery option comes with fast Internet, coffee at no charge, and up to 100 printed pages a month. Meeting-room hours do not carry over to the following month, and holders of a Day Pass may book a meeting room at $15 an hour.\n\nOpening offer: start one of our monthly memberships before July 31 and your second month is half price. Day Passes do not count toward this offer. Tours are free — book one at www.summitcoworking.com."
      }
    ],
    translation: "サミット・コワーキング——ハーバー地区に新規オープン\n\n長期の賃貸契約を結ばずに使える、プロ仕様の仕事場。\n\n会員プラン:\n1. デイパス(25ドル)——共有ホールの席、午前9時〜午後6時\n2. フレックスプラン(月180ドル)——共有ホールの席を時間帯を問わず利用可、加えて会議室を毎月4時間\n3. 専用デスク(月320ドル)——自分だけのデスク、時間帯を問わず入館可、会議室を毎月10時間、機材用ロッカー付き\n4. プライベートオフィス(月750ドル)——施錠できる個室、4名分の席、会議室は無制限、専用電話回線\n\nどのプランにも高速インターネット、無料のコーヒー、月100ページまでの印刷が付きます。会議室の時間は翌月に繰り越せません。デイパスの方は1時間15ドルで会議室を予約できます。\n\nオープン記念:7月31日までに月額会員を開始すると、2か月目が半額。デイパスはこの対象外です。見学は無料——www.summitcoworking.com からご予約ください。",
    questions: [
      {
        q: "What is suggested about Day Pass holders?",
        choices: [
          "They may enter the building at any hour.",
          "They must pay extra to use a meeting room.",
          "They are not allowed to print documents.",
          "They may reserve a desk in advance."
        ],
        answer: 1,
        explanation: "推論問題。デイパスの説明に会議室の時間は含まれず、後段に『デイパスの方は1時間15ドルで会議室を予約できる』とあるので、別料金が必要と分かる。(A)は本文の at any hour をそのまま含むひっかけで、これは月額プランの特典。印刷は全プラン共通なので(C)も誤り。"
      },
      {
        q: "What is provided with the Dedicated Desk that is NOT provided with the Flex Plan?",
        choices: [
          "Entry at any hour",
          "Fast Internet",
          "Time in a meeting room",
          "A place to store belongings"
        ],
        answer: 3,
        explanation: "NOT型の比較問題。ロッカー(a locker for your equipment)は専用デスクにだけ付く。(D)がその言い換え。(A)は両方に付き、(B)は全プラン共通、(C)は時間数が違うだけでどちらにもある。"
      },
      {
        q: "How can a customer qualify for the opening offer?",
        choices: [
          "By booking a free tour on the Web site",
          "By paying for a full year in advance",
          "By starting a monthly membership before the end of July",
          "By buying ten Day Passes"
        ],
        answer: 2,
        explanation: "start one of our monthly memberships before July 31(7月31日までに月額会員を開始)が条件。(A)は本文の free tour をそのまま含むが、見学は特典の条件ではない。"
      }
    ]
  },
  {
    id: "p7-03",
    title: "シングル 3(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Naomi Carter, Events Coordinator\nTo: All Department Heads\nSubject: Annual Company Picnic — Action Required\nDate: May 20\n\nDear Department Heads,\n\nThis year's picnic will take place on Saturday, June 21, at Lakeview Park from 11 A.M. to 4 P.M. Families are welcome, as always, and lunch will be served.\n\nSo that we can plan properly, please finish the following by June 2:\n\n1. Ask everyone on your team how many people, relatives included, will be coming.\n2. Make a note of anyone who cannot eat certain foods.\n3. Enter both figures on the intranet form.\n\nNew this year is a bus running between the main office and the park. Requests for a seat go on the same form. The bus takes 40 passengers, and places will go to whoever asks first.\n\nWe also need hands to put up the tables and tents from 9 A.M. Anyone who helps receives a company T-shirt. For that, write to me at the address below rather than using the form.\n\nBest regards,\nNaomi Carter"
      }
    ],
    translation: "差出人:ナオミ・カーター(イベントコーディネーター)\n宛先:全部門長\n件名:年次社内ピクニック——要対応\n日付:5月20日\n\n部門長の皆様\n\n今年のピクニックは6月21日(土)午前11時〜午後4時、レイクビュー公園で行います。例年通りご家族も歓迎で、昼食も出ます。\n\n計画を立てるため、6月2日までに次を済ませてください。\n1. チーム全員に、ご家族を含め何名参加するかを確認する。\n2. 食べられない物がある人を書き留める。\n3. どちらの数字もイントラネットのフォームに入力する。\n\n今年からの新企画として、本社と公園を結ぶバスを運行します。座席の希望も同じフォームに記入してください。バスは40名までで、席は先に申し出た人から割り当てます。\n\nまた、午前9時からテーブルやテントを設営する人手も必要です。手伝ってくれた人には会社のTシャツを差し上げます。こちらはフォームではなく、下記のアドレスに直接メールしてください。\n\nよろしくお願いします。\nナオミ・カーター",
    questions: [
      {
        q: "What is the main purpose of the e-mail?",
        choices: [
          "To ask managers to gather and report information",
          "To announce that families are welcome this year",
          "To move an event to a different park",
          "To ask employees to bring their own lunch"
        ],
        answer: 0,
        explanation: "件名の Action Required と、人数・食事制限を集めてフォームに入力せよという3つの指示から、情報収集の依頼が主目的。(B)は本文の families are welcome をそのまま含むが、これは例年通りの補足にすぎない。"
      },
      {
        q: "What is suggested about the bus?",
        choices: [
          "It will run once every hour.",
          "Passengers will be charged a small fee.",
          "Some employees who want a seat may not get one.",
          "It was also provided last June."
        ],
        answer: 2,
        explanation: "推論問題。定員40名で『先に申し出た人から』割り当てるので、希望しても乗れない人が出る可能性がある。New this year とあるので(D)は誤り。料金の記載はないので(B)も誤り。"
      },
      {
        q: "Why would an employee write to Ms. Carter instead of using the form?",
        choices: [
          "To ask about foods that cannot be eaten",
          "To request a place on the bus",
          "To suggest a different date for the picnic",
          "To offer help with the preparations"
        ],
        answer: 3,
        explanation: "設営を手伝う人だけは『フォームではなく直接メール』と指示されている。(A)(B)はどちらもフォームに記入する項目で、本文の語をそのまま使ったひっかけ。"
      }
    ]
  },
  {
    id: "p7-05",
    title: "シングル 4(お知らせ)",
    passages: [
      {
        docType: "Notice",
        text: "RIVERSIDE FITNESS CENTER — MEMBER NOTICE\n\nOur indoor pool will be out of use from Monday, August 4, through Sunday, August 10, while the tiles are repaired and the basin is cleaned. Everything else — the weight room, the studios, and the sauna — will run on the usual schedule.\n\nAqua-fitness sessions are not being dropped. For that week only they move to Westbrook Aquatic Center on Pine Street, and each session starts at the same hour as it does here. Show the card you use at our front desk and you will be let in at no additional cost; Westbrook staff have already been given our member list.\n\nThe pool returns to service at 6:00 A.M. on Monday, August 11. Lane reservations for that week may be made from August 8.\n\nWe are sorry for the disruption and thank you for your patience."
      }
    ],
    translation: "リバーサイド・フィットネスセンター——会員の皆様へ\n\n屋内プールは、タイル補修と水槽清掃のため、8月4日(月)から8月10日(日)まで使用できません。ウエイトルーム、スタジオ、サウナなど他の施設は通常通り営業します。\n\nアクアフィットネスの各回は中止しません。その週に限りパイン通りのウェストブルック・アクアティックセンターで開催し、開始時刻は当センターと同じです。当センターの受付で使っているカードを提示すれば、追加料金なしで入館できます。ウェストブルックのスタッフには当センターの会員名簿を渡してあります。\n\nプールは8月11日(月)午前6時に再開します。その週のレーン予約は8月8日から可能です。\n\nご不便をおかけしますが、ご理解のほどよろしくお願いいたします。",
    questions: [
      {
        q: "What is the purpose of the notice?",
        choices: [
          "To announce that part of a facility will be unavailable for a time",
          "To introduce a newly hired aqua-fitness instructor",
          "To explain why membership fees are going up",
          "To advertise a swimming pool that has just opened"
        ],
        answer: 0,
        explanation: "冒頭でプールが8月4日〜10日使えないと告知しており、施設の一部が一時的に使えなくなることの連絡が目的。他の施設は通常営業なので『施設の一部』という表現が正確。"
      },
      {
        q: "What is indicated about the aqua-fitness sessions?",
        choices: [
          "They will continue at the usual hour at Riverside.",
          "They will not be held during the repair work.",
          "Members will have to go to another building to join them.",
          "Members must pay an extra charge to take part."
        ],
        answer: 2,
        explanation: "その週はパイン通りの別施設で行われるので、参加者は別の建物へ行く必要がある。(A)は本文の at the same hour をなぞったひっかけで、時刻は同じでも場所が変わる。追加料金は不要なので(D)も誤り。"
      }
    ]
  },
  {
    id: "p7-06",
    title: "シングル 5(オンラインチャット)",
    passages: [
      {
        docType: "Online chat",
        text: "Mika Anders (2:04 P.M.)\nLeo, the projector in Room 5 won't pick up my laptop. The sales demo starts at 2:30.\n\nLeo Grant (2:05 P.M.)\nDid you swap in the gray cable from the drawer?\n\nMika Anders (2:06 P.M.)\nTwice. I also tried it with Ravi's machine — same blank screen.\n\nLeo Grant (2:07 P.M.)\nThen the fault isn't in your computer. I'm two floors up; give me five minutes.\n\nMika Anders (2:08 P.M.)\nThanks. If it comes to it, I'll keep the client in the lobby for a while."
      }
    ],
    translation: "ミカ・アンダース(午後2:04):レオ、5号室のプロジェクターが私のノートパソコンを認識しないの。営業デモは2時半開始よ。\nレオ・グラント(午後2:05):引き出しのグレーのケーブルに替えてみた?\nミカ・アンダース(午後2:06):2回ね。ラヴィのパソコンでも試したけど、同じで画面は真っ黒。\nレオ・グラント(午後2:07):じゃあ原因は君のパソコンじゃないね。2階上にいるから、5分ちょうだい。\nミカ・アンダース(午後2:08):ありがとう。いざとなったら、ロビーでお客様をしばらく引き止めておくわ。",
    questions: [
      {
        q: "What has Ms. Anders already done?",
        choices: [
          "She has ordered a new gray cable.",
          "She has moved the demonstration to another room.",
          "She has tested the projector with a colleague's computer.",
          "She has asked Mr. Grant to run the demonstration."
        ],
        answer: 2,
        explanation: "I also tried it with Ravi's machine(同僚のパソコンでも試した)が根拠。(A)は本文の gray cable をそのまま含むひっかけで、彼女がしたのは差し替えであって注文ではない。"
      },
      {
        q: "At 2:08 P.M., what does Ms. Anders imply when she writes, \"I'll keep the client in the lobby for a while\"?",
        choices: [
          "She may have to delay the start of the demonstration.",
          "She would like Mr. Grant to greet the visitor.",
          "The demonstration will be held downstairs instead.",
          "The client has been waiting since two o'clock."
        ],
        answer: 0,
        explanation: "意図問題。If it comes to it(そうなったら)は『2時半までに直らなかったら』の意味で、客をロビーで待たせる=開始を遅らせるということ。場所を変える(C)や、客の到着時刻(D)には触れていない。"
      }
    ]
  },
  {
    id: "p7-07",
    title: "シングル 6(記事)",
    passages: [
      {
        docType: "Article",
        text: "HARBORVIEW (June 2) — The city put its first bike-share scheme on the streets Saturday, with 200 bicycles spread over 20 docking stations downtown and on the university campus.\n\nA smartphone app releases the lock. The first half hour costs $2, and every 15 minutes after that adds $1. A monthly pass costs $15 and covers any number of rides, provided each one ends within 45 minutes.\n\nCity transportation director Elena Vasquez said the scheme is meant to address the traffic downtown, which has grown 18 percent in five years, and to take some pressure off the crowded lots near the campus. \"If the first twelve months go smoothly, the waterfront district is next,\" she said. \"That call will be made in the spring.\"\n\nMerchants along the route are pleased. \"Students leave the bikes at the curb and come in for coffee,\" said café owner Miguel Torres. \"Saturdays and Sundays are noticeably busier than they used to be.\""
      }
    ],
    translation: "ハーバービュー(6月2日)——市は土曜日、市初の自転車シェア事業を開始した。ダウンタウンと大学キャンパスの20か所のステーションに、計200台の自転車が配置された。\n\nロックはスマートフォンのアプリで解除する。最初の30分が2ドル、以降15分ごとに1ドル加算される。月額パスは15ドルで、1回の利用が45分以内であれば何度でも乗れる。\n\n市交通局長のエレナ・バスケス氏によると、この事業は5年で18パーセント増えたダウンタウンの交通量に対処し、キャンパス周辺の混雑した駐車場の負担を減らすことを狙っている。『最初の12か月が順調なら、次はウォーターフロント地区です』と同氏。『その判断は春に下します』\n\n沿道の商店も歓迎している。『学生が歩道際に自転車を停めて、コーヒーを飲みに入ってきます』とカフェ経営者のミゲル・トーレス氏。『土日は以前より目に見えて忙しくなりました』",
    questions: [
      {
        q: "How much will a rider without a monthly pass pay for a ride of one hour?",
        choices: ["$2", "$3", "$4", "$6"],
        answer: 2,
        explanation: "計算問題。最初の30分が2ドル、残り30分は15分ごとに1ドルなので2ドル追加。合計4ドル。(A)は最初の30分だけの料金を答えたひっかけ。"
      },
      {
        q: "In the article, the word \"address\" in paragraph 3 is closest in meaning to",
        choices: ["speak to", "deal with", "write down", "point out"],
        answer: 1,
        explanation: "語彙問題。基本語の多義。address the traffic の address は『(問題)に対処する』の意味で(B)が正解。『話しかける』(A)や『宛名を書く』(C)は別の意味で、ここでは文脈に合わない。"
      },
      {
        q: "What does Ms. Vasquez indicate about the program?",
        choices: [
          "Traffic downtown has fallen by 18 percent.",
          "Local merchants are paying for the docking stations.",
          "The university will operate its own stations.",
          "Whether it grows will depend on its first year."
        ],
        answer: 3,
        explanation: "If the first twelve months go smoothly, the waterfront district is next(最初の1年が順調なら次は拡大)から、拡大は初年度の結果次第。(A)は本文の 18 percent をそのまま使ったひっかけで、交通量は減ったのではなく増えている。"
      }
    ]
  },
  {
    id: "p7-08",
    title: "シングル 7(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Priya Nair, Events Coordinator\nTo: Dr. Samuel Osei\nSubject: Keynote arrangements — MedTech Summit\nDate: September 12\n\nDear Dr. Osei,\n\nThank you again for agreeing to open the MedTech Summit on Friday, October 17. You are on the program from 9:30 to 10:15 A.M. in the Grand Ballroom, with a further 15 minutes afterward for questions from the floor.\n\nAs we discussed, a room is held in your name at the Lakeside Hotel for the nights of October 16 and 17. A driver will meet you at the airport, so please let me have your arrival and departure times by October 3.\n\nTwo further items. The printed program goes to the press at the end of September, so a recent photograph and a biography of roughly 100 words must reach me by September 26 to appear in it. And if you intend to show slides, our technical staff cannot accept them at the venue; everything must come through the speaker portal by October 10.\n\nBest regards,\nPriya Nair"
      }
    ],
    translation: "差出人:プリヤ・ナイア(イベントコーディネーター)\n宛先:サミュエル・オセイ博士\n件名:基調講演のご手配——メドテック・サミット\n日付:9月12日\n\nオセイ博士\n\n10月17日(金)のメドテック・サミット開会講演をお引き受けいただき、あらためて御礼申し上げます。プログラム上は午前9時30分〜10時15分、グランドボールルームで、その後15分間、会場からの質問をお受けいただきます。\n\nお話しした通り、レイクサイドホテルに10月16日・17日の2泊、お名前でお部屋を確保しています。空港には運転手が伺いますので、到着・出発の時刻を10月3日までにお知らせください。\n\nもう2点。印刷プログラムは9月末に入稿しますので、掲載するには近影と100語程度の経歴を9月26日までにお送りいただく必要があります。また、スライドをお使いの場合、技術スタッフは会場での受け取りができません。すべて10月10日までに講演者ポータル経由でお送りください。\n\nよろしくお願いいたします。\nプリヤ・ナイア",
    questions: [
      {
        q: "What is the purpose of the e-mail?",
        choices: [
          "To invite Dr. Osei to deliver the opening keynote",
          "To go over details of an appearance already agreed on",
          "To ask Dr. Osei to change the time of his talk",
          "To request payment for a hotel room"
        ],
        answer: 1,
        explanation: "Thank you again for agreeing to open ... とあり、依頼はすでに承諾済み。講演時間・宿泊・送迎・提出物といった手配の確認が目的。(A)は本文の opening keynote をそのまま含むひっかけ。"
      },
      {
        q: "Which of Ms. Nair's requests has the earliest deadline?",
        choices: [
          "Sending his travel times",
          "Uploading his slides",
          "Reserving his hotel room",
          "Supplying material for the printed program"
        ],
        answer: 3,
        explanation: "3つの期限を並べて比べる問題。写真と経歴は9月26日、フライトの時刻は10月3日、スライドは10月10日。したがって最も早いのは印刷プログラム用の資料。ホテルはナイアさんが手配済みで、博士の作業ではない。"
      },
      {
        q: "What is suggested about the slides?",
        choices: [
          "They must be submitted over the Internet.",
          "They can be handed to the technical staff on the day.",
          "They will be printed in the program.",
          "They will be checked by Ms. Nair in advance."
        ],
        answer: 0,
        explanation: "come through the speaker portal(講演者ポータル経由)から、オンラインでの提出だと分かる。(B)は本文の technical staff をそのまま含むが、会場では受け取れないと明記されている。"
      }
    ]
  },
  {
    id: "p7-09",
    title: "シングル 8(手紙)",
    passages: [
      {
        docType: "Letter",
        text: "Dear Ms. Kowalski,\n\nThank you for your letter of March 3 about the stand mixer (model KM-200) you bought from our Web site in February. We are sorry that the mixing bowl reached you with a crack in it, and sorry as well that our reply took so long; far more letters and calls came in this winter than we normally receive, and we are still working through them.\n\nA new bowl went out to your address yesterday by express courier and should be with you inside two business days. Neither the bowl nor the delivery will appear on your bill. There is no need to send the broken one back to us — please put it out with your household glass.\n\nBy way of apology, a $20 voucher is now attached to your online account. It may be applied to any order that comes to more than $50, and it stays valid until December 31.\n\nWe hope the KM-200 gives you many years of good service.\n\nSincerely,\nDouglas Reid\nCustomer Relations, Bexley Kitchenware"
      }
    ],
    translation: "コワルスキ様\n\n2月に当社ウェブサイトでお買い上げいただいたスタンドミキサー(KM-200)について、3月3日付のお手紙をありがとうございました。ミキシングボウルにひびが入った状態で届いたこと、またご返信が大変遅くなったことをお詫びいたします。この冬は通常よりはるかに多くの手紙と電話をいただき、現在も対応を進めているところです。\n\n新しいボウルは昨日、速達便でご住所宛てに発送しました。2営業日以内に届く見込みです。ボウル代も送料も請求には計上されません。割れたボウルの返送は不要です——家庭用のガラスごみとしてお出しください。\n\nお詫びとして、20ドルのクーポンをオンラインアカウントに付与しました。合計50ドルを超えるご注文に利用でき、12月31日まで有効です。\n\nKM-200 を長くご愛用いただけますと幸いです。\n\n敬具\nダグラス・リード\nベクスリー・キッチンウェア カスタマーリレーションズ",
    questions: [
      {
        q: "Why did Mr. Reid write the letter?",
        choices: [
          "To respond to a customer who reported a problem",
          "To confirm that an order has been canceled",
          "To ask a customer to review a product",
          "To announce a new model of mixer"
        ],
        answer: 0,
        explanation: "破損したボウルを知らせた3月3日付の手紙への返信で、謝罪と対応(交換品の発送・クーポン)を伝えている。"
      },
      {
        q: "What is suggested about Bexley Kitchenware?",
        choices: [
          "It has stopped selling the KM-200.",
          "It charges customers for return shipping.",
          "It received Ms. Kowalski's letter in February.",
          "It has been busier than usual in recent months."
        ],
        answer: 3,
        explanation: "推論問題。返信が遅れた理由として『この冬は通常よりはるかに多くの手紙と電話が来た』とあるので、平常より忙しい状態が続いていると分かる。(C)は本文の February をそのまま含むが、2月は購入時期で、手紙は3月3日付。"
      },
      {
        q: "What is Ms. Kowalski told to do with the damaged bowl?",
        choices: [
          "Send it back by express courier",
          "Bring it to a nearby store",
          "Throw it away with her glass waste",
          "Keep it until a technician calls"
        ],
        answer: 2,
        explanation: "put it out with your household glass(家庭のガラスごみとして出す)の言い換え。(A)は本文の express courier をそのまま含むひっかけで、これは交換品の発送方法。返送は不要と明記されている。"
      },
      {
        q: "What is true about the voucher?",
        choices: [
          "It will expire at the end of March.",
          "It applies only to orders above a certain amount.",
          "It may be used on any order.",
          "It will be mailed to Ms. Kowalski's home."
        ],
        answer: 1,
        explanation: "any order that comes to more than $50(50ドルを超える注文)という下限がある。(C)は本文の any order だけを見た読み手を誘う典型的なひっかけで、条件を落としている。有効期限は12月31日なので(A)も誤り。"
      }
    ]
  },
  {
    id: "p7-10",
    title: "シングル 9(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "PETAL & STEM FLOWER STUDIO — Now Open on Willow Lane\n\nBouquets cut the same morning, arrangements for weddings, and standing weekly orders for offices.\n\nTo mark our opening, through July 31:\n1. Orders above $40 are delivered anywhere in the city at no charge\n2. The first month of a weekly office order is 20 percent off\n3. Any bouquet above $60 comes with a glass vase, free\n\nOrder at petalandstem.com, or come in Tuesday through Sunday, 9 A.M. to 7 P.M. We are closed Mondays.\n\nOur workshop, \"Basics of Flower Arranging,\" meets on the first Saturday of each month. The fee is $35 and covers everything you use in class. We all work around a single table, so only ten people can be seated; please book your place online."
      }
    ],
    translation: "ペタル&ステム・フラワースタジオ——ウィローレーンに新規オープン\n\nその朝に切ったブーケ、ウェディング用アレンジメント、オフィス向けの週次定期便。\n\nオープン記念(7月31日まで):\n1. 40ドルを超えるご注文は市内どこでも配送無料\n2. オフィス向け週次定期便の初月は20パーセント引き\n3. 60ドルを超えるブーケにはガラスの花瓶を無料で\n\nご注文は petalandstem.com から。店舗は火曜〜日曜の午前9時〜午後7時、月曜定休です。\n\nワークショップ『フラワーアレンジの基礎』は毎月第1土曜日に開催。参加費35ドルで、教室で使うものはすべて含まれます。1つのテーブルを囲んで作業するため、席は10名分のみです。オンラインでご予約ください。",
    questions: [
      {
        q: "What is NOT part of the opening promotion?",
        choices: [
          "Free delivery within the city on larger orders",
          "A reduced price on a weekly office order",
          "A gift with an expensive bouquet",
          "A class offered at no charge"
        ],
        answer: 3,
        explanation: "NOT問題。特典は配送無料・定期便初月20パーセント引き・花瓶プレゼントの3つ。ワークショップは35ドルの有料なので(D)が正解。"
      },
      {
        q: "A customer in the city orders a $55 bouquet for delivery on July 20. What will the customer receive?",
        choices: [
          "A free glass vase",
          "Delivery at no cost",
          "Twenty percent off the price",
          "A place in the workshop"
        ],
        answer: 1,
        explanation: "条件の突き合わせ問題。55ドルは『40ドル超』を満たすので配送無料が適用される。一方『60ドル超』には届かないため花瓶は付かない。(A)は本文の glass vase をそのまま含むひっかけ。20パーセント引きは定期便の初月のみ。"
      },
      {
        q: "What is indicated about the workshops?",
        choices: [
          "They are held every Saturday.",
          "They are open only to office customers.",
          "The number of places is limited.",
          "They take place on Monday evenings."
        ],
        answer: 2,
        explanation: "only ten people can be seated(席は10名分のみ)が根拠。開催は毎月第1土曜なので(A)は誤り。(D)は本文の Mondays をそのまま含むが、月曜は定休日。"
      }
    ]
  },
  {
    id: "p7-11",
    title: "シングル 10(社内メモ)",
    passages: [
      {
        docType: "Memo",
        text: "MEMO\nTo: All Sales Staff\nFrom: Rita Chandler, Sales Director\nDate: November 3\nRe: Quarterly review meetings\n\nI will meet each of you individually about the fourth quarter between November 17 and November 21. The sheet on the notice board shows the times still open; put your name against one of them no later than November 10.\n\nBefore we meet, fill in the self-evaluation form on the HR portal and bring a paper copy with you. The form now ends with a set of questions about the training you would like to do next year. Please take your time over that part: what you write there is what I will use when I argue for the department's training budget in January.\n\nIf a client visit takes you out of the office that week, send me a note and we will hold the meeting by video instead.\n\nRita"
      }
    ],
    translation: "メモ\n宛先:営業部全員\n差出人:リタ・チャンドラー(営業部長)\n日付:11月3日\n件名:四半期面談\n\n第4四半期について、11月17日から21日の間に一人ずつ面談します。掲示板のシートに空いている時間が出ているので、11月10日までに自分の名前を書き込んでください。\n\n面談前に、HRポータルの自己評価フォームに記入し、紙に印刷して持参してください。フォームの末尾には、来年受けたい研修についての設問が新たに加わっています。ここは時間をかけて書いてください。皆さんの回答を、1月に部の研修予算を求める際の材料にします。\n\n面談週にクライアント訪問で外出する人は連絡をください。ビデオ通話で行います。\n\nリタ",
    questions: [
      {
        q: "What are staff members asked to do by November 10?",
        choices: [
          "Finish a training course",
          "Choose a time to meet Ms. Chandler",
          "Submit a request for next year's budget",
          "Print a list of their clients"
        ],
        answer: 1,
        explanation: "put your name against one of them no later than November 10(11月10日までに空き時間に名前を書く)が根拠。面談の時間を選ぶこと。(A)は本文の training をそのまま含むひっかけ。"
      },
      {
        q: "What are staff members NOT asked to do before their meeting?",
        choices: [
          "Complete a form on the HR portal",
          "Bring a printed copy of the form",
          "Answer questions about next year's training",
          "Report their sales totals for the quarter"
        ],
        answer: 3,
        explanation: "NOT問題。フォームの記入、紙の持参、研修についての設問への回答はすべて指示されているが、売上数値の報告は求められていない。"
      },
      {
        q: "Why does Ms. Chandler ask staff to take care with the new part of the form?",
        choices: [
          "Their answers will affect how money is divided up.",
          "The answers must be approved by the HR portal.",
          "That part has to be completed by November 10.",
          "It will decide who receives a promotion."
        ],
        answer: 0,
        explanation: "what you write there is what I will use when I argue for the department's training budget(研修予算を求める材料にする)が根拠。予算=お金の配分に影響する。(C)は本文の November 10 をそのまま含むが、その日付は面談枠の選択期限。"
      }
    ]
  },
  {
    id: "p7-04",
    title: "ダブル 1(お知らせ+Eメール)",
    passages: [
      {
        docType: "Notice",
        text: "HARTLEY CONVENTION CENTER — Exhibitor Information\nTech Forward Expo, November 8–9\n\nBooth setup: Friday, November 7, 1 P.M. to 8 P.M. The exhibition floor stays locked until 1 P.M., and no exhibitor may enter before that hour.\nOpen to the public: 9 A.M. to 5 P.M. on both days.\n\nBooth packages:\n1. Standard Booth ($400) — 3m x 3m, one table, two chairs\n2. Premium Booth ($700) — 3m x 6m, two tables, four chairs, at the end of a row\n3. Compact Booth ($250) — 2m x 2m, one table, two chairs; offered only to firms that have been trading for less than three years\n\nPower and wireless access come with every package.\n\nRental equipment for the two days of the expo: flat-screen monitor $120, extra table $40, lighting kit $60. Orders for rental equipment close on October 24. Anything ordered after that date will still be supplied, but its rental price rises by 15 percent.\n\nWe hold a booth for ten days from the date of your reservation; payment must reach us within that period."
      },
      {
        docType: "E-mail",
        text: "From: Daniel Reyes, Nova Robotics\nTo: exhibitors@hartleycc.com\nSubject: Tech Forward Expo — reservation TF-2231\nDate: October 28\n\nTo whom it may concern,\n\nWe have taken the smallest and least expensive of your three packages, which we were eligible for because our company opened its doors just two years ago. Payment was sent last week.\n\nI would now like to add one flat-screen monitor so that we can run our product film on a loop. I realize the request is reaching you after your cutoff, and we are willing to pay whatever difference that makes.\n\nOne further question. Our team lands in Hartley at 10 A.M. on the Friday and would rather not sit in a hotel all afternoon, so we would like to begin putting our booth together in the late morning. Is that possible?\n\nThank you,\nDaniel Reyes\nNova Robotics"
      }
    ],
    translation: "【お知らせ】ハートレー・コンベンションセンター——出展者向け案内\nテック・フォワード・エキスポ 11月8〜9日\n\nブース設営:11月7日(金)午後1時〜8時。展示フロアは午後1時まで施錠され、それ以前に出展者は入場できません。\n一般公開:両日とも午前9時〜午後5時。\n\nブースパッケージ:\n1. スタンダードブース(400ドル)——3m×3m、テーブル1、椅子2\n2. プレミアムブース(700ドル)——3m×6m、テーブル2、椅子4、列の端に配置\n3. コンパクトブース(250ドル)——2m×2m、テーブル1、椅子2。営業年数3年未満の企業のみ利用可\n\n電源と無線接続はすべてのパッケージに付属します。\n\n会期2日分のレンタル機材:薄型モニター120ドル、追加テーブル40ドル、照明キット60ドル。レンタル機材の申込は10月24日で締め切ります。それ以降の申込も受け付けますが、レンタル料金が15パーセント上がります。\n\nブースは予約日から10日間お取り置きします。その期間内にお支払いください。\n\n【Eメール】\n差出人:ダニエル・レイエス(ノヴァ・ロボティクス)\n宛先:exhibitors@hartleycc.com\n件名:テック・フォワード・エキスポ——予約 TF-2231\n日付:10月28日\n\nご担当者様\n\n3つのパッケージのうち、最も小さく最も安いものを選びました。当社は2年前に創業したので、これを利用する資格がありました。支払いは先週送金済みです。\n\nここで薄型モニターを1台追加したいと思います。製品紹介の映像を繰り返し流すためです。締切を過ぎての依頼であることは承知しており、差額はお支払いします。\n\nもう1点。当社チームは金曜午前10時にハートレーに到着します。午後までホテルで待つのは避けたいので、午前中の遅い時間からブースの設営を始めたいのですが、可能でしょうか。\n\nよろしくお願いします。\nダニエル・レイエス\nノヴァ・ロボティクス",
    questions: [
      {
        q: "What is suggested about the space Nova Robotics has reserved?",
        choices: [
          "It measures two meters on each side.",
          "It is placed at the end of a row.",
          "It comes with two tables.",
          "It costs $400."
        ],
        answer: 0,
        explanation: "文書の突き合わせ。メールの『最も小さく最も安いパッケージ』『創業2年』は、お知らせの『営業年数3年未満の企業のみ』という条件付きの250ドルのブースに対応する。そのサイズは2m×2m。(B)(C)はプレミアム、(D)はスタンダードの内容で、いずれも本文の語をそのまま使ったひっかけ。"
      },
      {
        q: "How much will Nova Robotics most likely be charged for the monitor?",
        choices: ["$120", "$135", "$138", "$180"],
        answer: 2,
        explanation: "計算型の突き合わせ問題。お知らせのモニター料金は120ドル、申込期限は10月24日。メールの日付は10月28日で期限後なので15パーセント増しとなり、120×1.15=138ドル。(A)は増額を忘れた場合の値。"
      },
      {
        q: "What will Mr. Reyes most likely be told about setting up?",
        choices: [
          "His team may start as soon as it arrives.",
          "The hall cannot be entered before the afternoon.",
          "Setup must be finished by 9 A.M. on Friday.",
          "He should allow extra time on both days."
        ],
        answer: 1,
        explanation: "文書の突き合わせ。メールは『金曜の午前中から設営したい』と尋ねているが、お知らせは『展示フロアは午後1時まで施錠、それ以前は入場不可』。よって午後まで入れないと伝えられる。(C)の9 A.M.は一般公開の開始時刻。"
      },
      {
        q: "In the notice, the word \"hold\" in the last paragraph is closest in meaning to",
        choices: ["carry", "contain", "organize", "keep"],
        answer: 3,
        explanation: "語彙問題。基本語の多義。hold a booth for ten days は『10日間確保しておく』で(D)が正解。『運ぶ』(A)、『収容する』(B)、hold an event の『開催する』(C)はここでは合わない。"
      },
      {
        q: "What is true of every booth package?",
        choices: [
          "Each includes four chairs.",
          "Each provides electricity and an Internet connection.",
          "Each may be ordered after October 24.",
          "Each is located on the same aisle."
        ],
        answer: 1,
        explanation: "Power and wireless access come with every package の言い換えが(B)。(A)は本文の four chairs をそのまま含むが、これはプレミアムのみ。10月24日はレンタル機材の締切であってブース申込の話ではない。"
      }
    ]
  },
  {
    id: "p7-12",
    title: "ダブル 2(求人広告+Eメール)",
    passages: [
      {
        docType: "Advertisement",
        text: "ASSISTANT STORE MANAGER — Fenwick Books, Milton branch\n\nFenwick Books runs twelve shops across the region. We are looking for a full-time assistant manager for the Milton branch.\n\nThe work: overseeing eight sales associates, keeping stock at the right level, and arranging visits by writers.\n\nWe ask for:\n1. Three years or more behind a shop counter (time spent in a bookshop is a plus, not a must)\n2. Willingness to work Saturdays and Sundays\n3. Confidence with spreadsheets\n\nWe offer health insurance, 25 percent off anything in the shop, and two paid weeks of training at our head office in Grandville.\n\nSend a résumé and a cover letter to careers@fenwickbooks.com by April 15. Interviews take place in the last week of April.\n\nApplications that reach us after April 15 will not be read for Milton, but they will be passed to our Riverton branch, which takes on staff all year round."
      },
      {
        docType: "E-mail",
        text: "From: Joanna Pruitt\nTo: careers@fenwickbooks.com\nSubject: Assistant manager — Milton\nDate: April 18\n\nTo Whom It May Concern,\n\nI would like to be considered for the assistant manager's job at your Milton shop. Your notice appeared in the Milton Gazette only yesterday, which is why you are hearing from me now.\n\nFor the past five years I have been a shift supervisor at Hartley Stationery. Six people report to me, and every Monday I issue the restocking orders for the whole shop, so I am used to judging what sells and what sits on the shelf. Weekends have always been part of my schedule, and I build the sales spreadsheet our owner reviews each month.\n\nI have never worked among books professionally, though I have run a reading group at the community center for three years.\n\nMy résumé and cover letter are attached.\n\nSincerely,\nJoanna Pruitt"
      }
    ],
    translation: "【求人広告】アシスタントストアマネージャー——フェンウィック・ブックス ミルトン店\n\nフェンウィック・ブックスは地域に12店舗を展開しています。ミルトン店の常勤アシスタントマネージャーを募集します。\n\n業務内容:販売スタッフ8名の統括、在庫水準の維持、作家の来店イベントの手配。\n\n応募条件:\n1. 店頭での勤務経験3年以上(書店経験は歓迎だが必須ではない)\n2. 土日勤務が可能なこと\n3. 表計算ソフトを問題なく使えること\n\n待遇:健康保険、店内商品25パーセント引き、グランドビル本社での有給研修2週間。\n\n履歴書とカバーレターを4月15日までに careers@fenwickbooks.com へ。面接は4月最終週です。\n\n4月15日以降に届いた応募書類はミルトン店の選考対象になりませんが、通年で採用しているリバートン店に回されます。\n\n【Eメール】\n差出人:ジョアンナ・プルイット\n宛先:careers@fenwickbooks.com\n件名:アシスタントマネージャー——ミルトン\n日付:4月18日\n\nご担当者様\n\nミルトン店のアシスタントマネージャー職に応募いたします。御社の告知をミルトン・ガゼット紙で見たのが昨日で、そのためご連絡が今になりました。\n\nこの5年間、ハートレー文具でシフトスーパーバイザーを務めています。部下は6名で、毎週月曜に店全体の補充発注を出しており、何が売れて何が棚に残るかを見る目は養われました。週末勤務はこれまでも当然のように行ってきましたし、オーナーが毎月確認する売上の表計算シートも私が作成しています。\n\n書店で働いた経験はありませんが、コミュニティセンターで3年間、読書会を運営しています。\n\n履歴書とカバーレターを添付します。\n\n敬具\nジョアンナ・プルイット",
    questions: [
      {
        q: "What is indicated about Fenwick Books?",
        choices: [
          "It has shops in more than one town.",
          "It opened its Milton branch three years ago.",
          "It sells only fiction.",
          "It employs eight people in total."
        ],
        answer: 0,
        explanation: "runs twelve shops across the region(地域に12店舗)の言い換えが(A)。(D)は本文の eight をそのまま含むひっかけで、8名はミルトン店の販売スタッフの人数。"
      },
      {
        q: "What will most likely happen to Ms. Pruitt's application?",
        choices: [
          "It will be returned to her unopened.",
          "It will be held until next year.",
          "It will be sent on to a different branch.",
          "It will be read in the last week of April."
        ],
        answer: 2,
        explanation: "文書の突き合わせ。広告の締切は4月15日、メールの日付は4月18日。広告末尾の『締切後に届いた書類はミルトン店では読まれず、通年採用の別店舗に回される』という規定に当てはまる。(D)は本文の last week of April をそのまま含むが、これは面接の時期。"
      },
      {
        q: "What is suggested about Ms. Pruitt?",
        choices: [
          "She has worked in a bookshop.",
          "She has more experience than the position requires.",
          "She supervises eight employees.",
          "She lives near the head office in Grandville."
        ],
        answer: 1,
        explanation: "文書の突き合わせ。広告の条件は『店頭勤務3年以上』、メールでは文具店で5年勤務。よって必要年数を上回る。(A)(C)はどちらも広告の語をそのまま使ったひっかけで、書店経験はなく、部下は6名。"
      },
      {
        q: "Which of the duties listed in the advertisement has Ms. Pruitt already performed?",
        choices: [
          "Bringing authors into a shop",
          "Leading a team of eight",
          "Training new staff at a head office",
          "Deciding when goods need to be reordered"
        ],
        answer: 3,
        explanation: "文書の突き合わせ。広告の業務『在庫水準の維持』に対応するのが、メールの『毎週月曜に店全体の補充発注を出している』という経験。(A)は読書会の運営とは別物、(B)は部下6名なので誤り。"
      },
      {
        q: "In the e-mail, the word \"issue\" in paragraph 2 is closest in meaning to",
        choices: ["send out", "publish", "raise", "resolve"],
        answer: 0,
        explanation: "語彙問題。基本語の多義。issue the restocking orders は『発注を出す』で(A)が正解。『出版する』(B)、issue を『問題』と結びつけた(C)(D)はこの文脈に合わない。"
      }
    ]
  },
  {
    id: "p7-13",
    title: "トリプル 1(旅程表+Eメール+Eメール)",
    passages: [
      {
        docType: "Itinerary",
        text: "HORIZON TRAVEL — Prepared for Mr. Alan Whitfield\n\nSeptember 8 — Flight HT 22, Seattle to Toronto, leaves 8:10 A.M., arrives 3:55 P.M.\nSeptember 8 to 11 — Maple Court Hotel, downtown Toronto, three nights at $180 a night, breakfast included each morning\nSeptember 11 — Flight HT 65, Toronto to Seattle, leaves 6:20 P.M.\n\nConditions of your fare:\n- Your ticket may be exchanged at no charge if your instructions reach us more than 72 hours before the outbound flight leaves. After that point, an exchange costs $75.\n- Any night added once the trip has begun is billed at the rate the hotel quotes on the day, which may differ from the rate shown above.\n- Charges for the month are collected on a single invoice at the start of October."
      },
      {
        docType: "E-mail 1",
        text: "From: Alan Whitfield\nTo: Renata Silva, Horizon Travel\nDate: September 9\n\nHi Renata,\n\nThe client has pushed our final meeting to the morning of the twelfth, so the eleventh no longer works for me. Could you move my flight home to the twelfth and keep my room for one more night?\n\nIf there is a choice of flights, put me on something late in the day again. The team here wants to take me to lunch before I head to the airport.\n\nThanks,\nAlan"
      },
      {
        docType: "E-mail 2",
        text: "From: Renata Silva, Horizon Travel\nTo: Alan Whitfield\nDate: September 9\n\nDear Mr. Whitfield,\n\nYou are now on Flight HT 67, which leaves Toronto at 7:05 P.M. on the twelfth.\n\nThe room was harder. A medical convention has taken every downtown room for the night of the eleventh, so I could not keep you where you are. I have booked you into the Bayside Inn, a five-minute walk from your present hotel, for that one night; they are charging $150, and no meal is included there. Check out after breakfast on the eleventh and the desk will look after your bags until the evening.\n\nOne more thing: because your instructions reached me after your outbound flight had already left, the exchange charge set out in your fare conditions applies. It will appear, together with the room, on the invoice you receive next month.\n\nSafe travels,\nRenata"
      }
    ],
    translation: "【旅程表】ホライズン・トラベル——アラン・ウィットフィールド様用\n9月8日:HT22便 シアトル→トロント(8:10発、15:55着)\n9月8日〜11日:メープルコート・ホテル(トロント中心部、1泊180ドルで3泊、毎朝の朝食付き)\n9月11日:HT65便 トロント→シアトル(18:20発)\n運賃の条件:\n・往路便の出発の72時間以上前にご連絡いただければ、航空券の変更は無料です。それ以降の変更は75ドルかかります。\n・旅行開始後に追加した宿泊は、その日にホテルが提示する料金での請求となり、上記の料金と異なる場合があります。\n・当月分の料金は10月初めに1通の請求書でまとめて精算します。\n\n【Eメール1】(9月9日、ウィットフィールド→レナータ)\nこんにちは、レナータ。クライアントが最終打ち合わせを12日の午前に動かしたので、11日では都合が合わなくなりました。帰りの便を12日に変更し、部屋を1泊延ばしてもらえますか。便に選択肢があるなら、また一日の遅い時間のものにしてください。こちらのチームが、空港へ向かう前に昼食に連れて行きたいと言っているので。\n\n【Eメール2】(9月9日、レナータ→ウィットフィールド)\nウィットフィールド様。HT67便に変更しました。12日19:05トロント発です。部屋の方は難航しました。11日の夜は医学系の大会で中心部の部屋が満室となり、今のホテルには泊まれませんでした。現在のホテルから徒歩5分のベイサイド・インをその1泊だけ押さえています。料金は150ドルで、食事は付きません。11日は朝食後にチェックアウトしてください。夕方までフロントで荷物を預かってくれます。もう1点、往路便の出発後にご連絡をいただいたため、運賃条件にある変更手数料が適用されます。宿泊分と合わせて翌月の請求書に計上されます。良いご旅行を。レナータ",
    questions: [
      {
        q: "What is included in the price of the Maple Court Hotel?",
        choices: [
          "Transportation to the airport",
          "Use of a meeting room",
          "A daily newspaper",
          "A meal in the morning"
        ],
        answer: 3,
        explanation: "旅程表の breakfast included each morning(毎朝の朝食付き)の言い換えが(D)。空港送迎や会議室の記載はない。"
      },
      {
        q: "Why did Mr. Whitfield write to Ms. Silva?",
        choices: [
          "An appointment with a client was moved to a later day.",
          "His flight home had been canceled by the airline.",
          "He wanted to return to Seattle sooner than planned.",
          "He was unhappy with the hotel he had been given."
        ],
        answer: 0,
        explanation: "Eメール1の『クライアントが最終打ち合わせを12日の午前に動かした』が変更依頼の理由。彼は早く帰るのではなく1日遅らせているので(C)は逆。"
      },
      {
        q: "What is the total of the extra charges that will appear on Mr. Whitfield's invoice?",
        choices: ["$150", "$180", "$225", "$255"],
        answer: 2,
        explanation: "計算型の突き合わせ問題。旅程表の『出発72時間前を過ぎた変更は75ドル』とEメール2の『変更手数料が適用される』、さらにEメール2の追加1泊150ドルを足して225ドル。(D)は旅程表の180ドルという元のホテル料金を使ってしまった場合の値。"
      },
      {
        q: "Where will Mr. Whitfield most likely spend the night of September 11?",
        choices: [
          "At the Maple Court Hotel",
          "At a hotel a short distance away",
          "At a hotel next to the airport",
          "On board Flight HT 67"
        ],
        answer: 1,
        explanation: "3つ目の文書を読まないと決まらない設問。Eメール1では『今の部屋を1泊延長してほしい』と依頼しているが、Eメール2で中心部が満室のため延長できず、徒歩5分のベイサイド・インに変更されたと分かる。(A)は旅程表とメール1だけを読んだ人が選びやすいひっかけ。"
      },
      {
        q: "What is indicated about Flight HT 67?",
        choices: [
          "It arrives in Seattle at 3:55 P.M.",
          "It leaves at the time of day Mr. Whitfield asked for.",
          "It costs less than his original ticket.",
          "It departs from a different airport."
        ],
        answer: 1,
        explanation: "文書の突き合わせ。Eメール1の『一日の遅い時間の便がいい』という希望に対し、Eメール2で19:05発の便が手配されている。(A)は旅程表の到着時刻をそのまま使ったひっかけで、これは往路便の情報。"
      }
    ]
  },
  {
    id: "p7-14",
    title: "トリプル 2(注文確認+Eメール+Eメール)",
    passages: [
      {
        docType: "Order confirmation",
        text: "LUMEN OFFICE DIRECT — Order #55201\nPlaced July 2 by Ms. Dana Merritt\n\n1. LED desk lamp, white — 2 at $35 — $70\n2. Monitor stand — 1 at $45 — $45\n3. Footrest, model FR-3 — 1 at $30 — $30\nStandard shipping (5 to 7 business days) — no charge\nCharged to the card ending 4417 — $145\n\nStock permitting, items travel separately. Expected with you: lamps and stand, July 8; footrest, July 15.\n\nIf what arrives is not what you ordered, write to us within five business days of delivery and the correct item is sent free of charge. Reports made later than that carry a $10 handling fee."
      },
      {
        docType: "E-mail 1",
        text: "From: Dana Merritt\nTo: support@lumenoffice.com\nDate: July 10\n\nHello,\n\nThe stand and the two lamps from order #55201 were on my desk when I came in on July 8. Unfortunately only one of the lamps is the color I chose; the other is black.\n\nA photographer is coming on July 16 to shoot our floor for the company brochure, and the two lamps stand side by side in the picture, so I need the matching one before then. Could you also tell me whether the last item is still on track?\n\nThank you,\nDana Merritt"
      },
      {
        docType: "E-mail 2",
        text: "From: Customer Support, Lumen Office Direct\nTo: Dana Merritt\nDate: July 10\n\nDear Ms. Merritt,\n\nWe are sorry for the mix-up. A white lamp went out this afternoon by overnight courier and will reach you on July 12, and you will see nothing for it on your account. Keep the black one — sending it back would cost you time you do not have.\n\nThe FR-3 is no longer made. Rather than leave you waiting, we have sent the FR-9, the model that took its place on our shelves at $45, and we are not asking you to make up the difference. It left the warehouse this morning and should arrive on the eleventh.\n\nWe have also put 10 percent of what you paid back on your card.\n\nSincerely,\nLumen Office Direct Customer Support"
      }
    ],
    translation: "【注文確認】ルーメン・オフィス・ダイレクト——注文 #55201(7月2日、ダナ・メリット様)\n1. LEDデスクランプ(白)2点 各35ドル=70ドル\n2. モニタースタンド 1点 45ドル\n3. フットレスト FR-3 1点 30ドル\n通常配送(5〜7営業日)無料/末尾4417のカードに145ドル請求\n在庫の都合により商品は別々に発送されます。お届け予定:ランプとスタンド=7月8日、フットレスト=7月15日。\n届いた品が注文と異なる場合、配達から5営業日以内にご連絡いただければ正しい品を無料でお送りします。それ以降のご連絡には10ドルの手数料がかかります。\n\n【Eメール1】(7月10日、メリット→サポート)\nこんにちは。注文#55201のスタンドとランプ2点は、7月8日に出社したとき机の上にありました。ただ、ランプは1点しか指定した色ではなく、もう1点は黒でした。7月16日に会社パンフレット用の撮影でカメラマンが来る予定で、写真では2つのランプが並びます。そのため、それまでに同じ色のものが必要です。最後の1点は予定通りか教えていただけますか。\n\n【Eメール2】(7月10日、サポート→メリット)\nメリット様。手違いをお詫びします。白いランプを本日午後、翌日配達便で発送しました。7月12日に届き、費用のご負担はありません。黒い方はそのままお使いください。返送はお手間になりますので不要です。FR-3 はすでに製造終了です。お待たせするより良いと考え、店頭で後継となった45ドルの FR-9 を発送しました。差額はいただきません。今朝倉庫を出ましたので、11日には届く見込みです。またお支払額の10パーセントをカードに返金しました。",
    questions: [
      {
        q: "What is indicated about order #55201?",
        choices: [
          "Its contents were not shipped together.",
          "It was delivered by overnight courier.",
          "It was paid for in cash.",
          "It included a discount for large orders."
        ],
        answer: 0,
        explanation: "注文確認の items travel separately と、届け先到着日が2つに分かれている点が根拠。(B)は3つ目の文書の overnight courier をそのまま含むひっかけで、これは交換品の発送方法。支払いはカードなので(C)も誤り。"
      },
      {
        q: "Why does Ms. Merritt need the second lamp before July 16?",
        choices: [
          "A company brochure will be printed on that date.",
          "Her workplace will be photographed that day.",
          "She is moving to a different office.",
          "A sale ends on that day."
        ],
        answer: 1,
        explanation: "Eメール1の『7月16日にパンフレット用の撮影でカメラマンが来る』が根拠。(A)は本文の company brochure をそのまま含むが、その日に行われるのは印刷ではなく撮影。"
      },
      {
        q: "Why will Ms. Merritt not be charged for the second white lamp?",
        choices: [
          "She paid for express shipping when she ordered.",
          "She agreed to keep the black lamp.",
          "The white lamp was the last one in stock.",
          "She reported the problem within the period allowed."
        ],
        answer: 3,
        explanation: "文書の突き合わせ。注文確認の規定は『配達から5営業日以内に連絡すれば無料交換』。Eメール1によれば受け取りは7月8日、連絡は7月10日で規定内。(A)は配送が無料の通常便だったので誤り。"
      },
      {
        q: "What is suggested about the FR-9?",
        choices: [
          "It is the same model Ms. Merritt ordered.",
          "It will arrive on July 15 as first estimated.",
          "It normally sells for more than the item she paid for.",
          "Ms. Merritt will be billed for the difference."
        ],
        answer: 2,
        explanation: "3つ目の文書で初めて判明する事情を使う問題。注文確認の FR-3 は30ドル、Eメール2の FR-9 は45ドルなので、通常価格は高い。差額は請求されないので(D)は誤り。(B)は注文確認の July 15 をそのまま含むが、Eメール2では11日到着予定に早まっている。"
      },
      {
        q: "How much money will be returned to Ms. Merritt?",
        choices: ["$3.00", "$4.50", "$14.50", "$30.00"],
        answer: 2,
        explanation: "計算型の突き合わせ問題。注文確認の請求額145ドルと、Eメール2の『お支払額の10パーセントを返金』を組み合わせて14.50ドル。(A)はランプ1点の価格の10パーセント、(D)はフットレストの価格でひっかけ。"
      }
    ]
  },
  {
    id: "p7-15",
    title: "トリプル 3(講座一覧+Eメール+Eメール)",
    passages: [
      {
        docType: "Schedule",
        text: "BRIGHTPATH BUSINESS SEMINARS — October series\nAll sessions meet in Room 2 of the Community Hall. Register at brightpath.com.\n\n1. October 4 — Social Media Basics — 9 A.M. to noon — $40\n2. October 11 — Writing Effective Proposals — 9 A.M. to noon — $40\n3. October 18 — Negotiation Skills — 1 P.M. to 5 P.M. — $60\n4. October 25 — Presentation Design — 9 A.M. to noon — $40\n\nBook three sessions or more and 20 percent comes off the total. The fee covers the workbook you take home and refreshments during the break. Room 2 seats 25; once a session fills, later applicants go on a waiting list."
      },
      {
        docType: "E-mail 1",
        text: "From: Marcus Bell\nTo: info@brightpath.com\nDate: September 20\n\nHello,\n\nPlease sign me up for three of your October sessions: the one on proposals, the one on negotiating, and the one on designing slides.\n\nTwo questions. First, I believe a reduction applies when three are booked together — could you confirm what I owe? Second, my company holds its autumn meeting on the morning of October 25 and everyone is expected to be in the room.\n\nAnd is there anywhere near the hall to leave a car?\n\nBest regards,\nMarcus Bell"
      },
      {
        docType: "E-mail 2",
        text: "From: Brightpath Seminars\nTo: Marcus Bell\nDate: September 21\n\nDear Mr. Bell,\n\nThree sessions are now reserved in your name, and the reduction you mention has been applied: your total comes to $112, payable on the first morning you attend.\n\nOur morning sessions end at twelve o'clock exactly, so the company meeting you describe would keep you away from one of the three. If that is how it turns out, the same session runs again in November and we will move you across at no extra cost; simply tell us by October 20.\n\nPlease also note a change for the eighteenth. Room 2 is being repainted that week, so that session alone will meet in the Riverside Room of the public library, one block north. The starting time is unchanged.\n\nThe hall's own parking is small. The public garage on Elm Street, two minutes away on foot, charges $5 for the day.\n\nBrightpath Seminars"
      }
    ],
    translation: "【講座一覧】ブライトパス・ビジネスセミナー——10月シリーズ\n全講座はコミュニティホール2号室で開催。申込は brightpath.com。\n1. 10月4日 SNSの基礎 9時〜正午 40ドル\n2. 10月11日 効果的な提案書の書き方 9時〜正午 40ドル\n3. 10月18日 交渉術 13時〜17時 60ドル\n4. 10月25日 プレゼン資料のデザイン 9時〜正午 40ドル\n3講座以上のお申込で合計から20パーセント引き。受講料には持ち帰り用のワークブックと休憩時の軽食が含まれます。2号室の定員は25名で、満席後の申込はキャンセル待ちとなります。\n\n【Eメール1】(9月20日、ベル→ブライトパス)\nこんにちは。10月の講座のうち3つ、提案書のもの、交渉のもの、スライド作成のものに申し込みます。2点質問です。まず、3講座同時申込で割引があると思いますが、支払額を教えてください。次に、当社は10月25日の午前に秋の全社会議があり、全員出席することになっています。それと、ホールの近くに車を停められる場所はありますか。\n\n【Eメール2】(9月21日、ブライトパス→ベル)\nベル様。3講座をお名前で確保し、ご指摘の割引も適用しました。合計は112ドルで、最初にご出席の朝にお支払いください。当校の午前の講座は12時ちょうどに終わりますので、お書きの全社会議があると3つのうち1つには出られないことになります。そうなった場合、同じ講座を11月にも開催しますので、追加費用なしで振り替えます。10月20日までにお知らせください。18日についてもご注意ください。その週は2号室を塗り替えるため、この回だけ1ブロック北にある公共図書館のリバーサイド・ルームで行います。開始時刻は変わりません。ホール自体の駐車場は狭いです。徒歩2分のエルム通りの公共駐車場は1日5ドルです。",
    questions: [
      {
        q: "What is included in the fee for a session?",
        choices: [
          "A book of course materials",
          "Lunch at the Community Hall",
          "Parking at the Elm Street garage",
          "A recording of the session"
        ],
        answer: 0,
        explanation: "講座一覧の the workbook you take home(持ち帰り用のワークブック)の言い換えが(A)。(C)は3つ目の文書の Elm Street をそのまま含むひっかけで、駐車場は1日5ドルの有料。"
      },
      {
        q: "Which session will Mr. Bell most likely be unable to attend?",
        choices: [
          "Social Media Basics",
          "Writing Effective Proposals",
          "Negotiation Skills",
          "Presentation Design"
        ],
        answer: 3,
        explanation: "文書の突き合わせ。Eメール1の『10月25日の午前は全社会議』と、講座一覧の『10月25日=プレゼン資料のデザイン(9時〜正午)』を照合する。Eメール2も『午前の講座は12時ちょうどに終わる』として重ならないことを裏づけている。"
      },
      {
        q: "How much does Mr. Bell owe?",
        choices: ["$112", "$126", "$140", "$160"],
        answer: 0,
        explanation: "計算型の突き合わせ問題。申し込んだ3講座は40ドル+60ドル+40ドル=140ドル。3講座以上で20パーセント引きなので112ドル。(C)は割引前の金額でひっかけ。"
      },
      {
        q: "What is different about the session on October 18?",
        choices: [
          "It will start at nine in the morning.",
          "It will be held in another building.",
          "It will meet in Room 2 of the Community Hall.",
          "It has been canceled."
        ],
        answer: 1,
        explanation: "3つ目の文書を読まないと決まらない設問。講座一覧では全講座がコミュニティホール2号室だが、Eメール2で18日だけ図書館の別室に移ると分かる。開始時刻は変わらないので(A)は誤り。(C)は講座一覧の記載をそのまま含むひっかけ。"
      },
      {
        q: "What does Brightpath say about leaving a car?",
        choices: [
          "The hall's lot is reserved for participants.",
          "Parking is free for those who book three sessions.",
          "There is nowhere to park within walking distance.",
          "A public garage nearby charges a daily rate."
        ],
        answer: 3,
        explanation: "Eメール2の『徒歩2分のエルム通りの公共駐車場は1日5ドル』が根拠。ホールの駐車場は狭いとあるだけで参加者専用ではなく、無料の記載もない。"
      }
    ]
  }
];
