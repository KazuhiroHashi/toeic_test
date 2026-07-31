#!/usr/bin/env python3
"""App Store 用のアイコンを作る。

    python3 tools/make_app_icon.py

出力: assets/appicon/icon-1024.png(App Store 提出用の原寸)
      assets/appicon/preview-60.png / -120.png(小さく見たときの確認用)

意匠はマークシートの解答欄。試験アプリだと一目で分かり、
どの企業の商標にも触れない。ETS の商標は一切使わない。
"""
from PIL import Image, ImageDraw
import os

S = 1024
INK = (22, 32, 43)        # 濃紺。起動画面の背景と同じ #16202b
PAPER = (243, 244, 246)   # 解答用紙の白
MARK = (94, 164, 180)     # 塗りつぶした解答。アプリの差し色

os.makedirs("assets/appicon", exist_ok=True)

im = Image.new("RGB", (S, S), INK)
d = ImageDraw.Draw(im)

# 白い解答用紙を置き、その上に丸を並べる。
# 縦長だと数字の 0 に見えてしまうので、必ず『正円』にする。
card = [int(S * 0.16), int(S * 0.20), int(S * 0.84), int(S * 0.80)]
d.rounded_rectangle(card, radius=int(S * 0.055), fill=PAPER)

cols, rows = 3, 2
dia = int(S * 0.135)                      # 丸の直径(正円)
gx = int(S * 0.075)                       # 横の間隔
gy = int(S * 0.085)                       # 縦の間隔
tw = cols * dia + (cols - 1) * gx
th = rows * dia + (rows - 1) * gy
cx = (card[0] + card[2] - tw) // 2
cy = (card[1] + card[3] - th) // 2

# 1行目の2番目と、2行目の1番目を塗る(解答済みの行と未解答の行)
filled = {(0, 1), (1, 0)}
for r_i in range(rows):
    for c_i in range(cols):
        x = cx + c_i * (dia + gx)
        y = cy + r_i * (dia + gy)
        box = [x, y, x + dia, y + dia]
        if (r_i, c_i) in filled:
            d.ellipse(box, fill=MARK)
        else:
            d.ellipse(box, outline=INK, width=int(S * 0.020))

im.save("assets/appicon/icon-1024.png")

# 小さく表示したときに潰れないかの確認用
for px in (60, 120, 180):
    im.resize((px, px), Image.LANCZOS).save(f"assets/appicon/preview-{px}.png")

print("assets/appicon/icon-1024.png を作りました")
print("小さいときの見え方: assets/appicon/preview-60.png / -120.png / -180.png")
