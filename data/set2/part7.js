// Part 7: 読解問題(本番と同じ構成:シングル10文書29問+ダブル2セット10問+トリプル3セット15問=54問)
window.TOEIC_DATA_2 = window.TOEIC_DATA_2 || {};
window.TOEIC_DATA_2.part7 = [
  {
    id: "s2p7-01",
    title: "シングル 1(テキストメッセージのやり取り)",
    passages: [
      {
        docType: "Text-message chain",
        text: "Hannah Voss (7:42 A.M.)\nGood morning, Diego. My flour shipment was supposed to arrive at 7 this morning, but nothing's here yet. I have a 300-loaf order due this afternoon.\n\nDiego Marin (7:45 A.M.)\nLet me check the delivery log... Your order left the warehouse, but the driver reported a flat tire on Route 9.\n\nHannah Voss (7:47 A.M.)\nThat's cutting it close. I need to start mixing by 9 at the latest.\n\nDiego Marin (7:49 A.M.)\nUnderstood. Our other van is nearby — I'll have it swing by our depot, grab your bags, and come straight to you. Say 8:30?\n\nHannah Voss (7:50 A.M.)\nThat would save the day. How many bags are on the truck?\n\nDiego Marin (7:52 A.M.)\nTwelve 25-kilogram bags, as ordered. I'll text you when the van is five minutes out.\n\nHannah Voss (7:53 A.M.)\nPerfect. I'll leave the back door unlocked."
      }
    ],
    translation: "ハンナ・ヴォス(午前7:42):おはよう、ディエゴ。小麦粉の便が今朝7時に届くはずだったのに、まだ何も来ていないの。今日の午後に300斤の注文があるのよ。\nディエゴ・マリン(午前7:45):配送記録を確認します……ご注文は倉庫を出ていますが、ドライバーが9号線でタイヤのパンクを報告しています。\nハンナ・ヴォス(午前7:47):かなりぎりぎりね。遅くとも9時には生地をこね始めないと。\nディエゴ・マリン(午前7:49):承知しました。別のバンが近くにいます——うちのデポに寄って、そちらの小麦粉を積んで、まっすぐお届けさせます。8時半でどうでしょう?\nハンナ・ヴォス(午前7:50):それなら助かるわ。トラックには何袋あるの?\nディエゴ・マリン(午前7:52):ご注文通り、25キロの袋が12袋です。バンがあと5分のところに来たらメッセージします。\nハンナ・ヴォス(午前7:53):完璧。裏口の鍵を開けておくわ。",
    questions: [
      {
        q: "Why did Ms. Voss contact Mr. Marin?",
        choices: [
          "To place a new order",
          "To complain about a product",
          "To cancel a shipment",
          "To report a missing delivery"
        ],
        answer: 3,
        explanation: "最初のメッセージで『小麦粉の便が届くはずだったのにまだ来ていない』と伝えている。届いていない配送(missing delivery)についての連絡。"
      },
      {
        q: "At 7:50 A.M., what does Ms. Voss mean when she writes, \"That would save the day\"?",
        choices: [
          "She is grateful for Mr. Marin's plan.",
          "She wants the delivery moved to another day.",
          "She will pay extra for faster service.",
          "She plans to bake fewer loaves."
        ],
        answer: 0,
        explanation: "意図問題。直前でディエゴが『別のバンで8時半に届ける』と提案したことへの返答なので、『それなら助かる=解決策への感謝』の意味。文字通り『一日を救う』ではない。"
      },
      {
        q: "What does Mr. Marin say he will do?",
        choices: [
          "Repair the flat tire himself",
          "Refund the cost of the order",
          "Send a different van to collect and deliver the flour",
          "Deliver the flour the next morning"
        ],
        answer: 2,
        explanation: "I'll have it swing by our depot, grab your bags, and come straight to you(別のバンをデポに寄らせて小麦粉を積み、直接届ける)が根拠。"
      }
    ]
  },
  {
    id: "s2p7-02",
    title: "シングル 2(広告)",
    passages: [
      {
        docType: "Advertisement",
        text: "LINGUALEAP — Learn a Language on Your Schedule\n\nStudy over 20 languages with short daily lessons designed by professional linguists.\n\nPlans:\n1. Free — 1 lesson per day, community forum access\n2. Standard ($9/month) — unlimited lessons, offline mode, progress reports\n3. Plus ($15/month) — everything in Standard, plus monthly live group classes and personalized review sessions\n4. Family ($25/month) — all Plus features for up to five accounts\n\nEvery paid plan starts with a 7-day free trial. Cancel anytime.\n\nAnnual billing saves you 25% compared with paying month to month.\n\nDownload LinguaLeap from your app store today, or visit lingualeap.com to compare plans."
      }
    ],
    translation: "リンガリープ——自分のスケジュールで言語を学ぶ\n\nプロの言語学者が設計した短い毎日のレッスンで、20以上の言語を学べます。\n\nプラン:\n1. 無料——1日1レッスン、コミュニティフォーラム利用\n2. スタンダード(月9ドル)——レッスン無制限、オフラインモード、進捗レポート\n3. プラス(月15ドル)——スタンダードの全機能に加え、月例のライブグループクラスと個別復習セッション\n4. ファミリー(月25ドル)——プラスの全機能を最大5アカウントまで\n\nすべての有料プランは7日間の無料トライアルから始まります。いつでも解約可能。\n\n年額払いにすると、月払いに比べて25%お得です。\n\n今すぐアプリストアからリンガリープをダウンロード、またはプラン比較は lingualeap.com へ。",
    questions: [
      {
        q: "What is being advertised?",
        choices: [
          "An online translation service",
          "A language-learning app",
          "A travel booking site",
          "A private tutoring agency"
        ],
        answer: 1,
        explanation: "冒頭の『20以上の言語を短い毎日のレッスンで学ぶ』とダウンロードの案内から、言語学習アプリの広告。"
      },
      {
        q: "What is NOT included in the Standard plan?",
        choices: [
          "Offline mode",
          "Unlimited lessons",
          "Progress reports",
          "Live group classes"
        ],
        answer: 3,
        explanation: "NOT型の比較問題。ライブグループクラスはPlus以上の機能。オフラインモード・レッスン無制限・進捗レポートはスタンダードに含まれる。"
      },
      {
        q: "How can users reduce their cost?",
        choices: [
          "By referring friends",
          "By writing an app review",
          "By joining the community forum",
          "By choosing annual billing"
        ],
        answer: 3,
        explanation: "Annual billing saves you 25%(年額払いで25%お得)が根拠。"
      }
    ]
  },
  {
    id: "s2p7-03",
    title: "シングル 3(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Owen Pratt, Head Librarian\nTo: All Library Staff\nSubject: Second-floor renovation — what to expect\nDate: February 9\n\nDear team,\n\nStarting Monday, February 23, the second floor will be renovated to add a new quiet study zone and updated computer stations. Work is expected to take three weeks.\n\nDuring this period, the second floor will be closed to the public. Please note the following:\n\n1. The reference collection will be moved temporarily to the first-floor east wing. Help patrons locate materials there.\n2. Public computers on the first floor will remain available, but expect longer wait times. Encourage patrons to reserve a slot at the front desk.\n3. The Tuesday-evening reading club will meet in the community room on the ground floor until the work is finished.\n\nPlease review the temporary floor map attached and direct any questions to me. I will hold a short briefing on February 20 at 8:30 A.M. before opening.\n\nThank you for helping our visitors during the transition.\n\nOwen Pratt"
      }
    ],
    translation: "差出人:オーウェン・プラット(館長)\n宛先:図書館スタッフ全員\n件名:2階改修——想定される事項\n日付:2月9日\n\nチームの皆さんへ\n\n2月23日(月)より、新しい静音学習ゾーンと最新のコンピューターステーションを設けるため、2階を改修します。工事は3週間ほどかかる見込みです。\n\nこの期間中、2階は一般利用者向けに閉鎖されます。以下にご注意ください:\n\n1. 参考図書コレクションは一時的に1階東ウィングへ移します。利用者が資料を見つけるのを手伝ってください。\n2. 1階の公共コンピューターは引き続き利用できますが、待ち時間が長くなる見込みです。利用者に受付での時間予約を勧めてください。\n3. 火曜夜の読書クラブは、工事が終わるまで1階のコミュニティルームで行います。\n\n添付の仮フロアマップを確認し、質問は私までお願いします。2月20日午前8時30分、開館前に短い説明会を行います。\n\n移行期間中、来館者へのご協力をよろしくお願いします。\n\nオーウェン・プラット",
    questions: [
      {
        q: "What is the main purpose of the e-mail?",
        choices: [
          "To describe upcoming construction work",
          "To announce a permanent closure",
          "To introduce a new staff member",
          "To request budget approval"
        ],
        answer: 0,
        explanation: "『2階を改修する(renovated)』という予定の周知が主目的。renovation が construction work に言い換えられている。閉鎖は一時的なので(A)は誤り。"
      },
      {
        q: "What are staff asked to do regarding the public computers?",
        choices: [
          "Move them to the second floor",
          "Charge a usage fee",
          "Turn them off during the renovation",
          "Suggest that patrons reserve a time"
        ],
        answer: 3,
        explanation: "Encourage patrons to reserve a slot at the front desk(受付で時間予約を勧める)が根拠。"
      },
      {
        q: "What will happen on February 20?",
        choices: [
          "The renovation will begin",
          "A staff briefing will take place",
          "The second floor will reopen",
          "The reading club will meet"
        ],
        answer: 1,
        explanation: "I will hold a short briefing on February 20(2月20日に短い説明会)が根拠。改修開始は2月23日でひっかけ。"
      }
    ]
  },
  {
    id: "s2p7-04",
    title: "シングル 4(お知らせ)",
    passages: [
      {
        docType: "Notice",
        text: "GRANVILLE TOWER — BUILDING NOTICE\nElevator Maintenance\n\nElevators B and C will undergo scheduled maintenance from Wednesday, March 12, to Friday, March 14. During this time, only Elevator A and the freight elevator will be in service, so please allow extra time during busy periods, especially between 8:30 and 9:30 A.M.\n\nTenants moving large items should reserve the freight elevator in advance by e-mailing the building office. The freight elevator is located at the rear of the lobby, next to the loading dock.\n\nWe expect all elevators to return to normal operation by Monday, March 17. Thank you for your cooperation."
      }
    ],
    translation: "グランビル・タワー——ビルからのお知らせ\nエレベーター保守点検\n\nエレベーターBとCは、3月12日(水)から3月14日(金)まで定期保守を行います。この間はエレベーターAと貨物用エレベーターのみの運行となりますので、混雑時、特に午前8時30分〜9時30分は余裕を持ってご利用ください。\n\n大きな荷物を運ぶテナントは、ビル事務所へメールし、事前に貨物用エレベーターをご予約ください。貨物用エレベーターはロビー奥、荷役スペースの隣にあります。\n\n3月17日(月)までに全エレベーターが通常運行に戻る見込みです。ご協力ありがとうございます。",
    questions: [
      {
        q: "What is the purpose of the notice?",
        choices: [
          "To announce a building closure",
          "To advertise available office space",
          "To inform tenants of maintenance work",
          "To change the lobby hours"
        ],
        answer: 2,
        explanation: "冒頭の『エレベーターBとCの定期保守を行う』という周知が主目的。ビル自体は閉鎖しないので(A)は誤り。"
      },
      {
        q: "What should tenants moving large items do?",
        choices: [
          "Reserve the freight elevator ahead of time",
          "Use the main entrance only",
          "Move items after business hours",
          "Hire a moving company"
        ],
        answer: 0,
        explanation: "reserve the freight elevator in advance by e-mailing the building office(事前にメールで貨物用エレベーターを予約)が根拠。"
      }
    ]
  },
  {
    id: "s2p7-05",
    title: "シングル 5(オンラインチャット)",
    passages: [
      {
        docType: "Online chat",
        text: "Grace Lombardi (11:20 A.M.)\nHi Ravi, I can't send any e-mails this morning. Incoming messages arrive fine, but everything I send just sits in the outbox.\n\nRavi Shah (11:22 A.M.)\nThanks for flagging it. A few people have reported the same thing. Our mail server had an update overnight and the outgoing settings need a small fix.\n\nGrace Lombardi (11:23 A.M.)\nIs there anything I should do on my end?\n\nRavi Shah (11:24 A.M.)\nSit tight. I'm pushing the corrected settings to everyone remotely. You shouldn't have to touch a thing.\n\nGrace Lombardi (11:25 A.M.)\nAny idea how long?\n\nRavi Shah (11:27 A.M.)\nGive it fifteen minutes, then restart your mail program. That should clear the outbox.\n\nGrace Lombardi (11:28 A.M.)\nGreat, I'll grab a coffee in the meantime."
      }
    ],
    translation: "グレイス・ロンバルディ(午前11:20):ラヴィ、今朝メールがまったく送信できないの。受信は問題なく届くのに、送るものは全部送信トレイに残ったまま。\nラヴィ・シャー(午前11:22):知らせてくれてありがとう。何人か同じ症状を報告しています。夜中にメールサーバーの更新があって、送信設定を少し直す必要があるんです。\nグレイス・ロンバルディ(午前11:23):私の方で何かすべきことはある?\nラヴィ・シャー(午前11:24):そのまま待っていて。修正した設定を全員にリモートで配信しています。何も操作しなくて大丈夫です。\nグレイス・ロンバルディ(午前11:25):どのくらいかかりそう?\nラヴィ・シャー(午前11:27):15分ほど置いて、それからメールソフトを再起動してください。それで送信トレイが片付くはずです。\nグレイス・ロンバルディ(午前11:28):了解、その間にコーヒーでも入れてくるわ。",
    questions: [
      {
        q: "What problem does Ms. Lombardi report?",
        choices: [
          "Her computer will not start.",
          "She has lost some files.",
          "Her password has expired.",
          "She cannot send messages."
        ],
        answer: 3,
        explanation: "最初のメッセージ everything I send just sits in the outbox(送信したものが送信トレイに残る)が根拠。メール送信ができない問題。"
      },
      {
        q: "At 11:24 A.M., what does Mr. Shah mean when he writes, \"Sit tight\"?",
        choices: [
          "Ms. Lombardi should stay at her desk all day.",
          "Ms. Lombardi should tighten a loose cable.",
          "Ms. Lombardi does not need to do anything herself.",
          "Ms. Lombardi must reinstall the program."
        ],
        answer: 2,
        explanation: "意図問題。直後の You shouldn't have to touch a thing(何も操作しなくていい)とセットで読むと、『何もせず待っていて』という意味だと分かる。"
      }
    ]
  },
  {
    id: "s2p7-06",
    title: "シングル 6(記事)",
    passages: [
      {
        docType: "Article",
        text: "GREENFIELD (April 15) — Sunrise Organics, a maker of packaged snacks, announced on Tuesday that it will open a new distribution center on the outskirts of Greenfield this autumn. The 20,000-square-meter facility is expected to create about 150 jobs.\n\nThe center will allow the company to ship products to stores across the eastern region within a single day, cutting current delivery times roughly in half.\n\n\"Faster shipping means fresher products on the shelf,\" said operations manager Carla Denton. \"It also lets us serve smaller grocers that we couldn't reach before.\"\n\nThe company plans to begin hiring warehouse and logistics staff in July. Positions will be posted on the Sunrise Organics Web site, and a job fair is scheduled for August at the Greenfield Community Center.\n\nLocal officials welcomed the news. Mayor Tom Ellery noted that the project would bring steady employment to the area without adding much road traffic, since most shipments will travel by the nearby rail line rather than by road."
      }
    ],
    translation: "グリーンフィールド(4月15日)——包装スナックのメーカー、サンライズ・オーガニクスは火曜日、この秋グリーンフィールド郊外に新しい物流センターを開設すると発表した。2万平方メートルの施設で、約150人の雇用が生まれる見込みだ。\n\nこのセンターにより、同社は東部地域全域の店舗へ1日以内に商品を出荷できるようになり、現在の配送時間はおよそ半分に短縮される。\n\n『出荷が速くなれば、棚に並ぶ商品も新鮮になります』と業務部長のカーラ・デントン氏。『これまで届けられなかった小規模な食料品店にも供給できるようになります』\n\n同社は7月に倉庫・物流スタッフの採用を始める予定だ。求人はサンライズ・オーガニクスのウェブサイトに掲載され、8月にはグリーンフィールド・コミュニティセンターで就職説明会が予定されている。\n\n地元当局はこのニュースを歓迎した。トム・エラリー市長は、出荷の大半が道路ではなく近くの鉄道路線を使うため、道路交通をあまり増やすことなく地域に安定した雇用をもたらすと述べた。",
    questions: [
      {
        q: "What is the article mainly about?",
        choices: [
          "A company opening a new facility",
          "A grocery store closing down",
          "A product being recalled",
          "A company changing its name"
        ],
        answer: 0,
        explanation: "第1段落の『新しい物流センターを開設する』が記事全体の主題。"
      },
      {
        q: "What is mentioned as a benefit of the new center?",
        choices: [
          "Lower product prices",
          "More store locations",
          "A wider range of products",
          "Shorter delivery times"
        ],
        answer: 3,
        explanation: "cutting current delivery times roughly in half(配送時間を約半分に短縮)が根拠。"
      },
      {
        q: "According to the article, why will the project not add much road traffic?",
        choices: [
          "Most goods will be shipped by rail.",
          "The center will operate only at night.",
          "Few delivery trucks will be purchased.",
          "The number of deliveries will be limited."
        ],
        answer: 0,
        explanation: "most shipments will travel by the nearby rail line rather than by road(出荷の大半は道路でなく鉄道)が根拠。"
      }
    ]
  },
  {
    id: "s2p7-07",
    title: "シングル 7(Eメール)",
    passages: [
      {
        docType: "E-mail",
        text: "From: Bianca Ferraro, Producer\nTo: Dr. Nathan Cole\nSubject: Recording details — \"Future of Work\" podcast\nDate: August 5\n\nDear Dr. Cole,\n\nThank you for agreeing to join our podcast, \"Future of Work,\" as a guest for our September episode on remote collaboration. We will record remotely over video on Thursday, August 28, from 2:00 to 3:00 P.M. The final edited episode will run about 40 minutes.\n\nA few requests before we record:\n1. Please test your microphone and Internet connection using the link we sent separately. If you would like to borrow a microphone, let me know by August 18 and we will ship one to you.\n2. Send a short list of three or four talking points by August 21 so our host can prepare.\n3. We will also need a headshot and a one-line title for the episode description.\n\nThe conversation will be relaxed and unscripted, so there is no need to prepare a formal presentation. If any technical issues come up during recording, we can pause and pick up again.\n\nLooking forward to it,\nBianca Ferraro"
      }
    ],
    translation: "差出人:ビアンカ・フェラーロ(プロデューサー)\n宛先:ネイサン・コール博士\n件名:収録の詳細——ポッドキャスト『Future of Work』\n日付:8月5日\n\nコール博士\n\nリモートコラボレーションをテーマにした9月回のゲストとして、私たちのポッドキャスト『Future of Work』にご出演いただき、ありがとうございます。収録は8月28日(木)午後2時〜3時、ビデオでリモート実施します。編集後の完成回はおよそ40分になります。\n\n収録前にいくつかお願いがあります:\n1. 別途お送りしたリンクで、マイクとインターネット接続をテストしてください。マイクをお借りになりたい場合は、8月18日までにお知らせいただければ1台お送りします。\n2. 司会が準備できるよう、8月21日までに3〜4点の話題リストをお送りください。\n3. 回の説明文用に、顔写真と一行のタイトルも必要です。\n\n会話はリラックスした台本なしの形式なので、改まったプレゼンの準備は不要です。収録中に技術的な問題が起きても、一時停止して再開できます。\n\n楽しみにしています。\nビアンカ・フェラーロ",
    questions: [
      {
        q: "What is the purpose of the e-mail?",
        choices: [
          "To confirm details of a recording",
          "To invite Dr. Cole to give a lecture",
          "To reschedule an interview",
          "To request a payment"
        ],
        answer: 0,
        explanation: "Thank you for agreeing to join ...(すでに出演を承諾済み)とあり、収録日時・依頼事項を伝えているので、招待(A)ではなく収録の詳細確認が目的。"
      },
      {
        q: "What is Dr. Cole asked to do by August 18?",
        choices: [
          "Send his talking points",
          "Request equipment if needed",
          "Submit a headshot",
          "Choose an episode title"
        ],
        answer: 1,
        explanation: "If you would like to borrow a microphone, let me know by August 18(マイクを借りたければ8月18日までに連絡)が根拠。話題リストは8月21日で、期日の対応関係を問う問題。"
      },
      {
        q: "What is indicated about the podcast?",
        choices: [
          "It will be recorded in a studio.",
          "It will last 60 minutes.",
          "It will not follow a script.",
          "It will be broadcast live."
        ],
        answer: 2,
        explanation: "The conversation will be relaxed and unscripted(台本なし)が根拠。ビデオでリモート収録なのでスタジオ(A)は誤り、完成回は約40分なので(C)も誤り。"
      }
    ]
  },
  {
    id: "s2p7-08",
    title: "シングル 8(手紙)",
    passages: [
      {
        docType: "Letter",
        text: "Dear Mr. Alvarez,\n\nThank you for your message of June 6 concerning your subscription to Coastal Gardener magazine. We are sorry that your May and June issues did not reach you, and we apologize for any frustration this has caused.\n\nAfter reviewing your account, we found that your address had been recorded with an incorrect postal code, which caused the two issues to be returned to us. We have corrected the error, and both back issues were mailed to your updated address on June 9 by priority post.\n\nTo make up for the missed deliveries, we have extended your subscription by two months at no charge. Your renewal date is now March 1 rather than January 1.\n\nIf your July issue does not arrive by the end of the month, please contact us again and we will look into it right away.\n\nWe value your readership and thank you for your patience.\n\nSincerely,\nMarta Quinn\nSubscriber Services, Coastal Gardener"
      }
    ],
    translation: "アルバレス様\n\n『コースタル・ガーデナー』誌のご購読に関する6月6日付のメッセージをありがとうございました。5月号と6月号がお手元に届かなかったとのこと、誠に申し訳ございません。ご不便をおかけしお詫び申し上げます。\n\nお客様のアカウントを確認したところ、ご住所が誤った郵便番号で登録されており、そのために2号分が当社へ返送されていました。誤りを訂正し、両方のバックナンバーを6月9日に更新後のご住所へ優先郵便で発送いたしました。\n\n届かなかった分のお詫びとして、ご購読期間を2か月無料で延長いたしました。更新日は1月1日から3月1日に変更となります。\n\nもし7月号が月末までに届かない場合は、再度ご連絡ください。すぐに調査いたします。\n\n今後ともご愛読いただけますようお願い申し上げます。\n\n敬具\nマルタ・クイン\nコースタル・ガーデナー 購読者サービス",
    questions: [
      {
        q: "Why did Ms. Quinn write the letter?",
        choices: [
          "To respond to a delivery problem",
          "To promote a new magazine",
          "To request a subscription renewal",
          "To announce a price change"
        ],
        answer: 0,
        explanation: "届かなかった号についての6月6日付メッセージへの返信で、謝罪と対応(バックナンバー発送・購読延長)を伝えている。"
      },
      {
        q: "What caused the problem?",
        choices: [
          "A printing delay",
          "A postal strike",
          "A payment failure",
          "An error in the recorded address"
        ],
        answer: 3,
        explanation: "your address had been recorded with an incorrect postal code(誤った郵便番号で登録)が原因として述べられている。"
      },
      {
        q: "What did the company do to compensate Mr. Alvarez?",
        choices: [
          "Refunded his payment",
          "Extended his subscription for free",
          "Sent a gift subscription",
          "Upgraded his plan"
        ],
        answer: 1,
        explanation: "we have extended your subscription by two months at no charge(2か月無料で購読延長)が根拠。返金ではない。"
      }
    ]
  },
  {
    id: "s2p7-09",
    title: "シングル 9(ウェブページ・FAQ)",
    passages: [
      {
        docType: "Web page",
        text: "VOLTIQ ELECTRONICS — Shipping & Returns FAQ\n\nHow long does delivery take?\nStandard shipping takes 3–5 business days and is free on orders over $50. Express shipping (1–2 business days) is available for a flat $12.\n\nCan I track my order?\nYes. Once your order ships, you will receive a tracking link by e-mail. You can also view order status by logging in to your account.\n\nWhat is your return policy?\nUnopened items may be returned within 30 days for a full refund. Opened items may be returned within 14 days but are subject to a 15% restocking fee. Return shipping is free only if the item arrived damaged or incorrect.\n\nHow do I start a return?\nLog in to your account, select the order, and click \"Request Return.\" Print the prepaid label if the return qualifies for free shipping; otherwise, use any carrier and keep your receipt.\n\nDo you ship internationally?\nAt this time, we ship only within the country. We hope to add international shipping next year."
      }
    ],
    translation: "ヴォルティック・エレクトロニクス——配送・返品FAQ\n\n配送にはどれくらいかかりますか?\n通常配送は3〜5営業日で、50ドルを超えるご注文は無料です。速達(1〜2営業日)は一律12ドルでご利用いただけます。\n\n注文を追跡できますか?\nはい。発送されると、追跡リンクがメールで届きます。アカウントにログインして注文状況を確認することもできます。\n\n返品ポリシーは?\n未開封品は30日以内なら全額返金で返品可能です。開封品は14日以内に返品可能ですが、15%の返品手数料がかかります。返送料が無料になるのは、商品が破損または誤って届いた場合のみです。\n\n返品はどう始めますか?\nアカウントにログインし、注文を選び、『返品を申請』をクリックします。返送料無料の対象なら着払いラベルを印刷し、そうでなければ任意の配送業者を使い、領収書を保管してください。\n\n海外発送はしていますか?\n現時点では国内のみの発送です。来年、海外発送の追加を予定しています。",
    questions: [
      {
        q: "What is the main purpose of the Web page?",
        choices: [
          "To advertise a seasonal sale",
          "To explain shipping and return policies",
          "To announce a new product line",
          "To describe a loyalty program"
        ],
        answer: 1,
        explanation: "ページ全体が配送と返品に関するよくある質問(FAQ)への回答。"
      },
      {
        q: "How can a customer get free standard shipping?",
        choices: [
          "By spending over $50",
          "By choosing express shipping",
          "By creating an account",
          "By returning an item"
        ],
        answer: 0,
        explanation: "free on orders over $50(50ドル超の注文は無料)が根拠。速達は一律12ドルなのでひっかけ。"
      },
      {
        q: "What is stated about returning opened items?",
        choices: [
          "They cannot be returned.",
          "Their return shipping is always free.",
          "They must be returned within 30 days.",
          "They are subject to a restocking fee."
        ],
        answer: 3,
        explanation: "Opened items ... are subject to a 15% restocking fee(開封品は15%の返品手数料)が根拠。30日は未開封品の期限でひっかけ。"
      },
      {
        q: "What is suggested about international orders?",
        choices: [
          "They take 3–5 days.",
          "They cost a flat $12.",
          "They are not currently offered.",
          "They require an account."
        ],
        answer: 2,
        explanation: "we ship only within the country(現時点では国内のみ)が根拠。海外発送は来年追加予定=今はない。"
      }
    ]
  },
  {
    id: "s2p7-10",
    title: "シングル 10(社内メモ)",
    passages: [
      {
        docType: "Memo",
        text: "MEMO\nTo: All Employees\nFrom: Yuki Tanaka, Finance Department\nDate: October 1\nRe: Updated expense reimbursement process\n\nBeginning November 1, we are moving to a new online system, ExpenseTrack, for all reimbursement claims. Paper forms will no longer be accepted after October 31.\n\nKey points:\n1. Submit each claim within 30 days of the purchase. Late submissions may not be reimbursed.\n2. Attach a photo or scan of every receipt. Claims without receipts will be returned.\n3. Claims are reviewed by your direct manager first, then by Finance. Most approved claims are paid within one week.\n\nTo help everyone get started, we will run two 30-minute training sessions on October 20 and October 22. Attendance is optional but recommended for anyone who submits expenses regularly.\n\nIf you have receipts from October that you have not yet submitted, please file them on paper before the end of the month to avoid re-entering them in the new system.\n\nYuki Tanaka"
      }
    ],
    translation: "メモ\n宛先:従業員全員\n差出人:タナカ・ユキ(財務部)\n日付:10月1日\n件名:経費精算プロセスの変更\n\n11月1日より、すべての精算申請を新しいオンラインシステム『ExpenseTrack』に移行します。10月31日以降、紙のフォームは受け付けません。\n\n要点:\n1. 各申請は購入から30日以内に提出してください。遅れた提出は精算されないことがあります。\n2. すべての領収書の写真またはスキャンを添付してください。領収書のない申請は差し戻されます。\n3. 申請はまず直属の上長、次に財務部が確認します。承認された申請の多くは1週間以内に支払われます。\n\n開始をお手伝いするため、10月20日と10月22日に30分の研修を2回行います。参加は任意ですが、日常的に経費を提出する方には推奨します。\n\n10月分でまだ提出していない領収書がある場合は、新システムに再入力せずに済むよう、月末までに紙で提出してください。\n\nタナカ・ユキ",
    questions: [
      {
        q: "What is the purpose of the memo?",
        choices: [
          "To reduce travel budgets",
          "To introduce a new reimbursement system",
          "To hire additional finance staff",
          "To cancel a training program"
        ],
        answer: 1,
        explanation: "冒頭の『新しいオンラインシステムExpenseTrackに移行する』の周知が主目的。"
      },
      {
        q: "What must employees attach to each claim?",
        choices: [
          "A manager's signature",
          "A department budget code",
          "A completed paper form",
          "An image of the receipt"
        ],
        answer: 3,
        explanation: "Attach a photo or scan of every receipt(領収書の写真かスキャンを添付)が根拠。"
      },
      {
        q: "What are employees advised to do with unsubmitted October receipts?",
        choices: [
          "Wait until the new system opens",
          "Discard the old receipts",
          "File them on paper before November",
          "E-mail them directly to Finance"
        ],
        answer: 2,
        explanation: "please file them on paper before the end of the month(月末までに紙で提出)が根拠。10月31日まで紙が使えることが根拠。"
      }
    ]
  },
  {
    id: "s2p7-11",
    title: "ダブル 1(ウェブページ+Eメール)",
    passages: [
      {
        docType: "Web page",
        text: "MAPLE & OAK CATERING — Corporate Lunch Packages\n(Prices are per person; minimum 10 people)\n\n1. Classic Box ($14) — sandwich, side salad, cookie\n2. Deluxe Box ($18) — gourmet wrap, soup, fruit cup, dessert\n3. Hot Buffet ($24) — choice of two mains, three sides, bread, dessert (minimum 20 people)\n\nAdd-ons (per person):\n- Bottled beverage: $2\n- Vegetarian or gluten-free option: no extra charge (please specify quantities when ordering)\n\nDelivery is free within 15 km. Orders must be placed at least three business days in advance. A 10% discount applies to orders of 50 people or more.\n\nOrder online at mapleoakcatering.com or e-mail orders@mapleoak.com."
      },
      {
        docType: "E-mail",
        text: "From: Priscilla Wong, Halcyon Design\nTo: orders@mapleoak.com\nSubject: Lunch order for June 18\nDate: June 12\n\nHello,\n\nI'd like to order lunch for a team workshop on Thursday, June 18. We will have 24 people. Please prepare the Deluxe Box for everyone, and add a bottled beverage for each person.\n\nOf the 24, four attendees are vegetarian, so please make four of the boxes vegetarian. I understand there is no additional charge for that.\n\nOur office is at 40 Riverside Drive, about 8 km from your kitchen, so I believe delivery is included. Could you deliver by 11:45 A.M.? The workshop breaks for lunch at noon.\n\nPlease send the invoice to this address. Thank you!\n\nPriscilla Wong"
      }
    ],
    translation: "【ウェブページ】メープル&オーク・ケータリング——法人向けランチパッケージ\n(価格は1人あたり、最少10名)\n\n1. クラシックボックス(14ドル)——サンドイッチ、サイドサラダ、クッキー\n2. デラックスボックス(18ドル)——グルメラップ、スープ、フルーツカップ、デザート\n3. ホットビュッフェ(24ドル)——メイン2種、サイド3種、パン、デザート(最少20名)\n\n追加(1人あたり):\n・ボトル飲料:2ドル\n・ベジタリアン/グルテンフリー対応:追加料金なし(注文時に数量を指定してください)\n\n15km以内は配送無料。ご注文は少なくとも3営業日前までに。50名以上のご注文は10%割引。\n\nご注文は mapleoakcatering.com またはメール orders@mapleoak.com で。\n\n【Eメール】\n差出人:プリシラ・ウォン(ハルシオン・デザイン)\n宛先:orders@mapleoak.com\n件名:6月18日のランチ注文\n日付:6月12日\n\nこんにちは。\n\n6月18日(木)のチーム研修用にランチを注文したいです。24名になります。全員分デラックスボックスを用意し、1人につきボトル飲料を追加してください。\n\n24名のうち4名がベジタリアンなので、4箱をベジタリアンにしてください。それには追加料金がかからないと理解しています。\n\nオフィスはリバーサイド・ドライブ40番地、そちらのキッチンから約8kmなので、配送は込みだと思います。午前11時45分までに届けてもらえますか? 研修は正午に昼休憩に入ります。\n\n請求書はこのアドレスへお送りください。よろしくお願いします!\n\nプリシラ・ウォン",
    questions: [
      {
        q: "What is indicated about the Hot Buffet?",
        choices: [
          "It is the cheapest option.",
          "It includes free beverages.",
          "It is available only on weekends.",
          "It requires at least 20 people."
        ],
        answer: 3,
        explanation: "ウェブページの Hot Buffet ... (minimum 20 people)が根拠。最も高い24ドルなので(A)は誤り。"
      },
      {
        q: "Why did Ms. Wong send the e-mail?",
        choices: [
          "To place an order for an event",
          "To change an existing order",
          "To request a refund",
          "To apply for a catering job"
        ],
        answer: 0,
        explanation: "6月18日の研修用にランチを注文する内容。イベント向けの注文。"
      },
      {
        q: "What is true about Ms. Wong's order?",
        choices: [
          "It qualifies for a volume discount.",
          "It does not reach the discount threshold.",
          "It requires an extra delivery fee.",
          "It was placed too late to be accepted."
        ],
        answer: 1,
        explanation: "クロスリファレンス問題。ウェブページ『50名以上で10%割引』+メール『24名』→ 割引の基準に届かない。配送は8kmで無料、6月12日注文の18日実施で3営業日前も満たす。"
      },
      {
        q: "How much will Ms. Wong's order cost in total?",
        choices: ["$432", "$528", "$480", "$600"],
        answer: 2,
        explanation: "クロスリファレンス問題(計算型)。デラックス18ドル×24名=432ドル、ボトル飲料2ドル×24名=48ドルで合計480ドル。ベジタリアンは無料、割引なし。"
      },
      {
        q: "In the e-mail, the word \"breaks\" in paragraph 3 is closest in meaning to",
        choices: ["pauses", "damages", "separates", "reduces"],
        answer: 0,
        explanation: "語彙問題。The workshop breaks for lunch(研修が昼休憩に入る)の break は pause(中断する・休む)の意味。"
      }
    ]
  },
  {
    id: "s2p7-12",
    title: "ダブル 2(不動産広告+Eメール)",
    passages: [
      {
        docType: "Advertisement",
        text: "FOR RENT — Sunny 2-Bedroom Apartment, Elmwood District\n\nBright, recently renovated apartment on the third floor of a quiet building. Close to the Elmwood subway station (5-minute walk) and Riverside Park.\n\nDetails:\n- Monthly rent: $1,450\n- Size: 75 square meters\n- Available from: September 1\n- Includes: water and heating; tenant pays electricity\n- Security deposit: one month's rent\n- Sorry, no pets\n\nApplicants must provide references from a previous landlord and proof of steady income. A 12-month lease is required.\n\nTo arrange a viewing, contact Delgado Property Management at (555) 0147 or e-mail rentals@delgadopm.com."
      },
      {
        docType: "E-mail",
        text: "From: Harold Kim\nTo: rentals@delgadopm.com\nSubject: Elmwood 2-bedroom — viewing request\nDate: August 3\n\nHello,\n\nI saw your listing for the two-bedroom apartment in Elmwood and would like to arrange a viewing this weekend if possible.\n\nA little about me: I currently rent a nearby apartment and can provide a reference from my landlord of the past four years. I work full-time as a nurse and can supply recent pay statements. My partner and I do not have any pets, so the building policy is not a concern.\n\nOne question: your listing mentions a deposit of one month's rent. Would you accept it in two smaller installments over the first two months, or is the full amount due at signing?\n\nWe are hoping to move in early September, so your timing works well for us. Please let me know when a viewing might be possible.\n\nBest regards,\nHarold Kim"
      }
    ],
    translation: "【広告】賃貸——日当たりの良い2ベッドルーム、エルムウッド地区\n\n静かな建物の3階、最近改装された明るい部屋。エルムウッド地下鉄駅(徒歩5分)とリバーサイド公園に近い。\n\n詳細:\n・家賃:月1,450ドル\n・広さ:75平方メートル\n・入居可能日:9月1日\n・込み:水道・暖房(電気は入居者負担)\n・敷金:家賃1か月分\n・ペット不可\n\n応募者は前の家主からの推薦状と安定収入の証明を提出する必要があります。契約は12か月から。\n\n内見のご予約は、デルガド・プロパティ・マネジメント(555)0147、またはメール rentals@delgadopm.com へ。\n\n【Eメール】\n差出人:ハロルド・キム\n宛先:rentals@delgadopm.com\n件名:エルムウッドの2ベッドルーム——内見のお願い\n日付:8月3日\n\nこんにちは。\n\nエルムウッドの2ベッドルームの掲載を拝見し、できれば今週末に内見をお願いしたいです。\n\n私について少し:現在近くの部屋を借りており、過去4年間の家主からの推薦状を提出できます。看護師として常勤で働いており、最近の給与明細を提出できます。パートナーも私もペットは飼っていないので、建物の方針は問題ありません。\n\n1つ質問です:掲載には敷金が家賃1か月分とあります。最初の2か月に分けて2回の分割で支払うことは可能ですか、それとも契約時に全額必要でしょうか?\n\n9月上旬の入居を希望しているので、そちらの時期は好都合です。内見が可能な日時を教えてください。\n\nよろしくお願いします。\nハロルド・キム",
    questions: [
      {
        q: "What is included in the rent?",
        choices: [
          "Electricity",
          "Parking",
          "Water and heating",
          "Internet service"
        ],
        answer: 2,
        explanation: "広告の Includes: water and heating(水道・暖房込み)が根拠。電気は入居者負担なので(A)は誤り。"
      },
      {
        q: "What must applicants provide?",
        choices: [
          "A local guarantor",
          "References and proof of income",
          "A pet deposit",
          "Six months' rent in advance"
        ],
        answer: 1,
        explanation: "広告の references from a previous landlord and proof of steady income(推薦状と収入証明)が根拠。"
      },
      {
        q: "What is suggested about Mr. Kim?",
        choices: [
          "He satisfies the application requirements.",
          "He is looking for a one-bedroom apartment.",
          "He needs to move in by August.",
          "He owns a small pet."
        ],
        answer: 0,
        explanation: "クロスリファレンス問題。広告『前の家主の推薦状＋安定収入の証明が必要』+メール『4年間の家主の推薦状＋看護師の給与明細を提出できる』→ 応募要件を満たす。"
      },
      {
        q: "How much is the security deposit?",
        choices: ["$725", "$2,175", "$1,450", "$2,900"],
        answer: 2,
        explanation: "クロスリファレンス問題(計算型)。広告『敷金は家賃1か月分』+『家賃は月1,450ドル』→ 敷金は1,450ドル。"
      },
      {
        q: "In the e-mail, the word \"concern\" in paragraph 2 is closest in meaning to",
        choices: ["business", "worry", "interest", "meeting"],
        answer: 1,
        explanation: "語彙問題。the building policy is not a concern(建物の方針は問題ではない)の concern は worry(懸念・心配事)の意味。"
      }
    ]
  },
  {
    id: "s2p7-13",
    title: "トリプル 1(ウェブページ+Eメール+Eメール)",
    passages: [
      {
        docType: "Web page",
        text: "CEDAR PEAK GUIDED HIKES — Book Your Adventure\n\n1. Sunrise Loop (2 hours) — $30 per person — easy, departs 6:00 A.M.\n2. Waterfall Trail (4 hours) — $50 per person — moderate, departs 9:00 A.M.\n3. Summit Climb (7 hours) — $85 per person — challenging, departs 7:00 A.M.\n\nAll tours include a certified guide, trail snacks, and water. Groups of six or more receive 15% off the total.\n\nTours run rain or shine, but may be rescheduled in case of severe weather. Please arrive 20 minutes before departure at the Cedar Peak Visitor Center.\n\nReserve at cedarpeakhikes.com. Payment is due on the day of the tour."
      },
      {
        docType: "E-mail 1",
        text: "From: Nadia Foster\nTo: bookings@cedarpeakhikes.com\nSubject: Group booking — Waterfall Trail\nDate: July 3\n\nHello,\n\nI'd like to book the Waterfall Trail hike for our office team on Saturday, July 19. We will have eight people. Two of our group have asked whether the trail is suitable for beginners, as they have never hiked before.\n\nAlso, could we start a little later than 9 A.M.? A few people are driving in from out of town that morning.\n\nThank you,\nNadia Foster"
      },
      {
        docType: "E-mail 2",
        text: "From: Cedar Peak Hikes\nTo: Nadia Foster\nSubject: RE: Group booking — Waterfall Trail\nDate: July 4\n\nDear Ms. Foster,\n\nThank you for your interest! I have reserved eight spots for July 19. Since your group has more than six people, the group discount applies to your booking.\n\nRegarding your first question: the Waterfall Trail is rated moderate, with some steep sections, so it is better suited to those with a little experience. If your two first-time hikers would prefer something gentler, the Sunrise Loop is an easy walk and could be done earlier the same morning.\n\nAs for the start time, our guides are fully booked at midday, so we cannot push the Waterfall Trail later than its scheduled departure. I would suggest meeting at the visitor center a bit earlier to be safe.\n\nPayment can be made when you arrive. See you on the trail!\n\nCedar Peak Hikes"
      }
    ],
    translation: "【ウェブページ】シダーピーク・ガイドハイク——冒険を予約しよう\n1. サンライズ・ループ(2時間)——1人30ドル——初級、6:00発\n2. ウォーターフォール・トレイル(4時間)——1人50ドル——中級、9:00発\n3. サミット・クライム(7時間)——1人85ドル——上級、7:00発\n全ツアーに認定ガイド、行動食、水が含まれます。6名以上のグループは合計から15%オフ。ツアーは雨天決行ですが、荒天の場合は日程変更となることがあります。出発20分前にシダーピーク・ビジターセンターへお越しください。予約は cedarpeakhikes.com。支払いはツアー当日です。\n\n【Eメール1】(7月3日、フォスター→シダーピーク)\nこんにちは。7月19日(土)に会社のチームでウォーターフォール・トレイルを予約したいです。8名になります。うち2名がハイキング未経験で、このコースが初心者に向いているか気にしています。それと、9時より少し遅く出発できますか? 数名がその朝、遠方から車で来るのです。\n\n【Eメール2】(7月4日、シダーピーク→フォスター)\nフォスター様、ご関心ありがとうございます! 7月19日で8名分を予約しました。6名を超えるグループなので、グループ割引が適用されます。ご質問の1点目:ウォーターフォール・トレイルは中級で急な区間もあるため、多少経験のある方向きです。未経験のお2人がもっと穏やかなものをご希望なら、サンライズ・ループは初級で、同じ朝の早い時間に行うこともできます。出発時刻については、正午はガイドが埋まっているため、ウォーターフォール・トレイルを予定より遅くはできません。念のため、ビジターセンターに少し早めに集合されるとよいでしょう。支払いは到着時で結構です。トレイルでお会いしましょう!",
    questions: [
      {
        q: "What do all of the tours include?",
        choices: [
          "A certified guide and snacks",
          "Transportation to the trailhead",
          "Overnight accommodation",
          "Photography services"
        ],
        answer: 0,
        explanation: "ウェブページの All tours include a certified guide, trail snacks, and water が根拠。"
      },
      {
        q: "Why did Ms. Foster write to Cedar Peak Hikes?",
        choices: [
          "To cancel a reservation",
          "To apply for a guide position",
          "To book a tour for a group",
          "To complain about a past tour"
        ],
        answer: 2,
        explanation: "Eメール1で『7月19日にチームでウォーターフォール・トレイルを予約したい、8名』と述べており、グループ予約が目的。"
      },
      {
        q: "How much will Ms. Foster's group pay in total?",
        choices: ["$300", "$340", "$400", "$460"],
        answer: 1,
        explanation: "クロスリファレンス問題(計算型)。ウェブページ『ウォーターフォール・トレイルは1人50ドル、6名以上で15%オフ』+Eメール1『8名』→ 50×8=400ドル、15%引きで340ドル。"
      },
      {
        q: "What does Cedar Peak Hikes suggest for the two first-time hikers?",
        choices: [
          "The Summit Climb",
          "A private guide",
          "A full refund",
          "An easier tour"
        ],
        answer: 3,
        explanation: "クロスリファレンス問題。Eメール2『未経験者にはサンライズ・ループ(初級)を』+ウェブページ『サンライズ・ループ=easy』を突き合わせる。より易しいツアーを勧めている。"
      },
      {
        q: "What does Cedar Peak Hikes indicate about the start time?",
        choices: [
          "It can be moved to the afternoon.",
          "It will begin at 6 A.M.",
          "It cannot be changed to a later time.",
          "It depends on the weather."
        ],
        answer: 2,
        explanation: "Eメール2の we cannot push the Waterfall Trail later than its scheduled departure(予定より遅くはできない)が根拠。フォスターさんの『遅らせられるか』という希望への回答。"
      }
    ]
  },
  {
    id: "s2p7-14",
    title: "トリプル 2(請求書+Eメール+Eメール)",
    passages: [
      {
        docType: "Invoice",
        text: "BRIGHTLINE PRINTING — Invoice #7788\nBill to: Corner Bookshop — Date: May 30\n\n1. Business cards (500) — $45\n2. Promotional flyers (1,000) — $120\n3. Vinyl banner (2 m) — $80\n4. Rush service fee — $40\nSubtotal — $285\nDelivery — $15\nTotal due — $300\n\nPayment terms: due within 14 days. A 3% discount applies if paid within 5 days of the invoice date."
      },
      {
        docType: "E-mail 1",
        text: "From: Lucia Romano, Corner Bookshop\nTo: billing@brightlineprint.com\nSubject: Question about Invoice #7788\nDate: June 1\n\nHello,\n\nThank you for the quick turnaround on our order. However, I have a question about the invoice. We did not request rush service — our order form asked for standard delivery, and the items arrived on the normal schedule. Could you please review the $40 rush fee?\n\nEverything else on the invoice looks correct. Once the charge is sorted out, I'll pay right away to take advantage of the early-payment discount.\n\nBest,\nLucia Romano"
      },
      {
        docType: "E-mail 2",
        text: "From: Billing, Brightline Printing\nTo: Lucia Romano\nSubject: RE: Question about Invoice #7788\nDate: June 2\n\nDear Ms. Romano,\n\nYou are quite right, and I apologize. The rush fee was added in error and has been removed. Your corrected total is now $260.\n\nSince you plan to pay within five days of the original invoice date, the 3% early-payment discount still applies to the corrected amount. I have attached an updated invoice reflecting both changes.\n\nThank you for catching this, and we appreciate your business.\n\nWarm regards,\nMarcus Lee\nBrightline Printing"
      }
    ],
    translation: "【請求書】ブライトライン印刷——請求書#7788\n請求先:コーナー書店——日付:5月30日\n1. 名刺(500枚)——45ドル\n2. 販促チラシ(1,000枚)——120ドル\n3. ビニールバナー(2m)——80ドル\n4. 特急サービス料——40ドル\n小計——285ドル\n配送——15ドル\n請求額——300ドル\n支払条件:14日以内。請求書日付から5日以内の支払いで3%割引。\n\n【Eメール1】(6月1日、ロマーノ→ブライトライン)\nこんにちは。注文の迅速な対応をありがとうございました。ただ、請求書について質問があります。当店は特急サービスを依頼していません——注文票では通常配送を希望し、商品も通常の予定通り届きました。40ドルの特急料金を確認していただけますか? 請求書の他の項目は正しいようです。この料金が解決したら、早期支払割引を利用するためすぐに支払います。\n\n【Eメール2】(6月2日、ブライトライン→ロマーノ)\nロマーノ様、おっしゃる通りで、お詫びいたします。特急料金は誤って追加されており、削除しました。訂正後の合計は260ドルです。元の請求書日付から5日以内にお支払い予定とのことなので、3%の早期支払割引は訂正後の金額にも適用されます。両方の変更を反映した更新版の請求書を添付しました。ご指摘ありがとうございました。今後ともよろしくお願いします。マーカス・リー、ブライトライン印刷。",
    questions: [
      {
        q: "What is offered for early payment?",
        choices: [
          "A 3% discount",
          "Free delivery",
          "A free banner",
          "A gift card"
        ],
        answer: 0,
        explanation: "請求書の A 3% discount applies if paid within 5 days(5日以内の支払いで3%割引)が根拠。"
      },
      {
        q: "Why did Ms. Romano write the first e-mail?",
        choices: [
          "To place a new order",
          "To dispute a charge on the invoice",
          "To request faster delivery",
          "To cancel her order"
        ],
        answer: 1,
        explanation: "特急サービスを頼んでいないのに40ドルの料金が請求されている点を確認するよう求めている。請求項目への異議。"
      },
      {
        q: "Which charge was removed from the invoice?",
        choices: [
          "The delivery fee",
          "The banner charge",
          "The rush service fee",
          "The business-card charge"
        ],
        answer: 2,
        explanation: "クロスリファレンス問題。Eメール1『特急を頼んでいない』+Eメール2『特急料金を誤って追加、削除した』+請求書『Rush service fee $40』を突き合わせる。"
      },
      {
        q: "How much will Ms. Romano most likely pay?",
        choices: ["$245.00", "$260.00", "$252.20", "$291.00"],
        answer: 2,
        explanation: "計算型。請求書の合計300ドルから特急40ドルを引いて260ドル、さらに3%の早期支払割引を適用して 260×0.97=252.20ドル。三文書を突き合わせる。"
      },
      {
        q: "What is NOT listed on the original invoice?",
        choices: [
          "A delivery charge",
          "Business cards",
          "A rush fee",
          "A design consultation"
        ],
        answer: 3,
        explanation: "NOT問題。請求書には名刺・チラシ・バナー・特急料金・配送料が載っている。デザイン相談(design consultation)は記載がない。"
      }
    ]
  },
  {
    id: "s2p7-15",
    title: "トリプル 3(上映スケジュール+Eメール+Eメール)",
    passages: [
      {
        docType: "Schedule",
        text: "RIVERTOWN DOCUMENTARY FESTIVAL — Weekend Screenings\nVenue: Rivertown Arts Cinema\n\n1. Friday 7:00 P.M. — \"Deep Blue\" (oceans) — $12\n2. Saturday 2:00 P.M. — \"City Roots\" (urban farming) — $12\n3. Saturday 6:00 P.M. — \"The Long Road\" (migration) — $14\n4. Sunday 3:00 P.M. — \"Skyward\" (aviation history) — $12\n\nEach screening is followed by a Q&A with the director. A festival pass covering all four films is $40 (a savings over buying tickets separately). Students receive $2 off any single ticket with a valid ID. Seats are limited; advance booking is recommended at rivertownarts.org."
      },
      {
        docType: "E-mail 1",
        text: "From: Owen Blake\nTo: boxoffice@rivertownarts.org\nSubject: Ticket question\nDate: October 2\n\nHello,\n\nI would like to attend the festival but can't make it on Friday. I'm interested in the three weekend screenings — the two on Saturday and the one on Sunday. Should I buy the festival pass, or individual tickets?\n\nAlso, I'll be bringing my daughter, who is a university student. Does the student discount apply to the festival pass as well, or only to single tickets?\n\nThanks,\nOwen Blake"
      },
      {
        docType: "E-mail 2",
        text: "From: Box Office, Rivertown Arts\nTo: Owen Blake\nSubject: RE: Ticket question\nDate: October 3\n\nDear Mr. Blake,\n\nThanks for reaching out. Since you plan to see only three of the four films, individual tickets will cost you less than the $40 pass, so I'd recommend buying them separately.\n\nPlease note that the two Saturday screenings are four hours apart, so you'll have time for a break in between. The student discount you asked about applies to single tickets only, not to the festival pass. Your daughter can claim $2 off each single ticket by showing her student ID at the door.\n\nSeats for \"The Long Road\" are filling up quickly, so I'd book that one soon.\n\nBest,\nRivertown Arts Box Office"
      }
    ],
    translation: "【スケジュール】リバータウン・ドキュメンタリー映画祭——週末上映\n会場:リバータウン・アーツ・シネマ\n1. 金曜19:00——『ディープ・ブルー』(海洋)——12ドル\n2. 土曜14:00——『シティ・ルーツ』(都市農業)——12ドル\n3. 土曜18:00——『ザ・ロング・ロード』(移住)——14ドル\n4. 日曜15:00——『スカイワード』(航空史)——12ドル\n各上映後に監督とのQ&Aがあります。4作品すべてに使える映画祭パスは40ドル(個別購入よりお得)。学生は有効な身分証で単券が2ドル引き。座席には限りがあり、rivertownarts.org での事前予約を推奨します。\n\n【Eメール1】(10月2日、ブレイク→ボックスオフィス)\nこんにちは。映画祭に参加したいのですが、金曜は行けません。週末の3作品——土曜の2本と日曜の1本——に興味があります。映画祭パスを買うべきでしょうか、それとも単券でしょうか? また、大学生の娘を連れて行きます。学生割引は映画祭パスにも適用されますか、それとも単券のみですか?\n\n【Eメール2】(10月3日、ボックスオフィス→ブレイク)\nブレイク様、ご連絡ありがとうございます。4作品中3作品のご鑑賞予定なので、単券の方が40ドルのパスより安くなります。個別購入をお勧めします。土曜の2本の上映は4時間空いているので、間に休憩の時間があります。お尋ねの学生割引は、映画祭パスではなく単券のみに適用されます。娘さんは入口で学生証を提示すれば単券ごとに2ドル引きになります。『ザ・ロング・ロード』の座席は埋まりつつあるので、早めのご予約を。",
    questions: [
      {
        q: "What follows each screening?",
        choices: [
          "A discussion with the director",
          "A reception with refreshments",
          "A short second film",
          "A book signing"
        ],
        answer: 0,
        explanation: "スケジュールの Each screening is followed by a Q&A with the director(各上映後に監督とのQ&A)が根拠。"
      },
      {
        q: "Why did Mr. Blake write to the box office?",
        choices: [
          "To request a refund",
          "To ask which tickets to buy",
          "To reserve the entire festival",
          "To volunteer at the event"
        ],
        answer: 1,
        explanation: "Eメール1で『パスと単券のどちらを買うべきか』『学割の適用範囲』を尋ねている。チケットについての相談。"
      },
      {
        q: "What does the box office recommend?",
        choices: [
          "Buying the festival pass",
          "Attending only on Saturday",
          "Buying individual tickets",
          "Waiting until the day of the show"
        ],
        answer: 2,
        explanation: "クロスリファレンス問題。スケジュール『パスは40ドル』+Eメール1『4本中3本を鑑賞』+Eメール2『3本なら単券の方が40ドルより安い』→ 個別購入を勧めている。"
      },
      {
        q: "If Mr. Blake buys three individual tickets for himself, how much will he pay?",
        choices: ["$36", "$38", "$40", "$42"],
        answer: 1,
        explanation: "計算型。スケジュール『土14:00=12ドル、土18:00=14ドル、日15:00=12ドル』→ 12+14+12=38ドル。学生割引は本人には適用されない。"
      },
      {
        q: "What is indicated about the student discount?",
        choices: [
          "It applies to the festival pass.",
          "It is $4 per ticket.",
          "It requires advance booking.",
          "It applies only to single tickets."
        ],
        answer: 3,
        explanation: "クロスリファレンス問題。スケジュール『学生は単券が2ドル引き』+Eメール2『学割はパスではなく単券のみに適用』を突き合わせる。"
      }
    ]
  }
];
