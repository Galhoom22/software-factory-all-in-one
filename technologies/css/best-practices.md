# CSS — best practices (modern baseline)

Defaults for agents writing **CSS** under this pack. Grounded in [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and module guides. Slice: [`css-2026/`](css-2026/README.md).

## 1. Mental model

- CSS describes **presentation** of HTML/XML — not structure (HTML pack) or behavior (JS pack).
- There is **no CSS3/CSS4 product** — learn by **modules** (Color, Cascade, Flexbox, Grid, …) and the current [Snapshot](https://www.w3.org/TR/css-2026/).
- Prefer **external stylesheets** / build pipeline the product already uses over inline style soup.

## 2. Cascade and selectors

- Prefer low-specificity selectors; use **layers** (`@layer`) when the product’s architecture needs ordered origins.
- Prefer **custom properties** for shared tokens (color, space, type) over duplicated magic values.
- Prefer **`:is()` / `:where()` / `:has()`** when they clarify intent and the runtime floor allows.
- Do not fight the cascade with `!important` as a habit.

## 3. Layout

- Prefer **Flexbox** for one-dimensional UI alignment; **Grid** for two-dimensional page/region layout ([guides](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides)).
- Prefer **logical properties** (`margin-inline`, `padding-block`, `inset-inline-start`, …) for RTL/bilingual products.
- Prefer **`box-sizing: border-box`** as the product default (or framework reset) so sizing is predictable.
- Prefer modern layout over float-based page grids; floats remain for float content, not full page scaffolding.

## 4. Responsive and conditional CSS

- Prefer **media queries** for viewport/device conditions; prefer **container queries** when a component should adapt to its container ([containment](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment)).
- Prefer **`@supports`** for progressive enhancement of newer features.
- Prefer relative units (`rem`, `%`, `svh`/`dvh` when appropriate) over hard-coded px-only UIs when the product needs scaling.

## 5. Nesting and maintainability

- Prefer native **CSS nesting** when the bundler/runtime supports it and it keeps locality without deep selector towers ([nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)).
- Prefer short, intention-revealing class names (or utilities via Tailwind pack) — not `#app div div span`.

## 6. Motion and accessibility

- Prefer **`prefers-reduced-motion`** respects for non-essential animation.
- Prefer transitions/animations that clarify state — not decorative thrashing.
- Prefer sufficient contrast; color is not the only cue (product WCAG rules still win).

## 7. Tailwind / utility products

- If the product pins Tailwind, follow [`../tailwindcss/`](../tailwindcss/README.md) for authoring workflow.
- Still apply this pack for: cascade fights, logical/RTL correctness, invalid HTML+CSS combos, and when writing raw CSS/`@theme`/custom CSS.

## 8. What “professional” does **not** mean here

- Not shipping every CSS Snapshot module into the product.
- Not inventing a second design system beside the product’s tokens/Tailwind theme.
- Not using browser-prefixed hacks from 2012 when unprefixed properties are Baseline.

---
