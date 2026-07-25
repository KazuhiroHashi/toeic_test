# リスニング音声の作り方(完全手順)

> このページは iPhone でも読めます。ただし **コマンドの実行は Mac のターミナル** で行ってください。
> コードブロックの右上にコピーボタンが出るので、押してそのまま貼り付けられます。

## これは何をする作業か

リスニング音声を『録音ファイル(mp3)』として作り、アプリに同梱します。

やらなくてもアプリは動きます(端末の読み上げ機能で代用)。やると次が変わります。

- iPhone / Mac / Windows、**どの端末で開いても同じ声・同じ発音**になる
- 米・英・豪・加の4カ国の高品質ニューラル音声(本番と同じ構成)になる
- 端末に良い声が入っていない人でも聞き取りやすい

使うのは **edge-tts**(Microsoft のニューラル音声)。**完全無料・APIキー不要・課金設定なし**です。ChatGPT の契約や OpenAI API とは無関係なので、追加料金は一切かかりません。

**所要時間:**準備5分 + 生成30〜60分(放置でOK)。
**できるもの:**約1,928ファイル / 約160分 / 約56MB。

---

## 0. 前提

- **Mac で行ってください。**iPhone では実行できません(iPhone は完成後に開いて聞くだけ)。
- インターネット接続が必要です(社内プロキシ下だと失敗することがあります。自宅Wi-Fi推奨)。
- コマンドは **1行ずつコピペして Enter**。まとめて貼らないほうが、どこで失敗したか分かります。

---

## 1. ターミナルを開く

1. `command`(⌘)+ `スペース`
2. `ターミナル` と入力して `Enter`
3. 文字だけの窓が開きます。ここに以下を貼り付けていきます。

---

## 2. Python が入っているか確認する

```bash
python3 --version
```

`Python 3.9.6` のようにバージョンが出れば **OK**。次へ進んでください。

`command not found` と出た場合は次を実行し、画面の指示に従ってインストール(数分)。終わったらもう一度 `python3 --version` を試します。

```bash
xcode-select --install
```

---

## 3. 音声生成ツール(edge-tts)を入れる

```bash
pip3 install edge-tts
```

最後に `Successfully installed edge-tts-...` と出れば **OK**。

うまくいかないときは、下のうち該当するものを試してください(どれか1つ成功すればOK)。

| 出たメッセージ | 対処コマンド |
|---|---|
| `command not found: pip3` | `python3 -m pip install --user edge-tts` |
| `externally-managed-environment` | `pip3 install --user --break-system-packages edge-tts` |
| `Permission denied` | `pip3 install --user edge-tts` |

---

## 4. リポジトリを手元に用意する

**初回だけ**(まだ Mac に落としていない場合):

```bash
cd ~/Documents && git clone https://github.com/KazuhiroHashi/toeic_test.git && cd toeic_test
```

**2回目以降**(最新の問題を取り込む):

```bash
cd ~/Documents/toeic_test && git pull origin main
```

> 置き場所は `~/Documents` でなくてもかまいません。以降は **この `toeic_test` フォルダの中にいる状態** で実行します。今どこにいるか分からなくなったら `pwd` と打つと現在地が出ます。

---

## 5. 音声を生成する(ここが本番)

```bash
python3 tools/generate_audio.py
```

こう表示されて進みます。

```
1928 クリップを生成します(既存はスキップ)…
  431/1928  新規:431 スキップ:0 失敗:0
```

- **数字が増えていれば正常です。**30〜60分かかるので放置してください。
- 途中で止まっても、**もう一度まったく同じコマンド**を実行すれば続きから再開します。できているファイルは自動でスキップされるので、何度実行しても壊れません。
- Mac がスリープすると止まります。電源につないでおくと安心です。
- この待ち時間に、Part 1 の写真作りなど別の作業を進めるのが効率的です。

最後に `完了!` と出れば成功です。

### できたか確認する

```bash
find assets/audio -name '*.mp3' | wc -l
```

`1928` と出れば完璧です。少なければ、もう一度 手順5 のコマンドを実行してください。

