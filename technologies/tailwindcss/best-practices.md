# Tailwind CSS — best practices

Sources: [Vite install](https://tailwindcss.com/docs/installation/using-vite), [upgrade](https://tailwindcss.com/docs/upgrade-guide), [compatibility](https://tailwindcss.com/docs/compatibility). Re-check official docs before non-trivial CSS work (D-66).

## Install defaults (v4)

1. **Vite apps:** `npm install tailwindcss @tailwindcss/vite` → register `tailwindcss()` in `vite.config` → `@import "tailwindcss";` in the app CSS. Prefer the **Vite plugin** over PostCSS when Vite is already the bundler.
2. **Non-Vite PostCSS:** use `@tailwindcss/postcss` (not the old `tailwindcss` PostCSS plugin entry). Drop `postcss-import` and `autoprefixer` — v4 handles imports/prefixes.
3. **CLI-only:** use `@tailwindcss/cli`, not the old `npx tailwindcss` binary shape from v3.

## Authoring

- Prefer **utilities in markup** (or className maps) over large custom CSS and over heavy `@apply`.
- Put design tokens in **`@theme { … }`** next to `@import "tailwindcss"` (CSS-first config). Avoid new `tailwind.config.js` for greenfield v4.
- Use **opacity modifiers** (`bg-black/50`) — never `*-opacity-*`.
- Prefer **logical / responsive** utilities the product already uses (RTL products: logical properties / `ms`/`me` patterns from the FE design system).
- Do **not** stack Sass/Less/Stylus with Tailwind v4 — Tailwind is the preprocessor ([compatibility](https://tailwindcss.com/docs/compatibility)).
- Avoid CSS Modules / scoped `<style>` blocks when you can; they force Tailwind to run per-file and need `@reference` for `@apply`. Prefer utilities or CSS variables from the global theme.

## Upgrade discipline

- Use `npx @tailwindcss/upgrade` on a branch (Node 20+), then review the diff and test in browsers that match the product NFR (v4 needs modern browsers — Firefox **128+**, Chrome 111+, Safari 16.4+).
- If the product must support older browsers, stay on **v3.4** until NFRs change — do not half-upgrade.

## Product UI

- Follow the product’s `DESIGN.md` / design tokens; do not invent a second palette in `@theme` that fights the brand.
- Prototype (`project-ui`) and FE app should stay on the **same major** Tailwind line as SRS.
