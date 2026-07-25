// Part 5: 短文穴埋め問題(本番と同じ30問)
// 難易度配分: やさしめ7問(600点前後で解ける) / 標準18問(700点クラスの問題集レベル) / 難問5問(900点でも落としうる)
// 難問は p5-01(関係副詞) / p5-08(後置修飾の見抜き) / p5-10(数量詞+of which) / p5-20(指示の対応) / p5-28(主語と動詞の一致)
window.TOEIC_DATA = window.TOEIC_DATA || {};
window.TOEIC_DATA.part5 = [
  {
    id: "p5-01",
    q: "Long-serving staff members say they cannot recall a season ______ the resort received so few reservations.",
    choices: ["which", "whose", "when", "what"],
    answer: 2,
    translation: "長く勤めている従業員たちは、そのリゾートの予約がこれほど少なかった時期は思い出せないと言っている。",
    explanation: "先行詞 a season は『時』を表し、空所の後ろ the resort received so few reservations は要素の欠けていない完全な文。したがって関係副詞 when が入る。関係代名詞 which を使うなら後ろが不完全な文(主語や目的語が欠けた形)でなければならず、ここでは不可。whose は直後に名詞が必要で、what は先行詞を取らない。『空所の後ろが完全な文か不完全な文か』で見分けるのが決め手。"
  },
  {
    id: "p5-02",
    q: "Maintenance requests should be submitted through the online form so that technicians can ______ them according to urgency.",
    choices: ["prioritize", "postpone", "summarize", "duplicate"],
    answer: 0,
    translation: "保守作業の依頼はオンラインフォームから提出すること。技術者が緊急度に応じて優先順位を付けられるようにするためである。",
    explanation: "according to urgency(緊急度に応じて)という語句が手がかり。緊急度で並べ替えるのだから prioritize(優先順位を付ける)。postpone(延期する)、summarize(要約する)、duplicate(複製する)はいずれも『順位を付ける』意味にならない。"
  },
  {
    id: "p5-e1",
    q: "Ms. Okada checked the inventory figures ______ before submitting the monthly report.",
    choices: ["thorough", "thoroughly", "thoroughness", "more thorough"],
    answer: 1,
    translation: "岡田さんは月次報告書を提出する前に、在庫の数字を入念に確認した。",
    explanation: "動詞 checked とその目的語 the inventory figures の後ろにある空所なので、動詞を修飾する副詞 thoroughly が入る。thorough は形容詞、thoroughness は名詞で動詞を修飾できない。比較級 more thorough も比較対象がなく成立しない。品詞問題は文意より先に『何を修飾するか』で決める。"
  },
  {
    id: "p5-03",
    q: "______ the heavy snow on Saturday morning, more than four hundred people attended the outdoor craft market.",
    choices: ["Although", "However", "Because of", "Despite"],
    answer: 3,
    translation: "土曜日の朝の大雪にもかかわらず、400人を超える人々が屋外の工芸品市を訪れた。",
    explanation: "空所の後ろ the heavy snow は名詞句なので、節を取る接続詞 Although と副詞 However は使えない。残る Because of と Despite はどちらも名詞句を取れるが、Because of では『大雪のせいで400人以上が来場した』となり因果が逆。『大雪にもかかわらず』という譲歩の Despite が正解。形だけでなく文意まで見る必要がある問題。"
  },
  {
    id: "p5-04",
    q: "The ______ of the new sorting machine reduced packaging time by nearly one third.",
    choices: ["install", "installing", "installation", "installed"],
    answer: 2,
    translation: "新しい仕分け機の導入により、梱包にかかる時間がおよそ3分の1短縮された。",
    explanation: "冠詞 The と前置詞 of に挟まれた空所には名詞が入るので installation。install は動詞、installed は過去形・過去分詞。動名詞 installing は冠詞 the の直後には置けない。空所の前後の形だけで解ける基本問題。"
  },
  {
    id: "p5-05",
    q: "The delivery date cannot be confirmed ______ the client approves the final design drawings.",
    choices: ["until", "whether", "despite", "during"],
    answer: 0,
    translation: "顧客が最終の設計図を承認するまで、納品日は確定できない。",
    explanation: "空所の後ろに the client approves という主語と動詞のある節が続くので、節を取れる接続詞が必要。despite と during は前置詞で名詞しか取れない。whether では『承認するかどうか確定できない』となり主節の内容と噛み合わない。『承認するまで確定できない』という時の関係を表す until が正解。"
  },
  {
    id: "p5-06",
    q: "The training session has been ______ scheduled for June 4, pending confirmation from the head office.",
    choices: ["rarely", "densely", "previously", "tentatively"],
    answer: 3,
    translation: "研修は本社の確認待ちの状態で、6月4日に暫定的に予定されている。",
    explanation: "pending confirmation from the head office(本社の確認待ち)とあるので、日程がまだ確定していないことを表す tentatively(暫定的に)が入る。previously(以前に)では『確認待ち』と矛盾する。tentatively scheduled は業務文書の定番の組み合わせなので、そのまま覚えておきたい。"
  },
  {
    id: "p5-07",
    q: "The external auditor recommended that the accounting department ______ every original receipt for a minimum of seven years.",
    choices: ["retains", "retain", "retaining", "to retain"],
    answer: 1,
    translation: "外部監査人は、経理部がすべての領収書の原本を最低7年間保管するよう勧告した。",
    explanation: "recommend / insist / request / require などの後ろの that 節では、動詞は原形になる(仮定法現在)。主語 the accounting department が三人称単数でも三単現の -s は付けないので retains は不可。retaining と to retain は that 節の述語動詞になれない。『主語が単数なのに原形』という見た目の違和感が狙い。"
  },
  {
    id: "p5-08",
    q: "The revised drawings ______ to the review committee last Thursday include a detailed cost breakdown for each construction phase.",
    choices: ["submitted", "submitting", "were submitted", "have submitted"],
    answer: 0,
    translation: "先週木曜日に審査委員会へ提出された修正図面には、各工事段階の詳細な費用内訳が含まれている。",
    explanation: "文全体の述語動詞はすでに include があるので、空所に述語動詞は入らない。空所は The revised drawings を後ろから修飾する過去分詞 submitted(提出された図面)。were submitted や have submitted を選ぶと動詞が二つ並び、include が主語を失って浮いてしまう。図面は『提出される』側なので現在分詞 submitting も不可。主語と述語動詞が離れている構造を見抜けるかを問う問題。"
  },
  {
    id: "p5-e2",
    q: "The new conveyor system has greatly improved the ______ of the packing department.",
    choices: ["produce", "productive", "productively", "productivity"],
    answer: 3,
    translation: "新しいコンベヤーシステムにより、梱包部門の生産性が大幅に向上した。",
    explanation: "冠詞 the と前置詞 of に挟まれた空所には名詞が入るので productivity(生産性)。productive は形容詞、productively は副詞。produce は動詞で、名詞では『農産物』の意味になり文意に合わない。"
  },
  {
    id: "p5-09",
    q: "In ______ of her thirty years of service, Ms. Whitfield was honored at the company's anniversary dinner.",
    choices: ["reception", "recognition", "direction", "attention"],
    answer: 1,
    translation: "30年間の勤続をたたえ、ホイットフィールドさんは会社の記念晩餐会で表彰された。",
    explanation: "in recognition of 〜(〜を評価して・たたえて)は表彰の場面の定型句。reception(受付・歓迎会)、direction(方向・指示)、attention(注意)はいずれも in ... of の形でこの意味を作らない。『in と of に挟まれた名詞』として熟語ごと覚えるのが早い。"
  },
  {
    id: "p5-10",
    q: "The foundation reviewed forty grant proposals, only twelve ______ met all of the funding criteria.",
    choices: ["of them", "which", "of which", "of whom"],
    answer: 2,
    translation: "その財団は40件の助成申請を審査したが、交付要件をすべて満たしていたのは12件だけだった。",
    explanation: "数量表現+of+関係代名詞の非制限用法。twelve of which met ... の形で、前の節と後ろの節を関係代名詞がつなぐ。先行詞 proposals は物なので of which を使い、人が先行詞なら of whom になる。of them を入れると接続詞なしに二つの文がカンマだけでつながってしまい不可。which 単独では only twelve which とは言えない。『カンマ以降を独立した文にできるかどうか』で判断する。"
  },
  {
    id: "p5-13",
    q: "Seldom ______ the board approved a budget increase so late in the fiscal year.",
    choices: ["has", "have", "did", "was"],
    answer: 0,
    translation: "取締役会が会計年度のこれほど遅い時期に予算増額を承認したことは、めったにない。",
    explanation: "否定の意味を持つ副詞 Seldom が文頭に出ると倒置が起こり、助動詞が主語の前に出る。空所の後ろが approved(過去分詞)なので現在完了を作る has が正解。主語 the board は単数扱いなので have は不可。did を使うなら後ろは原形 approve が必要で、was では受動態にも進行形にもならない。"
  },
  {
    id: "p5-14",
    q: "Analysts ______ the sudden increase in weekend bookings to the new direct flight from Osaka.",
    choices: ["contributed", "distributed", "devoted", "attributed"],
    answer: 3,
    translation: "アナリストたちは、週末の予約が急増したのは大阪からの新しい直行便のおかげだと考えた。",
    explanation: "attribute A to B(AをBのおかげ・せいだと考える)。空所の後ろに目的語と to があることが決め手。contribute は contribute to 〜(〜に貢献する)で目的語の取り方が違い、devote A to B は『AをBに捧げる』、distribute は『配布する』で文意に合わない。綴りの似た動詞の語法を区別させる頻出パターン。"
  },
  {
    id: "p5-e3",
    q: "The annual shareholders' meeting will be held ______ May 12 at the downtown convention center.",
    choices: ["in", "at", "on", "by"],
    answer: 2,
    translation: "年次株主総会は5月12日、中心街のコンベンションセンターで開催される。",
    explanation: "日付の前に置く前置詞は on。月だけなら in May、時刻なら at 10 A.M. と使い分ける。by は『〜までに』という期限を表すので、開催日を示すこの文には合わない。"
  },
  {
    id: "p5-15",
    q: "Employees may attend the industry conference at company expense, ______ they submit a written summary afterward.",
    choices: ["in case of", "provided that", "owing to", "as though"],
    answer: 1,
    translation: "後日、書面の要約を提出することを条件に、従業員は会社負担で業界会議に参加できる。",
    explanation: "空所の後ろに they submit という節が続くので、節を取れる形が必要。provided that S V は『〜という条件で』の意味で if の硬い言い換え。in case of と owing to は前置詞句で名詞しか取れない。as though(まるで〜のように)は接続詞だが文意に合わない。"
  },
  {
    id: "p5-16",
    q: "The ______ number of visitors to the museum's website has prompted the marketing team to expand its online advertising.",
    choices: ["grow", "grown", "growth", "growing"],
    answer: 3,
    translation: "美術館のウェブサイトを訪れる人の数が増えていることを受けて、マーケティングチームはオンライン広告を拡大した。",
    explanation: "名詞 number を前から修飾できるのは現在分詞 growing(増えつつある)。number は『増えている』側なので能動を表す -ing 形になる。growth は名詞で growth number という言い方はしない。grow は原形、grown は過去分詞で、いずれもここでは名詞を修飾できない。"
  },
  {
    id: "p5-17",
    q: "Dr. Ferreira is ______ recognized as a leading authority on soil conservation.",
    choices: ["widely", "evenly", "tightly", "abruptly"],
    answer: 0,
    translation: "フェレイラ博士は土壌保全の第一人者として広く認められている。",
    explanation: "be widely recognized as 〜(〜として広く認められている)は定番のコロケーション。evenly(均等に)、tightly(きつく)、abruptly(突然に)はいずれも recognized とは結びつかない。副詞の語彙問題は『どの動詞と一緒に使うか』で選ぶ。"
  },
  {
    id: "p5-19",
    q: "By the time the new terminal opens next spring, construction ______ for almost four years.",
    choices: ["will continue", "has continued", "will have continued", "had continued"],
    answer: 2,
    translation: "来春に新ターミナルが開業する頃には、工事は4年近く続いていたことになる。",
    explanation: "By the time+現在形の節は未来の一時点を表す。その時点までの継続を表すので、主節は未来完了 will have continued。for almost four years という継続の期間表現も手がかりになる。単なる未来 will continue では『その時点までの積み重ね』を表せず、had continued は過去完了で時制が合わない。"
  },
  {
    id: "p5-20",
    q: "Ms. Randall paired the two new analysts and asked them to exchange drafts so that ______ could comment on the other's report before Friday.",
    choices: ["another", "each", "every", "all"],
    answer: 1,
    translation: "ランドールさんは新任のアナリスト2人を組ませ、金曜日までに互いの報告書へコメントできるよう、草稿を交換するように指示した。",
    explanation: "決め手は空所の後ろの the other's report(もう一方の報告書)と、前半の the two new analysts。2人1組で『それぞれが相手の報告書にコメントする』という関係なので、the other と対になり単独で代名詞として使える each が正解。every は単独では使えず必ず名詞を伴う。all は3者以上をまとめて指すため2人1組には合わない。another は『3つ以上のうちの別の一つ』を指し、the other と対にならない。誰が誰に対して何をするのかという場面をつかまないと決まらない問題。"
  },
  {
    id: "p5-e4",
    q: "All employees ______ to complete the online compliance course by March 31.",
    choices: ["require", "requires", "requiring", "are required"],
    answer: 3,
    translation: "全従業員は3月31日までにオンラインのコンプライアンス研修を修了することが求められている。",
    explanation: "従業員は『求められる』側なので受動態 are required。be required to do(〜するよう求められる)は社内通知の定番表現。能動の require では『従業員が何かを求める』となり目的語も足りない。主語が複数なので requires も不可、requiring は述語動詞になれない。"
  },
  {
    id: "p5-21",
    q: "The revised guidelines are intended to make the permit application process ______ for first-time applicants.",
    choices: ["simple", "simply", "simplify", "simplicity"],
    answer: 0,
    translation: "改定された指針は、初めて申請する人にとって許可申請の手続きを分かりやすくすることを目的としている。",
    explanation: "make+目的語+補語の形。補語の位置に入るのは形容詞 simple で、『手続きを簡単な状態にする』という意味になる。simply は副詞、simplify は動詞、simplicity は名詞で『手続き=単純さ』とはならない。目的語の後ろの空所を機械的に副詞と決めつけると外す問題。"
  },
  {
    id: "p5-22",
    q: "Please ______ the front desk immediately if you notice any problem with the heating in your room.",
    choices: ["report", "notify", "mention", "complain"],
    answer: 1,
    translation: "客室の暖房に不具合がありましたら、直ちにフロントへお知らせください。",
    explanation: "notify は『(人・部署)に知らせる』という他動詞で、知らせる相手を直接目的語に取れる。report は report a problem to the front desk のように to が必要、complain も complain to 〜 の形。mention は伝える内容を目的語に取るので the front desk を直接続けられない。動詞の後ろに『人』が来るか『内容』が来るかを問う語法問題。"
  },
  {
    id: "p5-24",
    q: "______ that the shipment cleared customs two days behind schedule, the retailer has extended its promotional period through Sunday.",
    choices: ["Owing", "Despite", "Given", "Except"],
    answer: 2,
    translation: "荷物の通関が予定より2日遅れたことを考慮し、その小売業者は販促期間を日曜日まで延長した。",
    explanation: "Given that S V(〜であることを考えると)。Owing は owing to+名詞の形でしか使えず、Despite も前置詞なので that 節を取れない。Except that は『〜という点を除いて』の意味で、後半の『延長した』という判断につながらない。"
  },
  {
    id: "p5-25",
    q: "Guests are kindly asked to ______ from taking photographs while the auction is in progress.",
    choices: ["prevent", "prohibit", "restrict", "refrain"],
    answer: 3,
    translation: "オークションの開催中は、写真撮影をお控えいただきますようお願いいたします。",
    explanation: "refrain from -ing(〜を控える)。refrain は自動詞で from を伴う点が決め手。prevent / prohibit / restrict はいずれも他動詞で直後に目的語が必要(prohibit A from -ing の形なら可)。案内文で頻出の表現。"
  },
  {
    id: "p5-26",
    q: "Of the four regional offices, the Malmö branch processed customer refunds the most ______.",
    choices: ["efficiently", "efficient", "efficiency", "more efficient"],
    answer: 0,
    translation: "4つの地域事務所の中で、マルメ支店が最も効率よく顧客への返金を処理した。",
    explanation: "動詞 processed を修飾するので副詞 efficiently。the most+副詞で最上級を作る。形容詞 efficient や名詞 efficiency では動詞を修飾できず、more efficient は the most と重なって二重比較になる。品詞問題と最上級を組み合わせたやや難のパターン。"
  },
  {
    id: "p5-e5",
    q: "All staff members must ______ their identification badges at all times while inside the plant.",
    choices: ["put", "wear", "dress", "take"],
    answer: 1,
    translation: "工場内では、全職員が常に身分証バッジを着用していなければならない。",
    explanation: "バッジや衣類を『身につけている』状態を表すのは wear。put は put on の形にしないと『身につける』意味にならず、dress は dress oneself のように人を目的語に取る。take では意味が通らない。"
  },
  {
    id: "p5-27",
    q: "The warranty does not cover damage that results from improper ______ of the appliance.",
    choices: ["grabbing", "holding", "gripping", "handling"],
    answer: 3,
    translation: "この保証は、機器の不適切な取り扱いに起因する損傷は対象としない。",
    explanation: "improper handling(不適切な取り扱い)は保証書や取扱説明書の定番表現。holding / gripping / grabbing はいずれも手で『握る』『つかむ』という物理的な動作を指し、機器の扱い方全般という意味にはならない。"
  },
  {
    id: "p5-28",
    q: "The recommendations put forward by the safety committee, along with a summary of last year's inspection findings, ______ scheduled for discussion at Friday's meeting.",
    choices: ["is", "has", "are", "being"],
    answer: 2,
    translation: "安全委員会が提出した勧告は、昨年度の検査結果の要約とともに、金曜日の会議で討議される予定である。",
    explanation: "文の主語は The recommendations(複数)。put forward by 〜 は主語を後ろから修飾する過去分詞であり、along with 〜 の挿入句も主語の数を変えないので、述語動詞は複数扱いの are になる。空所の直前にある findings や、挿入句の中の単数名詞 a summary につられて is を選ばせるのが狙い。has scheduled では『勧告が予定を組んだ』という能動の意味になり成立せず、being は述語動詞になれない。主語と述語動詞が大きく離れる構造を追えるかを問う問題。"
  },
  {
    id: "p5-29",
    q: "Seating for the awards dinner is limited, so ______ registration is strongly recommended.",
    choices: ["advanced", "advance", "advancing", "advancement"],
    answer: 1,
    translation: "授賞式の夕食会は席数に限りがあるため、事前のお申し込みを強くお勧めします。",
    explanation: "advance は名詞の前に置くと『事前の』という意味の形容詞のように働く(advance registration / advance notice / advance payment)。advanced は『高度な・上級の』で意味が異なり、ここでの定番のひっかけ。advancement(昇進・進歩)と advancing(進んでいる)も文意に合わない。"
  }
];