### 試しに聞いてみる

1ファイルだけ(セット1・Part 1・1問目の導入ナレーション):

```bash
afplay assets/audio/s1/p1-01/0.mp3
```

「Look at the picture marked number 1 in your test book.」と聞こえれば成功です。

会話をまるごと(セット1・Part 3・1つ目。導入 → 会話 → 設問読み上げ):

```bash
cd assets/audio/s1/p3-01 && for f in $(ls *.mp3 | sort -n); do afplay "$f"; done; cd -
```

> **フォルダ名の決まり:**セット1は `p1-01` `p2-07` `p3-01` `p4-01` のようにセット番号が付きません。セット2〜6は `s2p1-01` のように頭にセット番号が付きます。
>
> `Error: AudioFileOpen failed ('wht?')` は「そのファイルが無い」という意味です(壊れているのではなくパスの打ち間違い)。どれでもいいから1つ鳴らすには:
>
> ```bash
> afplay "$(find assets/audio -name '0.mp3' | head -1)"
> ```

---

## 6. GitHub に上げる(これでアプリに反映される)

```bash
git add assets/audio && git commit -m "リスニング音声を追加" && git push origin main
```

- 約56MBあるので `git push` は数分かかることがあります。止まって見えても待ってください。
- 完了後にアプリを開くと、リスニングが録音音声で再生されます。
- 録音が無い問題は、これまで通り自動的に端末の合成音声にフォールバックします(設定は不要)。

---

## 使われる声(本番と同じ4カ国)

| 役割 | 国 | 男性 | 女性 |
|---|---|---|---|
| 会話・応答 | アメリカ | en-US-GuyNeural | en-US-JennyNeural |
| 会話・応答 | イギリス | en-GB-RyanNeural | en-GB-SoniaNeural |
| 会話・応答 | オーストラリア | en-AU-WilliamNeural | en-AU-NatashaNeural |
| 会話・応答 | カナダ | en-CA-LiamNeural | en-CA-ClaraNeural |
| ナレーター(問題番号・導入文・設問読み上げ) | アメリカ | — | en-US-MichelleNeural |

問題ごとに4カ国を順番にローテーションします。読み上げ速度は本番に合わせて標準より5%ゆっくりです(変えたい場合は `tools/generate_audio.py` の `RATE = "-5%"` を書き換えて再生成)。

**ナレーターは登場人物が誰も使わない専用の声にしています。**同じ声だと「会話していた人がそのまま設問を読み上げている」ように聞こえてしまうためです(`build_audio_manifest.js` に重複チェックを入れてあり、登場人物と同じ声を指定するとエラーで止まります)。

さらに、**ナレーターだけ読み上げ速度を -8% にして**います(登場人物は -5%)。声が近い相手がいても、話す速さが違えば「進行役」として耳が区別できます。

> **選ぶときの基準:**アクセントや性別より『年齢感』が効きます。登場人物は比較的若い声が多いので、ナレーターは年齢層が重ならない声を選ぶと明確に分かれます。

### ナレーターの声を変えたいとき

候補を聞き比べます(そのあと登場人物6声も続けて流れるので、年齢感が重なっていないものを選んでください)。

```bash
bash tools/preview_narrators.sh
```

気に入った声が決まったら、`tools/build_audio_manifest.js` の次の行を書き換えます。

```js
var NARRATOR = "en-US-MichelleNeural";
var NARRATOR_RATE = "-8%";   // さらに差をつけたいなら -12% など
var NARRATOR_PITCH = null;   // 例: "-5Hz"(低く) / "+5Hz"(高く)
```

そのあと、**ナレーション部分だけ**作り直します(会話の音声はそのまま残るので約15〜20分で終わります)。

```bash
node tools/build_audio_manifest.js
node tools/clean_narration.js
python3 tools/generate_audio.py
git add assets/audio && git commit -m "ナレーターの声を変更" && git push origin main
```

## 収録される内容(本番と同じ形式)

