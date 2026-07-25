VERDICT: ISSUES(5)

# Set5 Part 4 校閲所見(v2)

注:既存の `reviews/set5_part4.md`(v1)はケータリング/図書館/家具店など『別内容』を監査しており、現行ファイルとは一致しない(全面差し替え済み)。本所見は現行ファイルのみを対象とする。

## サマリ
- 構文: `node --check` OK。
- トーク数10 / 設問30(各トーク3問) / id 一意10件(s5p4-01〜10)。
- 図表問題2つ(s5p4-05 schedule, s5p4-09 invoice)。両方に `graphic` + `graphicKind` + `Look at the graphic.` 設問あり。仕様充足。
- 全トークに `kind` あり。内訳: telephone message×2 / announcement×2 / excerpt from a meeting×2 / advertisement / broadcast / tour information / speech。
- 正解位置分布 A8 / B8 / C7 / D7。偏りなく良好。
- 解説・訳に Markdown `**` の使用なし。強調はすべて『』。仕様準拠。
- 電話番号の音声表記と訳の一致を確認(01=555-6170、07=555-4421)いずれも一致。

## 重大〜中程度の問題(5件)

### I-1【観点(d) 答えの漏れ・中】s5p4-08 Q2 の選択肢が Q1(主題)を割ってしまう
Q1「What is the news report mainly about?」の正解は『A tree-planting project』。ところが Q2「What are volunteers asked to bring?」の選択肢に『Planting tools』『Gardening gloves』が並ぶため、音声を聞かずとも Q1 の distractor(A park renovation / A road repair project / A recycling contest)を消去でき、主題が特定できる。
修正案: Q2 の distractor を題材語を含まない中立語に差し替える(例:『A folding chair』『A photo ID』『A parking permit』など)。少なくとも `Planting` の語は外す。

### I-2【観点(d)(e) 題材重複・中】s5p4-04 と s5p4-09 が『映像制作の会議』で重複
両方とも `kind: "excerpt from a meeting"`、かつ題材が映像/カメラ制作(04=コマーシャル撮影・スタジオ・照明技師、09=Nova Studio のカメラ本体/ズームレンズ/照明キット発注)。同一パート内で種別も業界も重なり、市販模試としては単調。仕様の「重複しすぎないよう多様に」に抵触。
修正案: 09 を別業種の発注(例:カフェの厨房機器、オフィス什器、研究室の測定機器)に置換するか、`kind` を `talk` 等に変え業界も変更する。
付随: s5p4-03(太陽光)と s5p4-06(風力発電所)もエネルギー題材で重複気味。片方を別題材にすると全体の広がりが出る。

### I-3【観点(d) 答えの漏れ・中】s5p4-02 Q1 と Q2 が実質同一情報
Q1 正解『To announce that registration is open』、Q2 正解『Sign up early』。受付開始を聞き取れれば Q2 は自動的に決まり、逆に Q2 の選択肢『Sign up early』を見れば Q1 の distractor(exam results / new faculty / new degree program)が消える。さらに Q3 の設問文が "students who attend at least three workshops" とワークショップの存在を明示しており、Q1 の絞り込みを助けている。
修正案: Q2 を別情報に差し替える(例:「What is limited to twenty students?」または「Where is the center located?」→ Baxter Building 2階)。

### I-4【観点(d) 答えの漏れ・中】s5p4-04 Q3 の選択肢が Q1(主題)を示唆
Q3 の選択肢に『Book a studio』『Edit the video』があり、Q1「What is the speaker mainly discussing?」の正解『Plans for filming a commercial』へ誘導される(distractor の Hiring a new manager / Choosing a client が消える)。
修正案: Q3 の distractor を制作語を含まないものに(例:『Update the budget』『Reserve a meeting room』)。

### I-5【観点(b)(d) 図表問題の自力推測・中】s5p4-09 Q2 が Q1(図表問題)の答えを与える
Q2 の正解『To stay within the budget』を見た時点で「削るのは最高額の項目」と推測でき、図表で最高額の Camera body($2,400)を音声なしで選べてしまう。図表問題は音声と図表の突き合わせで初めて解ける設計であるべき。
修正案: Q2 を削除理由ではなく別情報にする(例:「What does the supplier offer this week?」→ Free shipping / 「When will the purchase order be sent?」→ By Friday)。

## 軽微な指摘
- s5p4-03 Q3: 選択肢A『By visiting a showroom』とB『By visiting a store』が実質同義で、消去法により片方ずつ機械的に排除できる。片方を『By calling a toll-free number』等に変更すると良い。解説も店舗のみ言及しショールームに触れていない。
- s5p4-10 Q2: 選択肢『She donated money for the fund』に "the fund" が含まれ、Q1 の正解『To announce a scholarship fund』を弱く示唆する。『She gave a large gift to the university』等に言い換えると漏れが減る。
- s5p4-10 Q3「What will happen next?」: 音声は "But first, please join me in a warm round of applause" とあり、厳密には『次』は拍手。競合する選択肢がないため実害はないが、設問を「What will Grace Hartwell do next?」にすると曖昧さが消える。
- s5p4-09 Q2 正解『To stay within the budget』: 音声は "Finance approved our budget, but with one condition" であり予算は承認済み。厳密には『財務部の指示』であって予算超過ではないため、やや推論寄り。他選択肢が明確に誤りのため唯一解としては成立する。
- s5p4-03: 音声・訳は "website"、選択肢は "Web site" と表記揺れ。TOEIC公式は "Web site" 寄りなので統一が望ましい。
- s5p4-05 図表: 時刻が "1:00" "2:30" と AM/PM 表記なし。"1:00 P.M." 等の明示が親切(ただし直上に 10:00 / 11:30 があるため誤解の恐れは低い)。

## 観点別の判定
- (a) 英語: 全10トーク、文法・語法・スペルとも問題なし。`alumna`(女性形)の使い分け、`called in sick`、`Once filming wraps`、`check each piece against the packing list` など自然。事実矛盾なし(04 の撮影→編集2週間→6月初旬納品も整合)。
- (b) 正解キー: 30問すべて本文に明確な根拠があり、複数正解・正解なしはなし。上記 I-5・軽微指摘の範囲でわずかに推論寄りの箇所があるのみ。
- (c) 日本語訳・解説: 訳は原文に忠実で誤訳なし。解説はひっかけの仕組みまで説明できている。`**` の使用ゼロ、強調は『』で統一。
- (d) 答えの漏れ: I-1, I-3, I-4, I-5 の4件。01/05/06/07 は漏れなし(特に06は場所設問がありながら他設問の選択肢に wind/turbine 系の語がなく良好)。
- (e) パート必須要素: 10トーク×3問=30、全トークに kind、図表2。充足。
- (f) id 一意(s5p4-01〜10)、設問数30、正解位置 A8/B8/C7/D7 で偏りなし。問題なし。
- (g) 不適切題材なし。01のMRI予約確認は医療機関からの事務連絡でTOEIC世界観の範囲内(症状・事故の描写はなし)。政治/宗教/事故の要素なし。
