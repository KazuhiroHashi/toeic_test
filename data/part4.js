// Part 4: 説明文問題(トークを聞いて設問に答える)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part4 = [
  {
    id: "p4-01",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this message is for Mr. Nakamura. This is Lisa from Downtown Dental Clinic. I'm calling to remind you of your appointment tomorrow at two P.M. Please note that our clinic has moved to a new location on Fifth Avenue, just across from the central library. Parking is available behind the building. If you need to reschedule, please call us back before six o'clock today. Thank you, and we look forward to seeing you." }
    ],
    translation: "もしもし、こちらはナカムラ様への伝言です。ダウンタウン歯科クリニックのリサと申します。明日午後2時のご予約の確認のためお電話しました。当クリニックは5番街の新しい場所、中央図書館の真向かいに移転しましたのでご注意ください。駐車場は建物の裏にございます。予約を変更される場合は、本日6時までにお電話ください。それでは、ご来院をお待ちしております。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To confirm an appointment",
          "To announce a new service",
          "To request a payment",
          "To cancel a reservation"
        ],
        answer: 0,
        explanation: "I'm calling to remind you of your appointment(予約のリマインドで電話しています)が根拠。電話の目的は冒頭近くで述べられるのが定石。"
      },
      {
        q: "What does the speaker say about the clinic?",
        choices: [
          "It has extended its hours.",
          "It has moved to a new location.",
          "It is closed tomorrow.",
          "It has hired a new dentist."
        ],
        answer: 1,
        explanation: "our clinic has moved to a new location on Fifth Avenue と明言している。"
      },
      {
        q: "What should the listener do if he needs to make a change?",
        choices: [
          "Visit the clinic in person",
          "Send an e-mail",
          "Call back by 6 P.M. today",
          "Fill out an online form"
        ],
        answer: 2,
        explanation: "If you need to reschedule, please call us back before six o'clock today が根拠。reschedule(予約を変更する)が設問では change the appointment に言い換えられている。"
      }
    ]
  },
  {
    id: "p4-02",
    title: "トーク 2(社内アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, all staff. As you know, we'll be switching to the new expense management system on August first. To help everyone get familiar with it, the IT department will hold three training sessions next week — Tuesday, Wednesday, and Thursday, all at four P.M. in Meeting Room B. Each session covers the same content, so you only need to attend one. Please sign up on the company intranet by this Friday. If you can't make any of the sessions, a recorded version will be posted on the intranet afterward." }
    ],
    translation: "全社員にお知らせします。ご存じの通り、8月1日から新しい経費管理システムに切り替わります。皆さんに慣れていただくため、IT部門が来週3回の研修を実施します——火曜・水曜・木曜、いずれも午後4時、会議室Bです。各回の内容は同じですので、参加は1回で構いません。今週金曜日までに社内イントラネットで申し込んでください。どの回にも参加できない場合は、録画版が後日イントラネットに掲載されます。",
    questions: [
      {
        q: "According to the speaker, what will happen on August 1?",
        choices: [
          "A new expense system will be introduced.",
          "A branch office will open.",
          "A holiday schedule will begin.",
          "A department will be reorganized."
        ],
        answer: 0,
        explanation: "冒頭の we'll be switching to the new expense management system on August first が根拠。switching to(切り替える)が introduced(導入される)に言い換えられている。"
      },
      {
        q: "How many sessions does an employee need to attend?",
        choices: [
          "One",
          "Two",
          "Three",
          "None"
        ],
        answer: 0,
        explanation: "Each session covers the same content, so you only need to attend one(内容は同じなので1回だけでよい)が根拠。『3回開催』とのひっかけに注意。"
      },
      {
        q: "According to the speaker, what will be available on the intranet?",
        choices: [
          "A list of expenses",
          "A sign-up sheet for overtime",
          "A recording of the session",
          "A new employee handbook"
        ],
        answer: 2,
        explanation: "a recorded version will be posted on the intranet(録画版がイントラネットに掲載される)が根拠。"
      }
    ]
  },
  {
    id: "p4-03",
    title: "トーク 3(ラジオ広告)",
    audio: [
      { speaker: "W", text: "Are you tired of spending your weekends cleaning? Let Sparkle Home Services take care of it! Our trained staff will clean your entire home using only environmentally friendly products. And now, for the month of October only, first-time customers receive twenty percent off any cleaning package. Booking is easy — just visit sparklehome dot com and choose a time that works for you. Slots fill up quickly, so don't wait. Sparkle Home Services — because your weekend belongs to you." }
    ],
    translation: "週末の掃除にうんざりしていませんか? スパークル・ホーム・サービスにお任せください! 訓練を受けたスタッフが、環境にやさしい製品だけを使ってご自宅全体を清掃します。しかも今なら10月限定で、初回のお客様はどの清掃パッケージも20パーセント引き。ご予約は簡単——sparklehome.com にアクセスして、ご都合のよい時間を選ぶだけ。枠はすぐ埋まりますので、お早めに。スパークル・ホーム・サービス——あなたの週末はあなたのものだから。",
    questions: [
      {
        q: "What type of business is being advertised?",
        choices: [
          "A laundry service",
          "A home cleaning service",
          "A gardening company",
          "A home renovation firm"
        ],
        answer: 1,
        explanation: "Sparkle Home Services が家全体の清掃(clean your entire home)を行うと述べている。"
      },
      {
        q: "What is offered in October?",
        choices: [
          "A free trial service",
          "A gift for all customers",
          "A discount for new customers",
          "Extended service hours"
        ],
        answer: 2,
        explanation: "first-time customers receive twenty percent off(初回客は20%引き)が根拠。first-time customers が new customers に言い換えられている。"
      },
      {
        q: "How can listeners make a booking?",
        choices: [
          "By calling the office",
          "By visiting a Web site",
          "By sending a text message",
          "By visiting the store"
        ],
        answer: 1,
        explanation: "just visit sparklehome dot com(ウェブサイトにアクセス)が根拠。"
      }
    ]
  },
  {
    id: "p4-04",
    title: "トーク 4(会議の抜粋)",
    audio: [
      { speaker: "M", text: "Before we wrap up, let me share some good news. Our customer satisfaction survey results came in yesterday, and our overall score improved from three point eight to four point three out of five. The biggest jump was in delivery speed, thanks to the new distribution center we opened in March. However, the survey also showed that customers find our return process complicated. So next quarter, our top priority will be simplifying returns. Maria will lead that project, and she'll present a detailed plan at our meeting next month." }
    ],
    translation: "締めくくる前に、良い知らせを共有させてください。昨日、顧客満足度調査の結果が届き、総合スコアが5点満点中3.8から4.3に向上しました。最も伸びたのは配送スピードで、3月に開設した新しい物流センターのおかげです。ただし、調査では返品手続きが複雑だと感じている顧客が多いことも分かりました。そこで来四半期は、返品の簡素化を最優先課題とします。そのプロジェクトはマリアが率い、来月の会議で詳細な計画を発表します。",
    questions: [
      {
        q: "What is the speaker mainly discussing?",
        choices: [
          "Results of a customer survey",
          "The opening of a new store",
          "A change in company leadership",
          "Quarterly sales figures"
        ],
        answer: 0,
        explanation: "customer satisfaction survey results(顧客満足度調査の結果)についての報告が話の中心。"
      },
      {
        q: "According to the speaker, why did delivery speed improve?",
        choices: [
          "More drivers were hired.",
          "A new distribution center opened.",
          "A new delivery company was contracted.",
          "Packaging was redesigned."
        ],
        answer: 1,
        explanation: "thanks to the new distribution center we opened in March(3月に開設した新物流センターのおかげ)が根拠。"
      },
      {
        q: "What will Maria do next month?",
        choices: [
          "Train new employees",
          "Open a distribution center",
          "Present a plan",
          "Visit a customer"
        ],
        answer: 2,
        explanation: "she'll present a detailed plan at our meeting next month(来月の会議で詳細な計画を発表する)が根拠。"
      }
    ]
  },
  {
    id: "p4-05",
    title: "トーク 5(空港アナウンス・図表問題)",
    graphic: "Departures\n1. Flight 118 — Boston — Gate 4\n2. Flight 205 — Denver — Gate 9\n3. Flight 310 — Chicago — Gate 15\n4. Flight 442 — Miami — Gate 21",
    audio: [
      { speaker: "W", text: "Attention, passengers on Flight three ten to Chicago. Due to maintenance work near the boarding area, your departure gate has been changed. Please proceed to Gate twenty-six, located next to the food court. Boarding will begin as scheduled at four forty-five. Also, please note that this flight is now expected to arrive in Chicago about twenty minutes ahead of schedule, thanks to favorable winds. We apologize for the inconvenience and thank you for your patience." }
    ],
    translation: "【図表】出発案内/118便ボストン行き:4番ゲート/205便デンバー行き:9番ゲート/310便シカゴ行き:15番ゲート/442便マイアミ行き:21番ゲート\nシカゴ行き310便をご利用のお客様にご案内いたします。搭乗エリア付近の保守作業のため、出発ゲートが変更になりました。フードコート隣の26番ゲートへお進みください。ご搭乗は予定通り4時45分に開始します。また、この便は追い風の影響で、シカゴには予定より約20分早く到着する見込みです。ご不便をおかけして申し訳ございません。ご協力に感謝いたします。",
    questions: [
      {
        q: "Look at the graphic. Which gate information is no longer correct?",
        choices: ["Gate 4", "Gate 9", "Gate 15", "Gate 21"],
        answer: 2,
        explanation: "図表問題。音声で『シカゴ行き310便のゲートが26番に変更』と言っており、図表で310便に対応するのは15番ゲート。図表と音声の両方が必要な問題。"
      },
      {
        q: "Why has the gate been changed?",
        choices: [
          "Because of bad weather",
          "Because of maintenance work",
          "Because of a late arrival",
          "Because of a security check"
        ],
        answer: 1,
        explanation: "Due to maintenance work near the boarding area が根拠。"
      },
      {
        q: "What does the speaker say about the arrival time?",
        choices: [
          "The flight will arrive about twenty minutes early.",
          "The flight will arrive about twenty minutes late.",
          "The arrival time has not been decided.",
          "The arrival time is unchanged."
        ],
        answer: 0,
        explanation: "twenty minutes ahead of schedule(予定より20分早く)が根拠。ahead of schedule = early。"
      }
    ]
  },
  {
    id: "p4-06",
    title: "トーク 6(ツアーガイド)",
    audio: [
      { speaker: "M", text: "Good morning, everyone, and welcome to the Harlow Museum of Modern Art. Before we begin, a few reminders. Photography is allowed in most galleries, but please turn off your flash — it can damage the artwork over time. We'll start our tour in the east wing, where the new glass sculpture exhibit opened just last week, and we'll finish in the main hall around noon. After the tour, don't forget to stop by the gift shop. Show your tour ticket at the register, and you'll receive fifteen percent off any purchase. Now, if you'll follow me, let's get started." }
    ],
    translation: "皆さま、おはようございます。ハーロウ現代美術館へようこそ。始める前に、いくつかご案内があります。ほとんどの展示室で写真撮影は可能ですが、フラッシュはお切りください——長期的に作品を傷める恐れがあります。ツアーは東棟から始めます。先週オープンしたばかりのガラス彫刻の新しい展示があります。そして正午ごろ、メインホールで終了します。ツアーの後は、ぜひギフトショップにお立ち寄りください。レジでツアーチケットをご提示いただくと、どの商品も15パーセント引きになります。それでは、私についてきてください。始めましょう。",
    questions: [
      {
        q: "What does the speaker remind the listeners to do?",
        choices: [
          "Keep their voices down",
          "Turn off their camera flashes",
          "Stay with the group",
          "Leave bags at the entrance"
        ],
        answer: 1,
        explanation: "please turn off your flash(フラッシュを切ってください)が根拠。理由(作品を傷める)も添えられている。"
      },
      {
        q: "Where will the tour begin?",
        choices: [
          "In the main hall",
          "At the gift shop",
          "In the east wing",
          "At the café"
        ],
        answer: 2,
        explanation: "We'll start our tour in the east wing が根拠。main hall は終了場所でひっかけ。"
      },
      {
        q: "How can the listeners receive a discount?",
        choices: [
          "By joining a membership program",
          "By showing a ticket",
          "By completing a survey",
          "By booking online"
        ],
        answer: 1,
        explanation: "Show your tour ticket at the register, and you'll receive fifteen percent off が根拠。"
      }
    ]
  },
  {
    id: "p4-07",
    title: "トーク 7(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this message is for Kevin Brooks. This is Amanda Reyes calling from Northgate Publishing about the graphic designer position you applied for. We were impressed with your application, and we'd like to invite you for an interview next Tuesday, July eighth, at ten A.M. at our downtown office. Please bring a portfolio of your recent work and a list of two professional references. Also, could you call me back by Wednesday to confirm the time? My direct number is five five five, two nine eight four. I look forward to meeting you." }
    ],
    translation: "もしもし、ケビン・ブルックス様への伝言です。ノースゲート出版のアマンダ・レイエスと申します。ご応募いただいたグラフィックデザイナー職の件でお電話しました。ご応募内容を高く評価しており、来週火曜日、7月8日の午前10時に、当社ダウンタウンオフィスでの面接にお越しいただきたく存じます。最近の作品のポートフォリオと、職務上の推薦者2名のリストをお持ちください。また、時間の確認のため、水曜日までに折り返しお電話いただけますか? 私の直通番号は555-2984です。お会いできるのを楽しみにしております。",
    questions: [
      {
        q: "Which position did the listener apply for?",
        choices: [
          "Sales representative",
          "Graphic designer",
          "Editor",
          "Receptionist"
        ],
        answer: 1,
        explanation: "the graphic designer position you applied for が根拠。出版社(publishing)からの連想で editor を選ばせるひっかけ。"
      },
      {
        q: "What is the listener asked to bring?",
        choices: [
          "A completed application form",
          "Samples of his work",
          "A photo ID",
          "A salary history"
        ],
        answer: 1,
        explanation: "a portfolio of your recent work(最近の作品のポートフォリオ)が Samples of his work に言い換えられている。"
      },
      {
        q: "Why should the listener call back by Wednesday?",
        choices: [
          "To confirm a meeting time",
          "To ask about the salary",
          "To update his address",
          "To request directions"
        ],
        answer: 0,
        explanation: "call me back by Wednesday to confirm the time が根拠。"
      }
    ]
  },
  {
    id: "p4-08",
    title: "トーク 8(ラジオ交通情報)",
    audio: [
      { speaker: "M", text: "Good morning, this is Dave Carter with your seven-o'clock traffic update on Radio Eighty-Eight. If you're heading downtown this morning, expect delays on the Harbor Bridge — the left lane is closed for repair work through the end of the week. City officials recommend taking the Route Nine tunnel instead, which is moving smoothly right now. Also, a reminder that the summer music festival kicks off in Redwood Park this evening at six. Streets around the park will be closed to traffic from four P.M. So plan to use public transportation if you're attending. I'll be back with another update at seven thirty." }
    ],
    translation: "おはようございます。ラジオ88、7時の交通情報、デイブ・カーターです。今朝ダウンタウン方面へ向かう方は、ハーバーブリッジの渋滞にご注意ください——補修工事のため、左車線が今週末まで閉鎖されています。市当局は、現在スムーズに流れているルート9トンネルの利用を勧めています。また、今晩6時からレッドウッド公園でサマー・ミュージック・フェスティバルが開幕します。公園周辺の道路は午後4時から通行止めになりますので、お出かけの方は公共交通機関をご利用ください。次の更新は7時30分です。",
    questions: [
      {
        q: "What is causing delays on the Harbor Bridge?",
        choices: [
          "A traffic accident",
          "Repair work",
          "A public event",
          "Heavy snow"
        ],
        answer: 1,
        explanation: "the left lane is closed for repair work が根拠。イベント(フェスティバル)は公園周辺の話でひっかけ。"
      },
      {
        q: "What does the speaker recommend?",
        choices: [
          "Taking a tunnel",
          "Leaving home earlier",
          "Working from home",
          "Checking a Web site"
        ],
        answer: 0,
        explanation: "City officials recommend taking the Route Nine tunnel instead が根拠。"
      },
      {
        q: "According to the speaker, what will happen at 4 P.M.?",
        choices: [
          "A festival will begin.",
          "Some streets will be closed.",
          "A bridge will reopen.",
          "A radio program will end."
        ],
        answer: 1,
        explanation: "Streets around the park will be closed to traffic from four P.M. が根拠。フェスティバル開始は6時なので(A)はひっかけ。"
      }
    ]
  },
  {
    id: "p4-09",
    title: "トーク 9(会議の抜粋・図表問題)",
    graphic: "Staff Meeting Agenda — April 4\n1. Budget review (9:00)\n2. New employee introductions (9:30)\n3. Web site redesign (10:00)\n4. Customer feedback results (10:30)",
    audio: [
      { speaker: "W", text: "Before we get started, one change to today's agenda. Devon, who's been leading the Web site redesign, is out sick today, so we'll postpone that discussion until he's back next week. Everything else stays the same, which means we'll move straight from the new employee introductions to the customer feedback results at ten. Speaking of which, please have a quick look at the feedback summary I e-mailed you yesterday — we'll be voting on two of its recommendations, and I'd like everyone's input. All right, let's begin with the budget." }
    ],
    translation: "【図表】スタッフ会議 議題(4月4日)/1. 予算レビュー(9:00)/2. 新入社員紹介(9:30)/3. ウェブサイト刷新(10:00)/4. 顧客フィードバック結果(10:30)\n始める前に、今日の議題に1つ変更があります。ウェブサイト刷新を主導してきたデヴォンが今日は病欠なので、その議論は彼が戻る来週まで延期します。それ以外は変更ありません。つまり、新入社員紹介から10時の顧客フィードバック結果へ直接進みます。それに関連して、昨日メールしたフィードバック要約にざっと目を通しておいてください——その提言のうち2つを採決しますので、全員の意見が欲しいのです。では、予算から始めましょう。",
    questions: [
      {
        q: "Look at the graphic. Which agenda item will be postponed?",
        choices: [
          "Budget review",
          "New employee introductions",
          "Web site redesign",
          "Customer feedback results"
        ],
        answer: 2,
        explanation: "図表問題。音声の『デヴォンが病欠なのでその議論は延期』と、彼が主導する Web site redesign を図表で確認する。"
      },
      {
        q: "Why will an item be postponed?",
        choices: [
          "A meeting room is unavailable.",
          "An employee is absent.",
          "A report is incomplete.",
          "The budget was cut."
        ],
        answer: 1,
        explanation: "Devon ... is out sick today(病欠)が根拠。out sick が absent に言い換えられている。"
      },
      {
        q: "What are the listeners asked to do?",
        choices: [
          "Read a summary that was e-mailed",
          "Vote by e-mail",
          "Introduce themselves",
          "Submit budget requests"
        ],
        answer: 0,
        explanation: "please have a quick look at the feedback summary I e-mailed you yesterday が根拠。採決は会議中に行うので(B)はひっかけ。"
      }
    ]
  },
  {
    id: "p4-10",
    title: "トーク 10(スピーチ)",
    audio: [
      { speaker: "M", text: "Thank you all for coming tonight. As you know, we're here to celebrate Margaret Liu, who is retiring after twenty-five years with Fairbanks Logistics. Margaret joined us as a part-time clerk and worked her way up to director of the warehouse division, where she introduced the barcode system that cut our shipping errors in half. On behalf of everyone at the company, we'd like to present her with this plaque and a travel voucher — we hear she's planning a long trip to Spain. Margaret, would you come up and say a few words?" }
    ],
    translation: "今夜はお集まりいただきありがとうございます。ご存じの通り、フェアバンクス・ロジスティクスに25年勤め、退職されるマーガレット・リュウさんをお祝いする会です。マーガレットはパートタイム事務員として入社し、倉庫部門の部長にまで昇進しました。そこで彼女が導入したバーコードシステムは、出荷ミスを半分に減らしました。会社を代表して、この記念の盾と旅行券を贈呈します——スペインへの長期旅行を計画されていると聞いています。マーガレット、前に出て一言お願いできますか?",
    questions: [
      {
        q: "How long has Ms. Liu worked at the company?",
        choices: [
          "15 years",
          "20 years",
          "25 years",
          "30 years"
        ],
        answer: 2,
        explanation: "retiring after twenty-five years が根拠。数字の聞き取り問題。"
      },
      {
        q: "According to the speaker, what did Ms. Liu introduce?",
        choices: [
          "A training program",
          "A barcode system",
          "A delivery service",
          "An employee award"
        ],
        answer: 1,
        explanation: "she introduced the barcode system that cut our shipping errors in half が根拠。"
      },
      {
        q: "What will Ms. Liu most likely do next?",
        choices: [
          "Present a plaque",
          "Book a flight",
          "Make a short speech",
          "Announce a promotion"
        ],
        answer: 2,
        explanation: "最後の would you come up and say a few words?(前に出て一言)が根拠。say a few words が make a short speech に言い換えられている。"
      }
    ]
  }
];
