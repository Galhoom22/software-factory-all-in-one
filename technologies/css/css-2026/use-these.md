# CSS 2026 — prefer these

Sources: [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [Guides](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides), [Snapshot 2026](https://www.w3.org/TR/css-2026/).

## Cascade & tokens

| Prefer | Notes |
|--------|-------|
| Custom properties (`--token`) + `var()` | Shared design tokens |
| `@layer` when origins need order | Predictable cascade in large apps |
| Low specificity | Easier overrides without `!important` |
| `:is()` / `:where()` / `:has()` (when Baseline) | Clearer selectors |

## Layout

| Prefer | Notes |
|--------|-------|
| Flexbox | 1D alignment / UI rows & columns |
| Grid | 2D regions / page structure |
| Gap properties | Spacing between flex/grid/multi-col items |
| Logical properties | RTL/bilingual: `margin-inline`, `padding-block`, `inset-*`, `border-inline-start`, … |
| `box-sizing: border-box` (product default) | Predictable width math |
| MDN layout cookbook patterns | Start from proven recipes |

## Responsive / conditional

| Prefer | Notes |
|--------|-------|
| `@media` | Viewport / preference queries |
| Container queries | Component adapts to container |
| `@supports` | Progressive enhancement |
| `prefers-reduced-motion` / `prefers-color-scheme` | Respect user settings |

## Modern authoring

| Prefer | Notes |
|--------|-------|
| Native nesting (when supported) | Locality without deep towers |
| Modern color (`oklch`, `color-mix()`, …) when Baseline | Better gamut / mixing — gate on floor |
| `clamp()` / fluid type carefully | Responsive type without many breakpoints |

## With Tailwind products

| Prefer | Notes |
|--------|-------|
| Tailwind pack workflow | Utilities / `@theme` / Vite plugin |
| This pack for raw CSS islands | Cascade, logical props, queries |

---
