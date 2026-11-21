# CSS — technology pack

**Pinned slice for new work in this pack:** **CSS as of Snapshot 2026** (W3C; docs checked 2026-11-21). There is **no CSS3/CSS4** — after CSS 2.1, CSS is modular; W3C publishes periodic snapshots of the stable set ([MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)).  
**Official home:** [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) · [CSS guides](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides) · [CSS Snapshot 2026](https://www.w3.org/TR/css-2026/)

## When to open this pack

- Writing or reviewing **stylesheet language** (cascade, selectors, layout, logical properties, queries, custom properties).
- Understanding what Tailwind/utilities compile to, or authoring plain CSS / `@layer` / nesting.
- Separating **CSS** (this pack) from **HTML** semantics and **JavaScript** behavior.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated MDN + W3C URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern CSS defaults |
| [`quality.md`](quality.md) | Clean Code + architecture in CSS form |
| [`css-2026/`](css-2026/README.md) | Snapshot/authoring slice: use / stop / common mistakes |

## Product vs pack

- This pack is **core CSS** judgment (MDN + W3C modules/snapshot).
- Products that use **Tailwind** still open [`../tailwindcss/`](../tailwindcss/README.md) for utility workflow — this pack covers cascade, layout models, logical props, and what not to revive from old CSS.
- Gate brand-new module features on the product’s browser floor (MDN Baseline/compat) — the Snapshot lists stable specs for implementers, not a guarantee every browser ships every feature.

## Related

- HTML: [`../html/`](../html/README.md)
- Tailwind: [`../tailwindcss/`](../tailwindcss/README.md)
- JavaScript: [`../javascript/`](../javascript/README.md)
- Next.js: add when the owner asks

---
