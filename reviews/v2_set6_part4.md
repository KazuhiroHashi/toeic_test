VERDICT: ISSUES(8)

# Set6 Part 4 校閲所見(v2)

## サマリ
- 構文: `node --check` OK。
- トーク数10 / 設問30(各トーク3問) / id 一意10件(s6p4-01〜10)。
- 図表問題2つ(s6p4-05 `graphicKind:list`、s6p4-09 `graphicKind:invoice`)。両方に `graphic` と `Look at the graphic.` 設問あり。仕様の個数は充足。
- 全トークに `kind` あり。種別: telephone message×2 / broadcast / advertisement / excerpt from a meeting×2 / announcement / talk / tour information / speech。多様性は許容範囲。
- 正解位置分布 A8 / B8 / C7 / D7。偏りなし。
- 解説・訳に Markdown `**` の使用なし(仕様準拠)。強調は不使用または『』のみ。
- 正解キーは30問すべて音声根拠と一致(誤キー・複数正解・正解なしは検出されず)。
- 不適切題材(政治/宗教/事故等)なし。

## 重大〜中程度の問題(8件)

### A. 解説内の選択肢記号(A)〜(D)の取り違え(3件)
- `I-1` **s6p4-01 / 設問2**「What does the speaker ask Mr. Delgado to provide?」
  解説「business という語から(B)business plan を連想させるひっかけ」。
  実際の並びは (A) A list of references / (B) A recent tax return / (C) A business plan / (D) A photo ID で、`answer:1` = (B) が『正解』。ひっかけの business plan は (C)。
  → 修正案:「(C)business plan を連想させるひっかけ」。

- `I-2` **s6p4-03 / 設問1**「What type of business is being advertised?」
  解説「alterations の連想で(B)クリーニングを選ばせるひっかけ」。
  実際は (B) A shoe repair shop / (C) A dry-cleaning service。
  → 修正案:「(C)クリーニングを選ばせるひっかけ」。

- `I-3` **s6p4-10 / 設問1**「What event is being celebrated?」
  解説「倉庫が舞台になった話から(A)開業を連想させるひっかけ」。
  実際は (A) An award ceremony / (C) A grand opening。
  → 修正案:「(C)開業(grand opening)を連想させるひっかけ」。

### B. 答えの漏れ(観点(d)・最重要ルール違反、5件)
- `I-4` **s6p4-03(広告)— 業種問題が音声なしで解ける**
  設問1が業種(A: A clothing and tailoring shop)を問うのに、設問2の正解 "Free alterations"、設問3の設問文 "by booking a styling appointment"、設問2の設問文 "in the showroom" が揃っており、shoe repair / dry-cleaning / fabric wholesaler は他設問だけで排除できる。仕様5「業種を問う設問の答えの語を他設問に出さない」に抵触。
  → 修正案:設問3の設問文を "What can customers receive for a limited time?" のように styling を伏せる、設問2を「無料で付いてくるもの」ではなく「ショールーム購入者への特典の条件(100ドル以上)」等に振り替える。

- `I-5` **s6p4-08(見学案内)— 場所問題が選択肢から特定できる**
  設問1が場所(B: At a broadcasting studio)を問うのに、設問3の選択肢が "In the main lobby / In the control room / In the sound-editing suite / In Studio A" と放送局固有の部屋名を並べており、theater / newspaper office は容易に排除される。
  → 修正案:設問3を「撮影禁止の場所」ではなく「はぐれた時の集合場所」「見学の最後に訪れる場所」など、施設名が露出しにくい形にするか、設問1を目的・所要時間などに差し替える。

- `I-6` **s6p4-06(研修)— 聞き手の正体が他設問から割れる**
  設問1が聞き手(C: Newly hired café staff)を問うが、設問2の設問文が "the espresso machines"(=カフェ)、設問3の設問文が "What should staff do ..."(=聞き手はスタッフ)と明示している。health inspectors / coffee bean suppliers / regular customers は音声を聞かずに排除できる。
  → 修正案:設問3を "What are listeners told to do if part of the delivery is missing?" のように staff を出さない表現に変える。

- `I-7` **s6p4-04(会議)— 主題と問題点の双方が選択肢から推測できる**
  設問1(C: An office building renovation)は、設問3の選択肢 "Inspect the wiring" "Order replacement tiles" から屋内工事と分かり、bridge / road / landscaping が排除される。さらに設問2の正解 "A material shipment is delayed" も、設問3の選択肢 "Meet with the supplier" "Order replacement tiles" が示唆してしまう。
  → 修正案:設問3の選択肢から supplier / tiles を外し、"Post a notice on the ground floor" "Contact the electrical crew" 等の中立なダミーに置き換える。

- `I-8` **s6p4-09(会議・図表)— 図表問題の答えが次の設問で示される**
  設問1(A: Travel が最も増えた)に対し、設問2の選択肢が "Attending client conferences" と "Holding video meetings"(正解)。出張を減らす提案だと分かるため、図表・音声なしでも Travel を選べる。
  → 修正案:設問2を「話し手が来四半期に導入したいこと=上限設定(set a firm cap)」に変更するか、図表問題を設問順で最後に置き、設問2の選択肢から travel/conference 連想語を外す。

## 軽微な指摘(VERDICTには算入せず)
- `M-1` s6p4-09 の `graphicKind` が `invoice` だが、内容は部門別経費の一覧(請求書ではない)。`list` が実態に合う。
- `M-2` s6p4-09 の設問1「Which category increased the most?」は、図表に前四半期の数値がないため、図表は『カテゴリ名の対応表』としてしか機能していない。図表問題としてはやや弱い(前四半期列を足すと厚みが出る)。
- `M-3` s6p4-05 の設問2(will-call の受取場所)は、音声が受取場所を明言しておらず、実質は図表+一般知識での推測。`Look at the graphic.` が付いていないのに図表依存になっている。音声に "at the box office on the first level" 等の手掛かりを入れるか、設問を音声内容(受け取りのタイミング)に寄せると安全。
- `M-4` s6p4-02 設問1の解説「break down を impact に言い換えている」は不正確。実際の言い換え元は "what it means for local homebuyers"。
- `M-5` s6p4-09 訳「前四半期の約2倍」は原文 "nearly doubled"(2倍近く)より強い。『2倍近くに増えた』が正確。
- `M-6` s6p4-01 は全設問の選択肢が銀行関連語(funds/interest rate/credit check/branch)で統一されており、業種は割れるが正解特定には至らないため許容範囲。ただし I-4〜I-8 と同種の傾向なので、選択肢作成時の共通課題として認識したい。
- `M-7` 英語(観点(a)): 10トークとも文法・語法・スペルは自然で、事実矛盾なし。ground floor と second floor の併用も米用法で整合。修正不要。
