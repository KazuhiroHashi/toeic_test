# VERDICT: ISSUES(8)

対象: `/workspace/toeic_test/data/set4/part3.js`(セット4 Part 3)
仕様: `tools/REVIEW_SPEC.md` / `tools/AGENT_SPEC.md`

## 構造チェック(合格)
- 13会話 × 3問 = 39問。id `s4p3-01`〜`-13` すべて一意。選択肢は全問4つ。
- 図表問題2つ:`s4p3-08`(graphicKind: list)/`s4p3-12`(graphicKind: schedule)。両方とも設問が `Look at the graphic.` で始まる。
- 3人会話2つ:`s4p3-05`(W/W2/M=女性2+男性1)/`s4p3-07`(W/M/M2=男性2+女性1)。いずれも冒頭で名前を出し、発言者特定問題あり。
- 意図問題1つ:`s4p3-09` Q2(`What does the man imply when he says, "This Friday"?`)。
- 正解位置の全体分布:A=10 / B=10 / C=10 / D=9。全体では良好。
- audioの発言数は4〜6の範囲内。解説・訳に Markdown の `**` は不使用、強調は『』で統一(仕様どおり)。
- 政治・宗教・事故など不適切題材なし。

---

## 重大〜中程度の問題(8件)

### ISSUE-1 【答えの漏れ・観点(d)】s4p3-04:Q1の答えが他設問の選択肢から丸見え
Q1 は目的問題 `Why is the woman calling?`(正解=To report a heating problem)。しかし Q2 の選択肢に `A technician will inspect the boiler.`、Q3 の選択肢に `Extra blankets` / `Portable heaters` / `A heater manual` が並ぶため、音声を聞かなくても「暖房の不具合の連絡」と確定できる。AGENT_SPEC 5(目的・主題を問う設問の答えの語を他設問の選択肢に入れない)違反。
- 修正案:Q3 を暖房語彙を含まない設問に差し替える(例 `What does the man say he will do by the end of the day?` → 正解 `Provide a repair timeline`、誤答 `Refund a fee` / `Visit the office` / `Contact a new tenant`)。あわせて Q2 の正解表現を `A specialist will examine the equipment.` のように boiler/heater を避けた言い換えにする。

### ISSUE-2 【答えの漏れ・観点(d)】s4p3-02:Q1(問題は何か)の答えが Q3 の選択肢に露出
Q1 は `What is the problem?`(正解=Some goods were damaged.)。Q3 の選択肢に `Take photos of the damage`(正解)と `Return the damaged pallet` の2つが入っており、"damage" が2回出る。Q1 は音声なしで正答可能。
- 修正案:Q3 の選択肢から damage の語を外す(正解を `Send photographs` に、誤答を `Contact the delivery driver` / `Return the pallet` / `Cancel the order` にする)。

### ISSUE-3 【答えの漏れ・観点(d)】s4p3-06:Q1(電話の目的)が Q2 の設問文と Q3 の選択肢から特定できる
Q1 正解=`To confirm a produce order`。ところが Q2 の設問文が `Why can't the man supply all the bell peppers this week?`(=野菜の供給・注文の話だと明示)、Q3 の選択肢に `An updated order total`(=注文がある)。Q1 の誤答 `To report a shipping error` / `To reschedule a delivery` / `To negotiate a price` はこれで容易に消せる。
- 修正案:Q2 の設問文を品目名を出さない形に(`Why can't the man fill the entire request this week?`)、Q3 の正解を `An updated total` ではなく `A revised invoice amount` 等、order の語を避けた表現にする。

### ISSUE-4 【正解キー・観点(b)】s4p3-11 Q3:正解が2つ成立しうる
`When will the new policy take effect?` に対し、男性は `As soon as you sign the updated agreement.`(=署名後ただちに)と `it'll be active from the first.`(=1日から)の両方を述べている。書類は「今日」送るので署名も今日想定であり、選択肢D `Immediately` が正解A `On the first of the month` と両立してしまう(音声自体が内的に矛盾)。
- 修正案:男性の最終発言を `I'll e-mail the updated agreement today. Once you sign it, the new policy takes over when the current one expires — so it'll be active from the first.` のように、署名=手続き完了/発効=1日、と切り分ける。

