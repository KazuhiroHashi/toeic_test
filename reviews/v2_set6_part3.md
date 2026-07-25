VERDICT: ISSUES(8)

# set6 Part 3 校閲所見(v2)

対象: `/workspace/toeic_test/data/set6/part3.js`(監査のみ・未変更)

## 総評
形式要件はすべて満たしている。13会話×3問=39問、id は `s6p3-01`〜`s6p3-13` で一意。`node --check` 構文OK。図表問題2(s6p3-06 / s6p3-08、いずれも `graphic` + `graphicKind` + `Look at the graphic.` あり)、3人会話2(s6p3-05 女性2+男性1=W/W2/M、s6p3-07 男性2+女性1=W/M/M2)、意図問題1(s6p3-09、`What does the man imply when he says, "..."?` 形式)。各会話の発言数は5〜6で仕様(4〜6)内。正解位置は A=10 / B=10 / C=10 / D=9 で偏りなし。英語は全体に自然で、スペルミス・文法誤り・事実矛盾は検出されず。正解キーはすべて妥当で、複数正解・正解なしはなし。解説・訳の強調は『』で統一され、Markdownの `**` は不使用。政治/宗教/事故等の不適切題材なし。

一方で、観点(d)『答えの漏れ』に該当する箇所が複数あり、加えて会話の場面設定に重複がある。以下が中程度以上の指摘。

## 中程度以上の問題(8件)

### ISSUE-1 s6p3-09 主題語 "press release" が他設問の選択肢に露出【重大】
Q1「What does the woman want to send?」の正解が『A press release』だが、Q2(意図問題)の選択肢に `The release contains an error.`、`He opposes the merger.`、Q3の選択肢に `A press conference` があり、音声を聞かなくても Q1 が press release 系だと確定できる。仕様の「主題・目的の答えの語を他設問の選択肢に入れない」に直接抵触。
修正案:Q2 の `The release contains an error.` → `The document contains an error.`、`He opposes the merger.` → `He disagrees with the plan.`、Q3 の `A press conference` → `A staff briefing`。

### ISSUE-2 s6p3-05 主題「lunch menu」が他設問から復元できる【重大】
Q1「What are the speakers mainly discussing?」の正解『Adding a lunch menu』に対し、Q2 の選択肢に `Testing sandwich recipes` / `Redesigning the menu`、Q3 の選択肢に `Write up the recipes` / `Set the menu prices` が並ぶ。Q1 の他の選択肢(Renovating the café / Hiring more staff / Extending opening hours)は食事メニューと無関係なため、消去法だけで正解が出る。
修正案:Q1 を主題ではなく「What problem does Grace mention?(Sales are slow at midday)」に差し替えるか、Q3 の選択肢から `menu` / `recipes` の語を外す(例:`Prepare a cost estimate`)。

### ISSUE-3 s6p3-01 目的「loan」が他設問の設問文・選択肢に露出【重大】
Q1「Why is the man calling?」の正解『To apply for a business loan』に対し、Q2 の設問文がそのまま `What does the woman say about smaller loan applications?` と "loan applications" を含み、さらに Q3 の選択肢に `A loan agreement` がある。Q1 の他の選択肢(dispute a charge / close an account / report a lost card)はいずれも融資と無関係なので、Q2 の設問文を読むだけで Q1 が解ける。
修正案:Q2 を `What does the woman say about applications for smaller amounts?` ではなく `What does the woman say can be done online?` 等に変更し、Q3 の `A loan agreement` → `A signed contract` に差し替える。

### ISSUE-4 s6p3-13 目的「book tickets for a group」が他設問から復元できる【重大】
Q1「Why is the woman calling?」の正解『To book tickets for a group』に対し、Q2 の選択肢に `Group discounts`、Q3 の選択肢に `E-mail the tickets` があり、"group" と "tickets" の両方が他設問側に出ている。Q1 の他の選択肢(join a theater club / audition for a play / request a refund)は消去しやすく、実質的に無音で解ける。
修正案:Q2 の `Group discounts` → `Discount eligibility` ではなく、`Seating locations` 等に差し替え、Q3 の `E-mail the tickets` → `Send the reservations electronically` のように "tickets" 語を避ける。

