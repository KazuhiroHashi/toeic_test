VERDICT: PASS

# set5 Part 3 校閲所見

対象: `/workspace/toeic_test/data/set5/part3.js`

## 総評
重大な問題なし。13会話×3問=39問、id は `s5p3-01`〜`s5p3-13` で一意。図表問題2(s5p3-08 schedule / s5p3-12 list、いずれも `Look at the graphic.` あり)、3人会話2(s5p3-05 女性2+男性1、s5p3-07 男性2+女性1、W2/M2 使用)、意図問題1(s5p3-09、`What does the man imply when he says, "..."?` 形式)と、パート必須要素をすべて満たす。正解キーはすべて妥当で、複数正解・正解なしは検出されず。英語は自然でスペル・文法・事実矛盾なし。解説・訳の強調は『』で統一、Markdownの `**` 不使用。政治/宗教/事故等の不適切題材なし。

## 正解位置の分布
A=10 / B=11 / C=9 / D=9。偏りなく良好。

## 答えの漏れ(観点d)チェック
各会話で「1設問だけ見て他がヒントにならないか」を確認。場所・目的・主題・業種の答え語が他設問の選択肢に露出する重大な漏れはなし。役割分担型(s5p3-05, s5p3-07)も各設問が独立して機能する。

## 軽微な指摘(修正必須ではない)
- s5p3-01 Q1: 選択肢が `Because she cannot connect remotely` と `To reset her password`/`To request new equipment`/`To schedule...` で、正解のみ `Because...`、他3つが `To...` と文型が不揃い。正解が「浮いて」見え、やや易化する。`To connect to the company network remotely` のように不定詞句へ揃えると本番の体裁に近い。正誤自体は問題なし。
- s5p3-03: Q1 の正解主題は「customer survey(調査の実施)」だが、Q3 の選択肢に `Send out the survey` があり "survey" の語が露出。答えを直接与えるほどではないが、主題語がやや漏れ気味。Q3 の distractor を `Distribute the questionnaire` 等に言い換えると独立性が高まる。
