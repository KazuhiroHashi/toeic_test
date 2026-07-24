# リスニング音声の作り方(edge-tts)

端末の合成音声(iPhoneの読み上げ)は声が機械的で聞き取りにくいため、**Macで高品質な音声ファイル(mp3)を作ってアプリに同梱**する。こうすると、iPhoneでもAndroidでもPCでも全員が同じきれいな音声で聞ける。

使うのは **edge-tts**(Microsoftのニューラル音声)。**完全無料・APIキー不要・課金設定なし**。ChatGPTの契約やOpenAI APIとは無関係。

## Macでの手順(コピペで実行)

### 1. 準備(初回だけ)

```bash
pip3 install edge-tts
```

### 2. リポジトリを取得(初回だけ)

```bash
cd ~/Desktop
git clone https://github.com/KazuhiroHashi/toeic_test.git
cd toeic_test
```

※ すでに持っている場合は `cd ~/Desktop/toeic_test && git pull` で最新にする。

### 3. 音声を生成(これ1回で全部できる)

```bash
python3 tools/generate_audio.py
```

- 全1925クリップを順に生成する。所要時間の目安は**30〜60分**(ネット速度による)。
- 途中で止めても、もう一度実行すれば**続きから**再開する(既に作った分は飛ばす)。
- 生成先: `assets/audio/` フォルダ。

### 4. GitHubに反映

```bash
git add assets/audio
git commit -m "リスニング音声を追加"
git push
```

これで完了。アプリは**音声ファイルがあればそれを再生**し、無ければ従来通り端末の合成音声にフォールバックする。

## 使われる声(本番と同じ4カ国)

- `en-AU-NatashaNeural`
- `en-AU-WilliamNeural`
- `en-CA-ClaraNeural`
- `en-CA-LiamNeural`
- `en-GB-RyanNeural`
- `en-GB-SoniaNeural`
- `en-US-AriaNeural`
- `en-US-GuyNeural`
- `en-US-JennyNeural`

米・英・豪・加をローテーションし、問題ごとに違う話者が当たる。ナレーター(導入文・設問読み上げ)は別の声。

## 収録される内容(本番形式)

- Part 1: 「Look at the picture marked number N in your test book.」+ A.〜D. の4文
- Part 2: 「Number N.」+ 質問 + A.〜C. の3応答
- Part 3/4: 「Questions X through Y refer to the following ...」+ 会話/トーク + 設問読み上げ(各8秒ポーズ)

## 困ったとき

- `pip3: command not found` → Macに Python が入っていない。`brew install python3` か python.org からインストール。
- 途中でエラーが出た → もう一度 `python3 tools/generate_audio.py` を実行すれば続きから再開する。
- 音声を作り直したい → `rm -rf assets/audio/s1`(該当セットのフォルダ)を消してから再実行。
