// Part 5: 短文穴埋め問題(中〜上級レベル:語彙約3割+品詞・動詞形・前置詞/接続詞・構文)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part5 = [
  {
    id: "p5-01",
    q: "______ the CEO not intervened personally, the negotiations with the labor union would have collapsed.",
    choices: ["Had", "Should", "Were", "If"],
    answer: 0,
    translation: "CEOが自ら介入していなかったら、労働組合との交渉は決裂していただろう。",
    explanation: "仮定法過去完了の倒置。If the CEO had not intervened → Had the CEO not intervened。帰結節の would have collapsed から過去完了と判断する。If なら if the CEO had not と語順が変わるため不可。"
  },
  {
    id: "p5-02",
    q: "The two firms entered into a ______ agreement under which each will distribute the other's products in its home market.",
    choices: ["reciprocal", "prosperous", "adjacent", "courteous"],
    answer: 0,
    translation: "両社は、それぞれが自国市場で相手の製品を販売するという相互協定を結んだ。",
    explanation: "語彙問題。under which each will distribute the other's products(互いに相手の製品を扱う)という内容から reciprocal(相互の)。prosperous(繁栄した)、adjacent(隣接した)、courteous(礼儀正しい)は文意に合わない。"
  },
  {
    id: "p5-03",
    q: "______ recent supply chain disruptions, Halcyon Manufacturing managed to fulfill all of its fourth-quarter orders.",
    choices: ["Notwithstanding", "Nevertheless", "Whereas", "Moreover"],
    answer: 0,
    translation: "最近のサプライチェーンの混乱にもかかわらず、ハルシオン製造は第4四半期の全注文に対応した。",
    explanation: "空所の後ろが名詞句なので前置詞が必要。Notwithstanding(〜にもかかわらず)は despite の硬い同義語で900点レベルの頻出語。Nevertheless / Moreover は副詞、Whereas は接続詞。"
  },
  {
    id: "p5-04",
    q: "The ______ of the automated inventory system resulted in a 20 percent reduction in warehouse labor costs.",
    choices: ["implement", "implementing", "implementation", "implemented"],
    answer: 2,
    translation: "自動在庫管理システムの導入により、倉庫の人件費が20パーセント削減された。",
    explanation: "The ___ of と冠詞+of に挟まれた空所には名詞 implementation。implement は動詞(名詞では『道具』の意味になり文意に合わない)。動名詞 implementing は冠詞 the と直接は相性が悪い。"
  },
  {
    id: "p5-05",
    q: "The revised proposal differs from the original ______ it includes a detailed assessment of environmental risks.",
    choices: ["in that", "so that", "now that", "as if"],
    answer: 0,
    translation: "修正案は、環境リスクの詳細な評価を含んでいるという点で原案と異なる。",
    explanation: "differ from A in that S V(〜という点でAと異なる)。in that は『〜という点で』を表す上級頻出の接続詞。so that は目的、now that は理由、as if は様態で文意に合わない。"
  },
  {
    id: "p5-06",
    q: "The workshop on revised tax regulations has been ______ scheduled for March 18, subject to speaker availability.",
    choices: ["tentatively", "mutually", "scarcely", "eagerly"],
    answer: 0,
    translation: "改正税制に関するワークショップは、講師の都合を条件として、暫定的に3月18日に予定されている。",
    explanation: "語彙問題。subject to speaker availability(講師の都合次第)とあるので tentatively(暫定的に)が適切。tentatively scheduled はビジネス文書の定番コロケーション。"
  },
  {
    id: "p5-07",
    q: "The external auditor recommended that the company ______ its internal controls before the next fiscal year.",
    choices: ["strengthen", "strengthens", "strengthened", "will strengthen"],
    answer: 0,
    translation: "外部監査人は、同社が次の会計年度までに内部統制を強化するよう勧告した。",
    explanation: "recommend / suggest / request / demand + that節では動詞は原形(仮定法現在)。主語が the company でも三単現の -s は付けない。この『原形を選ぶ』問題は上級の定番。"
  },
  {
    id: "p5-08",
    q: "______ to comply with the updated safety regulations, the plant was ordered to suspend operations temporarily.",
    choices: ["Failing", "Failed", "Failure", "Fails"],
    answer: 0,
    translation: "改定された安全規制を順守できなかったため、その工場は一時的な操業停止を命じられた。",
    explanation: "分詞構文。主語 the plant が『順守しない』という能動の関係なので現在分詞 Failing。fail to do(〜しない・できない)の形も併せて覚える。"
  },
  {
    id: "p5-09",
    q: "In ______ of his twenty years of dedicated service, Mr. Alvarez was presented with a commemorative plaque.",
    choices: ["recognition", "apprehension", "intuition", "prohibition"],
    answer: 0,
    translation: "20年間の献身的な勤続をたたえ、アルバレスさんには記念の盾が贈られた。",
    explanation: "in recognition of 〜(〜を評価して・たたえて)は表彰の文脈の定型句。apprehension(不安)、intuition(直感)、prohibition(禁止)では意味が通らない。"
  },
  {
    id: "p5-10",
    q: "The committee reviewed twelve applications, three ______ were shortlisted for final interviews.",
    choices: ["of which", "of whom", "which", "whose"],
    answer: 0,
    translation: "委員会は12件の応募書類を審査し、そのうち3件が最終面接の候補に残った。",
    explanation: "数量詞+of+関係代名詞の非制限用法。先行詞 applications は物なので of which。人なら of whom。which 単独ではカンマの後で three which とは言えない。"
  },
  {
    id: "p5-11",
    q: "All promotional activities for the new beverage line will be suspended ______ the outcome of the trademark dispute.",
    choices: ["pending", "unless", "whether", "meanwhile"],
    answer: 0,
    translation: "新しい飲料ラインの販促活動はすべて、商標紛争の結果が出るまで停止される。",
    explanation: "pending は『〜を待つ間・〜が決まるまで』という前置詞(900点レベル)。後ろに名詞句 the outcome が続く点が決め手。unless / whether は節が必要、meanwhile は副詞。"
  },
  {
    id: "p5-12",
    q: "The service agreement will renew automatically unless either party gives written notice at least sixty days ______ expiration.",
    choices: ["prior to", "previous", "ahead", "formerly"],
    answer: 0,
    translation: "サービス契約は、いずれかの当事者が満了の60日以上前に書面で通知しない限り、自動更新される。",
    explanation: "prior to 〜(〜より前に)は before の硬い同義語で、契約書の頻出表現。previous は形容詞、ahead は ahead of なら可、formerly は副詞で名詞 expiration をつなげない。"
  },
  {
    id: "p5-13",
    q: "Only after the final inspection has been completed ______ to occupy the new office tower.",
    choices: ["will tenants be permitted", "tenants will be permitted", "tenants permitted", "will be permitted tenants"],
    answer: 0,
    translation: "最終検査が完了して初めて、テナントは新しいオフィスタワーへの入居を許可される。",
    explanation: "Only+副詞句(節)が文頭に出ると、主節は疑問文の語順に倒置される。Only after 〜 completed までが副詞節で、主節は will tenants be permitted。倒置は上級の頻出構文。"
  },
  {
    id: "p5-14",
    q: "The marketing director ______ the sudden surge in online sales to the influencer campaign launched in April.",
    choices: ["attributed", "contributed", "distributed", "subscribed"],
    answer: 0,
    translation: "マーケティング責任者は、オンライン売上の急増を4月に開始したインフルエンサーキャンペーンによるものだとした。",
    explanation: "attribute A to B(AをBのおかげ・せいだと考える)。contribute to(貢献する)、distribute(配布する)、subscribe to(購読する)と、似た綴りの動詞の語法を区別させる問題。"
  },
  {
    id: "p5-15",
    q: "Employees may work remotely up to three days per week, ______ they remain reachable during core business hours.",
    choices: ["provided that", "in case of", "owing to", "as though"],
    answer: 0,
    translation: "コアタイムに連絡が取れる状態を保つことを条件に、従業員は週3日まで在宅勤務ができる。",
    explanation: "provided that S V(〜という条件で)= if の硬い表現。後ろに節が続くことが決め手。in case of / owing to は前置詞句で名詞しか取れない。as though(まるで〜のように)は文意に合わない。"
  },
  {
    id: "p5-16",
    q: "Given the ______ demand for data analysts, the university has doubled the capacity of its statistics program.",
    choices: ["growing", "grown", "grows", "growth"],
    answer: 0,
    translation: "データアナリストへの需要の高まりを受けて、その大学は統計学プログラムの定員を2倍にした。",
    explanation: "名詞 demand を修飾する現在分詞 growing(高まりつつある)。demand が『伸びている』という能動関係なので -ing。growth demand とは言わない(growth は名詞)。"
  },
  {
    id: "p5-17",
    q: "Ms. Patel is ______ regarded as one of the foremost authorities on maritime law in the region.",
    choices: ["widely", "evenly", "tightly", "abruptly"],
    answer: 0,
    translation: "パテルさんは、この地域における海事法の第一人者の一人として広く認められている。",
    explanation: "コロケーション問題。be widely regarded as 〜(〜として広く見なされている)は定番の組み合わせ。evenly(均等に)、tightly(きつく)、abruptly(突然に)は regarded と結びつかない。"
  },
  {
    id: "p5-18",
    q: "Staff members who work on public holidays may take an additional day off ______ overtime pay.",
    choices: ["in lieu of", "in charge of", "on behalf of", "at odds with"],
    answer: 0,
    translation: "祝日に勤務した職員は、残業代の代わりに追加の休暇を取得できる。",
    explanation: "in lieu of 〜(〜の代わりに)= instead of の硬い表現で、人事・契約関連文書の頻出句。in charge of(〜を担当して)、on behalf of(〜を代表して)、at odds with(〜と対立して)。"
  },
  {
    id: "p5-19",
    q: "By the time the renovation is complete, the museum ______ closed to the public for nearly eighteen months.",
    choices: ["will have been", "has been", "will be", "had been"],
    answer: 0,
    translation: "改装が完了する頃には、その美術館は18か月近く休館していたことになる。",
    explanation: "By the time+現在形の節が未来の一時点を表すので、主節は未来完了 will have been。『その時点までの継続』を表す。had been は過去完了で時制が合わない。"
  },
  {
    id: "p5-20",
    q: "The consultant praised the project team for its strict ______ to the agreed-upon timeline and budget.",
    choices: ["adherence", "coherence", "interference", "persistence"],
    answer: 0,
    translation: "コンサルタントは、合意済みのスケジュールと予算を厳格に順守したことについてプロジェクトチームを称賛した。",
    explanation: "語彙問題。adherence to 〜(〜の順守)。coherence(一貫性)は to を取らず、interference(干渉)は文意が逆、persistence は in を取るのが普通。名詞+前置詞の相性で解く。"
  },
  {
    id: "p5-21",
    q: "The safety requirements for laboratory personnel are considerably stricter than ______ for administrative staff.",
    choices: ["those", "that", "these", "ones"],
    answer: 0,
    translation: "実験室職員向けの安全要件は、事務職員向けのものよりかなり厳しい。",
    explanation: "比較対象の反復を避ける代名詞。requirements(複数)を受けるので those。単数なら that。ones は前に形容詞などの修飾がない限り than の直後では使わない。"
  },
  {
    id: "p5-22",
    q: "Because the submission deadline is not ______, the design team has time to explore several alternative concepts.",
    choices: ["imminent", "eminent", "immense", "imitative"],
    answer: 0,
    translation: "提出期限が差し迫っていないため、デザインチームには複数の代替案を検討する時間がある。",
    explanation: "似た綴りの語の識別問題。imminent(差し迫った)/ eminent(著名な)/ immense(莫大な)/ imitative(模倣の)。deadline と結びつくのは imminent。この2語の混同を突く問題は頻出。"
  },
  {
    id: "p5-23",
    q: "The city has introduced a program ______ residents can exchange used batteries for public transit credits.",
    choices: ["whereby", "whoever", "whatever", "whichever"],
    answer: 0,
    translation: "市は、住民が使用済み電池を公共交通機関のクレジットと交換できる制度を導入した。",
    explanation: "whereby(それによって〜する)= by which。a program whereby S V(〜という仕組みの制度)は上級頻出。複合関係代名詞 whoever などは先行詞 program を受けられない。"
  },
  {
    id: "p5-24",
    q: "______ that two board members were unable to attend, the vote on the acquisition has been postponed until next week.",
    choices: ["Given", "Owing", "Despite", "Whether"],
    answer: 0,
    translation: "取締役2名が出席できなかったことを考慮し、買収に関する採決は来週に延期された。",
    explanation: "Given that S V(〜であることを考えると)。Owing は owing to+名詞の形でしか使えず、Despite も前置詞なので that節を取れない。Whether that では意味を成さない。"
  },
  {
    id: "p5-25",
    q: "Attendees are kindly asked to ______ from using mobile devices while the keynote address is in progress.",
    choices: ["refrain", "prohibit", "restrict", "prevent"],
    answer: 0,
    translation: "基調講演の間は、携帯端末の使用をお控えいただくようお願いいたします。",
    explanation: "語法問題。refrain from -ing(〜を控える)は自動詞で from を取る。prohibit / restrict / prevent はいずれも他動詞で直後に目的語が必要(prohibit A from -ing の形なら可)。"
  },
  {
    id: "p5-26",
    q: "Of all the branches surveyed, the Kyoto office handled customer complaints the most ______.",
    choices: ["promptly", "prompt", "promptness", "prompter"],
    answer: 0,
    translation: "調査対象の全支店の中で、京都支店が顧客からの苦情に最も迅速に対応した。",
    explanation: "動詞 handled を修飾するので副詞。the most+副詞で最上級を作る。形容詞 prompt では動詞を修飾できない。品詞問題の中でも比較と組み合わせたやや難のパターン。"
  },
  {
    id: "p5-27",
    q: "The extended warranty covers manufacturing defects but not damage resulting from improper ______ of the equipment.",
    choices: ["handling", "holding", "gripping", "seizing"],
    answer: 0,
    translation: "延長保証は製造上の欠陥を対象とするが、機器の不適切な取り扱いによる損傷は対象外である。",
    explanation: "コロケーション問題。improper handling(不適切な取り扱い)は保証書・取扱説明書の定番表現。holding / gripping / seizing は物理的に『握る』意味で、この文脈では使わない。"
  },
  {
    id: "p5-28",
    q: "______ it not for the generous support of local sponsors, the annual film festival could not take place.",
    choices: ["Were", "Had", "Should", "Was"],
    answer: 0,
    translation: "地元スポンサーの手厚い支援がなければ、毎年恒例の映画祭は開催できないだろう。",
    explanation: "Were it not for 〜(〜がなければ)= If it were not for 〜 の倒置。帰結節が could not take place(仮定法過去)なので Were。過去の事実に反する場合は Had it not been for。"
  },
  {
    id: "p5-29",
    q: "Seating at the awards banquet is limited, and ______ reservations are therefore strongly encouraged.",
    choices: ["advance", "advanced", "advancing", "advancement"],
    answer: 0,
    translation: "授賞式晩餐会の座席には限りがあるため、事前のご予約を強くお勧めします。",
    explanation: "advance は名詞の前に置くと『事前の』という形容詞的用法(advance reservations / advance notice)。advanced は『高度な・上級の』で意味が異なる。この2語の識別は頻出のひっかけ。"
  },
  {
    id: "p5-30",
    q: "The imported merchandise cannot be released from the warehouse ______ customs clearance has been obtained.",
    choices: ["until", "by", "upon", "toward"],
    answer: 0,
    translation: "輸入品は、通関手続きが完了するまで倉庫から出荷できない。",
    explanation: "空所の後ろが節(S+V)なので接続詞が必要。until(〜するまでずっと)は接続詞としても使える。by / upon / toward は前置詞で節を取れない。not A until B(BまでAしない)の構文。"
  }
];
