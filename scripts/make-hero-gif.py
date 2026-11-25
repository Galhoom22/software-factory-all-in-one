"""Build README hero GIF from generated terminal frames."""
from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("NEED_PILLOW", file=sys.stderr)
    sys.exit(2)

ASSETS = Path(r"C:\Users\Galhoom\.cursor\projects\e-reda-Job-Project\assets")
OUT_DIR = Path(__file__).resolve().parents[1] / "assets"
OUT = OUT_DIR / "software-factory-hero.gif"

frames_src = [
    ASSETS / "sfaio-hero-frame1.jpg",
    ASSETS / "sfaio-hero-frame2.jpg",
    ASSETS / "sfaio-hero-frame3.jpg",
]

for p in frames_src:
    if not p.exists():
        print(f"missing {p}", file=sys.stderr)
        sys.exit(1)

OUT_DIR.mkdir(parents=True, exist_ok=True)

# Target width for GitHub README (keeps file size reasonable)
TARGET_W = 960
images = []
for p in frames_src:
    im = Image.open(p).convert("RGB")
    w, h = im.size
    if w > TARGET_W:
        nh = int(h * TARGET_W / w)
        im = im.resize((TARGET_W, nh), Image.Resampling.LANCZOS)
    images.append(im)

# Hold first briefly, then route, then final longer (loop)
durations = [900, 1600, 2800]
images[0].save(
    OUT,
    save_all=True,
    append_images=images[1:],
    duration=durations,
    loop=0,
    optimize=True,
    disposal=2,
)
print(f"wrote {OUT} bytes={OUT.stat().st_size}")
