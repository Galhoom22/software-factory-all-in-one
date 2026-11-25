"""Render a crisp, looping README hero GIF (terminal route demo). Forever-generic."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[1] / "assets" / "software-factory-hero.gif"
W, H = 960, 540

BG = (11, 15, 25)
PANEL = (17, 24, 39)
BORDER = (36, 48, 72)
TEXT = (226, 232, 240)
DIM = (100, 116, 139)
CYAN = (56, 189, 248)
GREEN = (52, 211, 153)
BLUE = (96, 165, 250)
PILL_BG = (6, 78, 59)
PILL_FG = (167, 243, 208)
FOOTER = (15, 23, 42)
BOX = (30, 41, 59)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        r"C:\Windows\Fonts\consola.ttf",
        r"C:\Windows\Fonts\CascadiaMono.ttf",
        r"C:\Windows\Fonts\lucon.ttf",
        r"C:\Windows\Fonts\cour.ttf",
    ]
    if bold:
        candidates = [
            r"C:\Windows\Fonts\consolab.ttf",
            r"C:\Windows\Fonts\CascadiaMono.ttf",
            *candidates,
        ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


F_SM = font(15)
F_MD = font(17)
F_LG = font(18)
F_BOLD = font(17, bold=True)


def round_rect(draw: ImageDraw.ImageDraw, xy, radius: int, fill, outline=None, width: int = 1):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_chrome(draw: ImageDraw.ImageDraw):
    round_rect(draw, (24, 24, W - 24, H - 24), 18, PANEL, BORDER, 2)
    # title bar
    round_rect(draw, (24, 24, W - 24, 72), 18, (22, 30, 46), None)
    draw.rectangle((24, 54, W - 24, 72), fill=(22, 30, 46))
    for i, color in enumerate([(239, 68, 68), (245, 158, 11), (34, 197, 94)]):
        x = 48 + i * 22
        draw.ellipse((x, 40, x + 12, 52), fill=color)
    draw.text((90, 38), "software-factory — v1.0.0 · MIT · all-in-one", fill=DIM, font=F_SM)
    # dry_run pill
    pill = "dry_run: false"
    tw = draw.textlength(pill, font=F_SM)
    px1, py1, px2, py2 = W - 56 - tw - 24, 36, W - 48, 58
    round_rect(draw, (px1, py1, px2, py2), 10, PILL_BG, None)
    draw.text((px1 + 12, 39), pill, fill=PILL_FG, font=F_SM)


def draw_footer(draw: ImageDraw.ImageDraw, active: int):
    y1, y2 = H - 88, H - 24
    draw.rectangle((24, y1, W - 24, y2), fill=FOOTER)
    draw.line((24, y1, W - 24, y1), fill=BORDER)
    draw.text((48, y1 + 22), "Software Factory All-in-One · Forever Generic · Open Source", fill=DIM, font=F_SM)
    pills = [("1/3 Intake", 0), ("2/3 Plan", 1), ("3/3 Ship", 2)]
    x = W - 420
    for label, idx in pills:
        on = idx == active
        done = idx < active
        fill = (30, 58, 138) if on else ((20, 83, 45) if done else (30, 41, 59))
        fg = CYAN if on else (GREEN if done else DIM)
        tw = draw.textlength(label, font=F_SM)
        round_rect(draw, (x, y1 + 16, x + tw + 28, y1 + 42), 10, fill, None)
        dot = "● " if (on or done) else "○ "
        draw.text((x + 10, y1 + 20), dot + label, fill=fg, font=F_SM)
        x += tw + 40
    # progress bar
    bar_y = y1 - 10
    draw.rectangle((48, bar_y, W - 48, bar_y + 4), fill=(30, 41, 59))
    progress = [0.22, 0.58, 0.96][active]
    draw.rectangle((48, bar_y, 48 + int((W - 96) * progress), bar_y + 4), fill=CYAN)


def draw_lines(draw: ImageDraw.ImageDraw, lines: list[tuple[str, tuple[int, int, int]]], start_y: int = 100):
    y = start_y
    for text, color in lines:
        draw.text((56, y), text, fill=color, font=F_MD)
        y += 28
    return y


def frame(stage: int) -> Image.Image:
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)
    draw_chrome(draw)

    cmd = '$ factory start "new product from requirements"'
    lines: list[tuple[str, tuple[int, int, int]]] = [(cmd, TEXT)]

    if stage == 0:
        lines.append(("▌", CYAN))
    elif stage == 1:
        lines.extend(
            [
                ("", TEXT),
                ("[✓]  Matched Intent: plan-product", GREEN),
                ("[i]  Minimal rails: 00-USAGE · 01-STEPS · 02-DELIVERY · 08-DAY", BLUE),
                ("[i]  Workflow: software-factory-all-in-one/00-USAGE.md", BLUE),
                ("[i]  Readiness: requirements-driven (my-project-requirements.md)", GREEN),
            ]
        )
    else:
        lines.extend(
            [
                ("", TEXT),
                ("[✓]  Matched Intent: plan-product", GREEN),
                ("[i]  Minimal rails: 00-USAGE · 01-STEPS · 07-judgment · 09-CI-CD", BLUE),
                ("[i]  Craft packs: technologies/ + agents/ + coverage/", BLUE),
                ("[i]  Outputs: requirements.md · docs/ · AGENTS.md · project-ui/", BLUE),
                ("[i]  Readiness: forever-generic templates ready", GREEN),
            ]
        )

    y = draw_lines(draw, lines)
    if stage >= 1:
        box_top = y + 18
        round_rect(draw, (48, box_top, W - 48, box_top + 52), 10, BOX, BORDER, 1)
        msg = (
            "PROGRESSIVE DISCLOSURE · Loads 4 method docs first — minimal tokens, zero bloat"
            if stage == 1
            else "PROGRESSIVE DISCLOSURE · Craft atlas + day loop + CI gates in one kit"
        )
        draw.text((64, box_top + 16), msg, fill=CYAN, font=F_SM)

    draw_footer(draw, active=stage)
    return img


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    frames = [frame(0), frame(1), frame(2)]
    # slight hold on final
    frames.append(frame(2))
    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=[1100, 1800, 2200, 1600],
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"wrote {OUT} bytes={OUT.stat().st_size}")


if __name__ == "__main__":
    main()