### ISSUE-5 s6p3-10 問題点「road is closed」が他設問の選択肢に露出【重大】
Q1「What problem does the woman mention?」の正解『A road near the site is closed.』に対し、Q3 の選択肢に `Inspect the road` があり、Q1 の他の選択肢(order canceled / price increased / shipment damaged)には road 要素がないため、そこだけで特定できる。Q2 の正解『Delivering to a neighboring lot』も現場へのアクセス障害を示唆しており、漏れを補強している。
修正案:Q3 の `Inspect the road` → `Visit the site in person` など、road の語を含まない distractor に変更。

### ISSUE-6 s6p3-07 「board meeting」の board が他設問の選択肢に露出【中】
Q1「What will happen on Friday?」の正解『A board meeting』に対し、Q3 の選択肢に `Contact the board` がある。Q1 の他の選択肢(company dinner / training session / office audit)に board 要素がないため、語の一致だけで絞れる。
修正案:Q3 の `Contact the board` → `Contact the accounting team`。

### ISSUE-7 s6p3-12 目的「increase an order」が Q3 の正解から推測できる【中】
Q1「Why is the man calling?」の正解『To increase an order』に対し、Q3 の正解が『A bulk discount』(まとめ買い割引)であり、発注量を増やしたことが前提の語。加えて Q2 の設問文 `Why have the café's sales increased?` も増量の文脈を与える。Q1 の他の選択肢(late delivery / change a delivery day / cancel a contract)は割引と結びつかないため、実質的に消去法で解ける。
修正案:Q3 を `What does the woman say she will send?`(=an updated agreement)に差し替えるか、選択肢を `A volume-based rate` ではなく音声非依存で判別できない語に整える。

### ISSUE-8 会話の場面設定に重複が2組ある【中】
仕様の「場面を多様に(電話/来店/オフィス/交通/宿泊/店頭対応 等)」に対し、13会話中4会話が2組のほぼ同型シナリオになっている。
- s6p3-01(銀行への電話・法人向け融資の申し込み・必要書類)と s6p3-11(銀行窓口・法人当座預金口座の開設・必要書類)——どちらも「銀行 × 新規開業者 × 提出書類」の型。
- s6p3-06(コンサートホールへの電話・チケット購入・料金/取り置き)と s6p3-13(劇場への電話・チケット20枚の予約・割引/メール送付)——どちらも「公演会場への電話 × チケット予約 × 特典・受け取り方法」の型。

ファイル冒頭コメントに「重複差し替え・正解位置均等化済み」とあるが、この2組は残っている。宿泊・交通(空港/鉄道)・医療受付・IT サポート・不動産内見などへ差し替えると全体の場面バランスが改善する。

## 軽微な指摘(修正必須ではない)

- s6p3-02 Q1: 正解『A cookbook author』に対し Q3 の選択肢に `Reschedule the book signing` があり "book" が露出。ただし Q1 の distractor に `A travel writer` があり著者系が2つあるため、答えの確定には至らない。気になるなら `Reschedule the afternoon event` に。
- s6p3-06 Q1: 選択肢が `$45 / $55 / $70 / $90` で、`$45` は図表に存在しない金額。本番の図表問題は原則すべて図表上の値を並べる。図表の Balcony が左右とも $55 で値が重複しているのが原因なので、Balcony Right を `$50` 等にして4値をユニークにすると、全選択肢を図表由来にできる。
- s6p3-08 音声: 「bring it back up to at least fifteen to match our best seller」——図表で15点あるのは XL(最多在庫)であり、「最も売れている=在庫が最も多い」はやや直感に反する。「to match the level we keep for Extra Large」のように在庫水準に言及する言い回しの方が矛盾がない。
- s6p3-06 / s6p3-08: 図表2問がいずれも `graphicKind: "list"`。仕様は `list`/`schedule`/`invoice`/`agenda` から選べるので、片方を `schedule`(公演スケジュール表)等にすると図表タイプの多様性が出る(set5 は schedule + list)。
- s6p3-07 音声: `I kept all the receipts if we need to justify the costs.` は `I've kept all the receipts in case we need to justify the costs.` の方が自然。
- s6p3-02 訳: 「こちらへは心配いりません」がやや不自然。原文 `don't worry about getting here` に合わせて「こちらまでの移動はご心配なく」が適切。
- s6p3-01 訳: 「5万ドル未満のご融資でしたらオンラインでお申し込みいただけ、通常3営業日以内に……」の「いただけ、」がやや硬い。「お申し込みいただけます。通常は……」と文を切ると読みやすい。
