# VERDICT: ISSUES(20)

対象: `/workspace/toeic_test/data/set6/part7.js`(セット6 Part 7)
監査日: 2026-07-25 / ファイルは書き換えていない。

---

## 0. 構成チェック(合格)

- `node --check` OK。
- シングル10文書=29問(01〜10、05のみ2問・他3問)、ダブル2セット=10問、トリプル3セット=15問、**合計54問**。仕様どおり。
- id `s6p7-01`〜`-15`、すべて一意。選択肢はすべて4つ。
- 正解位置分布 A=14 / B=14 / C=13 / D=13。偏りなし・良好。
- 必須要素: 意図問題2(01-Q2, 05-Q2)、語彙問題2(09-Q2 "essential", 12-Q5 "flat")、NOT問題2(02-Q1, 13-Q5)、クロスリファレンス多数、計算型4(11-Q4, 12-Q3, 13-Q3, 14-Q5, 15-Q3)。すべて充足。
- 計算はすべて検算し正しい: 11-Q4=(5-3)×$12=$24 / 12-Q3=(60×18+40×14)×0.85=$1,394 / 13-Q3=900+150+200=$1,250 / 14-Q5=250×0.15=$37.50 / 15-Q3=(1,500+800)×0.88=$2,024。
- 文書種別も多様(Text-message chain / Advertisement / E-mail / Notice / Online chat / Article / Letter / Memo / Price list / Order confirmation / Web page)。
- Markdownの `**` の使用は **0件**(全文検索で確認)。強調は『』のみ。ここは規約どおり。
- 英文自体は全体に自然でスペルミス・文法誤りは検出されなかった。正解キーも(下記12-Q4を除き)本文から一意に決まる。

---

## 1. 【重大・系統的】解説中の選択肢レター (A)(B)(C)(D) が `answer` インデックスと一致しない(18件)

このファイルはヘッダに「正解位置均等化済み」とあり、**選択肢を並べ替えた際に解説内のレター表記を更新し忘れている**とみられる。日本語解説は正しい内容を述べているが、指している記号が別の選択肢を指す。学習者が解説を読むと逆に混乱する。

とくに深刻(★)なのは、**解説が「正解そのもの」を誤りとして名指ししている**5件。

- ★ (1) `s6p7-02` Q2「What is indicated about alterations?」: answer=1=(B)「They take several business days.」なのに解説末尾が「complimentary(無料)なので**(B)は誤り**」。→ 「(A)は誤り」に修正(有料 = choice0)。
- ★ (2) `s6p7-04` Q1「What is the purpose of the notice?」: answer=1=(B)「To announce a rescheduled performance」なのに解説が「新しい楽団の紹介**(B)**や値上げ**(C)**ではない」。→ 正しくは「(A)や(D)ではない」。
- ★ (3) `s6p7-08` Q3「What is indicated about the credit?」: answer=3=(D)なのに解説が「電話請求(A)や現金化**(D)**は誤り」。→ 現金化は choice1 なので「(B)」。
- ★ (4) `s6p7-09` Q1「What type of business is being advertised?」: answer=3=(D)「A restaurant」なのに解説が「パスタ教室**(B)**、農場からの仕入れ**(D)**は…業態ではない」。→ 教室は(C)、農場は(A)。
- ★ (5) `s6p7-13` Q5「What is NOT included in the half-day rate?」: answer=2=(C)「A sound system」なのに解説が「**(D)が正解**」。→ 「(C)が正解」。
- (6) `s6p7-01` Q1: answer=0=(A)。解説「**(A)**の期限や(B)の予定変更は本文にない」→ 期限は choice3 なので「(D)の期限や(B)の予定変更」。
- (7) `s6p7-01` Q3: answer=0=(A)。解説「**(A)**の仕入先電話はオリビアの予定」→ supplier call は choice3 なので「(D)」。
- (8) `s6p7-02` Q1: answer=2=(C)。解説「オンライン送料無料には触れていないので**(D)が正解**」→「(C)が正解」。
- (9) `s6p7-03` Q1: answer=2=(C)。解説「融資の案内(A)や不正利用の報告**(C)**ではない」→ 不正利用は choice3 なので「(D)」((A)は正しい)。
- (10) `s6p7-04` Q2: answer=2=(C)。解説「**(D)**『一切入場不可』は誤り」→ not admitted は choice0 なので「(A)」。
- (11) `s6p7-04` Q3: answer=3=(D)。解説「交換は他公演のチケットとであり**(C)**は誤り」→ 録音との交換は choice0 なので「(A)」。
- (12) `s6p7-07` Q1: answer=3=(D)。解説「招待**(A)**ではなく手配の確認」→ invite は choice2 なので「(C)」。
- (13) `s6p7-08` Q1: answer=0=(A)。解説「融資承認の確認**(C)**ではない」→ loan approval は choice3 なので「(D)」。
- (14) `s6p7-09` Q3: answer=1=(B)。解説「デザート中心**(B)**やブランチ限定**(C)**ではない」→ デザートは(D)、ブランチ限定は(A)。
- (15) `s6p7-12` Q4: answer=3=(D)。解説「ラベル**(A・B)**は不要と本人が述べている」→ ラベルに触れているのは(A)のみ。(B)は「Delivery will cost $1,000」でラベルとは無関係。
- (16) `s6p7-13` Q1: answer=3=(D)。解説「無料**(A)**や不可**(C)**ではない」→ 無料は choice2=(C)、不可は choice0=(A)。左右が入れ替わっている。
- (17) `s6p7-13` Q4: answer=3=(D)。解説「返金不可**(A)**ではない」→ non-refundable は choice1 なので「(B)」。
- (18) `s6p7-14` Q4: answer=1=(B)。解説「返送**(A)**は不要と明記」→ Return them by mail は choice2 なので「(C)」。