- **Part 1**:「Look at the picture marked number 1 in your test book.」→「A.」「B.」「C.」「D.」付きで4つの説明文
- **Part 2**:「Number 7.」→ 質問 →「A.」「B.」「C.」付きで3つの応答(質問と応答は別の話者)
- **Part 3/4**:「Questions 1 through 3 refer to the following conversation (with three speakers) (and 図表).」→ 会話/トーク → 設問読み上げ(各8秒ポーズ)

---

## 問題を追加・修正したとき

問題文や音声スクリプトを変えたら、**一覧(manifest)を作り直してから**生成し直します。

```bash
node tools/build_audio_manifest.js
python3 tools/generate_audio.py
git add assets/audio && git commit -m "音声を更新" && git push origin main
```

変わっていない問題はスキップされるので、追加分だけが数分で作られます。

**特定のセットを全部作り直したいとき**は、そのフォルダだけ消してから実行します(例:セット3)。

```bash
rm -rf assets/audio/s3
```

> ⚠️ `assets/audio/manifest.js` は消さないでください(アプリが読む索引ファイルです)。`rm -rf assets/audio` とフォルダごと消すのはNGです。

---

## 困ったとき

| 症状 | 原因と対処 |
|---|---|
| `edge-tts が見つかりません` と出る | 手順3をやり直す。`python3 -m pip install --user edge-tts` も試す |
| `No such file or directory: tools/generate_audio.py` | `toeic_test` フォルダの外にいる。`cd ~/Documents/toeic_test` してから再実行 |
| 途中で `失敗:12` などと出る | 通信が一時的に切れただけ。同じコマンドをもう一度実行すれば失敗分だけ作り直す |
| ずっと `0/1928` から進まない | ネット未接続、または社内プロキシでブロックされている。別回線(自宅Wi-Fi/テザリング)で試す |
| `git push` で `rejected` と出る | 先に `git pull origin main` してから、もう一度 push |
| アプリを開いても合成音声のまま | mp3 が push できていない。`find assets/audio -name '*.mp3' \| wc -l` が 1928 か確認し、`git status` で未コミットが無いか見る |
| 生成が遅すぎる | `tools/generate_audio.py` の `CONCURRENCY = 4` を `8` に上げる(上げすぎると拒否されます) |
| `afplay` で `AudioFileOpen failed ('wht?')` | ファイルが壊れているのではなく **そのパスが存在しない**。セット1のフォルダ名は `p1-01`(`s1p1-01` ではない)。`afplay "$(find assets/audio -name '0.mp3' \| head -1)"` なら確実に鳴ります |

---

## まとめ(コマンドだけ)

```bash
cd ~/Documents/toeic_test
git pull origin main
pip3 install edge-tts
python3 tools/generate_audio.py
find assets/audio -name '*.mp3' | wc -l      # 1928 になればOK
git add assets/audio && git commit -m "リスニング音声を追加" && git push origin main
```

---

## 記号(A.)と説明文のあいだが長いとき

edge-tts が作る mp3 には、前後に 0.2〜0.4 秒ほどの無音が焼き付いています。そのぶん、`LETTER_GAP` を 0 にしても間が残ります。これを詰めるには mp3 から無音を削ります(ffmpeg が必要)。

```bash
python3 tools/trim_silence.py --dry-run   # 対象を確認するだけ
python3 tools/trim_silence.py             # Part 1・2 だけ刈り取る(安全)
```

全パートを詰めたい場合は `--all` を付けます。ただし会話の行間も詰まるので、まずは既定(Part 1・2 のみ)で聞いてから判断してください。

- ffmpeg が無い場合:`brew install ffmpeg`(推奨)または `conda install -c conda-forge ffmpeg -y`
- Anaconda の ffmpeg は `Library not loaded: libfreetype.6.dylib` で壊れていることがあります。その場合は Homebrew 版を指定して実行してください:

```bash
brew install ffmpeg
FFMPEG=$(brew --prefix)/bin/ffmpeg python3 tools/trim_silence.py
```

- 一度処理したファイルは記録され、二重に刈り取られません
- 元に戻したいときは、対象の mp3 を削除して `python3 tools/generate_audio.py` を実行し直します
