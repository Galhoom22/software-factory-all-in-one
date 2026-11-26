# Tailwind CSS v4 — stop using these

Sources: [upgrade guide](https://tailwindcss.com/docs/upgrade-guide), [compatibility](https://tailwindcss.com/docs/compatibility).

**Rule for agents:** do not introduce the left column in new code. When touching old templates, migrate in the same change if cheap (or run `@tailwindcss/upgrade`).

## Removed / replaced install

| Stop using | Use instead |
|------------|-------------|
| `@tailwind base;` / `components;` / `utilities;` | `@import "tailwindcss";` |
| `tailwindcss` as the PostCSS plugin (v3) | `@tailwindcss/postcss` |
| `postcss-import` + `autoprefixer` “because Tailwind” | Drop — v4 bundles imports / prefixes |
| Old `npx tailwindcss` CLI as the v4 build | `@tailwindcss/cli` |
| New greenfield `tailwind.config.js` as the main theme home | `@theme` in CSS (JS config only if a documented escape hatch is required) |

## Removed deprecated utilities

| Stop using | Use instead |
|------------|-------------|
| `bg-opacity-*`, `text-opacity-*`, `border-opacity-*`, … | `bg-black/50`, `text-black/50`, … |
| `flex-shrink-*` / `flex-grow-*` | `shrink-*` / `grow-*` |
| `overflow-ellipsis` | `text-ellipsis` |
| `decoration-slice` / `decoration-clone` | `box-decoration-slice` / `box-decoration-clone` |

## Renamed utilities (write the v4 names)

| v3 | v4 |
|----|----|
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `drop-shadow-sm` / `drop-shadow` | `drop-shadow-xs` / `drop-shadow-sm` |
| `blur-sm` / `blur` | `blur-xs` / `blur-sm` |
| `rounded-sm` / `rounded` | `rounded-xs` / `rounded-sm` |
| `outline-none` | `outline-hidden` (a11y: know the difference) |
| `ring` (default width) | `ring-3` (see upgrade guide for ring scale) |

Always re-check the full rename table on the [upgrade guide](https://tailwindcss.com/docs/upgrade-guide) — do not memorize from chat.

## Tooling anti-patterns

| Stop using | Why |
|------------|-----|
| Sass / Less / Stylus **with** Tailwind v4 | Officially unsupported workflow — Tailwind is the preprocessor |
| Heavy CSS Modules + `@apply` without `@reference` | Slow builds; broken theme context |
| Play CDN for production apps | Dev/demo only |
