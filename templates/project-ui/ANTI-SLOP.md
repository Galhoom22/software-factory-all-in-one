# Anti-slop — {{PRODUCT}}

Distilled **anti-slop** rules for product UI. Visual authority stays with `DESIGN.md` and the locked tokens. Do **not** install external taste / landing packs as always-on authority.

## Locked dials (set once per product)

| Surface | Variance | Motion | Density | Notes |
|---------|----------|--------|---------|-------|
| Core product UI | low–medium | low | product-appropriate | Prefer calm operable screens |
| Marketing / landing only | medium | low–medium | lower | Persuade without rewriting the product look |

If an external skill suggests high variance / cinematic motion on operable screens: **ignore it** — the lock above wins.

## AI tells — banned in the product

- Generic AI purple/pink gradients, dark mesh, glassmorphism, neumorphism, six white bento boxes
- Replacing locked fonts with Inter / Geist / Outfit / display serif “because the skill said so”
- Uppercase eyebrow spam above every section
- Scroll-magnetic / parallax / spring on every card / infinite pulse
- Fake foreign names and companies when the market expects local context
- English marketing clichés: Elevate · Seamless · Unleash · Next-Gen · Game-changer · Delve
- `Lorem ipsum` · `Oops!` · `window.alert` · buttons pointing to empty `#`
- Emoji as UI icons

## Anti-slop that fits Operate

| Do | Don't |
|----|-------|
| Audit → fix inside locked tokens | Rewrite the stack for a marketing look |
| Visible focus; light hover/active | No focus / pointless instant transitions |
| Content-shaped empty/loading states | Spinner in an empty middle; silent blank |
| Clear current nav | Dead links |
| Motion via transform/opacity if needed | Animating layout properties casually |
| Semantic HTML; tokenized z-index | Div soup; `z-index: 9999` |
| Organic fictional data | Fake round vanity numbers |

## With the pre-delivery checklist

Before closing a screen: `PRE-DELIVERY-UX.md` **and** this scan. Log owner-reported defects in `DESIGN-ERRORS.md`.
