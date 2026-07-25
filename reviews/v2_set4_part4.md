VERDICT: ISSUES(4)

# Set4 Part4 校閲所見(v2)

対象: `/workspace/toeic_test/data/set4/part4.js`
仕様: Part 4 = 10トーク×3問=30問・各トークに `kind`・図表問題2つ。

## 構成チェック(合格)
- トーク数 10(s4p4-01〜10)、各3問=計30問。id はすべて一意。○
- `kind` 全トークに付与。内訳: tour information / excerpt from a meeting×2 / announcement / telephone message×2 / broadcast / advertisement / speech / talk。重複は各2までで許容範囲。○
- 図表問題ちょうど2つ: s4p4-09(`graphicKind:"invoice"`)、s4p4-10(`graphicKind:"list"`)。両方に `Look at the graphic.` 設問あり。`graphic` の内容は音声と突き合わせないと解けない設計になっている(=図表必須)。○
- 各設問の選択肢は4つ、重複選択肢なし。`node --check` 構文OK。○
- 正解位置分布: A=8 / B=8 / C=7 / D=7。全体としては均等。○
- 解説・訳の強調は『』のみ。Markdown の `**` の使用は0件。○
- スペルミス・文法誤りは検出されず。英文は全体に自然でTOEICの世界観に収まっている。○
- s4p4-09 の図表と音声の整合(8ケース=Red Onions が一意)、単価計算($120/10, $90/6, $64/8, $75/5)も矛盾なし。○

## 問題(n=4)

### [1] s4p4-10 音声と図表の数値が矛盾している(観点a・最重要)
- 音声: "three of our four assembly lines stayed comfortably under our two-percent target."
- 図表: Line A 1.2% / Line B 2.0% / Line C 4.8% / Line D 1.5%。
- 『2パーセント目標を余裕をもって下回った』ラインは A と D の『2つ』しかない。Line B は 2.0% でちょうど目標値であり、"comfortably under" には該当しない。音声の「3つ」と図表が食い違う。
- 正解(Q1=Line C)自体は変わらないが、図表を精読する受験者ほど混乱する明白な事実矛盾。市販品質としては要修正。
- 修正案: 図表の Line B を『1.8%』に変える(A/B/D の3ラインが 2% 未満となり音声と完全一致)。または音声を "three of our four assembly lines met our two-percent target" に緩める。

### [2] s4p4-06 Q1(何の広告か)が Q2・Q3 の設問文だけで解けてしまう(観点d)
- Q1 "What is being advertised?" 正解=D "Commercial space for lease"。誤答は parking garage / interior design service / moving company。
- ところが Q2 の設問文が "What is included with every `lease`?"、Q3 が "How can a business get a free month of `rent`?" と、lease・rent を明示している。音声を聞かなくても『賃貸物件の広告』と確定でき、Q1 は消去法で一意に決まる。
- 主題・目的を問う設問の答えが他設問から漏れており、規約5に抵触。
- 修正案: Q2 を "What is included with every unit?"、Q3 を "How can a business receive one month at no charge?" のように lease/rent を含まない表現に書き換える。

### [3] s4p4-09 Q2(電話の目的)が Q1 の設問文から推測できる(観点d)
- Q1 "Look at the graphic. Which item is `unavailable` this week?" を読んだ時点で『注文品に問題が発生した連絡』だと分かるため、Q2 "Why is the speaker calling?" の正解 D "To report a problem with an order" が音声なしで確定する。誤答(支払い依頼/新価格の確認/新商品の案内)はいずれも「品切れ」と両立しない。
- 修正案: Q2 を目的問題から外し、"What does the speaker offer to do?"(正解=Substitute a similar item / 注文から外す の選択肢提示)などに差し替える。あるいは Q1 の設問文を "Which item did the speaker mention?" 系にして unavailable の語を消す。

### [4] s4p4-01 Q3 の正解選択肢が Q1(場所)の答えを露出させている(観点d)
- Q1 "Where does the talk most likely take place?" 正解=A "At a manufacturing plant"、誤答は auto dealership / hardware store / shipping warehouse。
- Q3 の正解選択肢が "Go to the `metal-cutting` area"。金属切断エリアがある施設は選択肢中 manufacturing plant だけなので、音声を聞かずとも Q1 が決まる。場所問題の答えを他設問の選択肢に入れない、という規約5の典型的な抵触例。
- 修正案(いずれか): (a) Q3 の正解を "Proceed through a set of doors" のように工程名を含まない表現にする、(b) Q1 を場所問題ではなく "Who most likely are the listeners?" や "What does the speaker say about the areas outside the yellow lines?" に差し替える。なお冒頭で "Brennan Steel components plant" と明言されるため、Q1 は元々難度が低く差し替えの実害は小さい。

## 軽微な指摘(n には算入せず)
- s4p4-01: 3問の正解がすべて A(AAA)。全体分布は均等だが、1トーク内で同一位置が3連続するのは見た目に不自然。Q2 か Q3 の選択肢順を入れ替えると良い(例: Q3 の正解を B 位置へ)。
- s4p4-03: Q1 正解 "A new method for `picking` orders" と Q2 正解 "To reduce `picking` time" が同じ特徴語を共有し、さらに Q3 正解 "Check their zone assignment" の zone もゾーン制ピッキングを連想させる。3問が同じ手がかりで連鎖するので、Q2 を "To speed up order processing"、Q3 を "Look at a posted notice" 等に言い換えると独立性が上がる。
- s4p4-07: Q2 の設問文 "what did the `team` achieve?" が Q1 正解 "To recognize a `team`'s work" を弱く示唆する。Q2 を "What improvement does the speaker mention?" にすると解消。
- s4p4-02: Q3 誤答 "Visit a supplier" が Q1 の主題(2社目のサプライヤー追加)を弱く示唆。実害は小さいが "Attend a training session" 等に置き換え可。
- s4p4-08: Q2 正解 "Checking jars for problems" により Q1 の選択肢のうち Accounting / Marketing が消え、Packaging と Delivery の二択まで絞られる。許容範囲だが、Q1 の誤答を "Shipping" 以外の非現場部門寄りに調整するとより安全。
- s4p4-08 訳: 英文 "Any jar that doesn't meet the standard goes into the red bin" は平叙文だが、訳が「必ず〜入れてください」と命令形になっている。「基準を満たさない瓶は確認用の赤いかごに入れ、ラインには戻しません」の方が原文に忠実。
- s4p4-07: "a record number of storm-damage claims" は保険業務の文脈で自然だが、TOEIC は災害・被害の話題を避ける傾向がある。"a record number of weather-related claims" 程度に和らげると無難(任意)。
- s4p4-03 Q3 解説: 「please check yours(=your zone assignment)before」のように全角括弧の前後で半角スペースが欠落。表記統一の観点のみ(内容は正しい)。
