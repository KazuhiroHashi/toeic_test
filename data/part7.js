// Part 7: 読解問題
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part7 = [
  {
    id: "p7-01",
    title: "文書 1(テキストメッセージのやり取り)",
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
    title: "文書 2(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "SUMMIT COWORKING — Now Open in the Harbor District\n\nLooking for a professional workspace without the cost of a long-term lease? Summit Coworking offers flexible plans for freelancers, startups, and remote workers.\n\nMembership Options:\n1. Day Pass ($25) — Access to shared desks, 9 A.M.–6 P.M.\n2. Flex Plan ($180/month) — 24-hour access to shared desks, 4 hours of meeting-room use per month\n3. Dedicated Desk ($320/month) — Your own reserved desk, 24-hour access, 10 hours of meeting-room use per month, free locker\n4. Private Office ($750/month) — Lockable office for up to 4 people, unlimited meeting-room use, dedicated phone line\n\nAll plans include high-speed Internet, free coffee, and printing services (up to 100 pages per month).\n\nGrand-opening special: Sign up for any monthly plan before July 31 and receive your second month at half price. Book a free tour at www.summitcoworking.com.",
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
    title: "文書 3(Eメール)",
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
    id: "p7-04",
    title: "文書 4(ダブルパッセージ:お知らせ+Eメール)",
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
        choices: [
          "inexpensive", "available", "profitable", "comfortable"
        ],
        answer: 0,
        explanation: "語彙問題。affordable(手頃な価格の)= inexpensive(安価な)。250ドルという最安プランを指している文脈からも判断できる。"
      }
    ]
  }
];
