// セット7 Part 5: 短文穴埋め問題(30問・上級レベル=800〜900点向け)
// 難易度配分: 標準9問(700点クラス) / 上級15問(800点クラス) / 難問6問(900点でも落としうる)
// 出題比率: 語彙10 / 品詞6 / 動詞の形5 / 前置詞・接続詞5 / 関係詞3 / 仮定法倒置1
// 難問6問: s7p5-05・s7p5-14・s7p5-23(関係詞3) / s7p5-08・s7p5-17(構造把握2) / s7p5-26(文脈依存1)
// 正解位置: A8 / B8 / C7 / D7
window.TOEIC_DATA_7 = window.TOEIC_DATA_7 || {};
window.TOEIC_DATA_7.part5 = [
  {
    id: "s7p5-01",
    q: "A sharp rise in jet fuel prices has ______ the airline to reconsider three of its regional routes.",
    choices: ["protested", "prompted", "persisted", "proposed"],
    answer: 1,
    translation: "航空燃料価格の急騰を受けて、その航空会社は地方路線のうち3路線の見直しを迫られた。",
    explanation: "空所の後ろが『目的語(the airline)＋to do』の形なので、この語順を取れる動詞を選ぶ。(B) prompt A to do(Aに〜するよう促す・仕向ける)だけがこの形を作れる。(A) protest は『抗議する』で人を目的語に取ってもto不定詞は続かない。(C) persist は自動詞で目的語を取れない。(D) propose は『propose that S 原形』や『propose doing』の形で、propose A to do とは言えない。意味ではなく『後ろの形』で切るのが速い。"
  },
  {
    id: "s7p5-02",
    q: "The new bottling line was ______ designed to handle both glass and aluminum containers.",
    choices: ["specific", "specifics", "specify", "specifically"],
    answer: 3,
    translation: "新しい瓶詰めラインは、ガラス容器とアルミ容器の両方に対応できるよう特別に設計されている。",
    explanation: "空所は過去分詞 designed を修飾する位置なので副詞の (D) specifically。(A) specific は形容詞、(B) specifics は名詞(複数)、(C) specify は動詞の原形で、いずれも過去分詞を修飾できない。『be動詞と過去分詞の間の空所は副詞』という定型の形。"
  },
  {
    id: "s7p5-03",
    q: "Once the revised blueprints ______ by the city inspector, work on the annex can resume.",
    choices: ["approve", "are approved", "will approve", "approving"],
    answer: 1,
    translation: "修正した設計図が市の検査官の承認を受ければ、別棟の工事を再開できる。",
    explanation: "決め手は2つ。第一に図面は『承認される』側なので受動態が必要で、能動の (A) approve と (C) will approve は成立しない。第二に Once が導く時・条件の副詞節では、未来の内容でも現在形で表すので will は使わない。よって (B) are approved。(D) approving では節の述語動詞にならない。受動と時制の2点を同時に問う上級パターン。"
  },
  {
    id: "s7p5-04",
    q: "______ the union representatives and the plant's management team accepted the mediator's final proposal.",
    choices: ["Neither", "Either", "Both", "Not only"],
    answer: 2,
    translation: "労働組合の代表者側と工場の経営陣の双方が、調停者の最終提案を受け入れた。",
    explanation: "空所と対になっているのが and である点が手がかり。『both A and B』の形を作る (C) Both が正解。(A) Neither は nor と、(B) Either は or と組み合わせる。(D) Not only は but also と対になり、さらに文頭に置けば倒置(Not only did ...)が必要になるため、この語順では成立しない。相関接続詞は『対になる語』から逆算して決める。"
  },
  {
    id: "s7p5-05",
    q: "Contractors ______ insurance certificates expire before the scheduled completion date must file renewed documents with the site office.",
    choices: ["that", "of which", "whose", "which"],
    answer: 2,
    translation: "保険証書の有効期限が完成予定日より前に切れる請負業者は、更新した書類を現場事務所に提出しなければならない。",
    explanation: "空所の直後は insurance certificates という無冠詞の名詞で、その名詞が expire の主語になっている。つまり『請負業者の保険証書』という所有関係をつなぐ所有格の関係代名詞 (C) whose が入る。(A) that と (D) which は直後に名詞を伴えず、後ろは主語または目的語の欠けた形でなければならない。(B) of which は『the insurance certificates of which expire ...』のように名詞を前に置く語順になるため、この位置には入らない。先行詞が人ではなく会社(物)でも whose が使える点も狙い。文の述語動詞が must file であることを見失わないこと。"
  },
  {
    id: "s7p5-06",
    q: "Because every unit is sourced from a single plant, even a brief production halt can ______ deliveries across the entire region.",
    choices: ["disrupt", "distract", "dissolve", "dismiss"],
    answer: 0,
    translation: "全製品を1つの工場から調達しているため、短時間の生産停止でも地域全体の配送が混乱しかねない。",
    explanation: "『1工場に依存しているので、短い生産停止でも配送に影響する』という流れなので、(A) disrupt(混乱させる・支障をきたす)が適切。(B) distract は『(人の注意)をそらす』で目的語は人や注意。(C) dissolve は『溶かす・解散する』、(D) dismiss は『解雇する・退ける』。dis- で始まる似た形の動詞を並べた語彙問題で、目的語 deliveries と結びつくものを選ぶ。"
  },
  {
    id: "s7p5-07",
    q: "Attendance at the quarterly safety briefing is ______ for everyone assigned to the production floor.",
    choices: ["mandate", "mandating", "mandates", "mandatory"],
    answer: 3,
    translation: "四半期ごとの安全説明会への出席は、製造現場に配属されている全員にとって義務である。",
    explanation: "be動詞の後ろで主語 Attendance を説明する補語なので、形容詞の (D) mandatory(義務的な)。(A) mandate と (C) mandates は名詞なら『命令・職権』の意味で『出席＝命令』とはならず、動詞と見ても形が合わない。(B) mandating は現在分詞で、能動の意味になるうえ目的語が必要になる。名詞・動詞・形容詞が同じ語源で並ぶときは、空所が『補語(主語の説明)』か『述語動詞』かを先に決める。"
  },
  {
    id: "s7p5-08",
    q: "All twelve safety valves ______ replaced during the scheduled shutdown, the refinery was able to resume production two days ahead of plan.",
    choices: ["were", "having been", "have been", "were being"],
    answer: 1,
    translation: "12基すべての安全弁が定期停止期間中に交換されたため、その製油所は予定より2日早く生産を再開することができた。",
    explanation: "カンマの後ろに the refinery was able to resume という完全な主節がある。したがってカンマの前は文であってはならず、接続詞もないので (A) were、(C) have been、(D) were being を入れると2つの文がカンマだけでつながってしまい成立しない。正解は分詞構文を作る (B) having been。分詞構文の意味上の主語が主節の主語 the refinery と異なるため、All twelve safety valves を分詞の前に残した『独立分詞構文』の形になっている。主節より前の時点で完了した事柄なので having been という完了形になる点も確認したい。前半だけを見ると普通の主語＋述語に見えるのが狙い。"
  },
  {
    id: "s7p5-09",
    q: "The prices listed in the spring catalog remain valid ______ the last day of August, when a new rate schedule takes effect.",
    choices: ["through", "by", "since", "within"],
    answer: 0,
    translation: "春のカタログに掲載された価格は8月末日まで有効で、その翌日から新しい料金表が適用される。",
    explanation: "『8月31日を含めてその日まで』という期間の終わりを表すのは (A) through。(B) by は『〜までに』という動作の期限を表し、valid(有効である)という状態の継続には使えない。(C) since は過去を起点とする継続で現在完了とともに使う。(D) within は『〜以内に』で、後ろに期間の長さを表す語句が必要。状態の継続か動作の期限かを区別する上級の前置詞問題。"
  },
  {
    id: "s7p5-10",
    q: "Panelists are asked to ______ their opening remarks to five minutes so that the audience has time for questions.",
    choices: ["conform", "confront", "confirm", "confine"],
    answer: 3,
    translation: "登壇者は、聴衆が質問する時間を確保できるよう、冒頭の発言を5分以内に収めるよう求められている。",
    explanation: "confine A to B(AをBの範囲に限る)の形なので (D) confine。目的語と to があること、そして『質問の時間を確保するため』という目的から『長さを制限する』意味だと分かる。(A) conform は conform to 〜(〜に従う)の形で目的語を直接取らない。(B) confront は『直面する』、(C) confirm は『確認する』で、to と結びついて『制限する』意味にはならない。con- で始まる紛らわしい動詞を語法で切り分ける問題。"
  },
  {
    id: "s7p5-11",
    q: "Rental rates in the harbor district have remained ______ despite growing demand for short-term warehousing.",
    choices: ["stable", "stably", "stability", "stabilize"],
    answer: 0,
    translation: "短期倉庫の需要が高まっているにもかかわらず、港湾地区の賃料は安定したままである。",
    explanation: "remain は『〜のままである』という意味で、後ろに主語の状態を表す補語を取る動詞。補語になれるのは形容詞なので (A) stable。(B) stably は副詞で、remain の補語にはなれない(『安定した状態のままだ』という意味は形容詞で表す)。(C) stability は名詞で『賃料＝安定性』とはならず、(D) stabilize は動詞。動詞の直後だからと機械的に副詞を選ぶと外す品詞問題。"
  },
  {
    id: "s7p5-12",
    q: "It is essential that the backup generator ______ tested before the start of the typhoon season.",
    choices: ["is", "be", "being", "to be"],
    answer: 1,
    translation: "台風シーズンが始まる前に予備発電機の点検を行うことが不可欠である。",
    explanation: "It is essential / important / necessary that 〜 のように必要性・要求を表す表現に続く that 節では、動詞は主語の人称・数にかかわらず原形にする(仮定法現在)。ここは『点検される』側なので原形の be を使った受動態になり、(B) be が正解。主語 the backup generator が三人称単数であることに引かれて (A) is を選ばせるのが狙い。(C) being と (D) to be は that 節の述語動詞になれない。"
  },
  {
    id: "s7p5-13",
    q: "Improved pallet wrapping has cut the ______ of shipments that arrive damaged by more than half.",
    choices: ["preparation", "partition", "proportion", "provision"],
    answer: 2,
    translation: "パレットの梱包方法を改善したことで、破損した状態で到着する貨物の割合が半分以下に減った。",
    explanation: "『半分以下に減らした』のだから、減らせるのは数量ではなく (C) proportion(割合・比率)。(A) preparation(準備)、(B) partition(仕切り・分割)、(D) provision(支給・条項)はいずれも『〜の割合』という意味にならない。p で始まる似た形の名詞を、cut ... by more than half という数量表現から選び分ける。"
  },
  {
    id: "s7p5-14",
    q: "The handbook sets out the criteria ______ candidates for the leadership program are selected each spring.",
    choices: ["which", "by which", "whose", "what"],
    answer: 1,
    translation: "そのハンドブックには、リーダー育成プログラムの候補者が毎年春にどのような基準で選ばれるかが示されている。",
    explanation: "空所の後ろ candidates ... are selected each spring は主語も目的語も欠けていない完全な文。したがって関係代名詞を単独で置くことはできず、前置詞を伴った (B) by which が必要になる(candidates are selected by the criteria の by が関係詞の前に出た形)。(A) which は後ろが不完全な文のときにしか使えない。(C) whose は直後に名詞が必要。(D) what は先行詞 the criteria を取れない。『後ろが完全な文なら前置詞＋関係代名詞、または関係副詞』という判断ができるかを問う難問。どの前置詞になるかは、元の文で criteria をどう使うか(by the criteria)から決める。"
  },
  {
    id: "s7p5-15",
    q: "The two bids differ ______ only one of them includes the cost of removing the old boiler.",
    choices: ["in that", "so that", "given that", "except"],
    answer: 0,
    translation: "2社の見積もりは、片方だけが古いボイラーの撤去費用を含んでいるという点で異なっている。",
    explanation: "空所の後ろは節なので節を導ける形が必要。(A) in that S V は『〜という点で』の意味で、differ / be similar などと組み合わせて相違点・共通点を説明する硬い表現。ここでは『どこが違うのか』を説明しているので文意にも合う。(B) so that は目的や結果を表し、『撤去費用を含むために異なる』では因果が逆。(C) given that は『〜を考慮すると』で、相違点の説明にならない。(D) except は節を導くなら except that の形が必要。"
  },
  {
    id: "s7p5-16",
    q: "Sales of the compact freezer have grown steadily, ______ in regions where electricity costs are highest.",
    choices: ["particular", "particulars", "particularity", "particularly"],
    answer: 3,
    translation: "小型冷凍庫の売上は着実に伸びており、とりわけ電気料金が最も高い地域で顕著である。",
    explanation: "空所はカンマの後ろで in 以下の前置詞句を修飾し、『とりわけ〜において』という意味を作る位置なので副詞の (D) particularly が入る。(A) particular は形容詞で、前置詞句を修飾できない。(B) particulars は『詳細』という意味の名詞(複数)、(C) particularity も名詞で、いずれもここでは文とつながらない。副詞は動詞だけでなく前置詞句や文全体も修飾できる点を押さえておきたい。"
  },
  {
    id: "s7p5-17",
    q: "The specifications submitted by the two shortlisted bidders, neither of whom has worked with the port authority before, ______ carefully against the original tender document.",
    choices: ["was compared", "comparing", "were compared", "has compared"],
    answer: 2,
    translation: "最終候補に残った2社が提出した仕様書は、どちらの会社もこれまで港湾局と取引がないが、当初の入札書類と入念に照合された。",
    explanation: "文の主語は文頭の The specifications(複数)。submitted by the two shortlisted bidders は主語を後ろから修飾する過去分詞で、続くカンマに挟まれた neither of whom has worked ... は挿入された非制限用法の関係詞節にすぎず、主語の数には影響しない。仕様書は『照合される』側なので受動態、主語が複数なので (C) were compared が正解。空所の直前にある単数扱いの has や、bidders / document といった名詞に引かれて (A) was compared を選ばせるのが狙い。(D) has compared は数も態も合わず、(B) comparing では文の述語動詞がなくなる。主語と述語動詞が20語近く離れる構造を追えるかを問う難問。"
  },
  {
    id: "s7p5-18",
    q: "The seats nearest the stage are ______ for donors who give at the patron level.",
    choices: ["reserved", "preserved", "conserved", "observed"],
    answer: 0,
    translation: "舞台に最も近い席は、パトロン会員として寄付をした方のために確保されている。",
    explanation: "be reserved for 〜(〜のために取ってある・専用である)は座席や駐車区画の案内で頻出。よって (A) reserved。(B) preserved は『保存する』で食品や建物、(C) conserved は『(資源を)節約・保全する』、(D) observed は『観察する・(規則を)守る』。-served で終わる語をまとめて狙うひっかけで、for と結びつく語を選ぶ。"
  },
  {
    id: "s7p5-19",
    q: "______ from the far end of the yard, the two storage tanks look almost identical in size.",
    choices: ["Viewing", "To view", "Having viewed", "Viewed"],
    answer: 3,
    translation: "敷地の一番奥から見ると、2基の貯蔵タンクは大きさがほとんど同じに見える。",
    explanation: "分詞構文の意味上の主語は、原則として主節の主語と一致する。ここでの主節の主語は the two storage tanks で、タンクは『見る』側ではなく『見られる』側なので、受動を表す過去分詞の (D) Viewed が正解。(A) Viewing と (C) Having viewed は能動になり『タンクが眺める』という意味になってしまう。(B) To view では『タンクが見るために』となり同じく主語がずれる。分詞構文は意味だけでなく『主節の主語との能動・受動の関係』で決める。"
  },
  {
    id: "s7p5-20",
    q: "A ______ of imported yarn forced the mill to switch to a domestic supplier for three months.",
    choices: ["shortcut", "shortage", "shortcoming", "shorthand"],
    answer: 1,
    translation: "輸入糸が不足したため、その紡績工場は3か月間、国内の供給元に切り替えざるを得なかった。",
    explanation: "『供給元を切り替えざるを得なかった』という結果から、原因は原料の『不足』。よって (B) shortage。(A) shortcut は『近道』、(C) shortcoming は『欠点・不備』、(D) shorthand は『速記』。short- で始まる名詞を並べたひっかけで、of imported yarn(輸入糸の〜)と結びつく意味を選ぶ。"
  },
  {
    id: "s7p5-21",
    q: "Staff who work on the national holiday will receive an additional day of leave ______ overtime pay.",
    choices: ["in light of", "in favor of", "in lieu of", "in need of"],
    answer: 2,
    translation: "祝日に勤務した職員には、時間外手当の代わりに休暇が1日追加で付与される。",
    explanation: "『時間外手当ではなく休暇を与える』という交換の関係なので、(C) in lieu of 〜(〜の代わりに)が正解。就業規則や通知文で使われる硬い表現。(A) in light of は『〜を踏まえて』、(B) in favor of は『〜を支持して・〜を選んで』で、後者は紛らわしいが『Aに賛成してBをやめる』という形(decide in favor of)で使い、ここでは receive と噛み合わない。(D) in need of は『〜を必要として』。"
  },
  {
    id: "s7p5-22",
    q: "The lease ______ the tenant to obtain written consent before making any structural change to the premises.",
    choices: ["requires", "demands", "insists", "suggests"],
    answer: 0,
    translation: "その賃貸借契約では、建物に構造上の変更を加える前に賃借人が書面による同意を得ることが義務づけられている。",
    explanation: "空所の後ろが『目的語(the tenant)＋to do』なので、この形を取れる (A) requires が正解。require A to do(Aに〜するよう求める)。(B) demand と (C) insist は『demand that S 原形』『insist that S 原形』の形で、目的語＋to不定詞は続かない。(D) suggest も同様に suggest A to do とは言えない。意味が近い動詞ほど『後ろに続く形』で区別する語法問題。"
  },
  {
    id: "s7p5-23",
    q: "______ the newly appointed procurement director values most in a supplier is consistency rather than the lowest unit price.",
    choices: ["That", "Which", "It", "What"],
    answer: 3,
    translation: "新しく着任した調達部長が納入業者に最も重視しているのは、単価の安さではなく安定していることである。",
    explanation: "文全体の述語動詞は真ん中にある is で、その主語にあたる名詞のかたまりを空所から supplier までが作っている。空所の中では values の目的語が欠けているため、先行詞を含み『〜すること・〜するもの』という名詞節を作る関係代名詞 (D) What が必要。(A) That を入れると That S V is ... という名詞節自体は作れるが、values の目的語が欠けたままになり成立しない。(B) Which は先行詞が必要で、(C) It は後ろに節を続けられない。長い主語の中で目的語が欠けていることに気づけるかを問う難問で、what と that の使い分けは『節の中に欠けている要素があるか』で決める。"
  },
  {
    id: "s7p5-24",
    q: "Had the supplier informed us of the delay in March, we ______ an alternative source before the assembly line was affected.",
    choices: ["would find", "would have found", "had found", "will have found"],
    answer: 1,
    translation: "その業者が3月の時点で遅延を知らせてくれていれば、組立ラインに影響が出る前に代替の調達先を見つけられていただろう。",
    explanation: "文頭の Had the supplier informed は If the supplier had informed の if が省略されて生じた倒置で、過去の事実に反する仮定を表す仮定法過去完了。したがって主節は『would have＋過去分詞』となり (B) would have found が正解。(A) would find は仮定法過去の主節の形で、現在の事実に反する仮定に使う。(C) had found と (D) will have found は主節の形として成立しない。文頭の Had を過去完了の一部と読み違えないことがポイント。"
  },
  {
    id: "s7p5-25",
    q: "Attendance at the winter concert series was ______ lower than at the summer program, a difference of fewer than fifty tickets.",
    choices: ["narrowly", "tightly", "marginally", "closely"],
    answer: 2,
    translation: "冬の演奏会シリーズの入場者数は夏の公演をわずかに下回り、その差はチケット50枚未満だった。",
    explanation: "後半の『差は50枚未満』という説明から、差がごくわずかだったと分かるので、比較級を弱める (C) marginally(わずかに)が正解。(A) narrowly は『narrowly avoided(かろうじて免れた)』のように接戦や僅差の動作に使い、lower を修飾して差の大きさを表す用法はない。(B) tightly(きつく)と (D) closely(密接に・入念に)も比較級の程度を表さない。比較級を修飾する副詞は slightly / marginally / significantly / considerably などをセットで押さえる。"
  },
  {
    id: "s7p5-26",
    q: "The updated operating manual is considerably shorter than the previous edition, ______ many of its diagrams have been enlarged.",
    choices: ["even though", "because", "so that", "in case"],
    answer: 0,
    translation: "図の多くが拡大されたにもかかわらず、改訂された操作マニュアルは前版よりかなり短くなっている。",
    explanation: "4つとも節を導ける接続表現で、形だけでは決まらない。決め手は『図を拡大すれば普通はページ数が増える』という常識で、それでも短くなったのだから譲歩を表す (A) even though が正解。(B) because を入れると『図を拡大したから短くなった』となり因果が逆。(C) so that は目的・結果を表すが、短くすることが図の拡大につながるわけではない。(D) in case は『〜する場合に備えて』で、すでに完了している have been enlarged と噛み合わない。文法ではなく前後の内容関係を読まないと決まらない難問。"
  },
  {
    id: "s7p5-27",
    q: "The committee based its decision on a ______ review of all three tenders.",
    choices: ["compare", "comparison", "comparatively", "comparative"],
    answer: 3,
    translation: "委員会は、3件の入札すべてを比較検討した結果に基づいて決定を下した。",
    explanation: "冠詞 a と名詞 review の間の空所なので、名詞を修飾する形容詞の (D) comparative(比較の)が入る。comparative review / comparative analysis は報告書で頻出の組み合わせ。(A) compare は動詞、(C) comparatively は副詞で名詞を修飾できない。(B) comparison は名詞で、名詞を2つ並べた comparison review という言い方はしない。"
  },
  {
    id: "s7p5-28",
    q: "Please note that ______ to the rooftop equipment room is restricted while the elevator is being replaced.",
    choices: ["accessible", "access", "accessibly", "accessed"],
    answer: 1,
    translation: "エレベーターの交換工事中は、屋上の機械室への立ち入りが制限されますのでご注意ください。",
    explanation: "that 節の中の述語動詞は is restricted で、その主語にあたる語が空所に入る。したがって名詞の (B) access(立ち入り・利用)が正解。access to 〜 の形も定番。(A) accessible は形容詞、(C) accessibly は副詞、(D) accessed は過去分詞で、いずれも主語になれない。空所の直後の to につられず、まず『主語が抜けている』と気づくことがポイント。"
  },
  {
    id: "s7p5-29",
    q: "Sales representatives are expected to ______ regular contact with every account in their assigned territory.",
    choices: ["retain", "obtain", "maintain", "detain"],
    answer: 2,
    translation: "営業担当者は、担当地域内のすべての取引先と定期的に連絡を取り続けることが求められている。",
    explanation: "maintain contact with 〜(〜と連絡を保つ)は定番のコロケーションなので (C) maintain。(A) retain は『(権利・記録などを)保持する』で人間関係の継続には使わない。(B) obtain は『入手する』で一度きりの動作、(D) detain は『引き止める・拘束する』。語尾が -tain でそろっており、目的語 contact と自然に結びつく動詞を選ぶ。"
  },
  {
    id: "s7p5-30",
    q: "The city council granted the developer a two-year ______ from the height restriction that applies to the waterfront district.",
    choices: ["exemption", "exception", "extension", "exposure"],
    answer: 0,
    translation: "市議会はその開発業者に対し、臨海地区に適用される高さ制限の2年間の適用除外を認めた。",
    explanation: "『規則の適用を免れること』を表すのは (A) exemption で、exemption from 〜 の形で使う。(B) exception は『例外』だが an exception to the rule のように to を取るのが普通で、from とは結びつかない。(C) extension は『延長・増築』で、期限を延ばす対象がここにはない。(D) exposure は『さらされること・露出』。ex- で始まる名詞を、後ろの前置詞 from で切り分ける。"
  }
];
