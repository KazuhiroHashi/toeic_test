// Part 7: 読解問題(本番と同じ構成:シングル10文書29問+ダブル2セット10問+トリプル3セット15問=54問)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part7 = [
  {
    id: "s4p7-01",
    title: "シングル 1(テキストメッセージのやり取り)",
    passages: [
      {
        docType: "Text-message chain",
        text: "Nadia Foster (11:02 A.M.)\nHi Greg, the sandwich platters for the 12:30 lunch just left our kitchen. Traffic on Route 9 is heavy, so we may be about ten minutes late.\n\nGreg Holt (11:05 A.M.)\nThat's cutting it close. The board members arrive at 12:15 and expect food on the tables.\n\nNadia Foster (11:07 A.M.)\nUnderstood. I can send the driver through the Elm Street back entrance to save time. Will someone be there to let him in?\n\nGreg Holt (11:09 A.M.)\nI'll have our receptionist, Priya, waiting at the loading dock from 12:00.\n\nNadia Foster (11:10 A.M.)\nPerfect. He'll also need a cart — the platters are heavy.\n\nGreg Holt (11:11 A.M.)\nWe have one by the dock. Priya will have it ready.\n\nNadia Foster (11:12 A.M.)\nGreat. I'll text you when he's five minutes out."
      }
    ],
    translation: "ナディア・フォスター(午前11:02):グレッグ、12時半のランチ用のサンドイッチの大皿が今、厨房を出ました。9号線が渋滞しているので、10分ほど遅れるかもしれません。\nグレッグ・ホルト(午前11:05):それはギリギリだな。役員が12時15分に到着して、テーブルに食事が並んでいるものと思っている。\nナディア・フォスター(午前11:07):承知しました。時間短縮のため、ドライバーをエルム通りの裏口に回すこともできます。中に入れてくれる人はいますか?\nグレッグ・ホルト(午前11:09):受付のプリヤを12時から荷さばき場で待たせておくよ。\nナディア・フォスター(午前11:10):完璧です。あと、カートも必要になります——大皿は重いので。\nグレッグ・ホルト(午前11:11):荷さばき場のそばに1台ある。プリヤが用意しておく。\nナディア・フォスター(午前11:12):よかった。あと5分の地点に来たらメッセージします。",
    questions: [
      {
        q: "Why did Ms. Foster contact Mr. Holt?",
        choices: [
          "To cancel a lunch order",
          "To warn about a possible delay",
          "To request a change to the menu",
          "To confirm a payment"
        ],
        answer: 1,
        explanation: "最初のメッセージで『渋滞のため10分ほど遅れるかもしれない』と伝えている。遅延の可能性を知らせる連絡=warn about a possible delay。"
      },
      {
        q: "At 11:09 A.M., what does Mr. Holt mean when he writes, \"I'll have our receptionist, Priya, waiting at the loading dock from 12:00\"?",
        choices: [
          "He will collect the food himself.",
          "Priya will be there to let the driver in.",
          "The lunch has been moved to a later time.",
          "Priya will prepare the platters."
        ],
        answer: 1,
        explanation: "意図問題。直前でナディアが『中に入れてくれる人はいるか』と尋ねているので、『プリヤが待機している=ドライバーを入れる人がいる』という返答だと分かる。"
      },
      {
        q: "What does Ms. Foster say the driver will need?",
        choices: [
          "A parking permit",
          "A cart",
          "An access code",
          "A second driver"
        ],
        answer: 1,
        explanation: "He'll also need a cart — the platters are heavy(大皿が重いのでカートが必要)が根拠。"
      }
    ]
  },
  {
    id: "s4p7-02",
    title: "シングル 2(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "LINGUABRIDGE — Learn a Language with Real Tutors, Online\n\nPlans:\n1. Starter ($0) — Access to self-study lessons and vocabulary games only\n2. Basic ($29/month) — Self-study lessons plus two 30-minute live tutor sessions per month\n3. Plus ($59/month) — Everything in Basic, plus four 45-minute live sessions and monthly progress reports\n4. Pro ($99/month) — Unlimited live sessions, priority booking, and a certificate on course completion\n\nAll paid plans include access to 15 languages and downloadable lesson materials.\n\nSpring promotion: Subscribe to any paid plan before April 30 and get your first month at 50% off. Refer a friend and you both receive a free week."
      }
    ],
    translation: "リンガブリッジ——本物のチューターと学ぶ、オンライン語学\n\nプラン:\n1. スターター(0ドル)——自習レッスンと単語ゲームのみ利用可\n2. ベーシック(月29ドル)——自習レッスンに加え、月2回の30分ライブ授業\n3. プラス(月59ドル)——ベーシックの全内容に加え、月4回の45分ライブ授業と月次の進捗レポート\n4. プロ(月99ドル)——ライブ授業無制限、優先予約、コース修了時の修了証\n\n有料プランはすべて、15言語へのアクセスとダウンロード可能な教材が含まれます。\n\n春のキャンペーン:4月30日までに有料プランに申し込むと、初月が50%オフ。友達を紹介すると、二人とも1週間無料になります。",
    questions: [
      {
        q: "For whom is the advertisement most likely intended?",
        choices: [
          "People who want to learn a language",
          "Professional translators",
          "Owners of language schools",
          "Travel agents"
        ],
        answer: 0,
        explanation: "冒頭の Learn a Language with Real Tutors と自習・ライブ授業のプラン紹介から、語学を学びたい個人向けの広告だと分かる。"
      },
      {
        q: "What is included in the Plus plan but NOT in the Basic plan?",
        choices: [
          "Access to 15 languages",
          "Downloadable materials",
          "Monthly progress reports",
          "Self-study lessons"
        ],
        answer: 2,
        explanation: "NOT型の比較問題。進捗レポート(progress reports)はプラス以上のみ。15言語・教材は全有料プラン共通、自習レッスンはベーシックにも含まれるのでひっかけ。"
      },
      {
        q: "How can a subscriber receive a free week?",
        choices: [
          "By subscribing before April 30",
          "By referring a friend",
          "By completing a course",
          "By upgrading to the Pro plan"
        ],
        answer: 1,
        explanation: "Refer a friend and you both receive a free week(友達紹介で二人とも1週間無料)が根拠。4月30日までの申込は『初月50%オフ』の条件なのでひっかけ。"
      }
    ]
  },
  {
    id: "s4p7-03",
    title: "シングル 3(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Owen Blackwood, Facilities Team\nTo: All Staff\nSubject: Office move to the Chestnut Tower — what you need to know\nDate: February 5\n\nDear colleagues,\n\nOur company will relocate from the Aldgate Building to the 14th floor of the Chestnut Tower on the weekend of March 14–15. Normal work resumes at the new address on Monday, March 16.\n\nTo make the move smooth, please do the following by March 6:\n1. Label all personal boxes with your name and current desk number.\n2. Back up any files stored locally on your computer to the shared drive.\n3. Return any borrowed equipment to the IT room on the 3rd floor.\n\nDesks at the new office are assigned by team; a seating map will be circulated next week. Note that the Chestnut Tower operates a clear-desk policy, so personal items must fit in one drawer unit.\n\nThe tower is a seven-minute walk from Riverside Station. Parking is not provided, but a discounted rate is available at the Miller Street garage for employees who register by March 10.\n\nOwen Blackwood"
      }
    ],
    translation: "差出人:オーウェン・ブラックウッド(施設チーム)\n宛先:全社員\n件名:チェスナット・タワーへのオフィス移転——知っておくべきこと\n日付:2月5日\n\n同僚の皆様\n\n当社は3月14〜15日の週末に、アルドゲート・ビルからチェスナット・タワー14階へ移転します。新住所での通常業務は3月16日(月)から再開します。\n\n移転を円滑にするため、3月6日までに以下をお願いします:\n1. すべての私物の箱に、氏名と現在のデスク番号を記入する。\n2. パソコンのローカルに保存したファイルを共有ドライブにバックアップする。\n3. 借りている機材を3階のIT室に返却する。\n\n新オフィスのデスクはチームごとに割り当てられ、座席表は来週配布します。チェスナット・タワーはクリアデスク方針を採用しているため、私物は引き出し1つに収まる必要があります。\n\nタワーはリバーサイド駅から徒歩7分です。駐車場の提供はありませんが、3月10日までに登録した社員は、ミラー通りの駐車場の割引料金を利用できます。\n\nオーウェン・ブラックウッド",
    questions: [
      {
        q: "What is the main purpose of the e-mail?",
        choices: [
          "To announce a new hiring policy",
          "To give instructions about an office move",
          "To introduce a parking service",
          "To schedule a team meeting"
        ],
        answer: 1,
        explanation: "移転の日程と『3月6日までにお願いすること』の一覧が中心で、オフィス移転に関する指示が主目的。"
      },
      {
        q: "What is indicated about the Chestnut Tower office?",
        choices: [
          "It provides free parking.",
          "It follows a clear-desk policy.",
          "It is located on the 3rd floor.",
          "It opens to staff on March 14."
        ],
        answer: 1,
        explanation: "the Chestnut Tower operates a clear-desk policy が根拠。3階はIT室、通常業務再開は3月16日なのでひっかけ。"
      },
      {
        q: "What can employees do by March 10?",
        choices: [
          "Choose their new desk",
          "Register for discounted parking",
          "Return borrowed equipment",
          "Back up their files"
        ],
        answer: 1,
        explanation: "a discounted rate ... for employees who register by March 10(3月10日までの登録で駐車場割引)が根拠。機材返却とバックアップは3月6日が期限でひっかけ。"
      }
    ]
  },
  {
    id: "s4p7-04",
    title: "シングル 4(お知らせ)",
    passages: [
      {
        docType: "Notice",
        text: "GREENFIELD RECYCLING CENTER — Updated Hours Notice\n\nBeginning September 1, the Greenfield Recycling Center will extend its weekday hours to 7 A.M.–7 P.M. to serve residents who cannot visit during the day. Saturday hours remain 8 A.M.–4 P.M., and the center will continue to be closed on Sundays.\n\nA new drop-off area for electronic waste — batteries, cables, and small devices — will open near Gate B. Large appliances such as refrigerators still require an appointment, which can be booked at greenfieldrecycles.gov.\n\nResidents must show proof of address, such as a utility bill, at the entrance."
      }
    ],
    translation: "グリーンフィールド・リサイクルセンター——営業時間変更のお知らせ\n\n9月1日より、日中に来られない住民の方のため、平日の営業時間を午前7時〜午後7時に延長します。土曜日は午前8時〜午後4時のまま、日曜日は引き続き休業です。\n\n電子廃棄物(電池、ケーブル、小型機器)の新しい持ち込みエリアが、B門付近にオープンします。冷蔵庫などの大型家電は引き続き予約が必要で、greenfieldrecycles.gov から予約できます。\n\n住民の方は入口で、公共料金の請求書など、住所を証明するものをご提示ください。",
    questions: [
      {
        q: "What is the purpose of the notice?",
        choices: [
          "To advertise a new recycling center",
          "To announce a change in operating hours",
          "To recruit volunteers",
          "To explain a new fee"
        ],
        answer: 1,
        explanation: "冒頭で『9月1日から平日の営業時間を延長する』と告げており、営業時間の変更が主目的。"
      },
      {
        q: "What is indicated about large appliances?",
        choices: [
          "They cannot be accepted.",
          "They require an appointment.",
          "They are dropped off at Gate B.",
          "They can only be brought on Saturdays."
        ],
        answer: 1,
        explanation: "Large appliances ... still require an appointment(大型家電は予約が必要)が根拠。B門は電子廃棄物のエリアなのでひっかけ。"
      }
    ]
  },
  {
    id: "s4p7-05",
    title: "シングル 5(オンラインチャット)",
    passages: [
      {
        docType: "Online chat",
        text: "Tomás Ibarra (9:41 A.M.)\nHi, I can't log in to the travel-booking system. It keeps saying \"account locked.\"\n\nHelen Zhou (9:42 A.M.)\nThat usually happens after three wrong password attempts. When did you last change your password?\n\nTomás Ibarra (9:43 A.M.)\nProbably three months ago. Maybe it expired?\n\nHelen Zhou (9:44 A.M.)\nLikely. I'll send a reset link to your work e-mail now. Click it within 15 minutes or it expires.\n\nTomás Ibarra (9:45 A.M.)\nGot it. I need to book a flight before the fares go up at noon.\n\nHelen Zhou (9:46 A.M.)\nYou'll be fine — the link is on its way. Let me know if it doesn't arrive."
      }
    ],
    translation: "トマス・イバラ(午前9:41):すみません、出張予約システムにログインできません。『アカウントがロックされています』と出続けます。\nヘレン・ゾウ(午前9:42):それはたいてい、パスワードを3回間違えると起きます。最後にパスワードを変えたのはいつですか?\nトマス・イバラ(午前9:43):たぶん3か月前です。期限切れかも?\nヘレン・ゾウ(午前9:44):おそらくそうですね。今、リセットのリンクを会社のメールに送ります。15分以内にクリックしてください、切れてしまうので。\nトマス・イバラ(午前9:45):了解です。正午に運賃が上がる前に航空券を予約しないといけなくて。\nヘレン・ゾウ(午前9:46):大丈夫ですよ——リンクはもう送っています。届かなかったら教えてください。",
    questions: [
      {
        q: "Why did Mr. Ibarra contact Ms. Zhou?",
        choices: [
          "To reset a colleague's account",
          "Because he could not access a system",
          "To report a billing error",
          "To cancel a flight"
        ],
        answer: 1,
        explanation: "最初のメッセージ I can't log in ... account locked(ログインできず、ロックされている)が根拠。システムにアクセスできないための連絡。"
      },
      {
        q: "At 9:46 A.M., what does Ms. Zhou most likely mean when she writes, \"You'll be fine\"?",
        choices: [
          "The system error is not serious.",
          "He will be able to book before the deadline.",
          "She will book the flight for him.",
          "The reset link never expires."
        ],
        answer: 1,
        explanation: "意図問題。直前でトマスが『正午の値上げ前に予約したい』と心配しているので、『(リンクは送ったから)間に合う=期限前に予約できる』という励ましだと分かる。"
      }
    ]
  },
  {
    id: "s4p7-06",
    title: "シングル 6(記事)",
    passages: [
      {
        docType: "Article",
        text: "MAPLETON (March 15) — Mapleton Regional Airport announced on Tuesday that it will begin daily nonstop flights to Denver starting June 1, its first direct route to a major western hub. The service will be operated by Cascade Air using 76-seat regional jets.\n\nAirport officials expect the route to attract business travelers, who currently face a connection in Chicago that adds up to three hours to the journey. \"Cutting out that layover is a real advantage for our local companies,\" said airport director Lorna Pike. Passenger numbers at Mapleton have risen 12 percent over the past two years.\n\nIntroductory one-way fares start at $89 if booked before May 1. Cascade Air also plans to add a second daily flight in the fall if demand is strong."
      }
    ],
    translation: "メープルトン(3月15日)——メープルトン地方空港は火曜日、6月1日からデンバー行きの毎日運航のノンストップ便を開始すると発表した。西部の主要拠点への同空港初の直行便となる。運航はカスケード航空が担い、76席の地域ジェット機を使用する。\n\n空港関係者は、この路線がビジネス客を引きつけると期待している。現在ビジネス客は、シカゴでの乗り継ぎに直面しており、移動時間が最大3時間増えている。『あの乗り継ぎをなくせるのは、地元企業にとって大きな利点です』と空港長のローナ・パイク氏は述べた。メープルトンの旅客数は、過去2年で12パーセント増加している。\n\n導入時の片道運賃は、5月1日までの予約で89ドルから。カスケード航空は、需要が強ければ秋に1日2便目を追加する計画だ。",
    questions: [
      {
        q: "What is the article mainly about?",
        choices: [
          "A new flight route",
          "An airport expansion project",
          "A change in ticket taxes",
          "An airline merger"
        ],
        answer: 0,
        explanation: "第1段落の『デンバー行き直行便を開始する』が記事全体の主題。新しい航空路線(new flight route)への言い換え。"
      },
      {
        q: "What does Ms. Pike suggest about the new route?",
        choices: [
          "It will lower all ticket prices.",
          "It will save time for local businesses.",
          "It will replace the route to Chicago.",
          "It will require larger aircraft."
        ],
        answer: 1,
        explanation: "Cutting out that layover is a real advantage for our local companies(乗り継ぎをなくせるのは地元企業の利点)が根拠。乗り継ぎで最大3時間増えていたので時間の節約になる。"
      },
      {
        q: "How can travelers get the introductory fare?",
        choices: [
          "By booking before May 1",
          "By flying in the fall",
          "By joining a loyalty program",
          "By traveling on weekdays"
        ],
        answer: 0,
        explanation: "Introductory one-way fares start at $89 if booked before May 1 が根拠。秋は2便目追加の話でひっかけ。"
      }
    ]
  },
  {
    id: "s4p7-07",
    title: "シングル 7(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: registrations@datawise-academy.com\nTo: Ms. Carol Nunez\nSubject: Your registration — \"Intro to Data Dashboards\" webinar\nDate: August 3\n\nDear Ms. Nunez,\n\nThank you for registering for our live webinar \"Intro to Data Dashboards,\" scheduled for Thursday, August 14, from 2:00 to 3:30 P.M. Eastern Time. A link to join will be e-mailed to you one hour before the start.\n\nTo get the most out of the session, please install the free DataWise Viewer app before the webinar and download the sample spreadsheet from your account page. You do not need any prior programming experience.\n\nThe session will be recorded. If you cannot attend live, the recording will be available in your account for 30 days afterward.\n\nParticipants who complete the optional follow-up quiz will receive a certificate of completion, which many employers accept toward professional development credits.\n\nWe look forward to seeing you online."
      }
    ],
    translation: "差出人:registrations@datawise-academy.com\n宛先:キャロル・ヌニェス様\n件名:ご登録のお知らせ——『データダッシュボード入門』ウェビナー\n日付:8月3日\n\nヌニェス様\n\nライブウェビナー『データダッシュボード入門』にご登録いただきありがとうございます。開催は8月14日(木)午後2時〜3時30分(東部時間)です。参加リンクは開始1時間前にメールでお送りします。\n\nセッションを最大限に活かすため、ウェビナー前に無料の DataWise Viewer アプリをインストールし、アカウントページからサンプルの表計算ファイルをダウンロードしてください。事前のプログラミング経験は不要です。\n\nセッションは録画されます。ライブで参加できない場合、録画は終了後30日間、アカウント内でご覧いただけます。\n\n任意のフォローアップ小テストを完了した参加者には修了証が発行され、多くの雇用主がこれを専門能力開発の単位として認めています。\n\nオンラインでお会いできるのを楽しみにしています。",
    questions: [
      {
        q: "What is the purpose of the e-mail?",
        choices: [
          "To advertise a software product",
          "To confirm a registration",
          "To reschedule an event",
          "To request a payment"
        ],
        answer: 1,
        explanation: "Thank you for registering ... とウェビナーの日時・準備事項を伝えているので、登録確認が目的。"
      },
      {
        q: "What is Ms. Nunez asked to do before the webinar?",
        choices: [
          "Complete a quiz",
          "Install a viewer app",
          "Write a program",
          "Pay a fee"
        ],
        answer: 1,
        explanation: "please install the free DataWise Viewer app before the webinar が根拠。小テストは終了後の任意課題なのでひっかけ。"
      },
      {
        q: "How can a participant receive a certificate?",
        choices: [
          "By attending live",
          "By completing a follow-up quiz",
          "By installing the app",
          "By watching the recording"
        ],
        answer: 1,
        explanation: "Participants who complete the optional follow-up quiz will receive a certificate(小テスト完了で修了証)が根拠。"
      }
    ]
  },
  {
    id: "s4p7-08",
    title: "シングル 8(手紙)",
    passages: [
      {
        docType: "Letter",
        text: "Dear Mr. Feldman,\n\nThank you for your letter of May 8 informing us that your copies of Coastal Living Monthly stopped arriving after the March issue. We apologize for the interruption, which was caused by an error when our distribution center switched to a new mailing system in April.\n\nOur records show that your subscription is paid through December, so no further payment is due. The April and May issues have been re-sent by first-class mail and should reach you within five business days. To make up for the missed issues, we have extended your subscription by two months at no charge, so it will now run through February.\n\nWe have also enclosed a voucher for our online store, redeemable for any single item up to $25. Simply enter the code printed below at checkout before the end of this year.\n\nWe appreciate your patience and are glad to have you as a reader.\n\nSincerely,\nMarion Delgado\nSubscriber Services, Coastal Living Monthly"
      }
    ],
    translation: "フェルドマン様\n\n5月8日付のお手紙にて、『コースタル・リビング・マンスリー』が3月号を最後に届かなくなったとお知らせいただき、ありがとうございます。当社の配送センターが4月に新しい発送システムへ切り替えた際の手違いによるもので、中断をお詫びいたします。\n\n記録によれば、お客様の購読料は12月まで支払い済みで、追加のお支払いは不要です。4月号と5月号は第一種郵便で再送済みで、5営業日以内に届く見込みです。届かなかった号の埋め合わせとして、購読期間を無料で2か月延長しましたので、今後は2月まで有効となります。\n\nまた、オンラインストアで使えるクーポンを同封しました。25ドルまでの単品1点に利用できます。本年末までに、下記のコードを決済時にご入力ください。\n\nお待たせしたことをお詫びし、読者でいてくださることに感謝申し上げます。\n\n敬具\nマリオン・デルガド\n購読者サービス、コースタル・リビング・マンスリー",
    questions: [
      {
        q: "Why was the letter written?",
        choices: [
          "To respond to a delivery problem",
          "To request a subscription renewal",
          "To announce a price increase",
          "To introduce a new magazine"
        ],
        answer: 0,
        explanation: "3月号以降届かなくなったという手紙への返信で、原因の説明と対応を伝えているので、配送の問題への対応が目的。"
      },
      {
        q: "What caused the problem?",
        choices: [
          "A payment error",
          "A change to a new mailing system",
          "A printing delay",
          "An incorrect address"
        ],
        answer: 1,
        explanation: "an error when our distribution center switched to a new mailing system(新発送システムへの切替時の手違い)が原因。"
      },
      {
        q: "What is indicated about Mr. Feldman's subscription?",
        choices: [
          "It has already expired.",
          "It has been extended at no cost.",
          "It requires immediate payment.",
          "It was canceled at his request."
        ],
        answer: 1,
        explanation: "we have extended your subscription by two months at no charge(無料で2か月延長)が根拠。購読料は12月まで支払い済みで追加支払い不要。"
      },
      {
        q: "What is indicated about the voucher?",
        choices: [
          "It never expires.",
          "It is worth $50.",
          "It can be used for a single item.",
          "It applies to magazine subscriptions."
        ],
        answer: 2,
        explanation: "redeemable for any single item up to $25(25ドルまでの単品1点に使える)が根拠。本年末までという期限があるので『無効期限なし』は誤り。"
      }
    ]
  },
  {
    id: "s4p7-09",
    title: "シングル 9(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "TIMBER & GRAIN WOODWORKING STUDIO — Now Enrolling for Autumn\n\nLearn to build furniture by hand in our fully equipped workshop on Canal Street.\n\nAutumn courses:\n1. Weekend Intro to Woodworking (2 Saturdays) — $120\n2. Build Your Own Bookshelf (4 Tuesdays) — $220\n3. Fine Joinery (6 Wednesdays) — $340\n\nAll courses include tools, timber, and safety gear, and students keep everything they build.\n\nEnrollment offers (before September 15):\n1. 15% off any course\n2. A free set of chisels with the Fine Joinery course\n3. Bring a friend and share a two-person bench for one course fee\n\nSpaces are limited to eight students per class. Visit timberandgrain.com or drop by Tuesday–Saturday, 10 A.M.–6 P.M."
      }
    ],
    translation: "ティンバー&グレイン木工スタジオ——秋期の受講生募集中\n\nキャナル通りの充実した工房で、手作業で家具を作ることを学びましょう。\n\n秋期コース:\n1. 週末・木工入門(土曜2回)——120ドル\n2. 自分だけの本棚づくり(火曜4回)——220ドル\n3. 精密な接ぎ手(水曜6回)——340ドル\n\n全コースに工具・木材・安全用具が含まれ、作ったものはすべて持ち帰れます。\n\n申込特典(9月15日まで):\n1. どのコースも15%オフ\n2. 『精密な接ぎ手』コースにノミのセットを無料進呈\n3. 友達を連れてくれば、2人用の作業台を1コース分の料金で共有可能\n\n定員は1クラス8名です。timberandgrain.com へ、または火曜〜土曜、午前10時〜午後6時にお立ち寄りください。",
    questions: [
      {
        q: "What is NOT included in the courses?",
        choices: [
          "Tools",
          "Timber",
          "Safety gear",
          "Lunch"
        ],
        answer: 3,
        explanation: "NOT問題。All courses include tools, timber, and safety gear とあるが、昼食(lunch)には言及がない。"
      },
      {
        q: "What is offered with the Fine Joinery course?",
        choices: [
          "A free bookshelf",
          "A free set of chisels",
          "A free meal",
          "A discount on tools"
        ],
        answer: 1,
        explanation: "A free set of chisels with the Fine Joinery course(精密接ぎ手コースにノミのセット無料)が根拠。"
      },
      {
        q: "What is indicated about the classes?",
        choices: [
          "They are held on Sundays.",
          "They are limited to eight students.",
          "They are free for beginners.",
          "They all last six weeks."
        ],
        answer: 1,
        explanation: "Spaces are limited to eight students per class(定員は1クラス8名)が根拠。営業は火曜〜土曜なので日曜は誤り。"
      }
    ]
  },
  {
    id: "s4p7-10",
    title: "シングル 10(社内メモ)",
    passages: [
      {
        docType: "Memo",
        text: "MEMO\nTo: All Employees\nFrom: Angela Ruiz, Finance Department\nDate: January 12\nRe: New expense-reporting system\n\nStarting February 1, we will replace our paper expense forms with an online system called SpendTrack. From that date, all reimbursement requests must be submitted through SpendTrack; paper forms will no longer be accepted.\n\nTo prepare, please attend one of the 45-minute training sessions held in Conference Room A during the week of January 20. A sign-up sheet is on the intranet. If none of the times suit you, a recorded version will be posted afterward.\n\nWhen submitting a claim, remember to photograph each receipt and upload it directly in the app. Receipts under $10 no longer require a paper copy. Claims are approved by your line manager and then processed within five business days.\n\nAngela"
      }
    ],
    translation: "メモ\n宛先:全社員\n差出人:アンジェラ・ルイス(経理部)\n日付:1月12日\n件名:新しい経費精算システム\n\n2月1日より、紙の経費申請フォームを SpendTrack というオンラインシステムに置き換えます。その日以降、すべての精算申請は SpendTrack で行う必要があり、紙のフォームは受け付けません。\n\n準備として、1月20日の週に会議室Aで行う45分の研修セッションのいずれかにご参加ください。申込シートはイントラネットにあります。都合の合う時間がなければ、後日、録画版を掲載します。\n\n申請の際は、各領収書を撮影し、アプリに直接アップロードすることを忘れないでください。10ドル未満の領収書は、紙の控えが不要になりました。申請は直属の上司が承認し、その後5営業日以内に処理されます。\n\nアンジェラ",
    questions: [
      {
        q: "What is the purpose of the memo?",
        choices: [
          "To announce a company merger",
          "To introduce a new reporting system",
          "To reduce travel budgets",
          "To schedule performance reviews"
        ],
        answer: 1,
        explanation: "紙のフォームを SpendTrack に置き換えるという告知が主目的。新しい精算システムの導入。"
      },
      {
        q: "What should employees do during the week of January 20?",
        choices: [
          "Submit paper forms",
          "Attend a training session",
          "Meet their line manager",
          "Photograph all past receipts"
        ],
        answer: 1,
        explanation: "please attend one of the 45-minute training sessions ... during the week of January 20(1月20日の週の研修に参加)が根拠。"
      },
      {
        q: "What is indicated about small receipts?",
        choices: [
          "They cannot be claimed.",
          "They do not require a paper copy.",
          "They must be mailed to Finance.",
          "They are approved instantly."
        ],
        answer: 1,
        explanation: "Receipts under $10 no longer require a paper copy(10ドル未満は紙の控え不要)が根拠。"
      }
    ]
  },
  {
    id: "s4p7-11",
    title: "ダブル 1(料金表+Eメール)",
    passages: [
      {
        docType: "Web page",
        text: "RIVERSTONE EVENT RENTALS — Price List\n\nDelivery within 20 km of our depot: free. Beyond 20 km: $2 per additional kilometer.\n\nItems (per day):\n1. Round table (seats 8) — $12\n2. Folding chair — $2\n3. 3m x 6m marquee tent — $90\n4. Portable stage section — $45\n5. PA speaker set — $60\n\nWeekend rentals (Friday–Sunday) are charged as two days regardless of pickup time. A refundable deposit of $100 is required for tents and stages. Please book at least one week ahead; rush orders placed within seven days of the event add a 10% surcharge to the item total."
      },
      {
        docType: "E-mail",
        text: "From: Dev Anand, Bright Meadow Farm\nTo: bookings@riverstonerentals.com\nSubject: Rental for harvest festival\nDate: September 30\n\nHello,\n\nWe are holding our harvest festival on Saturday, October 18, and would like to rent one marquee tent and eight round tables. Our farm is 30 km from your depot. We can receive the delivery any time on Friday and will return everything on Monday.\n\nI'm placing this order today, so I believe we are within your advance-booking window. Please send a total, including the deposit, and let me know your preferred payment method.\n\nThanks,\nDev Anand"
      }
    ],
    translation: "【料金表】リバーストーン・イベントレンタル——料金表\n\n当社倉庫から20km以内の配送:無料。20kmを超える分:1kmあたり2ドル。\n\n品目(1日あたり):\n1. 丸テーブル(8人掛け)——12ドル\n2. 折りたたみ椅子——2ドル\n3. 3m×6m マーキーテント——90ドル\n4. 組み立てステージ1区画——45ドル\n5. PAスピーカーセット——60ドル\n\n週末レンタル(金〜日)は、引き取り時間に関わらず2日分として課金します。テントとステージには100ドルの返金可能な保証金が必要です。少なくとも1週間前にご予約ください。イベントまで7日以内の駆け込み注文には、品目合計に10%の追加料金がかかります。\n\n【Eメール】\n差出人:デヴ・アナンド(ブライトメドウ農園)\n宛先:bookings@riverstonerentals.com\n件名:収穫祭のレンタル\n日付:9月30日\n\nこんにちは。\n\n10月18日(土)に収穫祭を開催予定で、マーキーテント1張りと丸テーブル8卓を借りたいです。当農園は御社の倉庫から30kmです。配送は金曜のいつでも受け取れ、すべて月曜に返却します。\n\n本日注文しますので、事前予約の期間内だと思います。保証金を含めた合計金額と、希望のお支払い方法をお知らせください。\n\nよろしくお願いします。\nデヴ・アナンド",
    questions: [
      {
        q: "What is indicated about weekend rentals?",
        choices: [
          "They are discounted.",
          "They are charged as two days.",
          "They require a larger deposit.",
          "They cannot be delivered."
        ],
        answer: 1,
        explanation: "Weekend rentals ... are charged as two days(週末レンタルは2日分として課金)が根拠。"
      },
      {
        q: "How much will Bright Meadow Farm most likely pay for delivery?",
        choices: [
          "Nothing",
          "$10",
          "$20",
          "$60"
        ],
        answer: 2,
        explanation: "クロスリファレンス問題(計算型)。料金表『20km超は1kmあたり2ドル』+メール『倉庫から30km』を組み合わせ、超過10km×2ドル=20ドル。"
      },
      {
        q: "What is suggested about Mr. Anand's order?",
        choices: [
          "It requires a rush surcharge.",
          "It was placed more than a week before the event.",
          "It will be picked up on Sunday.",
          "It exceeds the delivery limit."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。注文日は9月30日、イベントは10月18日で7日以上前。料金表の駆け込み注文(7日以内)には当たらないので追加料金は不要。"
      },
      {
        q: "How much will the tent and the eight tables cost in total, excluding delivery and the deposit?",
        choices: [
          "$186",
          "$276",
          "$372",
          "$472"
        ],
        answer: 2,
        explanation: "計算型。週末は2日分課金。テント90ドル×2=180ドル、丸テーブル8卓×12ドル=96ドル×2日=192ドル。合計180+192=372ドル。"
      },
      {
        q: "In the Web page, the word \"window\" is closest in meaning to",
        choices: [
          "period",
          "opening",
          "display",
          "opportunity"
        ],
        answer: 0,
        explanation: "語彙問題。advance-booking window(事前予約の期間)の window は period(期間)の意味。"
      }
    ]
  },
  {
    id: "s4p7-12",
    title: "ダブル 2(求人広告+Eメール)",
    passages: [
      {
        docType: "Advertisement",
        text: "JUNIOR WEB DEVELOPER — Meridian Digital, Downtown Office\n\nMeridian Digital, a growing web-design agency, is hiring a full-time junior web developer.\n\nResponsibilities: building client websites, fixing bugs, supporting senior developers\n\nRequirements:\n1. At least one year of experience with HTML and CSS\n2. Familiarity with at least one JavaScript framework\n3. A portfolio of two or more completed projects\n\nNice to have: experience with content management systems.\n\nWe offer a starting salary of $52,000, remote work up to two days a week, and a yearly learning budget of $1,000 for courses and conferences.\n\nSend your résumé and a link to your portfolio to jobs@meridiandigital.com by June 30. Shortlisted candidates will complete a short coding task."
      },
      {
        docType: "E-mail",
        text: "From: Ravi Kapoor\nTo: jobs@meridiandigital.com\nSubject: Junior Web Developer application\nDate: June 22\n\nDear Hiring Team,\n\nI am excited to apply for the junior web developer role. I have worked with HTML and CSS for two years and have built four websites using the React framework, three of which are live and linked in my portfolio (URL below).\n\nAlthough the posting lists content management systems only as a bonus, I have also managed sites on two popular platforms, which I hope strengthens my application. I am comfortable working in the office full time but would value the option to work remotely occasionally.\n\nMy résumé and portfolio link are attached. I look forward to the coding task should I be shortlisted.\n\nBest regards,\nRavi Kapoor"
      }
    ],
    translation: "【求人広告】ジュニア・ウェブ開発者——メリディアン・デジタル、ダウンタウン事務所\n\n成長中のウェブデザイン会社メリディアン・デジタルが、常勤のジュニア・ウェブ開発者を募集します。\n\n職務内容:クライアントのウェブサイト構築、バグ修正、シニア開発者のサポート\n\n応募要件:\n1. HTMLとCSSの経験1年以上\n2. 少なくとも1つのJavaScriptフレームワークに精通していること\n3. 完成プロジェクト2件以上のポートフォリオ\n\nあれば尚可:コンテンツ管理システム(CMS)の経験。\n\n初任給52,000ドル、週最大2日の在宅勤務、講座や学会のための年1,000ドルの学習予算を提供します。\n\n履歴書とポートフォリオのリンクを6月30日までに jobs@meridiandigital.com へお送りください。書類選考通過者には簡単なコーディング課題があります。\n\n【Eメール】\n差出人:ラヴィ・カプーア\n宛先:jobs@meridiandigital.com\n件名:ジュニア・ウェブ開発者への応募\n日付:6月22日\n\n採用ご担当者様\n\nジュニア・ウェブ開発者の職に応募できることを嬉しく思います。私はHTMLとCSSを2年間扱い、Reactフレームワークで4つのウェブサイトを構築しました。うち3つは公開中で、ポートフォリオ(下記URL)にリンクしています。\n\n求人ではCMSの経験は『あれば尚可』とされていますが、私は主要な2つのプラットフォームでサイトを運用した経験もあり、これが応募を後押しするものと期待しています。オフィスでの常勤も問題ありませんが、時折在宅で働ける選択肢があればありがたいです。\n\n履歴書とポートフォリオのリンクを添付します。書類選考を通過できましたら、コーディング課題を楽しみにしています。\n\n敬具\nラヴィ・カプーア",
    questions: [
      {
        q: "What is a requirement for the position?",
        choices: [
          "A university degree",
          "At least one year of experience with HTML and CSS",
          "Five completed projects",
          "Previous management experience"
        ],
        answer: 1,
        explanation: "Requirements の At least one year of experience with HTML and CSS が根拠。ポートフォリオは2件以上でひっかけ。"
      },
      {
        q: "What benefit does Meridian Digital offer?",
        choices: [
          "A company car",
          "A yearly learning budget",
          "Free daily meals",
          "Unlimited vacation"
        ],
        answer: 1,
        explanation: "a yearly learning budget of $1,000(年1,000ドルの学習予算)が根拠。"
      },
      {
        q: "What is suggested about Mr. Kapoor's qualifications?",
        choices: [
          "He lacks enough portfolio projects.",
          "He exceeds the experience requirement.",
          "He cannot work in the office.",
          "He has no framework experience."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。要件は『HTML/CSS 1年以上』、カプーア氏は『2年』の経験があり、要件を上回っている。"
      },
      {
        q: "What optional skill does Mr. Kapoor mention having?",
        choices: [
          "Graphic design",
          "Content management systems",
          "Project management",
          "Database administration"
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。求人の『あれば尚可=CMS経験』に対し、メールで『2つのプラットフォームでサイトを運用した』と述べている。"
      },
      {
        q: "In the e-mail, the word \"strengthens\" is closest in meaning to",
        choices: [
          "improves",
          "weakens",
          "lengthens",
          "replaces"
        ],
        answer: 0,
        explanation: "語彙問題。strengthens my application(応募を後押しする)の strengthens は improves(良くする)に近い。"
      }
    ]
  },
  {
    id: "s4p7-13",
    title: "トリプル 1(パス案内+Eメール+Eメール)",
    passages: [
      {
        docType: "Web page",
        text: "NORTHGATE MARKETING CONFERENCE — June 5–6\n\nPass options:\n1. One-Day Pass ($150) — access to all sessions on your chosen day\n2. Full Conference Pass ($260) — both days, all sessions, lunch included\n3. Student Pass ($90) — both days (valid student ID required at check-in)\n\nOptional add-ons:\n- Networking dinner (evening of June 5) — $40\n- Pre-conference workshop (June 4) — $75\n\nGroups of four or more from the same company receive 15% off Full Conference Passes. Register at northgatemc.com by May 20 to guarantee a printed name badge."
      },
      {
        docType: "E-mail 1",
        text: "From: Sylvia Reed, Crestwave Media\nTo: register@northgatemc.com\nSubject: Group registration\nDate: May 12\n\nHello,\n\nI'd like to register four colleagues, including myself, from Crestwave Media for the full conference. I understand our group qualifies for the company discount. Two of us would also like to attend the networking dinner on the first evening.\n\nCould you confirm the total and whether we'll receive printed badges? We're registering well before your deadline.\n\nThank you,\nSylvia Reed"
      },
      {
        docType: "E-mail 2",
        text: "From: register@northgatemc.com\nTo: Sylvia Reed\nSubject: RE: Group registration\nDate: May 13\n\nDear Ms. Reed,\n\nThank you for registering four Full Conference Passes. With the 15% group discount applied, the passes come to $884, and the two dinner tickets add $80, for a total of $964. Because you registered before May 20, printed name badges are included for all four attendees.\n\nPlease note the networking dinner has limited seating; your two places are now reserved. Payment instructions are attached.\n\nWe look forward to welcoming your team in June.\n\nNorthgate Marketing Conference"
      }
    ],
    translation: "【パス案内】ノースゲート・マーケティング会議——6月5〜6日\n\nパスの種類:\n1. 1日券(150ドル)——選んだ1日の全セッションに参加可\n2. 全会期券(260ドル)——両日・全セッション、昼食付き\n3. 学生券(90ドル)——両日(受付で有効な学生証が必要)\n\n任意の追加オプション:\n・ネットワーキングディナー(6月5日夜)——40ドル\n・事前ワークショップ(6月4日)——75ドル\n\n同一企業から4名以上のグループは、全会期券が15%オフ。印刷済みネームバッジを確実に受け取るには、5月20日までに northgatemc.com で登録してください。\n\n【Eメール1】\n差出人:シルヴィア・リード(クレストウェーブ・メディア)\n宛先:register@northgatemc.com\n件名:グループ登録\n日付:5月12日\n\nこんにちは。\n\nクレストウェーブ・メディアから、私を含む4名の同僚を全会期で登録したいです。当グループは企業割引の対象になると理解しています。うち2名は初日の夜のネットワーキングディナーにも参加したいです。\n\n合計金額と、印刷済みバッジを受け取れるかご確認いただけますか? 締切より十分前に登録しています。\n\nよろしくお願いします。\nシルヴィア・リード\n\n【Eメール2】\n差出人:register@northgatemc.com\n宛先:シルヴィア・リード\n件名:RE: グループ登録\n日付:5月13日\n\nリード様\n\n全会期券4枚のご登録ありがとうございます。15%のグループ割引を適用し、パスは884ドル、ディナー券2枚で80ドルが加わり、合計964ドルです。5月20日より前のご登録のため、4名全員に印刷済みネームバッジが含まれます。\n\nネットワーキングディナーは座席数に限りがあります。お二人分の席は確保済みです。お支払い方法は添付します。\n\n6月に皆様のチームをお迎えできるのを楽しみにしています。\n\nノースゲート・マーケティング会議",
    questions: [
      {
        q: "What is indicated about the Full Conference Pass?",
        choices: [
          "It covers only one day.",
          "It includes lunch.",
          "It requires a student ID.",
          "It includes the pre-conference workshop."
        ],
        answer: 1,
        explanation: "パス案内の Full Conference Pass ... lunch included(昼食付き)が根拠。学生証が必要なのは学生券でひっかけ。"
      },
      {
        q: "Why does Crestwave Media qualify for a discount?",
        choices: [
          "It registered before May 20.",
          "It is registering four or more attendees.",
          "Its staff are students.",
          "It booked the workshop."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。案内『同一企業4名以上で15%オフ』+メール1『4名を登録したい』を組み合わせる。5月20日前の登録はバッジの条件でひっかけ。"
      },
      {
        q: "How much do the four passes cost after the discount?",
        choices: [
          "$780",
          "$884",
          "$964",
          "$1,040"
        ],
        answer: 1,
        explanation: "計算型。全会期券260ドル×4=1,040ドル、15%オフで1,040×0.85=884ドル。964ドルはディナー込みの総額でひっかけ。"
      },
      {
        q: "What is indicated about Ms. Reed's group?",
        choices: [
          "They will attend the workshop.",
          "They will receive printed badges.",
          "They booked student passes.",
          "They cannot attend the dinner."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。案内『5月20日までの登録で印刷済みバッジ』+メール1の日付5月12日・メール2『5月20日前なのでバッジ含む』を組み合わせる。"
      },
      {
        q: "What is NOT stated about the Northgate Marketing Conference?",
        choices: [
          "It takes place over two days.",
          "It offers a pass for students.",
          "It provides lunch to full-pass holders.",
          "It is held entirely online."
        ],
        answer: 3,
        explanation: "NOT問題。会期は2日間、学生券あり、全会期券は昼食付き、はいずれも記載あり。オンライン開催については述べられていない。"
      }
    ]
  },
  {
    id: "s4p7-14",
    title: "トリプル 2(請求書+Eメール+Eメール)",
    passages: [
      {
        docType: "Invoice",
        text: "GREENLEAF LANDSCAPING — Invoice #4820\nClient: Ms. Harriet Cole, 14 Oak Crescent\nService date: April 22\n\n1. Lawn mowing and edging — $60\n2. Hedge trimming (3 hedges) — $90\n3. Flower-bed planting (20 plants) — $140\n4. Green-waste removal — $40\nSubtotal — $330\nRegular-client discount (10%) — –$33\nTotal due — $297\n\nPayment due within 14 days. A late payment adds a $15 fee."
      },
      {
        docType: "E-mail 1",
        text: "From: Harriet Cole\nTo: accounts@greenleaflandscaping.com\nSubject: Invoice #4820\nDate: April 25\n\nHello,\n\nThank you for the tidy work last week. Looking at the invoice, though, I think there's a mistake: we agreed on planting 20 plants, but only 15 were planted — the crew ran out of the lavender. Could you please correct the charge for the flower-bed planting?\n\nAlso, I'd like to book the same team for monthly maintenance. What would that cost?\n\nBest,\nHarriet Cole"
      },
      {
        docType: "E-mail 2",
        text: "From: Greenleaf Landscaping\nTo: Harriet Cole\nSubject: RE: Invoice #4820\nDate: April 26\n\nDear Ms. Cole,\n\nYou're quite right, and we apologize. Our planting charge is $7 per plant, so 15 plants should have been billed at $105, not $140. We have issued a corrected invoice reducing that line by $35; your 10% regular-client discount still applies to the new subtotal.\n\nWe'll deliver and plant the remaining five lavender plants free of charge on our next visit.\n\nFor monthly maintenance (mowing, edging, and hedge care), we charge $130 per visit, with the first month free for existing clients. I'll send a separate agreement if you'd like to proceed.\n\nBest regards,\nGreenleaf Landscaping"
      }
    ],
    translation: "【請求書】グリーンリーフ・ランドスケーピング——請求書 #4820\n顧客:ハリエット・コール様、オーク・クレセント14番地\n作業日:4月22日\n\n1. 芝刈りと縁取り——60ドル\n2. 生け垣の刈り込み(3本)——90ドル\n3. 花壇の植栽(20株)——140ドル\n4. 刈草の処分——40ドル\n小計——330ドル\n常連客割引(10%)——−33ドル\n請求額——297ドル\n\n支払期限は14日以内。支払い遅延には15ドルの手数料が加算されます。\n\n【Eメール1】\n差出人:ハリエット・コール\n宛先:accounts@greenleaflandscaping.com\n件名:請求書 #4820\n日付:4月25日\n\nこんにちは。\n\n先週はきれいに仕上げていただきありがとうございます。ただ、請求書を見ると間違いがあるようです。植栽は20株で合意しましたが、実際は15株しか植えられていません——作業班がラベンダーを切らしてしまって。花壇植栽の料金を訂正していただけますか?\n\nまた、同じチームに月次メンテナンスをお願いしたいのですが、費用はいくらになりますか?\n\nよろしくお願いします。\nハリエット・コール\n\n【Eメール2】\n差出人:グリーンリーフ・ランドスケーピング\n宛先:ハリエット・コール\n件名:RE: 請求書 #4820\n日付:4月26日\n\nコール様\n\nおっしゃる通りで、お詫び申し上げます。当社の植栽料金は1株あたり7ドルですので、15株なら140ドルではなく105ドルで請求すべきでした。当該項目を35ドル減額した訂正請求書を発行しました。10%の常連客割引は新しい小計にも引き続き適用されます。\n\n残りの5株のラベンダーは、次回訪問時に無料でお届けして植えます。\n\n月次メンテナンス(芝刈り・縁取り・生け垣の手入れ)は1回130ドルで、既存のお客様は初月無料です。ご希望でしたら、別途契約書をお送りします。\n\n敬具\nグリーンリーフ・ランドスケーピング",
    questions: [
      {
        q: "What is NOT listed as a service on the invoice?",
        choices: [
          "Lawn mowing",
          "Hedge trimming",
          "Tree removal",
          "Green-waste removal"
        ],
        answer: 2,
        explanation: "NOT問題。請求書には芝刈り・生け垣の刈り込み・花壇植栽・刈草の処分が並ぶ。樹木の伐採(tree removal)は含まれていない。"
      },
      {
        q: "What error does Ms. Cole point out?",
        choices: [
          "The lawn was not mowed.",
          "She was billed for more plants than were planted.",
          "The discount was not applied.",
          "The service date is wrong."
        ],
        answer: 1,
        explanation: "メール1の『20株で合意したが15株しか植えられていない』が根拠。植えた数より多く請求されている。"
      },
      {
        q: "What is the corrected charge for the flower-bed planting?",
        choices: [
          "$105",
          "$140",
          "$35",
          "$297"
        ],
        answer: 0,
        explanation: "クロスリファレンス問題(計算型)。メール2『1株7ドル』+実際に植えた15株から、15×7=105ドル。"
      },
      {
        q: "What will Ms. Cole's new total most likely be after the correction?",
        choices: [
          "$262.00",
          "$264.50",
          "$265.50",
          "$297.00"
        ],
        answer: 2,
        explanation: "計算型。新小計330−35=295ドル。10%割引で29.50ドル引き、295−29.50=265.50ドル。"
      },
      {
        q: "What does Greenleaf Landscaping offer for monthly maintenance?",
        choices: [
          "A 20% discount",
          "The first month free",
          "Free plant delivery on every visit",
          "A fixed annual price"
        ],
        answer: 1,
        explanation: "with the first month free for existing clients(既存客は初月無料)が根拠。"
      }
    ]
  },
  {
    id: "s4p7-15",
    title: "トリプル 3(会員案内+Eメール+Eメール)",
    passages: [
      {
        docType: "Web page",
        text: "WILLOWBROOK ARTS CENTER — Annual Membership\n\n1. Individual ($60/year) — free entry to all exhibitions, 10% off gift-shop purchases\n2. Family ($100/year) — same as Individual for up to four family members, plus four guest passes\n3. Patron ($250/year) — all Family benefits, plus invitations to preview evenings and a 20% class discount\n\nMembers at all levels may enroll in studio classes. Non-members pay full price; the standard fee for a six-week class is $180.\n\nJoin online at willowbrookarts.org. Membership begins on the day you join and renews automatically unless canceled."
      },
      {
        docType: "E-mail 1",
        text: "From: Nathan Poole\nTo: membership@willowbrookarts.org\nSubject: Membership and pottery class\nDate: March 3\n\nHello,\n\nMy partner and I visit your exhibitions often, and our two children enjoy the weekend activities, so a family membership seems right for us. I'd also like to enroll in the six-week evening pottery class.\n\nDoes the class discount apply at the family level, or only at the patron level? And when would our membership start?\n\nThank you,\nNathan Poole"
      },
      {
        docType: "E-mail 2",
        text: "From: Willowbrook Arts Center\nTo: Nathan Poole\nSubject: RE: Membership and pottery class\nDate: March 4\n\nDear Mr. Poole,\n\nA family membership is a great choice for a household of four. Please note that the 20% class discount is a Patron-level benefit; Family members pay the standard class fee. If you plan to take several classes a year, upgrading to Patron may save you money overall.\n\nFor the pottery class specifically, your membership would begin the day you join, so you'd be enrolled as a member. I've held a place for you in the Tuesday evening group, which still has openings.\n\nWarm regards,\nWillowbrook Arts Center"
      }
    ],
    translation: "【会員案内】ウィローブルック・アートセンター——年間会員\n\n1. 個人(年60ドル)——全展覧会の入場無料、ギフトショップ10%オフ\n2. 家族(年100ドル)——最大4名の家族に個人と同じ特典、さらにゲストパス4枚\n3. パトロン(年250ドル)——家族の全特典に加え、プレビューの夕べへの招待と、講座20%割引\n\nすべての会員レベルでスタジオ講座に申し込めます。非会員は正規料金で、6週間講座の標準料金は180ドルです。\n\nお申し込みは willowbrookarts.org から。会員資格は入会当日から始まり、解約しない限り自動更新されます。\n\n【Eメール1】\n差出人:ネイサン・プール\n宛先:membership@willowbrookarts.org\n件名:会員と陶芸講座について\n日付:3月3日\n\nこんにちは。\n\nパートナーと私はよく展覧会に足を運び、2人の子どもも週末の催しを楽しんでいるので、家族会員が合っていそうです。あわせて、6週間の夜間陶芸講座にも申し込みたいです。\n\n講座割引は家族レベルでも適用されますか、それともパトロンレベルだけですか? また、会員資格はいつから始まりますか?\n\nよろしくお願いします。\nネイサン・プール\n\n【Eメール2】\n差出人:ウィローブルック・アートセンター\n宛先:ネイサン・プール\n件名:RE: 会員と陶芸講座について\n日付:3月4日\n\nプール様\n\n4人家族には家族会員が最適です。20%の講座割引はパトロンレベルの特典で、家族会員は標準料金となる点にご留意ください。年に複数の講座を受講される予定なら、パトロンへの格上げが全体として割安になるかもしれません。\n\n陶芸講座については、会員資格は入会当日から始まるので、会員として受講いただけます。火曜夜のグループにお席を1つ確保しました。まだ空きがあります。\n\n心を込めて\nウィローブルック・アートセンター",
    questions: [
      {
        q: "What benefit is offered only at the Patron level?",
        choices: [
          "Free entry to exhibitions",
          "Guest passes",
          "Invitations to preview evenings",
          "A gift-shop discount"
        ],
        answer: 2,
        explanation: "会員案内で invitations to preview evenings はパトロンの特典として挙げられている。展覧会入場無料とギフトショップ割引は個人から、ゲストパスは家族から付くのでひっかけ。"
      },
      {
        q: "What does the center suggest Mr. Poole consider?",
        choices: [
          "Joining as an individual",
          "Upgrading to the Patron level",
          "Waiting until next year",
          "Taking a weekend class"
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。メール2の『年に複数講座を受けるならパトロンへの格上げが割安かも』が根拠。"
      },
      {
        q: "What does the reply indicate about the class discount?",
        choices: [
          "It applies to all members.",
          "It does not apply at the Family level.",
          "It requires taking four classes.",
          "It is only for children."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。メール1の質問に対し、メール2『20%割引はパトロン特典、家族会員は標準料金』と答えている。"
      },
      {
        q: "If Mr. Poole joins at the Family level and takes one six-week class, how much will he pay in total?",
        choices: [
          "$180",
          "$244",
          "$280",
          "$394"
        ],
        answer: 2,
        explanation: "計算型。家族会員100ドル+講座は家族レベルでは割引なしの標準料金180ドル。合計100+180=280ドル。"
      },
      {
        q: "In the second e-mail, the word \"held\" is closest in meaning to",
        choices: [
          "reserved",
          "carried",
          "owned",
          "delayed"
        ],
        answer: 0,
        explanation: "語彙問題。I've held a place for you(お席を確保しました)の held は reserved(予約・確保した)の意味。"
      }
    ]
  }
];
