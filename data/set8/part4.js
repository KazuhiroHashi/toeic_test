// Part 4(セット8・上級): 説明文問題(トークを聞いて設問に答える)
window.TOEIC_DATA_8 = window.TOEIC_DATA_8 || {};
window.TOEIC_DATA_8.part4 = [
  {
    id: "s8p4-01",
    kind: "telephone message",
    title: "トーク 1(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Good morning, Dr. Kwon. This is Rosalind Achebe from the Ardley Institute, calling about next month's symposium. Two things have come up. First, the panel you agreed to moderate, which was originally set for Friday morning, has been moved to Thursday afternoon. One of the other panelists can no longer stay through Friday, and rather than replace her, we decided to shift the whole session. Your own presentation on Thursday morning is unaffected. Second, the venue's technical staff need every presenter's slides forty-eight hours in advance this year, not on the morning of the session as before. I know that's earlier than you're used to, so I wanted to flag it now rather than have you hear it at the front desk when you arrive. If the new panel time doesn't work for you, call me back today; otherwise I'll take it that we're set." }
    ],
    translation: "おはようございます、クォン博士。アードリー研究所のロザリンド・アチェベです。来月のシンポジウムの件でお電話しました。2点ございます。まず、博士に司会をお引き受けいただいたパネルですが、当初は金曜の午前でしたが、木曜の午後に移りました。他のパネリストのお一人が金曜まで滞在できなくなり、その方を交代させるのではなく、セッション全体をずらすことにしたためです。博士ご自身の木曜午前の発表には影響ありません。次に、会場の技術スタッフが、今年は全発表者のスライドを48時間前までに求めています。これまでのように当日朝ではありません。従来よりも早いので、到着後に受付でお聞きになるより先に、お伝えしておきたいと思いました。新しいパネルの時間がご都合に合わない場合は本日中にお電話ください。ご連絡がなければ、この形で確定と受け取ります。",
    questions: [
      {
        q: "What is the main purpose of the call?",
        choices: [
          "To notify the listener about changes affecting an event",
          "To invite the listener to join a panel",
          "To confirm the listener's travel arrangements",
          "To ask the listener to review a draft program"
        ],
        answer: 0,
        explanation: "冒頭の Two things have come up 以降で、司会するパネルの時間変更と、資料提出期限の前倒しという『2つの変更』を伝えている。『パネルへの参加依頼』は you agreed to moderate と既に決まった話なので (B) は不可。"
      },
      {
        q: "Why was the panel rescheduled?",
        choices: [
          "A larger room became available.",
          "A participant could not stay until the original day.",
          "The listener asked for a different time.",
          "Fewer people registered than expected."
        ],
        answer: 1,
        explanation: "One of the other panelists can no longer stay through Friday が根拠。『交代させる代わりにセッションごと動かした』という言い方から、理由は参加者の滞在日程だと分かる。話者は shift という語しか使わないので、can no longer stay を聞き取れるかが鍵。"
      },
      {
        q: "What does the speaker say is different this year?",
        choices: [
          "The symposium will run an extra day.",
          "Technical support will be limited.",
          "Presentation materials are due earlier.",
          "Registration must be completed online."
        ],
        answer: 2,
        explanation: "slides forty-eight hours in advance this year, not on the morning of the session as before が根拠。『48時間前』が due earlier(提出が早まる)に言い換えられている。technical staff という語につられて (B) を選ばないこと。"
      }
    ]
  },
  {
    id: "s8p4-02",
    kind: "announcement",
    title: "トーク 2(会場アナウンス)",
    audio: [
      { speaker: "M", text: "Attention, everyone. Before you start unpacking, please listen carefully, because a few things differ from what's printed in your welcome packet. Loading dock access has been reduced to a single bay this year, since the east ramp is being resurfaced, so we're assigning arrival windows by hall. Hall A crews may bring vehicles in now; Hall B, please hold off until eleven. Second, and this is the part people always miss: the hall doors close to vehicles at four, but you may keep working on your stands until eight. What you cannot do after four is drive anything in. Finally, if your booth needs power beyond a standard outlet, tell the service desk before the end of the day. Requests made tomorrow can still be filled, but they carry a surcharge, and we'd rather none of you paid it." }
    ],
    translation: "皆様にお知らせします。荷ほどきを始める前に、よくお聞きください。お手元の受付資料に印刷された内容と異なる点がいくつかあります。今年は東側スロープの舗装工事のため、搬入口が1つのバースのみとなっており、ホールごとに搬入時間帯を割り当てています。ホールAの作業班は今から車両を入れて構いません。ホールBは11時までお待ちください。2点目、これは皆さんがよく取り違えるところですが、ホールの扉は4時に車両の出入りを締め切ります。ただしブースの作業自体は8時まで続けていただけます。4時以降にできなくなるのは、車両を中に入れることだけです。最後に、標準のコンセント以上の電源が必要なブースは、本日中にサービスデスクへお申し出ください。明日のお申し込みでも対応できますが、追加料金がかかります。皆様に余計な出費はさせたくありません。",
    questions: [
      {
        q: "Who most likely are the listeners?",
        choices: [
          "Passengers waiting to board",
          "Newly hired security guards",
          "People setting up displays at a trade fair",
          "Residents attending a public hearing"
        ],
        answer: 2,
        explanation: "unpacking(荷ほどき)、your stands、your booth、welcome packet から、展示会に出展する側への説明だと分かる。搬入・車両という語だけで (A) の乗客や運転手側だと決めつけないこと。"
      },
      {
        q: "What does the speaker emphasize about four o'clock?",
        choices: [
          "All work must stop at that time.",
          "Vehicles can no longer enter, but work may continue.",
          "The service desk closes at that time.",
          "Hall B crews may start arriving then."
        ],
        answer: 1,
        explanation: "the hall doors close to vehicles at four, but you may keep working on your stands until eight が根拠。『4時=終了』と早合点させるのが狙いで、話者自身が this is the part people always miss と注意を促している。"
      },
      {
        q: "What are the listeners advised to do today?",
        choices: [
          "Move their vehicles to the east ramp",
          "Pick up a revised welcome packet",
          "Confirm their arrival time by phone",
          "Submit any additional electrical requests"
        ],
        answer: 3,
        explanation: "if your booth needs power beyond a standard outlet, tell the service desk before the end of the day が根拠。翌日でも対応可だが surcharge(追加料金)がかかる、という条件付きの言い方から『今日中に』が答えになる。"
      }
    ]
  },
  {
    id: "s8p4-03",
    kind: "advertisement",
    title: "トーク 3(ラジオ広告)",
    audio: [
      { speaker: "W", text: "If your company has ever sent a product manual overseas and gotten questions back that made no sense, you already know the problem. At Solvane Language Works, we don't simply swap one language for another. We make sure your documents read as though they had been written in the customer's own market. Every project is handled by two specialists, one who translates and one who reviews, and neither of them ever works on a file alone. That is why our clients keep coming back year after year. Right now, first-time business clients can have a sample of up to five hundred words handled at no cost, so you can judge the quality before you commit to anything. No contract, no card required. Visit solvane dot com, upload your file, and we'll send the sample back within two business days. Solvane Language Works. Say it once, say it right." }
    ],
    translation: "海外に製品マニュアルを送ったのに、意味の通じない問い合わせが返ってきた——そんな経験がある企業なら、問題はもうお分かりでしょう。ソルヴェイン・ランゲージ・ワークスは、ただ言語を置き換えるだけではありません。お客様の文書が、相手の市場でもともと書かれたかのように読めるよう仕上げます。どの案件も2名の専門家が担当します。訳す者と、それを点検する者。どちらも1人でファイルを扱うことはありません。だからこそ、お客様は毎年繰り返しご依頼くださいます。ただ今、法人の初回のお客様には、500語までのサンプルを無料でお引き受けします。お約束をいただく前に品質をご判断いただけます。契約書もカード番号も不要です。solvane.com にアクセスし、ファイルをアップロードしてください。2営業日以内にサンプルをお返しします。ソルヴェイン・ランゲージ・ワークス。一度で、正しく。",
    questions: [
      {
        q: "What service does the business provide?",
        choices: [
          "Training in technical writing",
          "Printing of product manuals",
          "Overseas shipping arrangements",
          "Translation and checking of documents"
        ],
        answer: 3,
        explanation: "we don't simply swap one language for another や one who translates and one who reviews から、翻訳と点検を行う会社と分かる。product manual, overseas という語は状況説明に出てくるだけで、印刷業でも配送業でもない。"
      },
      {
        q: "According to the speaker, what makes the company different?",
        choices: [
          "It charges the lowest rates in the industry.",
          "It guarantees delivery within one day.",
          "Two specialists are assigned to every project.",
          "It serves only one industry."
        ],
        answer: 2,
        explanation: "Every project is handled by two specialists ... neither of them ever works on a file alone が根拠。『訳す人と点検する人の2名体制』が差別化要因。two business days(2営業日)は無料サンプルの返却期限であって納品保証ではないので (B) は誤り。"
      },
      {
        q: "What is being offered to new clients?",
        choices: [
          "A free trial of limited length",
          "A discount on a first contract",
          "An extended payment period",
          "A meeting with an account manager"
        ],
        answer: 0,
        explanation: "a sample of up to five hundred words handled at no cost が根拠。at no cost(無料)＋ up to five hundred words(語数の上限)が free trial of limited length に対応する。No contract という表現につられて (B) を選ばないこと。"
      }
    ]
  },
  {
    id: "s8p4-04",
    kind: "excerpt from a meeting",
    title: "トーク 4(会議の抜粋・図表問題)",
    graphic: "Ridgemont Center — Meeting Room Capacities\n1. Aspen Room — 30\n2. Birch Room — 45\n3. Cedar Room — 70\n4. Dogwood Room — 120",
    graphicKind: "list",
    audio: [
      { speaker: "M", text: "Last item before we break: the client workshop in March. I've been going back and forth with the venue, and I want to settle the room today. Our own project team is twenty-two people, and the client is sending eighteen, so at first I reserved the smallest room that would hold us. Then yesterday the client asked whether their regional managers could sit in, which adds another twenty. That still doesn't take us anywhere near the largest room, and honestly I'd rather not pay for space we won't fill, so I've moved us up to the one just above what we originally booked. The furniture setup stays as it is, round tables rather than rows of chairs. Priya, once I confirm the booking this afternoon, could you resend the invitation with the new room name on it?" }
    ],
    translation: "【図表】リッジモント・センター 会議室 収容人数/1. アスペン・ルーム 30名/2. バーチ・ルーム 45名/3. シーダー・ルーム 70名/4. ドッグウッド・ルーム 120名\n休憩前に最後の議題です。3月の顧客向けワークショップの件。会場側とやり取りを続けていますが、今日で部屋を決めたいと思います。こちらのプロジェクトチームは22名、先方が18名を送ってくるので、最初は収まる中で一番小さい部屋を押さえました。ところが昨日、先方から地域マネージャーも同席させたいという話があり、さらに20名増えます。それでも一番大きい部屋にはまるで届きませんし、正直、埋まらない広さに費用は払いたくありません。そこで、最初に予約した部屋の1つ上の部屋に変更しました。什器の配置はそのままで、椅子を並べる形式ではなく円卓です。プリヤさん、午後に予約を確定したら、新しい部屋名を入れて招待状を送り直してもらえますか。",
    questions: [
      {
        q: "Look at the graphic. Which room will the group use?",
        choices: [
          "Aspen Room",
          "Birch Room",
          "Cedar Room",
          "Dogwood Room"
        ],
        answer: 2,
        explanation: "図表問題。22名＋18名=40名で、最初に押さえたのは40名が収まる最小の『バーチ・ルーム(45名)』。さらに20名増えて60名になり、the one just above what we originally booked(元の予約の1つ上)は『シーダー・ルーム(70名)』。最大のドッグウッドは doesn't take us anywhere near と明確に否定されている。"
      },
      {
        q: "Why does the group need more space than planned?",
        choices: [
          "The venue canceled the original reservation.",
          "Additional people from the client will attend.",
          "New members joined the project team.",
          "Extra equipment must be stored in the room."
        ],
        answer: 1,
        explanation: "the client asked whether their regional managers could sit in, which adds another twenty が根拠。増えたのは顧客側の人員であり、自社チームは22名のままなので (C) は誤り。"
      },
      {
        q: "What does the speaker ask Priya to do?",
        choices: [
          "Send an updated invitation",
          "Contact the venue directly",
          "Change the seating arrangement",
          "Prepare a cost estimate"
        ],
        answer: 0,
        explanation: "could you resend the invitation with the new room name on it が根拠。会場と交渉しているのは話者自身なので (B) は不可。The furniture setup stays as it is と述べており配置は変更しないので (C) も誤り。"
      }
    ]
  },
  {
    id: "s8p4-05",
    kind: "broadcast",
    title: "トーク 5(ラジオニュース)",
    audio: [
      { speaker: "W", text: "You're listening to the midday report on K-B-L-N. The city's water department announced this morning that it will replace every household meter in the district over the next eighteen months. The old meters, some of them more than forty years old, have to be read by hand, while the new ones send readings in automatically. The department says that will put an end to the guesswork bills residents have been complaining about for years. Crews will work neighborhood by neighborhood, starting east of the river. Homeowners do not need to be at home, and there is no charge for the work itself, though officials do caution that any household whose old meter has been under-recording may see its bill go up once accurate readings begin. Letters will go out two weeks before crews reach each street. More on this after the break." }
    ],
    translation: "KBLN の正午のニュースをお伝えしています。市の水道局は今朝、今後18か月かけて地区内の全世帯のメーターを交換すると発表しました。古いメーターは40年以上使われているものもあり、人の手で検針する必要がありますが、新しいメーターは検針値を自動で送信します。これにより、住民が長年不満を訴えてきた概算による請求はなくなる、と水道局は述べています。作業は地区ごとに順次進められ、川の東側から始まります。世帯の方が在宅している必要はなく、作業自体の費用もかかりません。ただし、古いメーターが実際より少なく計測していた世帯では、正確な検針が始まると請求額が上がる可能性がある、と当局は注意を促しています。作業班が各通りに入る2週間前に通知が郵送されます。詳細は休憩の後で。",
    questions: [
      {
        q: "What is the report mainly about?",
        choices: [
          "A dispute over a construction contract",
          "A citywide equipment replacement program",
          "A shortage of trained technicians",
          "Plans for a new treatment facility"
        ],
        answer: 1,
        explanation: "replace every household meter in the district over the next eighteen months が中心。meter(計器)を equipment、地区全体の交換計画を replacement program と抽象化した言い換えが正解。"
      },
      {
        q: "According to the report, what problem will the change solve?",
        choices: [
          "Damage caused by aging pipes",
          "Long waits for repair appointments",
          "Bills based on estimates rather than actual use",
          "Frequent interruptions to service"
        ],
        answer: 2,
        explanation: "put an end to the guesswork bills residents have been complaining about が根拠。guesswork bills(当て推量の請求)が bills based on estimates に言い換えられている。old / forty years old という語から (A) の配管の老朽化を連想させるひっかけに注意。"
      },
      {
        q: "What does the speaker caution listeners about?",
        choices: [
          "Residents must be at home when crews arrive.",
          "A fee will be added to the next bill.",
          "The work may be delayed by weather.",
          "Some households may be charged more than before."
        ],
        answer: 3,
        explanation: "any household whose old meter has been under-recording may see its bill go up が根拠。under-recording(実際より少なく計測)を読み取る必要がある。直前で there is no charge for the work itself と明言しているので (B) は誤り。同様に do not need to be at home とあるので (A) も誤り。"
      }
    ]
  },
  {
    id: "s8p4-06",
    kind: "tour information",
    title: "トーク 6(乗船案内)",
    audio: [
      { speaker: "M", text: "Welcome aboard the Marlowe, and thanks for choosing our afternoon harbor run. A word about today's route before we cast off. We normally sail out to the old lighthouse and circle it twice, but the channel beyond the breakwater is being dredged this week, so instead we'll follow the inner shoreline and pass the shipyard, where two vessels are up in dry dock. Frankly, most of our regulars tell us that's the better view anyway. The trip still runs ninety minutes, same as always. The upper deck is open, but it gets windy once we're past the seawall, so if you didn't bring a jacket, we keep a few to lend at the counter by the stairs. And do hang on to your ticket stub. It gets you something off at the cafe on the pier when we come back in." }
    ],
    translation: "マーロウ号へようこそ。午後の港内クルーズをお選びいただきありがとうございます。出港前に本日の航路についてひとこと。通常は沖の古い灯台まで出て、その周りを2周しますが、今週は防波堤の先の水路で浚渫工事が行われているため、代わりに内側の海岸線に沿って進み、造船所の前を通ります。船が2隻、ドックに上がっています。実のところ、常連のお客様の多くは、こちらの方が景色は良いとおっしゃいます。所要時間はいつも通り90分です。上のデッキは開放していますが、防潮堤を過ぎると風が強くなります。上着をお持ちでない方には、階段そばのカウンターで貸し出しております。それから、チケットの半券は必ずお持ちください。戻ってきた際、桟橋のカフェで割引が受けられます。",
    questions: [
      {
        q: "Why has the usual route been changed?",
        choices: [
          "Work is being done in a waterway.",
          "The weather is expected to worsen.",
          "A landmark is closed to visitors.",
          "The vessel is short of crew members."
        ],
        answer: 0,
        explanation: "the channel beyond the breakwater is being dredged this week が根拠。dredged(浚渫されている)が work is being done に言い換えられている。灯台に行かないと聞いて (C) の『閉鎖』と早合点しないこと。閉鎖されているのは灯台ではなく水路。"
      },
      {
        q: "What does the speaker suggest about today's route?",
        choices: [
          "It is shorter than the usual one.",
          "Frequent passengers prefer it.",
          "It is offered only in the afternoon.",
          "It will become the standard route."
        ],
        answer: 1,
        explanation: "most of our regulars tell us that's the better view anyway が根拠。regulars(常連)が frequent passengers の言い換え。直後に The trip still runs ninety minutes, same as always とあるので (A) は誤り。"
      },
      {
        q: "What can the listeners do with their ticket stub?",
        choices: [
          "Borrow a jacket",
          "Board a later departure",
          "Enter the shipyard",
          "Get a reduced price at a cafe"
        ],
        answer: 3,
        explanation: "It gets you something off at the cafe on the pier が根拠。something off(いくらか割引)が a reduced price に対応。上着の貸し出しは半券とは無関係に案内されているので (A) は誤り。"
      }
    ]
  },
  {
    id: "s8p4-07",
    kind: "telephone message",
    title: "トーク 7(電話メッセージ)",
    audio: [
      { speaker: "W", text: "Hello, Mr. Radcliffe. This is Junko Sasaki from the National Accreditation Board, following up on the renewal we discussed in June. Our assessor is free the week of October twelfth, and I'd like to hold the Tuesday and Wednesday for your site. Before I confirm anything, though, there's one thing you should know. The checklist was revised in July, and the section on equipment now asks for calibration histories going back three years instead of one. Most of the places we visit already have that data. It's simply filed in several different systems, so the sooner you start pulling it together, the smoother the visit will be. I'll e-mail you the revised checklist this afternoon. Please reply by Friday to lock in those dates, because after that the next opening isn't until January." }
    ],
    translation: "もしもし、ラドクリフ様。全国認定機構の佐々木純子と申します。6月にご相談した更新の件でご連絡しました。当方の審査員が10月12日の週に空いておりまして、御社については火曜と水曜を仮押さえしたいと考えています。ただし確定の前に、ひとつお伝えしておくことがあります。7月にチェックリストが改訂され、設備に関する項目で、校正の履歴が従来の1年分から3年分にさかのぼって求められるようになりました。私どもが伺う施設のほとんどは、そのデータ自体はお持ちです。ただ、複数の別々のシステムに分かれて保管されているだけなので、早めにまとめ始めていただくほど当日がスムーズになります。改訂版のチェックリストは本日午後にメールでお送りします。日程を確定するために金曜日までにご返信ください。それを過ぎますと、次に空きが出るのは1月になってしまいます。",
    questions: [
      {
        q: "Why is the speaker calling?",
        choices: [
          "To arrange dates for a site visit",
          "To report the findings of a review",
          "To request payment of an annual fee",
          "To recommend a different supplier"
        ],
        answer: 0,
        explanation: "Our assessor is free the week of October twelfth, and I'd like to hold the Tuesday and Wednesday for your site が根拠。審査は『これから』行うので、(B) の結果報告ではない。"
      },
      {
        q: "What does the speaker say has changed?",
        choices: [
          "The fee charged for renewal",
          "The number of assessors assigned",
          "The period that records must cover",
          "The place where the review is held"
        ],
        answer: 2,
        explanation: "calibration histories going back three years instead of one が根拠。『1年分から3年分へ』という記録の対象期間の変更。revised in July という語から日付関係の変更を連想させ、(D) や日程の話と混同させるのが狙い。"
      },
      {
        q: "What will happen if the listener does not reply by Friday?",
        choices: [
          "The application will be rejected.",
          "An extra charge will be added.",
          "A different assessor will be assigned.",
          "The next available dates will be about three months later."
        ],
        answer: 3,
        explanation: "after that the next opening isn't until January が根拠。10月中旬の枠を逃すと次に空くのは1月=およそ3か月後、と2つの日付を突き合わせて計算する問題。話者は『3か月』とも『遅れる』とも言わない。"
      }
    ]
  },
  {
    id: "s8p4-08",
    kind: "excerpt from a meeting",
    title: "トーク 8(会議の抜粋・図表問題)",
    graphic: "Invoice #4471 — Halloway Supply\n1. Filter cartridges — $1,200\n2. Delivery (standard) — $150\n3. Rush handling — $400\n4. Extended warranty — $250",
    graphicKind: "invoice",
    audio: [
      { speaker: "W", text: "One more thing before we finish. The invoice from our filter supplier came in, and the total is higher than the quote I approved. The cartridges themselves are exactly what we agreed on, and the warranty was my own decision, so I'm not arguing with either of those. Delivery was always going to be billed. What I don't accept is the line they added afterward. We never asked for the order to be expedited. Their driver simply turned up earlier than promised, which is their convenience, not ours, so I'll be asking them to take that charge off in full. Ravi, could you dig out the original purchase order and forward it to me before you leave today? I want the paperwork in hand before I call them tomorrow." }
    ],
    translation: "【図表】請求書 #4471 ハロウェイ・サプライ/1. フィルターカートリッジ 1,200ドル/2. 配送(通常) 150ドル/3. 特急処理 400ドル/4. 延長保証 250ドル\n終わる前にもう1件。フィルターの仕入先から請求書が届きましたが、合計額が私の承認した見積もりより高くなっています。カートリッジ自体は合意した通りのものですし、保証は私自身の判断で付けたものなので、この2つには異議ありません。配送料はもともと請求される前提でした。納得できないのは、後から追加された項目です。私たちは注文を急がせるよう頼んでいません。先方の運転手が約束より早く来ただけで、それは先方の都合であって当方の都合ではありません。ですから、この費用は全額取り消すよう求めます。ラヴィさん、今日帰る前に元の発注書を探して私に転送してもらえますか。明日先方に電話する前に、書類を手元に置いておきたいので。",
    questions: [
      {
        q: "Look at the graphic. Which charge does the speaker want removed?",
        choices: [
          "$1,200",
          "$150",
          "$400",
          "$250"
        ],
        answer: 2,
        explanation: "図表問題。カートリッジ(1,200ドル)は合意通り、保証(250ドル)は自分の判断、配送(150ドル)はもともと請求される前提、と3つを順に容認している。残るのは expedited(急送)に当たる『特急処理 400ドル』。音声には rush という語は出ず、expedited から結び付ける必要がある。"
      },
      {
        q: "What does the speaker say about the invoice?",
        choices: [
          "It matches the original quote.",
          "The amount exceeds what was approved.",
          "It has already been paid.",
          "It includes a discount."
        ],
        answer: 1,
        explanation: "the total is higher than the quote I approved が根拠。higher than ... approved を exceeds what was approved と言い換えている。"
      },
      {
        q: "What does the speaker ask Ravi to do?",
        choices: [
          "Contact the supplier directly",
          "Cancel the rest of the order",
          "Draft a revised budget",
          "Retrieve an earlier document"
        ],
        answer: 3,
        explanation: "could you dig out the original purchase order and forward it to me が根拠。dig out(探し出す)が retrieve に対応する。先方に電話するのは話者自身(before I call them tomorrow)なので (A) は誤り。"
      }
    ]
  },
  {
    id: "s8p4-09",
    kind: "talk",
    title: "トーク 9(スタッフ向け説明)",
    audio: [
      { speaker: "M", text: "Thanks for coming out this early, everyone. You're all working the water stations today, and there are three things that matter far more than anything else on the sheet you were handed. First, stand behind the table, never in front of it. Runners grab cups without slowing down, and every year somebody gets knocked over. Second, hold the cup out and let them take it. Don't try to place it in their hand. Third, and this is the one people forget: keep pouring even after the crowd thins out. The last of them come through a full hour behind the leaders, and they're the ones who need us most. Each station has a captain with a radio. If you're running low on supplies, tell your captain. Don't leave your post to go looking for more yourself. We'll rotate breaks once the first wave has gone past." }
    ],
    translation: "こんなに早くから集まってくれてありがとう。皆さんは今日、給水所の担当です。配られた用紙に書かれている中で、他の何よりも重要なことが3つあります。1つ目、テーブルの後ろに立つこと。前には決して立たないでください。走者は速度を落とさずにカップをつかんでいくので、毎年誰かが突き飛ばされます。2つ目、カップは差し出して、相手に取らせること。手に握らせようとしないでください。3つ目、これが皆さん忘れがちなのですが、人の流れがまばらになっても注ぎ続けてください。最後の方々は先頭からまるまる1時間遅れて通ります。そして、私たちを最も必要としているのはその人たちです。各給水所には無線を持った責任者がいます。物資が少なくなってきたら、責任者に伝えてください。自分で探しに持ち場を離れないように。最初の集団が通過したら、順番に休憩を回します。",
    questions: [
      {
        q: "What will the listeners be doing today?",
        choices: [
          "Directing traffic around a route",
          "Handing out drinks at an event",
          "Registering participants",
          "Assembling a temporary stage"
        ],
        answer: 1,
        explanation: "You're all working the water stations today と、hold the cup out / keep pouring から、飲み物を配る役割だと分かる。runners という語だけで (C) の受付や (A) の交通整理と決めないこと。"
      },
      {
        q: "Why does the speaker mention the last participants?",
        choices: [
          "To explain when the event will end",
          "To praise a particular group",
          "To ask for additional helpers",
          "To urge the listeners to stay ready until the end"
        ],
        answer: 3,
        explanation: "意図を問う問題。keep pouring even after the crowd thins out に続けて The last of them come through a full hour behind the leaders と述べており、『人が減っても最後まで手を止めるな』という指示の理由付け。時刻の説明ではないので (A) は誤り。"
      },
      {
        q: "What should the listeners do if supplies run low?",
        choices: [
          "Notify the person in charge of their station",
          "Go to the main tent to collect more",
          "Close the station for a short time",
          "Ask participants to wait"
        ],
        answer: 0,
        explanation: "If you're running low on supplies, tell your captain が根拠。captain(責任者)が the person in charge に言い換えられている。直後に Don't leave your post to go looking for more yourself とあるので (B) は明確に否定される。"
      }
    ]
  },
  {
    id: "s8p4-10",
    kind: "speech",
    title: "トーク 10(送別スピーチ)",
    audio: [
      { speaker: "W", text: "Before dessert, I want to say a few words about Gerald, who after twenty-six years is finally taking his Fridays back. Gerald joined us as a junior draftsman when this firm had eleven employees and one photocopier that jammed if you looked at it the wrong way. He designed the drainage running under half this city, though you would never hear that from him. What I'll remember, though, isn't any single project. It's that whenever a younger engineer got stuck, Gerald's door was open, and he never once made anyone feel foolish for asking. So, starting next quarter, the mentoring that he built up informally over the years becomes an official part of how we bring in new staff, and we're putting his name on it. Gerald, we'd love it if you'd come back once a year to open it. Everyone, please raise your glass." }
    ],
    translation: "デザートの前に、ジェラルドについて少しお話しさせてください。26年を経て、ようやく金曜日を自分の手に取り戻す人です。ジェラルドが若手の製図担当として入社したとき、この事務所は社員11人、コピー機は1台きりで、見る角度を間違えると紙詰まりを起こすような代物でした。彼はこの街の半分の地下を走る排水設備を設計しましたが、本人の口からそれを聞くことは決してありません。それでも私の記憶に残っているのは、特定の仕事ではありません。若い技術者が行き詰まったとき、ジェラルドの部屋の扉はいつも開いていて、質問したことを一度たりとも恥ずかしく思わせなかった。そのことです。ですから来四半期から、彼が長年かけて自然に築いてきた指導の仕組みを、新しい人材を迎える正式な制度にします。そして、その名前には彼の名を冠します。ジェラルド、年に一度は戻ってきて、その開講の挨拶をしてくれたら嬉しいです。皆さん、グラスをお持ちください。",
    questions: [
      {
        q: "What is the purpose of the speech?",
        choices: [
          "To welcome a new employee",
          "To mark the founding of the firm",
          "To honor a departing colleague",
          "To introduce a guest speaker"
        ],
        answer: 2,
        explanation: "after twenty-six years is finally taking his Fridays back(26年を経てようやく金曜日を取り戻す)という遠回しな表現が退職を示す。joined us as a junior draftsman は過去の回想であり、新入社員の紹介ではないので (A) は誤り。"
      },
      {
        q: "What does the speaker value most about Gerald?",
        choices: [
          "His willingness to help less experienced colleagues",
          "His designs for the city's infrastructure",
          "His skill at attracting new clients",
          "His record of meeting every deadline"
        ],
        answer: 0,
        explanation: "What I'll remember, though, isn't any single project. It's that whenever a younger engineer got stuck, Gerald's door was open が根拠。話者は排水設備の設計にも触れるが、isn't any single project と明確に打ち消してから本題に入る。この転換を聞き逃すと (B) を選んでしまう。"
      },
      {
        q: "What will the company do next quarter?",
        choices: [
          "Hire several additional engineers",
          "Open a second office",
          "Publish a history of the firm",
          "Make a mentoring program official"
        ],
        answer: 3,
        explanation: "starting next quarter, the mentoring that he built up informally over the years becomes an official part of how we bring in new staff が根拠。informal(非公式)だったものが official になる、という対比を押さえる。"
      }
    ]
  }
];
