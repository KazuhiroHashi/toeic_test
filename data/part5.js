// Part 5: 短文穴埋め問題(文法・語彙)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part5 = [
  {
    id: "p5-01",
    q: "The marketing team made a ______ to launch the new campaign in early September.",
    choices: ["decide", "decision", "decisive", "decidedly"],
    answer: 1,
    translation: "マーケティングチームは、新キャンペーンを9月上旬に開始するという決定を下した。",
    explanation: "冠詞 a の後ろには名詞が入る。made a decision(決定を下す)は頻出コロケーション。(A)動詞、(C)形容詞、(D)副詞。"
  },
  {
    id: "p5-02",
    q: "All employees must submit their expense reports ______ the end of each month.",
    choices: ["by", "until", "on", "at"],
    answer: 0,
    translation: "全従業員は毎月末までに経費報告書を提出しなければならない。",
    explanation: "『〜までに(期限)』は by。until は『〜までずっと(継続)』で、submit のような一回きりの動作には使えない。"
  },
  {
    id: "p5-03",
    q: "Ms. Rivera ______ the Tokyo branch since it opened three years ago.",
    choices: ["manages", "managed", "has managed", "is managing"],
    answer: 2,
    translation: "リベラさんは3年前の開設以来、東京支店を管理している。",
    explanation: "since + 過去の起点(it opened three years ago)があるので現在完了形 has managed。『過去から現在まで続いている』ことを表す。"
  },
  {
    id: "p5-04",
    q: "______ the heavy rain, the outdoor product launch event was held as scheduled.",
    choices: ["Despite", "Although", "Because of", "However"],
    answer: 0,
    translation: "大雨にもかかわらず、屋外の製品発表イベントは予定通り開催された。",
    explanation: "空所の後ろは名詞句(the heavy rain)なので前置詞が必要。逆接の前置詞 Despite が正解。Although は接続詞(後ろに主語+動詞)、However は副詞。"
  },
  {
    id: "p5-05",
    q: "Applicants for the position must be able to work ______ under tight deadlines.",
    choices: ["efficient", "efficiency", "efficiently", "more efficient"],
    answer: 2,
    translation: "この職への応募者は、厳しい締め切りの下で効率的に働ける必要がある。",
    explanation: "動詞 work を修飾するのは副詞 efficiently。動詞の直後の空所は副詞を疑うのが定石。"
  },
  {
    id: "p5-06",
    q: "The new software update will be installed ______ on all company computers this weekend.",
    choices: ["automatic", "automatically", "automation", "automate"],
    answer: 1,
    translation: "新しいソフトウェア更新は、今週末に全社のコンピューターへ自動的にインストールされる。",
    explanation: "受動態 will be installed を修飾するのは副詞 automatically。"
  },
  {
    id: "p5-07",
    q: "Please review the attached contract carefully ______ signing it.",
    choices: ["before", "during", "while", "until"],
    answer: 0,
    translation: "署名する前に、添付の契約書を注意深くご確認ください。",
    explanation: "before + 動名詞(signing)で『署名する前に』。while も接続詞として -ing を取れるが『署名しながら確認する』では文意が不自然。"
  },
  {
    id: "p5-08",
    q: "______ of the two candidates has extensive experience in international sales.",
    choices: ["Both", "Every", "Neither", "All"],
    answer: 2,
    translation: "2人の候補者のどちらも、国際営業の豊富な経験を持っていない。",
    explanation: "動詞が has(単数)である点に注目。Neither of the two 〜 は単数扱い。Both/All は複数扱いで have が必要、Every は Every of とは言えない。"
  },
  {
    id: "p5-09",
    q: "The quarterly report indicates that sales in the Asian market grew ______ than expected.",
    choices: ["rapid", "rapidly", "more rapidly", "most rapidly"],
    answer: 2,
    translation: "四半期報告書は、アジア市場の売上が予想より急速に伸びたことを示している。",
    explanation: "文末に than があるので比較級 more rapidly。動詞 grew を修飾するため副詞の比較級を選ぶ。"
  },
  {
    id: "p5-10",
    q: "Employees ______ wish to participate in the wellness program should register by Friday.",
    choices: ["who", "whose", "whom", "which"],
    answer: 0,
    translation: "健康増進プログラムへの参加を希望する従業員は、金曜日までに登録してください。",
    explanation: "先行詞が人(Employees)で、空所の直後に動詞 wish が続くので主格の関係代名詞 who。"
  },
  {
    id: "p5-11",
    q: "The CEO's speech was so ______ that many employees stayed to ask questions afterward.",
    choices: ["inspire", "inspiring", "inspired", "inspiration"],
    answer: 1,
    translation: "CEOのスピーチはとても刺激的だったので、多くの従業員が後に残って質問をした。",
    explanation: "スピーチは人を『刺激する』側なので現在分詞 inspiring。inspired は『刺激を受けた』で人の感情を表すときに使う。"
  },
  {
    id: "p5-12",
    q: "Orders placed before noon are ______ shipped on the same business day.",
    choices: ["yet", "soon", "usually", "once"],
    answer: 2,
    translation: "正午までに出された注文は、通常その営業日のうちに発送される。",
    explanation: "文意から頻度の副詞 usually(通常は)が適切。yet は否定文・疑問文で使うのが基本。"
  },
  {
    id: "p5-13",
    q: "The company offers a full refund to customers who are not completely ______ with their purchase.",
    choices: ["satisfy", "satisfied", "satisfying", "satisfaction"],
    answer: 1,
    translation: "同社は、購入品に完全に満足していない顧客に全額返金を提供している。",
    explanation: "人が『満足させられる』ので過去分詞 satisfied。be satisfied with 〜(〜に満足している)はセットで覚える。"
  },
  {
    id: "p5-14",
    q: "______ you have any questions about your benefits package, please contact the HR department.",
    choices: ["Should", "Unless", "Whether", "Despite"],
    answer: 0,
    translation: "福利厚生についてご質問がある場合は、人事部までお問い合わせください。",
    explanation: "Should you have 〜 は If you should have 〜 の倒置形で『万一〜の場合は』。ビジネス文書の頻出表現。"
  },
  {
    id: "p5-15",
    q: "The design proposal must be approved by the committee ______ it can be presented to the client.",
    choices: ["before", "during", "despite", "toward"],
    answer: 0,
    translation: "デザイン案は、クライアントに提示する前に委員会の承認を得なければならない。",
    explanation: "空所の後ろが節(it can be presented)なので接続詞が必要。文意から before(〜する前に)。during / despite / toward は前置詞。"
  },
  {
    id: "p5-16",
    q: "Ms. Chen asked her assistant to make ten ______ of the meeting agenda.",
    choices: ["copies", "copying", "copied", "copier"],
    answer: 0,
    translation: "チェンさんはアシスタントに、会議の議題のコピーを10部作るよう頼んだ。",
    explanation: "ten の後ろには複数形の名詞。make copies of 〜(〜のコピーを取る)。copier は『コピー機』で文意に合わない。"
  },
  {
    id: "p5-17",
    q: "The training manual explains the safety procedures in ______.",
    choices: ["detail", "details", "detailed", "detailing"],
    answer: 0,
    translation: "研修マニュアルは安全手順を詳細に説明している。",
    explanation: "in detail(詳細に)は無冠詞・単数で使う定型表現。イディオムとして暗記する。"
  },
  {
    id: "p5-18",
    q: "______ the merger is finalized, the two companies will operate under a single brand name.",
    choices: ["Once", "Yet", "Either", "Rather"],
    answer: 0,
    translation: "合併が完了すれば、2社は単一のブランド名で運営される。",
    explanation: "Once + 主語 + 動詞で『いったん〜すれば』。時を表す接続詞として頻出。"
  },
  {
    id: "p5-19",
    q: "The hotel is conveniently ______ within walking distance of the convention center.",
    choices: ["located", "locating", "location", "locate"],
    answer: 0,
    translation: "そのホテルは、コンベンションセンターから徒歩圏内という便利な場所にある。",
    explanation: "be located(位置している)は受動態の定型表現。建物は『置かれる』側なので過去分詞。"
  },
  {
    id: "p5-20",
    q: "Sales representatives should respond to customer inquiries as ______ as possible.",
    choices: ["prompt", "promptly", "promptness", "prompted"],
    answer: 1,
    translation: "営業担当者は、顧客からの問い合わせにできるだけ迅速に対応すべきだ。",
    explanation: "as ___ as possible の間には、動詞 respond を修飾する副詞 promptly が入る。"
  },
  {
    id: "p5-21",
    q: "Due to budget constraints, the renovation project has been ______ until next fiscal year.",
    choices: ["informed", "postponed", "appointed", "reminded"],
    answer: 1,
    translation: "予算上の制約により、改装プロジェクトは来年度まで延期された。",
    explanation: "語彙問題。until next fiscal year(来年度まで)と相性がよいのは postpone(延期する)。"
  },
  {
    id: "p5-22",
    q: "Employees are encouraged to share ______ ideas during the monthly brainstorming sessions.",
    choices: ["they", "them", "their", "theirs"],
    answer: 2,
    translation: "従業員は、月例のブレインストーミングで自分たちのアイデアを共有するよう奨励されている。",
    explanation: "名詞 ideas の前に置けるのは所有格 their。代名詞の格の問題は空所の後ろの品詞で決める。"
  },
  {
    id: "p5-23",
    q: "The keynote speaker will arrive at the venue ______ 30 minutes before the event begins.",
    choices: ["approximate", "approximately", "approximation", "approximated"],
    answer: 1,
    translation: "基調講演者は、イベント開始の約30分前に会場へ到着する予定だ。",
    explanation: "数値表現(30 minutes)を修飾するのは副詞 approximately(約)。数字の前の空所は approximately / nearly / almost などの副詞が定番。"
  },
  {
    id: "p5-24",
    q: "Neither the manager ______ the staff members were aware of the schedule change.",
    choices: ["or", "nor", "and", "but"],
    answer: 1,
    translation: "マネージャーもスタッフも、スケジュール変更に気づいていなかった。",
    explanation: "neither A nor B(AもBも〜ない)の相関接続詞。neither を見たら nor を探す。"
  },
  {
    id: "p5-25",
    q: "The finance director reviewed the budget ______ before submitting it to the board.",
    choices: ["himself", "him", "his", "he"],
    answer: 0,
    translation: "財務部長は、取締役会に提出する前に自ら予算を確認した。",
    explanation: "主語 The finance director を強調する再帰代名詞 himself(自分自身で)。文が完成している後ろに置かれる再帰代名詞は強調用法。"
  },
  {
    id: "p5-26",
    q: "______ completing the online form, you will receive a confirmation e-mail within 24 hours.",
    choices: ["Upon", "Toward", "Against", "Among"],
    answer: 0,
    translation: "オンラインフォームの記入が完了するとすぐに、24時間以内に確認メールが届きます。",
    explanation: "Upon -ing(〜するとすぐに)は定型表現。On -ing も同じ意味。"
  },
  {
    id: "p5-27",
    q: "The two branches will be merged to make operations more ______.",
    choices: ["profit", "profits", "profitable", "profitably"],
    answer: 2,
    translation: "業務の収益性を高めるため、2つの支店は統合される。",
    explanation: "make + 目的語 + 補語 の第5文型。operations(目的語)の状態を説明する形容詞 profitable が補語になる。"
  },
  {
    id: "p5-28",
    q: "Please note that the parking garage will be closed ______ maintenance next Saturday.",
    choices: ["for", "at", "with", "along"],
    answer: 0,
    translation: "来週の土曜日、駐車場はメンテナンスのため閉鎖されますのでご注意ください。",
    explanation: "closed for maintenance(メンテナンスのため閉鎖)。目的・理由を表す for。"
  },
  {
    id: "p5-29",
    q: "If the shipment ______ on time, we would not have missed the product launch date.",
    choices: ["arrived", "had arrived", "arrives", "will arrive"],
    answer: 1,
    translation: "もし荷物が時間通りに届いていたら、私たちは製品発売日を逃さなかっただろう。",
    explanation: "帰結節が would not have missed(仮定法過去完了)なので、if節は had arrived。『過去の事実に反する仮定』を表す。"
  },
  {
    id: "p5-30",
    q: "Attendance at the annual conference has increased ______ over the past five years.",
    choices: ["considerable", "considerably", "consideration", "considering"],
    answer: 1,
    translation: "年次会議の参加者数は、過去5年間で大幅に増加した。",
    explanation: "動詞 has increased を修飾するのは副詞 considerably(大幅に)。increase / decrease + considerably / significantly / slightly はTOEIC頻出の組み合わせ。"
  }
];
