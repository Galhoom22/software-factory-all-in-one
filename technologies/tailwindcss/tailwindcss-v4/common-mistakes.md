# Tailwind CSS v4 — common mistakes

## Install / config

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Keeping `@tailwind base/components/utilities` on v4 | Styles missing / broken build | `@import "tailwindcss";` |
| Vite app still on PostCSS Tailwind only | Slower / awkward DX | Migrate to `@tailwindcss/vite` |
| Leaving `autoprefixer` + `postcss-import` “just in case” | Redundant, confusing | Remove when on v4 PostCSS/Vite paths |
| New `tailwind.config.js` + empty CSS theme | Split brain; fights CSS-first model | Prefer `@theme` |
| Claiming “Done on Tailwind 4” while browsers NFR still target Firefox &lt; 128 | Visual/CSS features break | Align SRS browser matrix (match the product SRS browser matrix) |

## Authoring

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using `bg-opacity-50` from old muscle memory | Class does nothing / removed | `bg-black/50` |
| Copy-pasting v3 `shadow-sm` expecting same look | Visual regression (scale renamed) | Use v4 names; visual QA |
| `@apply` inside CSS modules without `@reference` | Theme utilities missing | `@reference` global CSS, or use `var(--color-…)` |
| Nesting Sass under Tailwind | Unsupported; painful builds | Plain CSS + `@import` + `@theme` |
| Huge `@apply` blocks to “look like BEM” | Second CSS framework | Components + utilities |

## Agent / CI habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing utility renames | Wrong classes ship | Open upgrade guide / this pack slice |
| Upgrading FE CSS major without SRS/CI | Prototype vs app drift | ADR + pin + Actions |
| Treating Play CDN snippets as production setup | No purge/build pipeline | Vite/PostCSS/CLI install docs |
