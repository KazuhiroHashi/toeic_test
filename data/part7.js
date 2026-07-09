// Part 7: 読解問題(本番と同じ構成:シングル10文書29問+ダブル2セット10問+トリプル3セット15問=54問)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part7 = [
  {
    id: "p7-01",
    title: "シングル 1(テキストメッセージのやり取り)",
    passages: [
      {
        docType: "Text-message chain",
        text: "Kenji Mori (10:12 A.M.)\nHi Sarah, are you at the office? I left my laptop in Meeting Room C after the morning briefing.\n\nSarah Klein (10:14 A.M.)\nI'm at my desk. Do you need it right away?\n\nKenji Mori (10:15 A.M.)\nYes, I'm at the Westside client's office and my presentation starts at 11:00. All my slides are on it.\n\nSarah Klein (10:16 A.M.)\nOh no. Let me check the room... Got it! It was still on the table.\n\nKenji Mori (10:17 A.M.)\nYou're a lifesaver. Could you ask Tom to bring it here? He's visiting the same client at 10:30.\n\nSarah Klein (10:18 A.M.)\nHe just left, but I'll call him — he can come back for it. You should have it by 10:50.\n\nKenji Mori (10:19 A.M.)\nPerfect. I owe you one!"
      }
    ],
    translation: "ケンジ・モリ(午前10:12):やあサラ、オフィスにいる? 朝のブリーフィングの後、会議室Cにノートパソコンを忘れてしまって。\nサラ・クライン(午前10:14):自分の席にいるわよ。すぐ必要なの?\nケンジ・モリ(午前10:15):うん、今ウェストサイドのクライアントのオフィスにいて、プレゼンが11時に始まるんだ。スライドが全部その中にあって。\nサラ・クライン(午前10:16):大変。部屋を見てくるわ……あったわよ! まだテーブルの上にあった。\nケンジ・モリ(午前10:17):命の恩人だ。トムにここまで持ってきてもらえるよう頼んでくれる? 彼も10時半に同じクライアントを訪問するから。\nサラ・クライン(午前10:18):もう出ちゃったけど、電話してみる——戻って来られるはずよ。10時50分までには届くと思う。\nケンジ・モリ(午前10:19):完璧。恩に着るよ!",
    questions: [
      {
        q: "Why did Mr. Mori contact Ms. Klein?",
        choices: [
          "To reschedule a client meeting",
          "To ask about a forgotten item",
          "To request presentation feedback",
          "To reserve a meeting room"
        ],
        answer: 1,
        explanation: "最初のメッセージで『会議室Cにノートパソコンを忘れた』と伝えている。忘れ物(forgotten item)についての連絡。"
      },
      {
        q: "At 10:17 A.M., what does Mr. Mori mean when he writes, \"You're a lifesaver\"?",
        choices: [
          "Ms. Klein rescued someone from danger.",
          "Ms. Klein works as a medical professional.",
          "He is grateful that Ms. Klein found his laptop.",
          "He wants Ms. Klein to give the presentation."
        ],
        answer: 2,
        explanation: "意図問題。直前でサラがパソコンを見つけた(Got it!)ことへの返答なので、『助かった=感謝』の意味。文字通りの『人命救助』ではない。"
      },
      {
        q: "What will Tom most likely do?",
        choices: [
          "Give a presentation at 11:00",
          "Return to the office and then deliver the laptop",
          "Cancel his visit to the client",
          "E-mail the slides to Mr. Mori"
        ],
        answer: 1,
        explanation: "サラの He just left, but I'll call him — he can come back for it(戻って取りに来られる)から、トムは一度オフィスに戻ってからパソコンを届けると分かる。"
      }
    ]
  },
  {
    id: "p7-02",
    title: "シングル 2(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "SUMMIT COWORKING — Now Open in the Harbor District\n\nLooking for a professional workspace without the cost of a long-term lease? Summit Coworking offers flexible plans for freelancers, startups, and remote workers.\n\nMembership Options:\n1. Day Pass ($25) — Access to shared desks, 9 A.M.–6 P.M.\n2. Flex Plan ($180/month) — 24-hour access to shared desks, 4 hours of meeting-room use per month\n3. Dedicated Desk ($320/month) — Your own reserved desk, 24-hour access, 10 hours of meeting-room use per month, free locker\n4. Private Office ($750/month) — Lockable office for up to 4 people, unlimited meeting-room use, dedicated phone line\n\nAll plans include high-speed Internet, free coffee, and printing services (up to 100 pages per month).\n\nGrand-opening special: Sign up for any monthly plan before July 31 and receive your second month at half price. Book a free tour at www.summitcoworking.com."
      }
    ],
    translation: "サミット・コワーキング——ハーバー地区に新規オープン\n\n長期賃貸契約のコストなしでプロフェッショナルな仕事場をお探しですか? サミット・コワーキングは、フリーランサー、スタートアップ、リモートワーカー向けの柔軟なプランをご用意しています。\n\n会員プラン:\n1. デイパス(25ドル)——共有デスク利用、午前9時〜午後6時\n2. フレックスプラン(月180ドル)——共有デスク24時間利用、会議室月4時間\n3. 専用デスク(月320ドル)——予約済みの自分専用デスク、24時間利用、会議室月10時間、無料ロッカー\n4. プライベートオフィス(月750ドル)——最大4名の施錠可能オフィス、会議室無制限、専用電話回線\n\n全プランに高速インターネット、無料コーヒー、印刷サービス(月100ページまで)が含まれます。\n\nオープン記念特典:7月31日までに月額プランに申し込むと、2か月目が半額。無料見学は www.summitcoworking.com からご予約ください。",
    questions: [
      {
        q: "For whom is the advertisement most likely intended?",
        choices: [
          "People seeking a flexible workspace",
          "Real estate agents selling offices",
          "Restaurant owners in the Harbor District",
          "Hotel guests looking for meeting rooms"
        ],
        answer: 0,
        explanation: "冒頭の『長期契約なしでプロの仕事場を探していませんか?』とfreelancers, startups, remote workers向けという記述から、柔軟な仕事場を探す人向けの広告。"
      },
      {
        q: "What is included with the Dedicated Desk plan but NOT with the Flex Plan?",
        choices: [
          "High-speed Internet",
          "24-hour access",
          "A free locker",
          "Free coffee"
        ],
        answer: 2,
        explanation: "NOT型の比較問題。ロッカー(free locker)は専用デスクプランのみ。インターネットとコーヒーは全プラン共通、24時間利用は両プランに含まれる。"
      },
      {
        q: "How can a customer receive a discount?",
        choices: [
          "By booking a tour online",
          "By signing up before July 31",
          "By referring a friend",
          "By paying for a full year in advance"
        ],
        answer: 1,
        explanation: "Sign up for any monthly plan before July 31 and receive your second month at half price(7月31日までの申込で2か月目半額)が根拠。"
      }
    ]
  },
  {
    id: "p7-03",
    title: "シングル 3(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Naomi Carter, Events Coordinator\nTo: All Department Heads\nSubject: Annual Company Picnic — Action Required\nDate: May 20\n\nDear Department Heads,\n\nThis year's company picnic will be held on Saturday, June 21, at Lakeview Park from 11 A.M. to 4 P.M. As in previous years, families are welcome, and lunch will be provided.\n\nTo help us plan, please do the following by June 2:\n\n1. Collect the number of attendees from your team, including family members.\n2. Note any dietary restrictions (vegetarian, allergies, etc.).\n3. Submit the information through the form on the company intranet.\n\nNew this year: we will run a shuttle bus from the main office to the park. If you would like a seat on the shuttle, please indicate this on the same form. Seats are limited to 40 and will be assigned on a first-come, first-served basis.\n\nVolunteers are also needed to help set up from 9 A.M. Volunteers will receive a free company T-shirt. Please contact me directly if you are interested.\n\nBest regards,\nNaomi Carter"
      }
    ],
    translation: "差出人:ナオミ・カーター(イベントコーディネーター)\n宛先:全部門長\n件名:年次社内ピクニック——要対応\n日付:5月20日\n\n部門長の皆様\n\n今年の社内ピクニックは6月21日(土)午前11時〜午後4時、レイクビュー公園で開催します。例年通りご家族の参加を歓迎し、昼食も提供されます。\n\n計画のため、6月2日までに以下をお願いします:\n\n1. ご家族を含むチームの参加人数を取りまとめる。\n2. 食事制限(ベジタリアン、アレルギー等)を記録する。\n3. 社内イントラネットのフォームから情報を提出する。\n\n今年の新企画:本社から公園までシャトルバスを運行します。シャトルの座席を希望する場合は、同じフォームでお知らせください。座席は40席限定で、先着順に割り当てられます。\n\nまた、午前9時からの設営を手伝うボランティアも募集しています。ボランティアには会社のTシャツを無料進呈します。ご興味のある方は私に直接ご連絡ください。\n\nよろしくお願いします。\nナオミ・カーター",
    questions: [
      {
        q: "What is the main purpose of the e-mail?",
        choices: [
          "To announce a change of venue",
          "To ask department heads to gather information",
          "To cancel an annual event",
          "To recruit new employees"
        ],
        answer: 1,
        explanation: "件名の Action Required と本文の please do the following(参加人数・食事制限の取りまとめとフォーム提出)から、情報収集の依頼が主目的。"
      },
      {
        q: "What is indicated about the shuttle bus?",
        choices: [
          "It runs every hour.",
          "It is available for a small fee.",
          "Seats are limited in number.",
          "It was also offered last year."
        ],
        answer: 2,
        explanation: "Seats are limited to 40(40席限定)が根拠。New this year とあるので(D)『昨年も運行』は誤り。"
      },
      {
        q: "According to the e-mail, why should someone contact Ms. Carter directly?",
        choices: [
          "To reserve a shuttle seat",
          "To report a dietary restriction",
          "To volunteer for setup",
          "To change the picnic date"
        ],
        answer: 2,
        explanation: "Volunteers ... Please contact me directly if you are interested が根拠。シャトル希望と食事制限はフォームで提出するのでひっかけ。"
      }
    ]
  },
  {
    id: "p7-05",
    title: "シングル 4(お知らせ)",
    passages: [
      {
        docType: "Notice",
        text: "RIVERSIDE FITNESS CENTER — MEMBER NOTICE\n\nThe indoor swimming pool will be closed from Monday, August 4, through Sunday, August 10, for annual cleaning and tile repairs. All other facilities, including the gym and sauna, will remain open during this period.\n\nAqua-fitness classes scheduled for that week will be held at our partner facility, Westbrook Aquatic Center, at the usual times. Your Riverside membership card will be accepted at the entrance.\n\nThe pool will reopen on Monday, August 11, at 6:00 A.M. We apologize for the inconvenience and thank you for your understanding."
      }
    ],
    translation: "リバーサイド・フィットネスセンター——会員向けお知らせ\n\n屋内プールは、年次清掃とタイル補修のため、8月4日(月)から8月10日(日)まで閉鎖します。ジムやサウナを含む他の施設は、この期間も通常通り営業します。\n\nその週に予定されているアクアフィットネスのクラスは、提携施設のウェストブルック・アクアティックセンターで通常の時間に行われます。入口ではリバーサイドの会員証がそのまま使えます。\n\nプールは8月11日(月)午前6時に再開します。ご不便をおかけしますが、ご理解のほどよろしくお願いいたします。",
    questions: [
      {
        q: "What is the purpose of the notice?",
        choices: [
          "To announce a temporary closure",
          "To advertise new fitness classes",
          "To introduce a new partner gym",
          "To explain a fee increase"
        ],
        answer: 0,
        explanation: "冒頭の『プールを8月4日〜10日に閉鎖する』という告知が主目的。temporary closure(一時閉鎖)への言い換え。"
      },
      {
        q: "What is indicated about the aqua-fitness classes?",
        choices: [
          "They will be held at another facility.",
          "They are canceled for one week.",
          "They will start at new times.",
          "They require an additional fee."
        ],
        answer: 0,
        explanation: "will be held at our partner facility, Westbrook Aquatic Center, at the usual times が根拠。時間は変わらず、場所だけ変わる。"
      }
    ]
  },
  {
    id: "p7-06",
    title: "シングル 5(オンラインチャット)",
    passages: [
      {
        docType: "Online chat",
        text: "Mika Anders (2:04 P.M.)\nLeo, the projector in Room 5 won't connect to my laptop. The sales demo starts at 2:30!\n\nLeo Grant (2:05 P.M.)\nDid you try the gray cable in the drawer?\n\nMika Anders (2:06 P.M.)\nTwice. Nothing happens.\n\nLeo Grant (2:07 P.M.)\nI'm two floors up. Give me five minutes.\n\nMika Anders (2:08 P.M.)\nYou're the best. I'll set up the chairs in the meantime."
      }
    ],
    translation: "ミカ・アンダース(午後2:04):レオ、5号室のプロジェクターがノートパソコンにつながらないの。営業デモが2時半に始まるのに!\nレオ・グラント(午後2:05):引き出しのグレーのケーブルは試した?\nミカ・アンダース(午後2:06):2回もね。何も映らないの。\nレオ・グラント(午後2:07):2階上にいるんだ。5分ちょうだい。\nミカ・アンダース(午後2:08):最高ね。その間に椅子を並べておくわ。",
    questions: [
      {
        q: "Why did Ms. Anders contact Mr. Grant?",
        choices: [
          "To postpone a demonstration",
          "To report an equipment problem",
          "To reserve a meeting room",
          "To borrow his laptop"
        ],
        answer: 1,
        explanation: "最初のメッセージ the projector won't connect(プロジェクターがつながらない)が根拠。機器トラブルの報告。"
      },
      {
        q: "At 2:07 P.M., what does Mr. Grant most likely mean when he writes, \"Give me five minutes\"?",
        choices: [
          "He needs time to finish a phone call.",
          "He will arrive soon to help.",
          "The demonstration should be delayed.",
          "The repair will take five minutes."
        ],
        answer: 1,
        explanation: "意図問題。直前の I'm two floors up(2階上にいる)とセットで読むと、『5分で(そちらに行って)対応する』という意味だと分かる。"
      }
    ]
  },
  {
    id: "p7-07",
    title: "シングル 6(記事)",
    passages: [
      {
        docType: "Article",
        text: "HARBORVIEW (June 2) — The city of Harborview launched its first bike-share program on Saturday, placing 200 bicycles at 20 docking stations around the downtown area and the university campus.\n\nRiders unlock a bicycle with a smartphone app, which charges $2 for the first 30 minutes and $1 for each additional 15 minutes. Monthly passes are available for $15 and include unlimited 45-minute rides.\n\nCity transportation director Elena Vasquez said the program aims to reduce downtown traffic, which has grown 18 percent over the past five years. \"If the first year goes well, we plan to expand to the waterfront district next spring,\" she said.\n\nLocal businesses have welcomed the program. \"Students park the bikes right outside and come in for coffee,\" said café owner Miguel Torres. \"Weekend sales are already up.\""
      }
    ],
    translation: "ハーバービュー(6月2日)——ハーバービュー市は土曜日、市初の自転車シェアリング事業を開始し、ダウンタウンと大学キャンパス周辺の20か所のステーションに200台の自転車を配置した。\n\n利用者はスマートフォンアプリで自転車のロックを解除する。料金は最初の30分が2ドル、以降15分ごとに1ドル。月額パスは15ドルで、45分以内の利用が乗り放題になる。\n\n市交通局長のエレナ・バスケス氏は、過去5年で18パーセント増加したダウンタウンの交通量を減らすことが狙いだと述べた。『初年度がうまくいけば、来春ウォーターフロント地区への拡大を計画しています』\n\n地元企業もこの事業を歓迎している。『学生たちが店のすぐ外に自転車を停めて、コーヒーを飲みに来てくれます』とカフェ経営者のミゲル・トーレス氏。『週末の売上はすでに伸びています』",
    questions: [
      {
        q: "What is the article mainly about?",
        choices: [
          "A new transportation program",
          "A university construction project",
          "A change in parking fees",
          "The opening of a new café"
        ],
        answer: 0,
        explanation: "第1段落の bike-share program の開始が記事全体の主題。"
      },
      {
        q: "How much does a monthly pass cost?",
        choices: ["$2", "$15", "$20", "$45"],
        answer: 1,
        explanation: "Monthly passes are available for $15 が根拠。$2は最初の30分の料金、45は乗り放題の分数でひっかけ。"
      },
      {
        q: "What does Ms. Vasquez say about the program?",
        choices: [
          "It may be expanded next year.",
          "It has already reduced traffic by 18 percent.",
          "It is funded by local businesses.",
          "It will move to the waterfront this summer."
        ],
        answer: 0,
        explanation: "we plan to expand to the waterfront district next spring(うまくいけば来春拡大)が根拠。18%は過去5年の交通量の増加率でひっかけ。"
      }
    ]
  },
  {
    id: "p7-08",
    title: "シングル 7(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Priya Nair, Events Coordinator\nTo: Dr. Samuel Osei\nSubject: Keynote arrangements — MedTech Summit\nDate: September 12\n\nDear Dr. Osei,\n\nThank you for agreeing to deliver the opening keynote at the MedTech Summit on Friday, October 17. Your talk is scheduled for 9:30–10:15 A.M. in the Grand Ballroom, followed by a 15-minute question-and-answer session.\n\nAs discussed, we have booked you a room at the Lakeside Hotel for the nights of October 16 and 17. A car will pick you up at the airport; please send your flight details by October 3 so we can arrange the driver.\n\nCould you also send a recent photograph and a short biography (about 100 words) by September 26? These will appear in the printed program.\n\nIf you plan to use slides, our technical team asks that you upload them through the speaker portal no later than October 10.\n\nBest regards,\nPriya Nair"
      }
    ],
    translation: "差出人:プリヤ・ナイア(イベントコーディネーター)\n宛先:サミュエル・オセイ博士\n件名:基調講演のご手配——メドテック・サミット\n日付:9月12日\n\nオセイ博士\n\n10月17日(金)のメドテック・サミットで開会基調講演をお引き受けいただき、ありがとうございます。ご講演はグランドボールルームにて午前9時30分〜10時15分、その後15分間の質疑応答を予定しています。\n\nお話しした通り、10月16日と17日の2泊、レイクサイドホテルのお部屋を予約しました。空港には車がお迎えに上がります。運転手の手配のため、10月3日までにフライトの詳細をお送りください。\n\nまた、9月26日までに近影のお写真と短い経歴(100語程度)をお送りいただけますか? 印刷プログラムに掲載します。\n\nスライドをご使用の場合は、技術チームの依頼により、遅くとも10月10日までに講演者ポータルからアップロードをお願いします。\n\nよろしくお願いいたします。\nプリヤ・ナイア",
    questions: [
      {
        q: "What is the purpose of the e-mail?",
        choices: [
          "To invite Dr. Osei to speak at a conference",
          "To confirm arrangements for an event",
          "To request payment for a service",
          "To announce a schedule change"
        ],
        answer: 1,
        explanation: "Thank you for agreeing to deliver ...(すでに引き受け済み)とあるので、招待(A)ではなく、講演・宿泊・送迎などの手配確認が目的。"
      },
      {
        q: "What should Dr. Osei send by September 26?",
        choices: [
          "His flight details",
          "His presentation slides",
          "A photograph and a biography",
          "A signed agreement"
        ],
        answer: 2,
        explanation: "a recent photograph and a short biography ... by September 26 が根拠。フライト詳細は10月3日、スライドは10月10日で、期日の対応関係を問う問題。"
      },
      {
        q: "What is suggested about the presentation slides?",
        choices: [
          "They should be submitted through a Web site.",
          "They will be reviewed by Ms. Nair.",
          "They must be printed in advance.",
          "They will be shared with attendees."
        ],
        answer: 0,
        explanation: "upload them through the speaker portal(講演者ポータルからアップロード)が根拠。portal が Web site に言い換えられている。"
      }
    ]
  },
  {
    id: "p7-09",
    title: "シングル 8(手紙)",
    passages: [
      {
        docType: "Letter",
        text: "Dear Ms. Kowalski,\n\nThank you for your letter of March 3 regarding the stand mixer (model KM-200) you purchased from our Web site in February. We are sorry to hear that the mixing bowl arrived with a crack, and we apologize for the delay in our response, which was caused by an unusually high volume of inquiries.\n\nA replacement bowl was shipped to your address yesterday by express courier; it should arrive within two business days. There is no charge for the replacement or the shipping. You do not need to return the damaged bowl — please dispose of it safely.\n\nAs an apology for the inconvenience, we have added a $20 voucher to your online account. It can be used on any purchase over $50 and is valid until the end of this year.\n\nWe value your business and hope you will continue to enjoy your KM-200.\n\nSincerely,\nDouglas Reid\nCustomer Relations, Bexley Kitchenware"
      }
    ],
    translation: "コワルスキ様\n\n2月に当社ウェブサイトでご購入いただいたスタンドミキサー(KM-200)に関する3月3日付のお手紙をありがとうございました。ミキシングボウルにひびが入った状態で届いたとのこと、誠に申し訳ございません。また、問い合わせが異例の多さだったため、返信が遅れましたことをお詫びいたします。\n\n交換用のボウルは昨日、速達便でご住所宛てに発送済みで、2営業日以内に届く見込みです。交換品・送料とも無料です。破損したボウルの返送は不要です——安全に廃棄してください。\n\nお詫びとして、お客様のオンラインアカウントに20ドルのクーポンを追加いたしました。50ドルを超えるお買い物にご利用いただけ、本年末まで有効です。\n\n今後とも KM-200 をご愛用いただけますと幸いです。\n\n敬具\nダグラス・リード\nベクスリー・キッチンウェア カスタマーリレーションズ",
    questions: [
      {
        q: "Why did Mr. Reid write the letter?",
        choices: [
          "To respond to a customer's complaint",
          "To announce a new product",
          "To request a product review",
          "To confirm an order cancellation"
        ],
        answer: 0,
        explanation: "破損したボウルについての3月3日付の手紙への返信であり、謝罪と対応(交換品発送・クーポン)を伝えている。"
      },
      {
        q: "What is suggested about Bexley Kitchenware?",
        choices: [
          "It recently released the KM-200.",
          "It has received many inquiries recently.",
          "It is closing its Web site.",
          "It charges for all replacements."
        ],
        answer: 1,
        explanation: "an unusually high volume of inquiries(異例に多い問い合わせ)が返信遅延の理由として述べられている。"
      },
      {
        q: "What is Ms. Kowalski asked to do with the damaged bowl?",
        choices: [
          "Return it by courier",
          "Take it to a store",
          "Throw it away",
          "Donate it to charity"
        ],
        answer: 2,
        explanation: "please dispose of it safely(安全に廃棄してください)が根拠。dispose of が throw away に言い換えられている。"
      },
      {
        q: "What is true about the voucher?",
        choices: [
          "It expires in March.",
          "It can be used on any purchase.",
          "It requires a minimum purchase amount.",
          "It will be mailed to her home."
        ],
        answer: 2,
        explanation: "It can be used on any purchase over $50(50ドル超の購入に使用可)=最低購入額の条件がある。(B)は over $50 の条件を見落とさせるひっかけ。"
      }
    ]
  },
  {
    id: "p7-10",
    title: "シングル 9(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "PETAL & STEM FLOWER STUDIO — Now Open on Willow Lane\n\nFresh bouquets, wedding arrangements, and weekly office subscriptions.\n\nGrand-opening offers (through July 31):\n1. Free delivery within the city on orders over $40\n2. 20% off your first subscription month\n3. A free vase with any bouquet over $60\n\nOrder online at petalandstem.com, or visit us Tuesday–Sunday, 9 A.M.–7 P.M. (closed Mondays).\n\nJoin our workshop \"Basics of Flower Arranging\" on the first Saturday of every month — $35 per person, materials included. Reserve a seat online; classes are limited to ten participants."
      }
    ],
    translation: "ペタル&ステム・フラワースタジオ——ウィローレーンに新規オープン\n\nフレッシュブーケ、ウェディングアレンジメント、週替わりのオフィス向け定期便。\n\nオープン記念特典(7月31日まで):\n1. 40ドルを超えるご注文は市内配送無料\n2. 定期便の初月20%オフ\n3. 60ドルを超えるブーケに花瓶を無料プレゼント\n\nご注文は petalandstem.com から。店舗は火曜〜日曜、午前9時〜午後7時(月曜定休)。\n\n毎月第1土曜日のワークショップ『フラワーアレンジの基礎』にもご参加ください——お一人35ドル、材料費込み。オンラインでご予約を。定員は10名です。",
    questions: [
      {
        q: "What is NOT mentioned as a grand-opening offer?",
        choices: [
          "Free delivery on some orders",
          "A discount on a subscription",
          "A free gift with large bouquets",
          "A free workshop"
        ],
        answer: 3,
        explanation: "NOT問題。特典は配送無料・定期便20%オフ・花瓶プレゼントの3つ。ワークショップは35ドルの有料なので(D)が正解。"
      },
      {
        q: "What is indicated about the workshops?",
        choices: [
          "They are held every Saturday.",
          "Materials are included in the fee.",
          "They are free for subscribers.",
          "They take place on Mondays."
        ],
        answer: 1,
        explanation: "$35 per person, materials included が根拠。開催は『毎月第1土曜』なので(A)『毎週土曜』は誤り。"
      },
      {
        q: "When is the studio closed?",
        choices: [
          "On Mondays",
          "On Sundays",
          "On public holidays",
          "On weekday mornings"
        ],
        answer: 0,
        explanation: "Tuesday–Sunday ... (closed Mondays) が根拠。"
      }
    ]
  },
  {
    id: "p7-11",
    title: "シングル 10(社内メモ)",
    passages: [
      {
        docType: "Memo",
        text: "MEMO\nTo: All Sales Staff\nFrom: Rita Chandler, Sales Director\nDate: November 3\nRe: Quarterly review meetings\n\nIndividual performance reviews for the fourth quarter will take place November 17–21 in my office. A sign-up sheet with available time slots is posted on the staff notice board; please choose a slot by November 10.\n\nBefore your meeting, complete the self-evaluation form on the HR portal and bring a printed copy. This year, the form includes a new section on training goals for next year — please give it particular attention, as your answers will be used to plan the department's training budget.\n\nAnyone traveling for client visits during the review week should e-mail me directly to arrange a video call instead.\n\nRita"
      }
    ],
    translation: "メモ\n宛先:営業部全員\n差出人:リタ・チャンドラー(営業部長)\n日付:11月3日\n件名:四半期面談\n\n第4四半期の個人面談を11月17日〜21日に私のオフィスで行います。空き時間の記入シートをスタッフ掲示板に貼り出したので、11月10日までに枠を選んでください。\n\n面談の前に、HRポータルの自己評価フォームに記入し、印刷したものを持参してください。今年のフォームには、来年の研修目標に関する新しいセクションがあります——回答は部の研修予算の計画に使われるので、特に注意して記入してください。\n\n面談週にクライアント訪問で出張する人は、代わりにビデオ通話を設定するので、私に直接メールしてください。\n\nリタ",
    questions: [
      {
        q: "What should employees do by November 10?",
        choices: [
          "Complete a training course",
          "Select a meeting time",
          "Submit a budget request",
          "Print a client list"
        ],
        answer: 1,
        explanation: "please choose a slot by November 10(11月10日までに枠を選ぶ)が根拠。slot が meeting time に言い換えられている。"
      },
      {
        q: "What is new on the self-evaluation form?",
        choices: [
          "A section about training goals",
          "A question about salary",
          "A summary of client feedback",
          "A meeting schedule"
        ],
        answer: 0,
        explanation: "the form includes a new section on training goals for next year が根拠。"
      },
      {
        q: "Why would an employee e-mail Ms. Chandler?",
        choices: [
          "To request a new client",
          "To reschedule a client visit",
          "To arrange a video meeting",
          "To get a copy of the form"
        ],
        answer: 2,
        explanation: "出張者は e-mail me directly to arrange a video call instead(代わりにビデオ通話を設定)が根拠。"
      }
    ]
  },
  {
    id: "p7-04",
    title: "ダブル 1(お知らせ+Eメール)",
    passages: [
      {
        docType: "Notice",
        text: "HARTLEY CONVENTION CENTER — Exhibitor Information\nTech Forward Expo, November 8–9\n\nBooth setup: Friday, November 7, 1 P.M.–8 P.M.\nExhibition hours: 9 A.M.–5 P.M. both days\n\nBooth packages:\n1. Standard Booth ($400) — 3m x 3m space, one table, two chairs\n2. Premium Booth ($700) — 3m x 6m space, two tables, four chairs, corner location\n3. Startup Booth ($250) — 2m x 2m space, one table, two chairs (available only to companies founded within the past three years)\n\nAll booths include electricity and Wi-Fi. Exhibitors requiring additional equipment (monitors, extra tables, etc.) must submit requests by October 24. A 15% late fee applies to requests received after this date."
      },
      {
        docType: "E-mail",
        text: "From: Daniel Reyes, Nova Robotics\nTo: exhibitors@hartleycc.com\nSubject: Booth request — Tech Forward Expo\nDate: October 28\n\nTo whom it may concern,\n\nWe have reserved a Startup Booth for the Tech Forward Expo (confirmation #TF-2231). Our company was founded two years ago, so we appreciate this affordable option.\n\nI would like to request one additional item: a 27-inch monitor to display our product demonstration video. I understand that a late fee will apply since the deadline has passed, and we accept the extra charge.\n\nAlso, could you confirm whether we may begin setting up our booth on Friday morning? Our team arrives in Hartley at 10 A.M., and we would prefer to finish setup early.\n\nThank you,\nDaniel Reyes\nNova Robotics"
      }
    ],
    translation: "【お知らせ】ハートレー・コンベンションセンター——出展者情報\nテック・フォワード・エキスポ、11月8〜9日\n\nブース設営:11月7日(金)午後1時〜8時\n展示時間:両日とも午前9時〜午後5時\n\nブースパッケージ:\n1. スタンダードブース(400ドル)——3m×3m、テーブル1、椅子2\n2. プレミアムブース(700ドル)——3m×6m、テーブル2、椅子4、角の位置\n3. スタートアップブース(250ドル)——2m×2m、テーブル1、椅子2(設立3年以内の企業のみ)\n\n全ブースに電源とWi-Fiが含まれます。追加機材(モニター、追加テーブル等)が必要な出展者は10月24日までに申請してください。それ以降の申請には15%の遅延手数料がかかります。\n\n【Eメール】\n差出人:ダニエル・レイエス(ノヴァ・ロボティクス)\n宛先:exhibitors@hartleycc.com\n件名:ブースに関する依頼——テック・フォワード・エキスポ\n日付:10月28日\n\nご担当者様\n\nテック・フォワード・エキスポのスタートアップブースを予約しています(確認番号TF-2231)。当社は2年前に設立されたので、この手頃な選択肢をありがたく思っています。\n\n追加で1点お願いしたいものがあります。製品デモ動画を表示するための27インチモニターです。期限を過ぎているため遅延手数料がかかることは理解しており、追加料金を受け入れます。\n\nまた、金曜日の午前中からブースの設営を始められるかご確認いただけますか? 私たちのチームは午前10時にハートレーに到着するので、早めに設営を終えたいのです。\n\nよろしくお願いします。\nダニエル・レイエス\nノヴァ・ロボティクス",
    questions: [
      {
        q: "What is indicated about the Startup Booth?",
        choices: [
          "It includes a corner location.",
          "It is the largest option available.",
          "It has an eligibility requirement.",
          "It does not include Wi-Fi."
        ],
        answer: 2,
        explanation: "available only to companies founded within the past three years(設立3年以内の企業のみ)という条件=eligibility requirement(利用資格)がある。"
      },
      {
        q: "What is suggested about Nova Robotics?",
        choices: [
          "It was founded within the past three years.",
          "It reserved a Premium Booth.",
          "It has exhibited at the expo before.",
          "It is based in Hartley."
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。お知らせ『スタートアップブースは設立3年以内の企業のみ』+メール『当社は2年前に設立』の2文書を組み合わせて判断する。"
      },
      {
        q: "What extra charge will Nova Robotics most likely pay?",
        choices: [
          "A 15% late fee",
          "A booth upgrade fee",
          "An electricity fee",
          "A parking fee"
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。機材追加の申請期限は10月24日、メールの日付は10月28日で期限超過。お知らせの『期限後の申請には15%の遅延手数料』が適用される。"
      },
      {
        q: "What does Mr. Reyes ask about?",
        choices: [
          "Changing his booth location",
          "Setting up earlier than the scheduled time",
          "Canceling his reservation",
          "Receiving a refund for the monitor"
        ],
        answer: 1,
        explanation: "設営は金曜午後1時からと案内されているが、レイエスさんは『金曜の午前中から設営を始められるか』を尋ねている。"
      },
      {
        q: "In the e-mail, the word \"affordable\" in paragraph 1 is closest in meaning to",
        choices: ["inexpensive", "available", "profitable", "comfortable"],
        answer: 0,
        explanation: "語彙問題。affordable(手頃な価格の)= inexpensive(安価な)。250ドルという最安プランを指している文脈からも判断できる。"
      }
    ]
  },
  {
    id: "p7-12",
    title: "ダブル 2(求人広告+Eメール)",
    passages: [
      {
        docType: "Advertisement",
        text: "ASSISTANT STORE MANAGER — Fenwick Books, Milton Branch\n\nFenwick Books, a regional chain with twelve stores, seeks a full-time assistant manager for its Milton branch.\n\nResponsibilities: supervising a team of eight sales associates, managing inventory, coordinating author events\n\nRequirements:\n1. At least three years of retail experience (bookstore experience preferred)\n2. Availability to work weekends\n3. Basic spreadsheet skills\n\nBenefits include health insurance, a 25% employee discount, and paid training at our head office in Grandville.\n\nTo apply, e-mail a résumé and cover letter to careers@fenwickbooks.com by April 15. Interviews will be held during the last week of April."
      },
      {
        docType: "E-mail",
        text: "From: Joanna Pruitt\nTo: careers@fenwickbooks.com\nSubject: Assistant Store Manager — Milton\nDate: April 18\n\nTo Whom It May Concern,\n\nI am writing to apply for the assistant manager position at your Milton branch. I saw the posting only yesterday in the Milton Gazette, and I hope you will still consider my application despite the date.\n\nI have worked for five years as a shift supervisor at Hartley Stationery, where I currently lead a team of six and manage weekly inventory orders. I am available to work weekends, and I use spreadsheets daily in my current role. While I have not worked in a bookstore, I organize a monthly book club at our community center and am familiar with current fiction.\n\nMy résumé and cover letter are attached. I would welcome the chance to interview at your convenience.\n\nSincerely,\nJoanna Pruitt"
      }
    ],
    translation: "【求人広告】アシスタントストアマネージャー——フェンウィック・ブックス ミルトン店\n\n12店舗を展開する地域チェーンのフェンウィック・ブックスが、ミルトン店の常勤アシスタントマネージャーを募集します。\n\n職務内容:販売スタッフ8名の監督、在庫管理、著者イベントの企画運営\n\n応募要件:\n1. 小売業での実務経験3年以上(書店経験があれば尚可)\n2. 週末勤務が可能なこと\n3. 基本的な表計算ソフトのスキル\n\n福利厚生:健康保険、従業員割引25%、グランドビル本社での有給研修。\n\n応募は4月15日までに履歴書とカバーレターを careers@fenwickbooks.com へ。面接は4月最終週に実施します。\n\n【Eメール】\n差出人:ジョアンナ・プルイット\n宛先:careers@fenwickbooks.com\n件名:アシスタントストアマネージャー——ミルトン\n日付:4月18日\n\nご担当者様\n\nミルトン店のアシスタントマネージャー職に応募いたします。昨日ミルトン・ガゼット紙で求人を見たばかりで、日付を過ぎてしまいましたが、ご検討いただければ幸いです。\n\n私はハートレー文具で5年間シフトスーパーバイザーとして勤務し、現在6名のチームを率い、毎週の在庫発注を管理しています。週末勤務も可能で、現職では毎日表計算ソフトを使っています。書店での勤務経験はありませんが、コミュニティセンターで月例の読書会を運営しており、最近のフィクションにも詳しいです。\n\n履歴書とカバーレターを添付します。ご都合のよいときに面接の機会をいただければ幸いです。\n\n敬具\nジョアンナ・プルイット",
    questions: [
      {
        q: "What is indicated about Fenwick Books?",
        choices: [
          "It operates more than one location.",
          "It was founded recently.",
          "It sells only fiction.",
          "It is closing its Milton branch."
        ],
        answer: 0,
        explanation: "a regional chain with twelve stores(12店舗の地域チェーン)が根拠。"
      },
      {
        q: "What benefit is mentioned in the advertisement?",
        choices: [
          "A company car",
          "An employee discount",
          "Free meals",
          "Flexible working hours"
        ],
        answer: 1,
        explanation: "Benefits include ... a 25% employee discount が根拠。"
      },
      {
        q: "What problem does Ms. Pruitt mention?",
        choices: [
          "She missed the application deadline.",
          "She cannot work on weekends.",
          "She has no supervisory experience.",
          "She lost her cover letter."
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。広告の締切は4月15日、メールの日付は4月18日。本文の despite the date(日付を過ぎたが)と合わせ、締切超過が問題。"
      },
      {
        q: "What is suggested about Ms. Pruitt?",
        choices: [
          "She satisfies the experience requirement.",
          "She has managed a bookstore.",
          "She lives in Grandville.",
          "She was interviewed in April."
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。要件は『小売経験3年以上』、彼女は文具店で5年の勤務経験があり要件を満たす。書店経験は『尚可』であって必須ではない。"
      },
      {
        q: "In the e-mail, the word \"lead\" in paragraph 2 is closest in meaning to",
        choices: ["supervise", "precede", "persuade", "connect"],
        answer: 0,
        explanation: "語彙問題。lead a team of six(6人のチームを率いる)の lead は supervise(監督する)の意味。"
      }
    ]
  },
  {
    id: "p7-13",
    title: "トリプル 1(旅程表+Eメール+Eメール)",
    passages: [
      {
        docType: "Itinerary",
        text: "HORIZON TRAVEL — Itinerary for Mr. Alan Whitfield\n\nSeptember 8: Flight HT 22, Seattle to Toronto — departs 8:10 A.M., arrives 3:55 P.M.\nSeptember 8–11: Maple Court Hotel, downtown Toronto (3 nights, breakfast included)\nSeptember 11: Flight HT 65, Toronto to Seattle — departs 6:20 P.M.\n\nNote: Tickets are refundable up to 72 hours before departure. Changes made within 72 hours of departure incur a $75 fee."
      },
      {
        docType: "E-mail 1",
        text: "From: Alan Whitfield\nTo: Renata Silva, Horizon Travel\nDate: September 9\n\nHi Renata,\n\nMy Toronto client moved our final meeting to the morning of September 12, so I need to stay one more night and fly back on the twelfth instead. Could you change my return flight and extend the hotel booking?\n\nAlso, if possible, I'd prefer an evening departure again, so I can have lunch with the client's team before heading to the airport.\n\nThanks,\nAlan"
      },
      {
        docType: "E-mail 2",
        text: "From: Renata Silva, Horizon Travel\nTo: Alan Whitfield\nDate: September 9\n\nDear Mr. Whitfield,\n\nDone! You are now booked on Flight HT 67, departing Toronto on September 12 at 7:05 P.M., and Maple Court Hotel has extended your stay through the night of September 11 at the same rate.\n\nPlease note that because your request was made within 72 hours of your original departure, the airline's change fee applies; it will appear on your September invoice. Breakfast on the morning of the twelfth is included, as before.\n\nSafe travels,\nRenata"
      }
    ],
    translation: "【旅程表】ホライズン・トラベル——アラン・ウィットフィールド様の旅程\n9月8日:HT22便 シアトル→トロント(8:10発、15:55着)\n9月8〜11日:メープルコート・ホテル(トロント中心部、3泊、朝食付き)\n9月11日:HT65便 トロント→シアトル(18:20発)\n注:航空券は出発72時間前まで払い戻し可能。出発まで72時間を切った変更には75ドルの手数料がかかります。\n\n【Eメール1】(9月9日、ウィットフィールド→レナータ)\nこんにちは、レナータ。トロントのクライアントが最終打ち合わせを9月12日の午前に変更したので、もう1泊して12日に帰りたいのです。帰りの便の変更とホテルの延泊をお願いできますか? それと、可能なら帰りも夜の便がいいです。空港へ向かう前にクライアントのチームとランチをしたいので。\n\n【Eメール2】(9月9日、レナータ→ウィットフィールド)\nウィットフィールド様、手配完了です! 9月12日19:05トロント発のHT67便を予約し、メープルコート・ホテルは同じ料金で9月11日の夜まで延泊になりました。なお、元の出発まで72時間を切ってのご依頼のため、航空会社の変更手数料が適用され、9月分の請求書に計上されます。12日朝の朝食はこれまで通り含まれます。良いご旅行を。",
    questions: [
      {
        q: "How many nights was Mr. Whitfield originally scheduled to stay in Toronto?",
        choices: ["Two", "Three", "Four", "Five"],
        answer: 1,
        explanation: "旅程表の Maple Court Hotel ... (3 nights) が根拠。延泊後は4泊になるが、設問は『元々の予定』を聞いている。"
      },
      {
        q: "Why did Mr. Whitfield contact Ms. Silva?",
        choices: [
          "A meeting was rescheduled.",
          "A flight was canceled.",
          "He lost his tickets.",
          "He wanted an earlier return."
        ],
        answer: 0,
        explanation: "Eメール1の My Toronto client moved our final meeting(クライアントが打ち合わせを動かした)が変更依頼の理由。"
      },
      {
        q: "How much extra will Mr. Whitfield most likely pay for the flight change?",
        choices: ["$0", "$25", "$75", "$150"],
        answer: 2,
        explanation: "クロスリファレンス問題。旅程表の『72時間以内の変更は75ドル』+Eメール2の『72時間を切った依頼のため手数料が適用』を組み合わせる。"
      },
      {
        q: "What is indicated about Flight HT 67?",
        choices: [
          "It departs in the evening.",
          "It arrives in Seattle at 3:55 P.M.",
          "It includes a free meal.",
          "It leaves from a different airport."
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。Eメール1の『夜の便がいい』という希望に対し、Eメール2で19:05発のHT67便が手配された。希望通りの夜便。"
      },
      {
        q: "What will Mr. Whitfield most likely do on the morning of September 12?",
        choices: [
          "Fly to Seattle",
          "Meet with a client",
          "Have lunch with Ms. Silva",
          "Check into the hotel"
        ],
        answer: 1,
        explanation: "Eメール1の our final meeting to the morning of September 12 が根拠。帰国便は同日の夜、ランチはクライアントのチームと。"
      }
    ]
  },
  {
    id: "p7-14",
    title: "トリプル 2(注文確認+Eメール+Eメール)",
    passages: [
      {
        docType: "Order confirmation",
        text: "LUMEN OFFICE DIRECT — Order #55201\nOrdered: July 2 — Customer: Ms. Dana Merritt\n\n1. LED desk lamp (white) × 2 — $35 each — $70\n2. Monitor stand × 1 — $45\n3. Ergonomic footrest × 1 — $30\nStandard shipping (5–7 business days) — Free\nTotal — $145\n\nItems ship separately as they become available.\nEstimated delivery: lamps and stand — July 8; footrest — July 15."
      },
      {
        docType: "E-mail 1",
        text: "From: Dana Merritt\nTo: support@lumenoffice.com\nDate: July 10\n\nHello,\n\nOn July 8, I received the monitor stand and the two lamps from order #55201. However, one of the lamps is black, not white as I ordered.\n\nMy office is being photographed for our company brochure on July 16, so I need the correct lamp before then. Could you also tell me whether the footrest is still on schedule?\n\nThank you,\nDana Merritt"
      },
      {
        docType: "E-mail 2",
        text: "From: Customer Support, Lumen Office Direct\nTo: Dana Merritt\nDate: July 10\n\nDear Ms. Merritt,\n\nWe apologize for the error. A white lamp was sent today by express shipping at no charge and will arrive on July 12. Please keep the black lamp with our compliments — no return is needed.\n\nYour footrest left our warehouse this morning, one day ahead of the original estimate, so both items should reach you well before your photo session.\n\nAs a further apology, we have refunded 10% of your order total to your credit card.\n\nSincerely,\nLumen Office Direct Customer Support"
      }
    ],
    translation: "【注文確認】ルーメン・オフィス・ダイレクト——注文#55201(7月2日、ダナ・メリット様)\nLEDデスクランプ(白)×2:各35ドル=70ドル/モニタースタンド×1:45ドル/エルゴノミクス・フットレスト×1:30ドル/通常配送(5〜7営業日):無料/合計145ドル\n商品は入荷次第、別々に発送されます。お届け予定:ランプとスタンド=7月8日、フットレスト=7月15日。\n\n【Eメール1】(7月10日、メリット→サポート)\n7月8日に注文#55201のモニタースタンドとランプ2つを受け取りました。ただ、ランプのうち1つが、注文した白ではなく黒でした。7月16日に会社のパンフレット用にオフィスの写真撮影があるので、それまでに正しいランプが必要です。また、フットレストは予定通りか教えてください。\n\n【Eメール2】(7月10日、サポート→メリット)\nメリット様、手違いをお詫びいたします。白いランプを本日、無料の速達便で発送しました。7月12日に届きます。黒いランプはお詫びのしるしにそのままお使いください——返品は不要です。フットレストは今朝、当初の予定より1日早く倉庫を出ましたので、どちらも撮影日までに十分間に合います。さらにお詫びとして、ご注文合計の10%をクレジットカードに返金いたしました。",
    questions: [
      {
        q: "What is indicated about order #55201?",
        choices: [
          "Items may arrive on different dates.",
          "It qualified for express shipping.",
          "It was paid for in cash.",
          "It includes assembly service."
        ],
        answer: 0,
        explanation: "注文確認の Items ship separately ... Estimated delivery: July 8 / July 15(別々に発送・お届け日が異なる)が根拠。"
      },
      {
        q: "Why does Ms. Merritt need the lamp by July 16?",
        choices: [
          "A client will visit her office.",
          "Her office will be photographed.",
          "She is moving to a new office.",
          "A sale ends on that day."
        ],
        answer: 1,
        explanation: "Eメール1の My office is being photographed for our company brochure on July 16 が根拠。"
      },
      {
        q: "What will Ms. Merritt receive on July 12?",
        choices: [
          "A footrest",
          "A monitor stand",
          "A white lamp",
          "A company brochure"
        ],
        answer: 2,
        explanation: "Eメール2の A white lamp was sent today by express shipping ... will arrive on July 12 が根拠。"
      },
      {
        q: "What is Ms. Merritt asked to do with the black lamp?",
        choices: [
          "Return it by mail",
          "Exchange it at a store",
          "Keep it",
          "Recycle it"
        ],
        answer: 2,
        explanation: "Please keep the black lamp with our compliments — no return is needed(そのままお使いください・返品不要)が根拠。"
      },
      {
        q: "How much will most likely be refunded to Ms. Merritt?",
        choices: ["$3.00", "$14.50", "$35.00", "$45.00"],
        answer: 1,
        explanation: "クロスリファレンス問題(計算型)。注文確認の合計145ドル+Eメール2の『合計の10%を返金』を組み合わせて、145×10%=14.50ドル。"
      }
    ]
  },
  {
    id: "p7-15",
    title: "トリプル 3(講座一覧+Eメール+Eメール)",
    passages: [
      {
        docType: "Schedule",
        text: "BRIGHTPATH BUSINESS SEMINARS — October Workshop Series\nLocation: Community Hall, Room 2 — Register at brightpath.com\n\n1. October 4 — Social Media Basics (9 A.M.–noon) — $40\n2. October 11 — Writing Effective Proposals (9 A.M.–noon) — $40\n3. October 18 — Negotiation Skills (1 P.M.–5 P.M.) — $60\n4. October 25 — Presentation Design (9 A.M.–noon) — $40\n\nSign up for three or more workshops and receive 20% off the total. Fees include all materials and refreshments."
      },
      {
        docType: "E-mail 1",
        text: "From: Marcus Bell\nTo: info@brightpath.com\nDate: September 20\n\nHello,\n\nI would like to register for the proposal-writing, negotiation, and presentation workshops. I noticed your multi-workshop discount — please confirm that it applies to my registration.\n\nOne concern: our office is closed on the morning of October 25 for a company event. Does the presentation workshop end by noon?\n\nFinally, is parking available at the Community Hall?\n\nBest regards,\nMarcus Bell"
      },
      {
        docType: "E-mail 2",
        text: "From: Brightpath Seminars\nTo: Marcus Bell\nDate: September 21\n\nDear Mr. Bell,\n\nThank you for registering for three workshops — the 20% discount applies, bringing your total to $112.\n\nAll of our morning workshops end at noon sharp. However, if your office event is on the morning of October 25, attending that workshop may be difficult. You are welcome to switch to the same workshop offered again in November at no extra charge — just let us know by October 20.\n\nRegarding parking: the hall's own lot is quite small, but the city garage on Elm Street is a two-minute walk away and costs $5 per day.\n\nWe look forward to seeing you on October 11!\n\nBrightpath Seminars"
      }
    ],
    translation: "【講座一覧】ブライトパス・ビジネスセミナー——10月ワークショップシリーズ(会場:コミュニティホール2号室、申込は brightpath.com)\n1. 10月4日:SNSの基礎(9時〜正午)40ドル\n2. 10月11日:効果的な提案書の書き方(9時〜正午)40ドル\n3. 10月18日:交渉術(13時〜17時)60ドル\n4. 10月25日:プレゼン資料のデザイン(9時〜正午)40ドル\n3講座以上の申込で合計から20%オフ。受講料には教材と軽食が含まれます。\n\n【Eメール1】(9月20日、ベル→ブライトパス)\n提案書、交渉術、プレゼンの3講座に申し込みたいです。複数講座割引があるようなので、適用されるか確認してください。1つ心配なのは、10月25日の午前は会社のイベントでオフィスが閉まることです。プレゼン講座は正午までに終わりますか? 最後に、コミュニティホールに駐車場はありますか?\n\n【Eメール2】(9月21日、ブライトパス→ベル)\nベル様、3講座のお申し込みありがとうございます——20%割引が適用され、合計は112ドルです。当校の午前の講座はすべて正午きっかりに終わります。ただ、10月25日の午前に会社のイベントがあるなら、その講座への出席は難しいかもしれません。11月に再度開催される同じ講座への振替が無料でできます——10月20日までにお知らせください。駐車場について:ホールの駐車場はかなり小さいですが、エルム通りの市営駐車場が徒歩2分で、1日5ドルです。10月11日にお会いできるのを楽しみにしています!",
    questions: [
      {
        q: "What is indicated about the October workshops?",
        choices: [
          "They all take place in the morning.",
          "Fees include materials.",
          "They are held at Brightpath's office.",
          "They are free for repeat participants."
        ],
        answer: 1,
        explanation: "講座一覧の Fees include all materials and refreshments が根拠。交渉術だけ午後開催なので(A)は誤り。"
      },
      {
        q: "Which workshop will Mr. Bell most likely be unable to attend?",
        choices: [
          "Social Media Basics",
          "Writing Effective Proposals",
          "Negotiation Skills",
          "Presentation Design"
        ],
        answer: 3,
        explanation: "クロスリファレンス問題。Eメール1『10月25日の午前は会社イベント』+講座一覧『10月25日=プレゼン資料のデザイン(午前開催)』を組み合わせる。"
      },
      {
        q: "How much will Mr. Bell pay in total?",
        choices: ["$112", "$120", "$140", "$160"],
        answer: 0,
        explanation: "クロスリファレンス問題(計算型)。40+60+40=140ドルに3講座以上の20%割引を適用して112ドル。Eメール2でも金額が確認できる。"
      },
      {
        q: "What does Brightpath Seminars suggest Mr. Bell do?",
        choices: [
          "Attend a session in November instead",
          "Cancel all of his registrations",
          "Arrive early to find parking",
          "Pay the fee in cash"
        ],
        answer: 0,
        explanation: "Eメール2の You are welcome to switch to the same workshop offered again in November(11月の同講座への振替)が根拠。"
      },
      {
        q: "What is true about the garage on Elm Street?",
        choices: [
          "It is free for seminar attendees.",
          "It is a short walk from the hall.",
          "It closes on weekends.",
          "It requires advance reservations."
        ],
        answer: 1,
        explanation: "Eメール2の a two-minute walk away(徒歩2分)が根拠。a short walk への言い換え。料金は1日5ドルなので(A)は誤り。"
      }
    ]
  }
];