**推奨対応**: 全設問について「解説中の (A)〜(D) 表記 ↔ choices 配列の位置」を機械的に突き合わせる検証を1本入れ、以後の並べ替え時に再発しないようにする。なお 05-Q2 / 06-Q1 / 06-Q2 のレター表記は正しいので、ファイル全体が壊れているわけではない。

---

## 2. 【中程度】正解が一意に定まりにくい設問

- (19) `s6p7-12` Q4「What is suggested about delivery for this order?」
  - キーは(D)「Standard delivery will be free.」で、価格表の「free on orders over $1,000」+小計$1,640(割引後$1,394)から確かに導ける。
  - ただし本文は同時に「標準配送は10営業日」「速達(4営業日)は一律$75」を示し、Eメールで顧客が「9月2日のウィンドウお披露目までに届いてほしい」(注文は8月19日)と明示している。8月19日から10営業日は9月2日前後で**間に合わない可能性が高い**設計になっており、(C)「He must pay a $75 rush fee.」も十分に推測可能な解答になってしまっている。
  - 修正案(いずれか): ①注文日を8月19日→8月8日ごろに前倒しして標準配送で余裕を持たせる、②お披露目日を9月2日→9月12日にずらす、③(C)の選択肢を配送と無関係なもの(例「An order form must be signed.」)に差し替える。

---

## 3. 【中程度】(d) 答えの漏れ

- (20) `s6p7-09`(シングル9・広告) Q1 は業種を問う設問(答え=A restaurant)。同じ文書の Q3 の選択肢に「It is only available at **brunch**.」「It is set by a **guest chef**.」「It focuses on **desserts**.」と、業種を直接示唆する語が並んでおり、Q1 を読まずとも(むしろ Q3 の選択肢だけで)飲食店と特定できてしまう。仕様(d)が名指しする「業種を問う設問の答えの語を他設問の選択肢に入れない」に抵触。
  - 修正案: Q3 を「What is indicated about the menu?」から中立的な言い回しに変え、選択肢の "guest chef" / "desserts" / "brunch" を「It is updated each month.」「It is posted on the Web site.」「It is the same all year.」「It is decided by a committee.」等に置換する。
  - 参考(軽微・要修正ではない): `s6p7-12` Q2(割引率15%)は Q3 の選択肢に $1,640(割引前小計)と $1,394 が並ぶため逆算可能。TOEIC本番でもよくある連鎖なので許容範囲だが、気になるなら Q3 の distractor から $1,640 を外す。

---

## 4. 軽微な指摘(VERDICT には計上せず)

- `s6p7-04`(Notice): "intervals" は英国式。TOEIC はアメリカ英語が基本なので "intermission(s)" が自然。設問文・選択肢も同時に直す必要あり。
- `s6p7-14`(Order confirmation): 「Perishable items ship separately from dry goods.」とあるが、注文品は小麦粉・ココア・バニラエクストラクトで**いずれも常温保存の乾物**。バニラだけ3月9日着になる理由づけとして "perishable" は事実に合わない。「Liquids ship separately from dry goods.」または「Items may ship from different warehouses.」に変更を推奨(Q1のキー自体は配送予定日から導けるので正解は揺らがない)。
- `s6p7-06`(Article): ゲストに "city council members"、選択肢に "A city council election" があり、政治色がややある(観点(g))。致命的ではないが、"local school principals" / "A community fundraiser" 等に置換するとより無難。
- `s6p7-09` Q2: 「the word "essential" in the fourth paragraph」— 見出し行を第1段落として数えると第4段落で正しいが、見出しを段落に数えない読み方だと第3段落になる。本番同様に「in paragraph 4, line 1」形式にするか、見出しを除いた段落番号に揃えると誤解がない。
- `s6p7-12` Q5: 「In the price list, the word "flat"…」は段落・行の指定がなく、他の語彙問題(09-Q2)と形式が不揃い。「In the price list, the word "flat" in paragraph 4, line 2 …」のように統一すると市販品質に近づく。
- `s6p7-05` は2問のみ(仕様の「各文書2〜4問」内なので違反ではない)。合計29問も満たしている。
- ダブル・トリプルの `translation` は、シングルの全訳に比べてEメール部分が1段落に圧縮された要約体で、体裁がやや不揃い。内容の欠落はない。