### ISSUE-5 【日本語訳の誤り・観点(c)】s4p3-11:保険料の訳が原文と意味が違う
原文 `That will raise your premium slightly, about fifteen dollars a month.` は「保険料が月あたり約15ドル『上がる』」の意。訳文は「保険料が少し上がり、月におよそ15ドルほどになります」となっており、「月額15ドルの保険料になる」と読める(住宅保険の月額として非現実的で、事実矛盾にも見える)。
- 修正案:「それにより保険料が少し上がり、月におよそ15ドルの増額になります。」

### ISSUE-6 【内的矛盾・観点(a)(b)】s4p3-12:図表に担当チームが載っているのに「担当表を確認する」と言う
graphic の `3. 14:00–18:00 — Product B (Team 1)` に担当チームが明記されているにもかかわらず、女性は同じスケジュールを見ながら `Let me check the roster and confirm.` と答える。Q1(Look at the graphic → Team 1)の根拠を音声自身が「未確定」と否定してしまい、設問の前提が揺らぐ。Q3 の正解 `Check the roster` もこの不自然な発言に依存している。
- 修正案:女性の最後の発言を `The schedule shows the afternoon block, but let me confirm who's actually rostered that day and get back to you.` のように「スケジュール上はこうだが個々の担当者を確認する」に変え、チーム自体は図表で確定していることを崩さない。

### ISSUE-7 【正解位置の偏り・観点(f)】s4p3-04:3問すべて正解B
1会話内で BBB と完全に固まっている(他の12会話はいずれも2種類以上に分散)。全体分布は均等だが、同一音声内での連続同一キーは市販模試として避けたい。
- 修正案:Q1 または Q3 の選択肢順を入れ替え、BAB / BBD 等にする。

### ISSUE-8 【題材の重複・多様性不足・観点(e)前提の「場面を多様に」】
- `s4p3-01` と `s4p3-06` が構造的にほぼ同型:「注文確認の電話 → 供給側の事情で全量出せない → 一部を先に納入・残りは翌週 → 最後にメールで書類/金額を送る」。ファイル冒頭コメントは「重複差し替え済み」とあるが、この2本は依然として重複と言える。
- 業種の偏り:物流・在庫・生産で5本(01/02/06/08/12)、出版・編集で2本(03/09)、保険で2本(05/11)。AGENT_SPEC が挙げる「交通/宿泊/店頭対応」は1本もなく、来店系は不動産内見(10)のみ。
- 設問パターンの偏り:「最後にメールで何を送るか/送ってほしいか」型が01・06・10の3本で反復(さらに02・05・11の音声にも e-mail の発言があり、6会話で同じ締めくくり)。
- 修正案:01 か 06 のどちらかをホテル/空港/レストラン/店頭返品などの場面に差し替え、締めの発言を「メールで送る」以外(折り返し電話、訪問予約、窓口で受け取り等)に散らす。

---

## 軽微な指摘(参考・VERDICTには算入せず)

- `s4p3-03` Q3 の解説が「女性の I sent the photos separately today が根拠」と引用しているが、実際の台詞は `Would it help if I sent the photos separately today?`。条件節の一部を平叙文のように引用しており不正確。「Would it help if I sent the photos separately today? が根拠」に直したい。
- `s4p3-10` Q2 の解説が「(A)(D)は誤り」とだけ書き、(B) `All utilities` に触れていない。電気・ネットが別である以上 (B) も明確に誤りなので一言加えると親切。
- `s4p3-01` の訳「バルブの出荷は15日以降になります」は `won't ship until the fifteenth`(=15日になる)よりも幅を持たせすぎ。「出荷は15日になります」が正確。
- `s4p3-01` の訳「分割出荷でよろしいでしょうか?」は `Would a partial shipment help?`(=分割出荷なら助かりますか)の含意がやや薄い。
- `s4p3-08` の訳で単位が揺れている:graphic は `8 rolls`/`at least twenty more` なのに訳は「8個」「20個」。図表訳の「8ロール」と合わせて「8ロール」「20ロール」にすると図表照合が明確になる。
- `s4p3-09` の `to hit the delivery date` は口語として通じるが、模試英文としては `to meet the delivery date` のほうが無難。
- `s4p3-05` の主題(暴風による屋根被害の保険請求)は災害寄りの題材。人的被害はなく TOEIC 的に許容範囲だが、気になるなら「水漏れ被害」等に置き換える余地はある。
- `s4p3-08` の男性の `We're running very low on one item, only eight left, over in aisle five.` は、品名を伏せるための作為がやや見える言い回し。`We're down to eight of one item over in aisle five.` 程度でも図表照合は成立する。
