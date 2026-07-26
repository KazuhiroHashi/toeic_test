// セット8(上級) Part 5: 短文穴埋め問題(本番と同じ30問)
// レベル配分: 標準(700点クラス)9問 / 上級(800点クラス)15問 / 難問(900点でも落としうる)6問
// 出題比率: 語彙10・品詞6・動詞の形5・前置詞/接続詞5・関係詞代名詞3・倒置1
// 難問6問: s8p5-01(連鎖関係詞) / s8p5-05(主語と述語動詞の分離) / s8p5-08(所有格関係代名詞whose)
//           s8p5-14(指示代名詞と文脈) / s8p5-19(先行詞を含むwhat) / s8p5-23(付帯状況withの意味上の主語)
window.TOEIC_DATA_8 = window.TOEIC_DATA_8 || {};
window.TOEIC_DATA_8.part5 = [
  {
    "id": "s8p5-01",
    "q": "The trustees have appointed Ms. Delacroix, ______ many observers believe is best qualified to lead the restructuring, as interim director.",
    "choices": ["whom", "who", "whose", "which"],
    "answer": 1,
    "translation": "理事会は、多くの関係者が再建を率いるのに最も適任だと考えるドラクロワ氏を、暫定ディレクターに任命した。",
    "explanation": "連鎖関係詞。many observers believe は挿入と考え、これを外すと『who is best qualified 〜』となる。関係詞は believe の目的語ではなく、その後ろの節の中で is の主語になるので『主格の who』が正解。直前に believe があるため目的格 whom を選ばせるのが最大のひっかけ。whose は直後に名詞が必要、which は先行詞が人なので不可。"
  },
  {
    "id": "s8p5-02",
    "q": "Sales of the insulated commuter mug were ______ during the first quarter, but the autumn campaign more than tripled them.",
    "choices": ["modest", "reluctant", "vacant", "abundant"],
    "answer": 0,
    "translation": "保温式の通勤用マグの売上は第1四半期には控えめだったが、秋のキャンペーンで3倍以上になった。",
    "explanation": "but 以下の『3倍以上になった』が手がかり。増える前の状態なので『modest(控えめな・大きくない)』。abundant(豊富な)では逆の意味になる。reluctant(気の進まない)は人の態度、vacant(空いている)は場所や職に使う語で、売上を説明しない。"
  },
  {
    "id": "s8p5-03",
    "q": "Applicants for the relocation allowance must submit proof of ______ at their current address for at least six months.",
    "choices": ["reside", "resident", "residence", "residential"],
    "answer": 2,
    "translation": "転居手当の申請者は、現住所に6か月以上居住していることの証明を提出しなければならない。",
    "explanation": "前置詞 of の後ろなので名詞。『居住していること』という状態を表す抽象名詞 residence が正解。resident も名詞だが『居住者』という人を指すため proof of resident とは言わない。ここが上級の分かれ目。reside は動詞、residential は形容詞。"
  },
  {
    "id": "s8p5-04",
    "q": "Refunds for items returned in unopened packaging are processed ______ ten business days of receipt.",
    "choices": ["within", "during", "among", "throughout"],
    "answer": 0,
    "translation": "未開封の状態で返品された商品の返金は、受領から10営業日以内に処理される。",
    "explanation": "『〜以内に』という期限を表すのは within。within ten business days of 〜 は返品・返金規定の定型。during は特定の期間中、throughout は『〜の間ずっと』、among は3者以上の間を表し、いずれも期限を示せない。"
  },
  {
    "id": "s8p5-05",
    "q": "The instructions accompanying the replacement cartridge, printed on the inside of the carton flap, ______ how to reset the page counter.",
    "choices": ["explains", "explaining", "explain", "to explain"],
    "answer": 2,
    "translation": "交換用カートリッジに付属し、箱のふたの内側に印刷されている説明書には、ページカウンターのリセット方法が説明されている。",
    "explanation": "文の主語は『The instructions(複数)』。accompanying 〜 の分詞句と printed 〜 の挿入句が続くため、主語と述語動詞が大きく離れている。述語動詞は複数に一致する explain。空所の直前にある単数名詞 flap や cartridge につられて explains を選ばせるのが狙い。explaining と to explain は述語動詞になれず、文全体が動詞を失う。"
  },
  {
    "id": "s8p5-06",
    "q": "The lease requires tenants to give ninety days' notice before ______ the agreement.",
    "choices": ["terminating", "eliminating", "dismissing", "abolishing"],
    "answer": 0,
    "translation": "その賃貸借契約では、契約を解除する90日前までに通知することが借主に義務付けられている。",
    "explanation": "契約や取り決めを『解除する』は terminate で、terminate an agreement / a contract は定番のコロケーション。eliminate(除去する)、dismiss(解雇する・退ける)、abolish(制度・法律を廃止する)はいずれも個別の契約の解除には使わない。"
  },
  {
    "id": "s8p5-07",
    "q": "The bottling line will not resume full operation until the replacement valve ______ from the supplier in Rotterdam.",
    "choices": ["will arrive", "arrives", "is arrived", "arriving"],
    "answer": 1,
    "translation": "交換用のバルブがロッテルダムの供給業者から届くまで、瓶詰めラインは全面稼働を再開しない。",
    "explanation": "時を表す副詞節(until 節)の中では、未来の内容でも現在形で表すので arrives。will arrive は副詞節では使わない。arrive は自動詞なので受動態 is arrived にはできず、arriving は述語動詞になれない。"
  },
  {
    "id": "s8p5-08",
    "q": "The auditors have requested a list of the accounts ______ balances have not been reconciled since the system migration.",
    "choices": ["that", "whose", "which", "where"],
    "answer": 1,
    "translation": "監査人は、システム移行以降に残高が照合されていない勘定科目の一覧を求めた。",
    "explanation": "空所の直後に balances という名詞が置かれ、その後に have not been reconciled が続く。所有格の関係代名詞 whose(= of which the)が入り『その残高が照合されていない勘定』となる。whose は人以外の先行詞にも使える点が盲点。that と which は後ろに名詞を直接続けられず(空所を外すと balances が浮く)、where は関係副詞で後ろに欠けのない完全な文が必要。"
  },
  {
    "id": "s8p5-09",
    "q": "Plant managers credit the sharp drop in defects to the ______ inspections introduced last spring.",
    "choices": ["frequency", "frequently", "frequent", "frequented"],
    "answer": 2,
    "translation": "工場長たちは、不良品の大幅な減少は昨春に導入された頻繁な検査のおかげだとしている。",
    "explanation": "名詞 inspections を前から修飾するので形容詞 frequent。frequency は名詞、frequently は副詞で名詞を修飾できない。frequented は『人がよく訪れる』という意味の過去分詞で、検査を説明しない。"
  },
  {
    "id": "s8p5-10",
    "q": "Because the parts come from three different countries, the assembly schedule is highly ______ to customs delays.",
    "choices": ["accountable", "comparable", "responsible", "susceptible"],
    "answer": 3,
    "translation": "部品が3つの異なる国から届くため、組立の日程は通関の遅れの影響を非常に受けやすい。",
    "explanation": "be susceptible to 〜(〜の影響を受けやすい)。空所の後ろの前置詞 to が決め手。responsible は for を取り『責任がある』、accountable は『(人に対して)説明責任がある』で、通関の遅れに対しては使わない。comparable to は『〜に匹敵する』で文意に合わない。形容詞と前置詞の組み合わせで解く問題。"
  },
  {
    "id": "s8p5-11",
    "q": "______ the two-week delay in the delivery of the lobby light fixtures, the hotel renovation remains on schedule.",
    "choices": ["Nevertheless", "Whereas", "Even though", "Notwithstanding"],
    "answer": 3,
    "translation": "ロビーの照明器具の納品が2週間遅れたにもかかわらず、ホテルの改装は予定どおり進んでいる。",
    "explanation": "空所の後ろは the two-week delay 〜 という名詞句なので、名詞を取れる前置詞が必要。Notwithstanding は despite と同じ『〜にもかかわらず』を表す硬めの前置詞。Nevertheless は副詞で名詞句を従えられない。Whereas と Even though は接続詞で、後ろに主語と動詞のある節が必要。"
  },
  {
    "id": "s8p5-12",
    "q": "The updated fire code requires that emergency lighting ______ tested by a licensed contractor every twelve months.",
    "choices": ["is", "be", "being", "to be"],
    "answer": 1,
    "translation": "改定された防火基準では、非常照明を12か月ごとに有資格の業者が点検することが義務付けられている。",
    "explanation": "require / request / insist などの後ろの that 節では動詞が原形になる(仮定法現在)。照明は『点検される』側なので受動態と組み合わせて be tested。主語 emergency lighting が単数だからと is を選ばせるのがひっかけで、原形なので三単現の -s も be 動詞の変化形も付けない。being と to be は that 節の述語動詞になれない。"
  },
  {
    "id": "s8p5-13",
    "q": "Despite two days of testing, the technicians could not ______ the source of the intermittent vibration in the compressor.",
    "choices": ["pinpoint", "point", "aim", "target"],
    "answer": 0,
    "translation": "2日間の試験にもかかわらず、技術者たちは圧縮機で断続的に起きる振動の発生源を正確に突き止められなかった。",
    "explanation": "原因や場所を『正確に特定する』は pinpoint で、直後に目的語を取る他動詞。point は point to / point at のように前置詞が必要、aim も at を伴う。target は『標的として定める』の意味で、原因の特定には使わない。目的語が直接続く形かどうかで見分ける。"
  },
  {
    "id": "s8p5-14",
    "q": "The clinic bought two portable monitors in March and a third in July, but only ______ purchased in the spring qualify for the extended service plan.",
    "choices": ["those", "that", "ones", "it"],
    "answer": 0,
    "translation": "そのクリニックは3月に携帯型モニターを2台、7月にもう1台購入したが、延長保守プランの対象になるのは春に購入したものだけである。",
    "explanation": "述語動詞が qualify(複数一致の形)なので、空所には複数を指す代名詞が入る。those+過去分詞で『〜されたもの(複数)』を表せる those が正解。ones は the ones のように限定語を伴わないと使えず、単独では成立しない。that と it は単数を指すため qualify と一致しない。3月=春、7月=夏という時期の対応と、対象が2台であることを読み取らないと決まらない、文脈依存型の問題。"
  },
  {
    "id": "s8p5-15",
    "q": "The auditor was troubled to find that large expense claims had been approved with ______ little supporting documentation.",
    "choices": ["surprise", "surprising", "surprised", "surprisingly"],
    "answer": 3,
    "translation": "監査人は、高額の経費請求が驚くほど少ない裏付け資料で承認されていたことを知り、問題視した。",
    "explanation": "空所は直後の little(ほとんど無い)という数量を表す語を強めているので、副詞 surprisingly が入る。副詞は動詞だけでなく、形容詞や数量を表す語も修飾できる。名詞 documentation を修飾すると考えて形容詞 surprising を選ぶと、間に little があるため語順が成立しない。surprise は名詞・動詞、surprised は『(人が)驚いた』で資料の説明にならない。"
  },
  {
    "id": "s8p5-16",
    "q": "The new carton is superior to the previous design ______ it uses forty percent less plastic.",
    "choices": ["so that", "such that", "in that", "for that"],
    "answer": 2,
    "translation": "新しい箱は、プラスチックの使用量が40パーセント少ないという点で、以前の設計より優れている。",
    "explanation": "in that S V は『〜という点において』と、どの観点で成り立つのかを限定する接続詞。前半の『優れている』を後半が説明する関係になる。so that は目的・結果を表し因果の向きが逆、such that はこの語順では文をつなげず、for that は接続詞として使えない。"
  },
  {
    "id": "s8p5-17",
    "q": "Bids must be submitted in sealed envelopes so that the selection process remains ______.",
    "choices": ["indifferent", "impartial", "irrelevant", "incapable"],
    "answer": 1,
    "translation": "選考過程の公平性を保つため、入札は封をした封筒で提出しなければならない。",
    "explanation": "封をして提出させる目的は公平性の確保なので impartial(公平な・偏りのない)。indifferent(無関心な)、irrelevant(無関係な)、incapable(能力がない)はいずれも選考過程の性質として文意に合わない。語頭の im- / in- / ir- がそろった紛らわしい語を並べたひっかけ。"
  },
  {
    "id": "s8p5-18",
    "q": "The site supervisor had the damaged pallets ______ before the safety inspector arrived.",
    "choices": ["remove", "removed", "removing", "to remove"],
    "answer": 1,
    "translation": "現場監督は、安全検査官が到着する前に破損したパレットを撤去させた。",
    "explanation": "have+目的語+過去分詞で『〜を…してもらう・…させる』。パレットは『撤去される』側なので過去分詞 removed。原形 remove は目的語が動作を行う人のとき(have someone remove 〜)の形で、ここでは目的語が物なので不可。removing は目的語が自ら進行中の動作をしている場合、to remove はこの構文では使わない。"
  },
  {
    "id": "s8p5-19",
    "q": "The revised handbook finally makes clear ______ counts as a reportable safety incident.",
    "choices": ["that", "which", "what", "whether"],
    "answer": 2,
    "translation": "改訂された手引きは、何が報告義務のある安全上の事案に当たるのかをようやく明確にしている。",
    "explanation": "空所の後ろは counts という動詞で始まり、その主語が欠けている。先行詞を含む関係代名詞 what(= the thing that)が『何が』という主語の働きをするので what が正解。that は接続詞として使うなら後ろに欠けのない完全な文が必要で、関係代名詞としても先行詞が要る。which は先行詞または選択の対象が示されていないため不可。whether も後ろに主語のある節が必要。what と that の使い分けは『後ろの節に欠けがあるか』で判断する。"
  },
  {
    "id": "s8p5-20",
    "q": "The engineering team worked through three weekends, and their ______ paid off when the bridge reopened ahead of schedule.",
    "choices": ["persist", "persistent", "persistently", "persistence"],
    "answer": 3,
    "translation": "技術チームは3週にわたって週末も働き、その粘り強さは橋が予定より早く再開通したことで報われた。",
    "explanation": "所有格 their の後ろで、動詞 paid off の主語になるので名詞 persistence(粘り強さ)。persist は動詞、persistent は形容詞、persistently は副詞で主語になれない。所有格の直後は名詞と機械的に判断してよい。"
  },
  {
    "id": "s8p5-21",
    "q": "The new labeling rule takes effect in January, but importers have been given a six-month ______ period during which the old labels remain acceptable.",
    "choices": ["grace", "spare", "reserve", "idle"],
    "answer": 0,
    "translation": "新しい表示規則は1月に発効するが、輸入業者には旧表示が引き続き認められる6か月の猶予期間が与えられている。",
    "explanation": "grace period は『猶予期間』を表す業務上の定型表現。during which 以下の『旧表示が引き続き認められる』が意味を裏付けている。spare(予備の)、reserve(準備の)、idle(遊休の)はいずれも period と結びついてこの意味を作らない。"
  },
  {
    "id": "s8p5-22",
    "q": "So ______ was the demand for the limited-edition thermos that the online store sold out its entire stock within an hour.",
    "choices": ["greatly", "great", "greater", "greatest"],
    "answer": 1,
    "translation": "限定版の魔法瓶への需要が非常に大きかったため、オンライン店舗は1時間で在庫をすべて売り切った。",
    "explanation": "So+形容詞+動詞+主語 that 〜 の倒置構文で、元の形は The demand was so great that 〜。was の補語になるのは形容詞なので great。文頭の So に引かれて副詞 greatly を選ばせるのが狙いだが、副詞は be 動詞の補語になれない。比較級 greater と最上級 greatest はこの構文では使わない。"
  },
  {
    "id": "s8p5-23",
    "q": "______ the port authority expected to approve the dredging permit this week, the shipping line will begin scheduling larger vessels for October.",
    "choices": ["With", "For", "As", "By"],
    "answer": 0,
    "translation": "港湾局が今週しゅんせつ許可を承認する見込みであることから、その海運会社は10月に向けて大型船の配船を始める。",
    "explanation": "with+名詞+分詞(句)で『〜という状況で』という付帯状況を表す形。ここでは the port authority が expected の意味上の主語になっている。この構造を見抜けるかが勝負で、expected は述語動詞ではなく分詞である点に注意。As は接続詞なので後ろに主語と述語動詞のそろった節(the port authority is expected 〜)が必要で、is が無いここでは使えない。For と By ではこの構造を作れない。"
  },
  {
    "id": "s8p5-24",
    "q": "A sharp rise in fuel costs has ______ the freight carrier to add a temporary surcharge to long-haul deliveries.",
    "choices": ["informed", "reminded", "convinced", "prompted"],
    "answer": 3,
    "translation": "燃料費の急騰を受けて、その運送会社は長距離配送に一時的な追加料金を課すことにした。",
    "explanation": "prompt A to do(Aが〜するきっかけとなる)。主語が『燃料費の急騰』という人以外の要因なので、相手の判断や記憶に働きかける convince(納得させる)や remind(思い出させる)は主語として不自然。inform は inform A of / that の形を取り、inform A to do とは言わない。動詞の語法と主語の性質の両方で決める問題。"
  },
  {
    "id": "s8p5-25",
    "q": "The consultant described the current approval workflow as needlessly ______ and recommended cutting two review stages.",
    "choices": ["complicate", "complexity", "complexly", "complex"],
    "answer": 3,
    "translation": "コンサルタントは現行の承認手続きを不必要に複雑だと評し、審査段階を2つ削るよう提言した。",
    "explanation": "describe A as B の B には名詞か形容詞が入るが、直前に副詞 needlessly があるので、副詞に修飾される形容詞 complex が正解。complexity は名詞で、副詞 needlessly に修飾されることはできない。complicate は動詞、complexly は副詞で as の後ろに置けない。as の後ろだから名詞、と早合点すると外す。"
  },
  {
    "id": "s8p5-26",
    "q": "Had the supplier notified us of the price increase in advance, we ______ a much larger order before the deadline.",
    "choices": ["would place", "will place", "had placed", "would have placed"],
    "answer": 3,
    "translation": "供給業者が値上げを事前に知らせてくれていたら、締切前にもっと大量の発注をしていただろう。",
    "explanation": "If を省いた倒置 Had+主語+過去分詞 は仮定法過去完了で、過去の事実に反する仮定を表す。帰結節は would have+過去分詞。before the deadline と過去の時点が示されているので、現在の結果を表す would place にはならない。will place は直説法、had placed は帰結節に使えない。"
  },
  {
    "id": "s8p5-27",
    "q": "Guests who booked directly through the lodge's Web site are ______ for a complimentary airport shuttle.",
    "choices": ["liable", "reliable", "eligible", "feasible"],
    "answer": 2,
    "translation": "宿のウェブサイトから直接予約した宿泊客は、無料の空港送迎を利用する資格がある。",
    "explanation": "be eligible for 〜(〜の資格がある)。特典やサービスの対象になることを表す定番表現。liable for は『(支払いなどの)責任を負う』で、無料の特典には使わない。reliable(信頼できる)と feasible(実行可能な)は人を主語にして for を続ける形を取らない。"
  },
  {
    "id": "s8p5-28",
    "q": "The heritage grant covers not only structural repairs ______ the replacement of outdated wiring.",
    "choices": ["but also", "as well", "and also", "rather than"],
    "answer": 0,
    "translation": "その文化財助成金は、構造の補修だけでなく古い配線の交換も対象としている。",
    "explanation": "not only A but also B の相関接続詞。structural repairs と the replacement of 〜 という同じ形の名詞句が並列されていることが手がかり。as well は as well as の形なら使えるが単独では不可。and also は not only と対にならない。rather than では『〜ではなく』となり、not only の『〜だけでなく』と矛盾する。"
  },
  {
    "id": "s8p5-29",
    "q": "Because each mold is made to order, any change to the specifications requires ______ approval from the client.",
    "choices": ["write", "writes", "written", "writing"],
    "answer": 2,
    "translation": "金型は一つずつ受注生産されるため、仕様の変更には顧客からの書面による承認が必要となる。",
    "explanation": "名詞 approval を修飾するのは過去分詞の形容詞用法 written(書面による)。written approval / written consent は契約や業務手順の定型表現。writing approval とは言わず、write と writes は動詞のままなので名詞を修飾できない。"
  },
  {
    "id": "s8p5-30",
    "q": "The consultant's forecast was criticized because it relied on figures that the authors themselves admitted were ______.",
    "choices": ["overdue", "outstanding", "outdated", "outgoing"],
    "answer": 2,
    "translation": "そのコンサルタントの予測は、執筆者自身も古いと認めた数値に依拠していたため批判された。",
    "explanation": "批判の理由になるのは、根拠にした数値が『古い』こと。outdated(時代遅れの・古くなった)が正解。overdue(期限を過ぎた・未払いの)、outstanding(未払いの・傑出した)、outgoing(退任する・外向的な)は語頭が似ているだけで数値の説明にならない。なお that the authors themselves admitted were 〜 は連鎖関係詞で、admitted の後ろの節の補語が空所になっている点にも注意。"
  }
];
