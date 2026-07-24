VERDICT: PASS

# セット3 Part 4 校閲所見

対象: `/workspace/toeic_test/data/set3/part4.js`
点検日: 2026-07-24

## 総評
10トーク×3問=30問、id `s3p4-01`〜`-10` で一意。構文チェック `node --check` 合格。英語は自然で文法・スペル誤りなし。日本語訳・解説は正確で、強調は『』のみ使用(Markdown `**` の混入なし)。図表問題2つ、答えの漏れなし。重大〜中程度の問題は検出されず PASS とする。以下は軽微な指摘のみ。

## パート必須要素(e)
- 10トーク・各3問=30問 ✓
- 各トークに `kind` あり ✓(telephone message×2、announcement×2、advertisement、broadcast、tour information、excerpt from a meeting、speech、talk。多様性良好)
- 図表問題2つ:`s3p4-06`(graphicKind: list / 各設問1つが `Look at the graphic.`)、`s3p4-09`(graphicKind: schedule / 同)✓

## 正解位置の分布(f)
A=7, B=7, C=8, D=8(計30)。偏りなく良好。id一意性 ✓。

## 図表と音声の整合(b/d)
- s3p4-06: graphic は Jan150/Feb290/Mar470/Apr220。音声は「3か月連続で伸び過去最高→最後の月に落ちた」と月名を言わない。最大470=March=正解C。音声・図表の両方が必要で適切。
- s3p4-09: graphic は 10:00/11:00/13:00/14:00。音声は「1時(13:00)のセッションが30分遅れ」とだけ述べ名称は言わない。13:00=Stress Management=正解C。適切。

## 答えの漏れ点検(d)【最重要】
全10トークについて、ある設問の答えが他設問の文・選択肢から推測できないか確認。目的・主題・場所・業種を問う設問(s3p4-01 目的、s3p4-03/04 主題、s3p4-05 場所、s3p4-07 行事、s3p4-08 話者)いずれも、他設問の選択肢に正解語が混入していない。漏れなし。

## 内部整合(a)
- s3p4-02: 「Mon June 2 〜 Fri June 6、再開 Sat June 7」は曜日と日付が内部整合。
- 電話番号: s3p4-01 「555-0172」、s3p4-10 「555-0139」いずれも読み上げ(five five five, ...)と訳が一致。

## 軽微な指摘(修正必須ではない)
- id s3p4-04 第2問「What is free for riders?」正解C「The first thirty minutes」。ひっかけA「The mobile app」について、解説に『アプリ自体も無料だが問われているのは乗車』とある。ただし音声は "download the GreenWheel app" と言うのみでアプリが無料とは明言していない。正解は音声で明示された「最初の30分」のみで一意であり問題はないが、解説の「アプリ自体も無料」という断定は本文に根拠がなく、やや踏み込みすぎ。解説から当該一文を削るか『アプリは料金の言及がなく、明示的に無料と述べられるのは乗車の最初の30分』とする方が正確。
