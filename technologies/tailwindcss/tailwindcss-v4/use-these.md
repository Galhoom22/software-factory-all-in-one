# Tailwind CSS v4 — prefer these

Sources: [Vite install](https://tailwindcss.com/docs/installation/using-vite), [upgrade](https://tailwindcss.com/docs/upgrade-guide), [compatibility](https://tailwindcss.com/docs/compatibility).

## Install / build

| Prefer | Instead of | Why |
|--------|------------|-----|
| **`@tailwindcss/vite`** + `plugins: [tailwindcss()]` | PostCSS-only Tailwind on a Vite app | Official seamless path; better DX/perf |
| **`@import "tailwindcss";`** in CSS | `@tailwind base/components/utilities` | v4 entry |
| **`@theme { … }`** for tokens | New JS `tailwind.config.*` for greenfield | CSS-first configuration |
| **`@tailwindcss/postcss`** when stuck on PostCSS | `tailwindcss` as PostCSS plugin (v3 shape) | Dedicated package in v4 |
| **`@tailwindcss/cli`** for CLI builds | Old `npx tailwindcss` v3 CLI | Dedicated package in v4 |
| **`npx @tailwindcss/upgrade`** for migrations | Hand-rewriting everything first | Automates most v3→v4 edits (Node 20+) |

## Canonical Vite setup (official)

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

```css
@import "tailwindcss";
```

## Authoring

| Prefer | Notes |
|--------|-------|
| Utilities in markup / components | Zero-runtime; scan class names |
| Opacity modifiers (`bg-black/50`) | Replaces `*-opacity-*` |
| Theme CSS variables (`var(--color-…)`) when leaving utilities | Especially instead of `@apply` in CSS modules |
| Modern browser baseline | Chrome 111+, Safari 16.4+, Firefox 128+ |

## Still prefer (general)

- Mobile-first responsive prefixes (`sm:`, `md:`, …) as the product design system already does
- Explicit focus-visible / reduced-motion consideration for interactive UI (a11y bar stays on)
