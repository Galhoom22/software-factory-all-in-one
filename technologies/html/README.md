# HTML — technology pack

**Pinned slice for new work in this pack:** **HTML Living Standard** (WHATWG; docs checked 2026-11-21). HTML has **no version number** — “HTML5” is a buzzword for modern HTML + related APIs ([MDN Glossary: HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)).  
**Official home:** [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) · [Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) · [WHATWG HTML Living Standard](https://html.spec.whatwg.org/multipage/)

## When to open this pack

- Writing or reviewing **markup** (document structure, semantics, forms, media, accessibility-related elements).
- Choosing semantic elements vs `div`/`span` soup.
- Separating **HTML** (this pack) from **CSS** (Tailwind pack) and **JavaScript** (language pack / frameworks).

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated MDN + WHATWG URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern HTML defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + a11y in HTML form |
| [`html-living/`](html-living/README.md) | Living Standard slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **HTML Living Standard** authoring grounded in MDN + WHATWG.
- A product’s framework (Next.js, Blade, Livewire) may emit HTML — still follow these semantics and obsolete-feature bans.
- Presentation belongs in CSS; behavior belongs in JS/frameworks. Do not revive presentational tags.

## Related

- JavaScript: [`../javascript/`](../javascript/README.md)
- Tailwind / CSS: [`../tailwindcss/`](../tailwindcss/README.md)
- Alpine / Livewire / Filament: markup consumers — keep semantics here first
- Next.js: [`../nextjs/`](../nextjs/README.md)

---
