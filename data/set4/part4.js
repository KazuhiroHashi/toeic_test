// セット4 Part 4: 説明文問題(10トーク30問。図表問題×2を含む)
window.TOEIC_DATA_4 = window.TOEIC_DATA_4 || {};
window.TOEIC_DATA_4.part4 = [
  {
    id: "s4p4-01",
    kind: "telephone message",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, this message is for Ms. Coleman. This is the Maplewood Public Library calling. The book you placed on hold, 'The History of Cartography,' is now available for pickup at the front desk. We'll keep it reserved for you for seven days, until Friday, October seventeenth. After that, it will be returned to the shelves for other readers. One more thing: our records show that your library card is set to expire at the end of this month. You can renew it either in person or through our Web site — all you'll need is a valid photo ID. If you have any questions, feel free to call us back during business hours. Thank you." }
    ],
    translation: "もしもし、コールマン様への伝言です。メープルウッド公立図書館です。お取り置きされていた本『地図製作の歴史』のご用意ができ、受付カウンターでお受け取りいただけます。7日間、10月17日(金)までお取り置きします。それ以降は、他の利用者のために書架へ戻します。もう一点、当館の記録では、お客様の図書館カードが今月末で有効期限を迎えます。更新はご来館でも当館ウェブサイトでも可能で、有効な写真付き身分証明書だけご用意ください。ご不明な点があれば、営業時間中にお電話ください。ありがとうございます。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To say a reserved book can be picked up",
          "To collect an overdue fine",
          "To recommend a new release",
          "To cancel a membership"
        ],
        answer: 0,
        explanation: "The book you placed on hold ... is now available for pickup(取り置きした本の準備ができた)が根拠。placed on hold が『予約・取り置き』。overdue fine(延滞金)は無関係のひっかけ。"
      },
      {
        q: "What does the speaker say will happen after October 17?",
        choices: [
          "A fee will be added to the account",
          "A new copy will be ordered",
          "The book will be returned to the shelves",
          "The library will be closed"
        ],
        answer: 2,
        explanation: "After that, it will be returned to the shelves(それ以降は書架に戻す)が根拠。期限後の扱いを問う。"
      },
      {
        q: "What is needed to renew the library card?",
        choices: [
          "A renewal fee",
          "A valid photo ID",
          "A completed application",
          "A reference letter"
        ],
        answer: 1,
        explanation: "all you'll need is a valid photo ID(必要なのは写真付き身分証だけ)が根拠。fee(料金)や application(申込書)は述べられていないひっかけ。"
      }
    ]
  },
  {
    id: "s4p4-02",
    kind: "advertisement",
    title: "トーク 2(ラジオ広告)",
    audio: [
      { speaker: "M", text: "Looking to get in shape without breaking the bank? Come to Riverbend Fitness, the area's newest health club. We offer state-of-the-art equipment, more than forty group classes a week, and a heated indoor pool. Right now, when you sign up for an annual membership, we'll waive the registration fee and include two free sessions with a personal trainer to help you get started. Not sure if it's right for you? Stop by anytime for a complimentary one-day pass — no appointment needed. And getting here couldn't be easier: we're located right next to the Central Station parking garage, and we're open twenty-four hours a day. Come see why your neighbors are already making the switch." }
    ],
    translation: "大金をかけずに体を鍛えたいとお考えですか? 地域で一番新しいヘルスクラブ、リバーベンド・フィットネスへどうぞ。最新設備、週40以上のグループレッスン、そして温水の屋内プールをご用意しています。今なら、年間会員にお申し込みいただくと、入会金を無料にし、スタート応援としてパーソナルトレーナーとの無料セッションを2回お付けします。ご自身に合うか不安ですか? いつでもお立ち寄りいただける無料の1日体験パスもございます——ご予約は不要です。しかもアクセス抜群、セントラル駅の駐車場のすぐ隣、24時間営業です。ご近所の方々がなぜ次々と乗り換えているのか、ぜひ確かめにいらしてください。",
    questions: [
      {
        q: "What kind of business is being advertised?",
        choices: [
          "A swimming school",
          "A health club",
          "A physical therapy clinic",
          "A sportswear store"
        ],
        answer: 1,
        explanation: "the area's newest health club と明言。heated indoor pool(温水プール)から swimming school を連想させるひっかけに注意。"
      },
      {
        q: "What is included with an annual membership?",
        choices: [
          "A free gym bag",
          "A discount on classes",
          "A nutrition plan",
          "Sessions with a personal trainer"
        ],
        answer: 3,
        explanation: "include two free sessions with a personal trainer(パーソナルトレーナーとの無料セッションを付ける)が根拠。入会金無料と混同させない。"
      },
      {
        q: "What does the speaker say about the location?",
        choices: [
          "It is next to a parking garage",
          "It offers a valet service",
          "It has its own restaurant",
          "It is inside a shopping mall"
        ],
        answer: 0,
        explanation: "located right next to the Central Station parking garage(駅の駐車場のすぐ隣)が根拠。"
      }
    ]
  },
  {
    id: "s4p4-03",
    kind: "tour information",
    title: "トーク 3(見学ツアーの案内)",
    audio: [
      { speaker: "W", text: "Welcome to Thornbury Botanical Gardens, and thank you for joining today's guided walk. A few things before we set off. The path through the tropical greenhouse can get quite warm and humid, so feel free to leave your jackets in the lockers by the entrance. Our walk will take about an hour and finishes at the rose terrace, where light refreshments will be served. Please remember to stay on the marked gravel paths at all times — stepping onto the flower beds can damage the plants. And if you'd like to take home a souvenir, our seed shop by the exit is offering a wildflower seed bundle at a special price, today only. All right, let's begin at the bamboo grove just ahead of us." }
    ],
    translation: "ソーンベリー植物園へようこそ。本日のガイドツアーへのご参加ありがとうございます。出発前にいくつかご案内を。熱帯温室の通路はかなり暑く湿気がありますので、上着は入口横のロッカーにお預けいただいて構いません。ツアーは約1時間で、最後はローズテラスで終わり、そこで軽い飲み物をお出しします。常に、印のついた砂利道からは外れないようお願いします——花壇に足を踏み入れると植物を傷めてしまいます。お土産をご希望なら、出口横の種苗ショップで、本日限りワイルドフラワーの種のセットを特別価格でご提供しています。それでは、すぐ前の竹林から始めましょう。",
    questions: [
      {
        q: "What are the listeners told they can leave in the lockers?",
        choices: [
          "Their bags",
          "Their cameras",
          "Their jackets",
          "Their umbrellas"
        ],
        answer: 2,
        explanation: "feel free to leave your jackets in the lockers(上着はロッカーに預けてよい)が根拠。温室が暑いため。"
      },
      {
        q: "Where will the walk end?",
        choices: [
          "At the bamboo grove",
          "At the tropical greenhouse",
          "At the seed shop",
          "At the rose terrace"
        ],
        answer: 3,
        explanation: "finishes at the rose terrace が根拠。bamboo grove(竹林)は開始地点でひっかけ。"
      },
      {
        q: "What is available at the seed shop today only?",
        choices: [
          "A free garden map",
          "A discounted seed bundle",
          "A membership card",
          "A potted plant"
        ],
        answer: 1,
        explanation: "a wildflower seed bundle at a special price, today only(本日限り特別価格の種のセット)が根拠。special price が discounted に言い換えられている。"
      }
    ]
  },
  {
    id: "s4p4-04",
    kind: "broadcast",
    title: "トーク 4(ラジオ番組)",
    audio: [
      { speaker: "M", text: "You're listening to Bookmarks, the weekly program where we sit down with the authors behind the season's most talked-about titles. I'm your host, Owen Pratt. Our guest today has written a fascinating new book that takes readers deep into the remote mountain villages of the Alps, exploring how people there have lived for centuries. Before we bring her on, a quick reminder that our station is hosting a live listener event next Saturday at the Grand Theater. Our guest will read from her book and answer your questions in person. Tickets are completely free, but they must be reserved online in advance, and I'm told they're going fast. We'll be right back after this short break." }
    ],
    translation: "お聴きいただいているのは、今シーズン最も話題の本を手がけた著者にお話をうかがう週替わり番組『ブックマークス』。司会のオーウェン・プラットです。本日のゲストは、アルプスの人里離れた山村へ読者をいざない、そこで人々が何世紀にもわたってどう暮らしてきたかを描いた、魅力的な新刊を書き上げました。ご登場いただく前に、ひとつお知らせを。当局では来週土曜日、グランド・シアターで公開リスナーイベントを開催します。ゲストが本の朗読を行い、皆さんの質問に直接お答えします。チケットは完全無料ですが、事前にオンラインでのご予約が必要で、すでに売れ行きは好調とのことです。短い休憩のあと、すぐに戻ります。",
    questions: [
      {
        q: "What is the program mainly about?",
        choices: [
          "Cooking recipes",
          "Interviews with authors",
          "Local weather",
          "Music reviews"
        ],
        answer: 1,
        explanation: "we sit down with the authors(著者と対談する)が根拠。番組の性質を冒頭で説明している。"
      },
      {
        q: "What is the subject of the guest's new book?",
        choices: [
          "Coastal cities",
          "Historic castles",
          "Mountain villages in the Alps",
          "Desert wildlife"
        ],
        answer: 2,
        explanation: "the remote mountain villages of the Alps(アルプスの人里離れた山村)が根拠。"
      },
      {
        q: "How can listeners attend the live event?",
        choices: [
          "By reserving tickets online",
          "By calling the station",
          "By buying tickets at the door",
          "By becoming a member"
        ],
        answer: 0,
        explanation: "they must be reserved online in advance(事前にオンライン予約が必要)が根拠。無料でも予約必須という点がポイント。"
      }
    ]
  },
  {
    id: "s4p4-05",
    kind: "excerpt from a meeting",
    graphicKind: "schedule",
    title: "トーク 5(会議の抜粋・図表問題)",
    graphic: "Product Launch Timeline\n1. Design phase — March\n2. Prototype testing — May\n3. Marketing campaign — July\n4. Store release — September",
    audio: [
      { speaker: "W", text: "Let's review where we stand on the new blender launch. Overall, we're in good shape, but I do have one update to share. The prototype testing actually wrapped up ahead of schedule, which is excellent. However, the phase that was set for July is going to slip. Our advertising agency has told us they need an extra month to finalize the visuals, so that work will now begin in August instead. The good news is that this delay won't affect our final target — we're still fully confident the product will reach store shelves right on time. Priya will circulate a revised timeline by Friday, so please hold any detailed questions until then." }
    ],
    translation: "【図表】製品発売スケジュール/1. 設計フェーズ——3月/2. 試作品テスト——5月/3. マーケティング施策——7月/4. 店頭発売——9月\n新しいミキサーの発売について現状を確認しましょう。全体としては順調ですが、ひとつお知らせがあります。試作品テストは実は前倒しで完了しました——素晴らしいことです。ただし、7月に予定されていたフェーズが後ろにずれます。広告代理店から、ビジュアルを仕上げるのにあと1か月必要だと言われ、その作業は代わりに8月開始となります。良い知らせは、この遅れが最終目標に影響しない点です——製品は予定通り店頭に並ぶと引き続き自信を持っています。プリヤが金曜日までに修正スケジュールを配布しますので、詳しいご質問はそれまでお待ちください。",
    questions: [
      {
        q: "Look at the graphic. Which phase will be delayed?",
        choices: [
          "Design phase",
          "Prototype testing",
          "Marketing campaign",
          "Store release"
        ],
        answer: 2,
        explanation: "図表問題。音声の『7月に予定されていたフェーズがずれる』と、図表で7月に対応する Marketing campaign を突き合わせる。図表と音声の両方が必要。"
      },
      {
        q: "Why will the phase be delayed?",
        choices: [
          "A supplier shipment is late",
          "The advertising agency needs more time",
          "The budget was reduced",
          "A team member resigned"
        ],
        answer: 1,
        explanation: "Our advertising agency ... need an extra month(広告代理店があと1か月必要)が根拠。"
      },
      {
        q: "What does the speaker say about the store release?",
        choices: [
          "It will be moved earlier",
          "It will be canceled",
          "It has not been decided",
          "It will remain unchanged"
        ],
        answer: 3,
        explanation: "the product will reach store shelves right on time(予定通り店頭に並ぶ)が根拠。遅れは最終目標に影響しない。"
      }
    ]
  },
  {
    id: "s4p4-06",
    kind: "announcement",
    title: "トーク 6(会場アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, all conference attendees. This is a reminder that the afternoon keynote address by Dr. Ellison will begin at two o'clock in the Grand Ballroom on the third floor. Please note that this is not in Hall C, as originally printed in your program, so allow yourself a few extra minutes to reach the new location. Also, for those planning to attend this evening's networking reception, we've moved it outdoors to the garden terrace, weather permitting. And finally, boxed lunches are still available at the registration desk until one thirty, so please pick one up if you haven't already. Enjoy the rest of your afternoon." }
    ],
    translation: "会議ご参加の皆さまにお知らせします。午後の基調講演、エリソン博士による講演は、3階のグランド・ボールルームにて2時に始まります。当初プログラムに印刷されていたホールCではありませんので、新しい場所までは少し余裕を持ってお越しください。また、今晩の交流レセプションにご参加予定の方へ。天候が許せば、会場を屋外のガーデンテラスへ変更しました。最後に、弁当は受付カウンターにて1時30分までご用意していますので、まだの方はお受け取りください。よい午後をお過ごしください。",
    questions: [
      {
        q: "Where will the keynote address take place?",
        choices: [
          "In Hall C",
          "In the Grand Ballroom",
          "On the garden terrace",
          "At the registration desk"
        ],
        answer: 1,
        explanation: "the keynote address ... in the Grand Ballroom が根拠。Hall C はプログラム記載の旧・誤りの場所でひっかけ。"
      },
      {
        q: "What change is announced about the evening reception?",
        choices: [
          "It has been canceled",
          "It will start earlier",
          "It will be held outdoors",
          "It now requires a ticket"
        ],
        answer: 2,
        explanation: "we've moved it outdoors to the garden terrace(屋外のガーデンテラスへ移した)が根拠。"
      },
      {
        q: "What can attendees get at the registration desk until 1:30?",
        choices: [
          "A boxed lunch",
          "A printed program",
          "A parking pass",
          "A name badge"
        ],
        answer: 0,
        explanation: "boxed lunches are still available at the registration desk until one thirty が根拠。"
      }
    ]
  },
  {
    id: "s4p4-07",
    kind: "speech",
    title: "トーク 7(式典スピーチ)",
    audio: [
      { speaker: "W", text: "Thank you all for being here on such a special day. It gives me great pride to officially open the doors of the Hartwell Community Center. Three years ago, this site was nothing but an empty lot. Thanks to the generosity of local donors and countless volunteer hours, it is now home to a gymnasium, an art studio, and a public computer lab that anyone in the neighborhood is welcome to use free of charge. Starting next Monday, we'll offer a full calendar of classes, from pottery to coding, for people of all ages. I'd especially like to thank our lead architect, Mr. Tanaka, whose thoughtful design gave us this bright and welcoming space. Now, let's cut the ribbon together." }
    ],
    translation: "本日はこの特別な日にお集まりいただき、ありがとうございます。ハートウェル・コミュニティセンターの扉を正式に開けられることを、とても誇りに思います。3年前、この場所は空き地に過ぎませんでした。地元の寄付者の皆さまのご厚意と、数え切れないボランティアの時間のおかげで、今では体育館、アートスタジオ、そして地域の誰もが無料で利用できる公共のコンピューター室を備えた場所になりました。来週月曜日からは、陶芸からプログラミングまで、あらゆる年齢の方向けに講座を満載した予定表をご用意します。とりわけ、この明るく温かな空間を生んでくれた設計担当の田中さんに感謝します。それでは、一緒にテープカットをしましょう。",
    questions: [
      {
        q: "What is the main purpose of the speech?",
        choices: [
          "To celebrate an anniversary",
          "To announce a fundraiser",
          "To honor a retiring employee",
          "To open a new facility"
        ],
        answer: 3,
        explanation: "officially open the doors of the Hartwell Community Center(施設を正式に開く)が根拠。開所式のスピーチ。"
      },
      {
        q: "What does the speaker say is free for anyone in the neighborhood to use?",
        choices: [
          "The parking lot",
          "The art studio",
          "The computer lab",
          "The gymnasium"
        ],
        answer: 2,
        explanation: "a public computer lab that anyone ... is welcome to use free of charge が根拠。free of charge は computer lab にかかる。"
      },
      {
        q: "Why does the speaker thank Mr. Tanaka?",
        choices: [
          "He designed the space",
          "He donated the land",
          "He organized the volunteers",
          "He funded the project"
        ],
        answer: 0,
        explanation: "our lead architect ... whose thoughtful design gave us this ... space が根拠。architect(建築家)= 設計。寄付・資金はひっかけ。"
      }
    ]
  },
  {
    id: "s4p4-08",
    kind: "talk",
    title: "トーク 8(ワークショップ説明)",
    audio: [
      { speaker: "M", text: "All right, everyone, welcome to today's beginner photography workshop. Let me walk you through the plan. We'll spend the first half hour indoors, covering the basics of your camera settings — things like shutter speed and focus. After that, we'll head across the street to the waterfront park to practice shooting in natural light. I'd recommend bringing a bottle of water, since we'll be on our feet and walking quite a bit. And don't worry if all you have is a smartphone camera — the techniques we'll cover today work just as well on those. At the very end, everyone will upload their three favorite shots to our shared online gallery, and we'll go through them and give feedback as a group. Any questions before we dive in?" }
    ],
    translation: "さて皆さん、本日の初心者向け写真ワークショップへようこそ。流れをご説明します。最初の30分は室内で、シャッタースピードやピント合わせといったカメラ設定の基本を扱います。そのあと、通りの向かいのウォーターフロント公園へ移動し、自然光での撮影を練習します。かなり歩き回り立ちっぱなしになるので、水を1本持ってくることをお勧めします。カメラがスマートフォンだけでも心配いりません——本日扱う技術はスマホでも同じように使えます。最後に、全員が気に入った写真3枚を共有オンラインギャラリーにアップロードし、皆で見ながらグループで講評します。始める前に、何かご質問はありますか?",
    questions: [
      {
        q: "What is the topic of the workshop?",
        choices: [
          "Painting",
          "Photography",
          "Video editing",
          "Graphic design"
        ],
        answer: 1,
        explanation: "beginner photography workshop と明言。冒頭で主題を提示している。"
      },
      {
        q: "What does the speaker recommend bringing?",
        choices: [
          "A tripod",
          "An extra battery",
          "A notebook",
          "A bottle of water"
        ],
        answer: 3,
        explanation: "I'd recommend bringing a bottle of water(水を持ってくることを勧める)が根拠。歩き回るため。撮影機材(三脚等)はひっかけ。"
      },
      {
        q: "What will participants do at the end of the workshop?",
        choices: [
          "Print their best photos",
          "Take a written test",
          "Share photos in an online gallery",
          "Enter a contest"
        ],
        answer: 2,
        explanation: "upload their three favorite shots to our shared online gallery(共有オンラインギャラリーにアップロードする)が根拠。"
      }
    ]
  },
  {
    id: "s4p4-09",
    kind: "telephone message",
    graphicKind: "list",
    title: "トーク 9(電話メッセージ・図表問題)",
    graphic: "Catering Packages (per guest)\n1. Bronze — $18\n2. Silver — $25\n3. Gold — $34\n4. Platinum — $45",
    audio: [
      { speaker: "W", text: "Hi, this is a message for Mr. Delacroix. This is Bianca from Golden Fork Catering, returning your call about your company's anniversary dinner. Based on the sixty guests you mentioned and your request for a plated three-course meal with a vegetarian option, I'd recommend our second-tier package. That includes a starter, a main course, and dessert, all served at the table. If you'd like to add an open bar, that would be an extra ten dollars per guest. I've tentatively held your preferred date — Saturday, November eighth — but to confirm the booking, I'll need a signed contract and a deposit by the end of next week. Please call me back at five five five, zero one seven six. Thanks!" }
    ],
    translation: "【図表】ケータリングパッケージ(1名あたり)/1. ブロンズ——18ドル/2. シルバー——25ドル/3. ゴールド——34ドル/4. プラチナ——45ドル\nもしもし、ドラクロワ様への伝言です。ゴールデン・フォーク・ケータリングのビアンカです。御社の周年ディナーの件で折り返しご連絡しました。おっしゃっていた60名様と、ベジタリアン対応付きの着席3コース料理というご希望をふまえ、当社の2段階目のパッケージをお勧めします。前菜、メイン、デザートをすべてテーブルでお出しする内容です。オープンバーを追加される場合は、1名あたり10ドル追加になります。ご希望のお日にち——11月8日(土)——は仮でお取りしていますが、ご予約確定には、来週末までに署名済みの契約書と手付金が必要です。555-0176まで折り返しお電話ください。よろしくお願いします!",
    questions: [
      {
        q: "Look at the graphic. Which package does the speaker recommend?",
        choices: [
          "Bronze",
          "Silver",
          "Gold",
          "Platinum"
        ],
        answer: 1,
        explanation: "図表問題。音声の『our second-tier package(2段階目のパッケージ)』と、図表で2番目の Silver を突き合わせる。金額や名称は音声で言わないため図表が必須。"
      },
      {
        q: "What would cost an extra ten dollars per guest?",
        choices: [
          "A vegetarian option",
          "An extra dessert",
          "Table service",
          "An open bar"
        ],
        answer: 3,
        explanation: "add an open bar, that would be an extra ten dollars per guest が根拠。ベジタリアン対応は基本料金内でひっかけ。"
      },
      {
        q: "What must the listener do to confirm the booking?",
        choices: [
          "Sign a contract and pay a deposit",
          "Pay the full amount now",
          "Choose a final menu",
          "Visit the office in person"
        ],
        answer: 0,
        explanation: "to confirm the booking, I'll need a signed contract and a deposit(確定には契約書と手付金が必要)が根拠。全額前払いではない点に注意。"
      }
    ]
  },
  {
    id: "s4p4-10",
    kind: "announcement",
    title: "トーク 10(開演前アナウンス)",
    audio: [
      { speaker: "M", text: "Ladies and gentlemen, welcome to the Orpheum Theater. This evening's performance of the musical 'Silver Skies' will begin in ten minutes, so we kindly ask that you take your seats now. As a reminder, photography and video recording of any kind are strictly prohibited during the performance. Please also be sure to switch your mobile phones to silent mode. Tonight's show runs for approximately two hours and includes one fifteen-minute intermission, during which refreshments will be available in the main lobby. Out of consideration for the performers, latecomers will only be seated during the intermission. We hope you enjoy the show. Thank you." }
    ],
    translation: "皆さま、オルフィアム劇場へようこそ。今晩のミュージカル『シルバー・スカイズ』の公演は、あと10分で始まります。どうぞお席にお着きください。念のためお伝えします。公演中の写真および動画の撮影は、いかなる形でも固く禁じられています。また、携帯電話は必ずマナーモードに切り替えてください。本日の公演は約2時間で、15分の休憩を1回はさみます。休憩中はメインロビーで軽い飲み物をご用意します。出演者への配慮から、遅れて来られたお客様のご案内は休憩中のみとさせていただきます。どうぞ公演をお楽しみください。ありがとうございます。",
    questions: [
      {
        q: "Where is the announcement being made?",
        choices: [
          "At a cinema",
          "At a concert hall",
          "At a theater",
          "At an art museum"
        ],
        answer: 2,
        explanation: "welcome to the Orpheum Theater と performance of the musical から、劇場での開演前アナウンス。cinema(映画館)はひっかけ。"
      },
      {
        q: "What are audience members asked to do?",
        choices: [
          "Silence their mobile phones",
          "Turn off the overhead lights",
          "Show their tickets again",
          "Move closer to the stage"
        ],
        answer: 0,
        explanation: "switch your mobile phones to silent mode(携帯をマナーモードに)が根拠。"
      },
      {
        q: "When will latecomers be seated?",
        choices: [
          "As soon as they arrive",
          "At the start of the second half",
          "Only after the show ends",
          "Only during the intermission"
        ],
        answer: 3,
        explanation: "latecomers will only be seated during the intermission(遅刻者の案内は休憩中のみ)が根拠。"
      }
    ]
  }
];
