VERDICT: ISSUES(3)

# セット4 Part 6 校閲所見(v2 / 差し替え後の版)

対象: `/workspace/toeic_test/data/set4/part6.js`(冒頭コメント「重複差し替え・正解位置均等化済み」)
※ 既存の `reviews/set4_part6.md` は差し替え前の別内容(サブスク更新/マーケット移転/本社移転/自己啓発費)に対する所見であり、現行ファイルとは対応していない。本レビューは現行の4文書(納期変更メール/スキャナー導入告知/農業雑誌創刊記事/団体健康保険の社内連絡)を対象とする。

## 必須要素チェック(観点 e / f)
- 4文書 × 4問 = 16問。id は `s4p6-01`〜`s4p6-04` で一意、各文書 num 1〜4。仕様どおり。
- 各文書に空所 [1][2][3][4] があり、文挿入問題を各1問(すべて num:3)含む。仕様充足。
- `node --check` 構文OK。
- 正解位置: Doc1 = A,A,D,B / Doc2 = A,D,C,B / Doc3 = B,B,C,A / Doc4 = C,D,C,D → A=4, B=4, C=4, D=4 で完全均等。偏りなし。
- 解説・訳の強調は『』のみ。Markdown の `**` の混入なし。
- 政治/宗教/事故等の不適切題材なし。TOEICの世界観に適合(観点 g)。

## 正解キーの妥当性(観点 b)
全16問を個別に検証。正解キーはすべて妥当で、複数正解・正解なしは検出されなかった。
- Doc1: However(逆接)/ dispatched(語彙)/ 文挿入 / additional(品詞)
- Doc2: replace(語彙)/ After using(接続)/ 文挿入 / mandatory(語彙)
- Doc3: would launch(時制の一致)/ as well as(群前置詞)/ 文挿入 / Other(限定詞)
- Doc4: follows(語彙)/ comprehensive(品詞)/ 文挿入 / processed(語彙)
全訳(translation)にも各文挿入問題の正解文がそのまま反映されており、キーと訳の整合は取れている。

## 中程度の問題

- [中] ISSUE-1(観点 c): 『文挿入問題4問すべてで、解説中の選択肢記号(A/B/C/D)が実際の選択肢の並びとずれている。』正解キー自体は正しいが、解説を読んだ学習者が別の選択肢を正解と誤解する。4問すべてで発生しており、系統的な誤り。
  - `s4p6-01` num:3 — 正解は index 3 =(D)"We deeply regret that this revised timeline may affect your production plans." だが、解説は「…詫びる(C)が自然」。→「(D)が自然」に修正。
  - `s4p6-02` num:3 — 正解は index 2 =(C)"To help staff become familiar with the new system, hands-on practice will be provided." だが、解説は「(D)が自然。閉鎖(A)、紙ログ継続(B)…スキャナー販売(C)は無関係」。実際の並びは A=紙ログ継続 / B=スキャナー販売 / C=正解 / D=永久閉鎖。→「(C)が自然。紙ログ継続(A)、スキャナー販売(B)は…永久閉鎖(D)は文書の趣旨と矛盾」に修正。
  - `s4p6-03` num:3 — 正解は index 2 =(C)"She added that the magazine would also include a seasonal planting calendar." だが、解説は「(A)が自然。新聞の廃刊(B)や事務所閉鎖(C)…チケット(D)」。実際は A=事務所閉鎖 / B=新聞廃刊 / C=正解 / D=チケット。→「(C)が自然。事務所閉鎖(A)や新聞の廃刊(B)は…チケット(D)は無関係」に修正。
  - `s4p6-04` num:3 — 正解は index 2 =(C)"To continue receiving coverage under the new plan, action is required from every employee." だが、解説は「(B)が自然。社員食堂(A)は無関係、引受会社の撤退(C)や『変更は不要』(D)」。実際は A=撤退 / B=社員食堂 / C=正解 / D=変更不要。→「(C)が自然。撤退(A)は文書の趣旨と矛盾、社員食堂(B)は無関係、『変更は不要』(D)は手続き要請と矛盾」に修正。
  - 参考: テンプレート `data/part6.js` の解説は選択肢記号を使わず内容で指示している。記号を全廃して内容参照に統一するのが最も安全。

- [中] ISSUE-2(観点 a: 事実矛盾): `s4p6-01` 本文「the shipment originally scheduled to arrive on August 10 will now be [2](dispatched)on August 17.」で、比較の基準が『到着(arrive)』と『発送(dispatch)』で食い違っている。冒頭で「生産完了にさらに1週間かかる」と述べているのに、8月10日=到着日 / 8月17日=発送日 とすると遅延は1週間を超えることになり、論理が合わない。さらに後段の「send a partial shipment of 2,000 units by the original date」も、original date が到着日か発送日か不明瞭になる。全訳も「当初8月10日到着予定だった出荷は、8月17日の発送に変更となります」と、この矛盾をそのまま引き継いでいる。
  - 修正案A(選択肢を変えない): 本文を "the shipment originally scheduled for dispatch on August 10 will now be dispatched on August 17" に直し、全訳も「当初8月10日発送予定だった出荷は、8月17日の発送となります」に揃える。
  - 修正案B: 本文の arrive を残し、選択肢を "delivered / returned / refunded / canceled" に変えて正解を delivered にする(解説も「配達される」に修正)。

- [中] ISSUE-3(重複・題材): `s4p6-01`(アルミ製ブラケット5,000個の注文、生産遅延、2,000個の分割出荷、組立ライン)が、同一セットの `data/set4/part7.js` の `s4p7-03`(アルミ製取付ブラケット5,000個の注文、リードタイム遅延、2,000個+3,000個の分割出荷、組立ライン)と、題材・数量・論点までほぼ同一のシナリオ(送り手と受け手を入れ替えただけ)になっている。社名・人名は異なるが、同一模試内で同じ場面が2度出るのは有料品質として不自然で、Part 7 側を先に解いた受験者に Part 6 の文脈が既視感で読めてしまう。
  - 修正案: Part 6 側の題材を差し替える(例: 業務用コーヒーマシン3,000台の納期変更、印刷用紙のロット遅延など)。少なくとも品目(aluminum brackets)と数量(5,000 / 2,000)は重複させない。

## (d) 答えの漏れ点検
- 各文書内で、ある設問の答えが他設問の本文・選択肢から直接推測できる箇所は検出されなかった。文挿入問題の正解文はいずれも他の3空所の答えを示唆していない。
- 参考(問題なしレベル): `s4p6-02` num:3 の誤答肢(A)"Paper logs will remain the primary method of record-keeping." は num:1 の正解 replace と矛盾する内容だが、誤答肢であるため答えの漏れにはならない。

## 軽微(修正不要・参考)
- 文挿入問題の位置が4文書すべて空所[3]に固定されている。本番は位置がばらけるため、1〜2文書は[1]や[4]に移すと自然。
- `s4p6-03` num:1 の解説が launched と has launched にしか言及せず、選択肢 launches(現在形)に触れていない。「報告動詞が過去形 announced のため現在形 launches も不可」と一言足すと親切。
- `s4p6-02` 本文は「全 warehouse associates がスキャナーを使用」としながら、研修の出席義務は "everyone working on the loading dock"(搬入口勤務者)に限定されている。対象範囲がやや不揃いだが、告知文としては成立しており正誤には影響しない。
- 英文のスペル・文法・語法は上記 ISSUE-2 を除き自然で誤りなし。日本語訳も各文書とも本文に忠実。
