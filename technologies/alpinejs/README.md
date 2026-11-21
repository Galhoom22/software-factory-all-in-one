# Alpine.js — technology pack

**Pinned slice for new work in this pack:** **Alpine.js 3.x** (npm latest checked **3.17.5**, 2026-11-21).  
**Official home:** [Start Here](https://alpinejs.dev/start-here) · [Installation](https://alpinejs.dev/essentials/installation) · [Docs](https://alpinejs.dev/)

## When to open this pack

- Sprinkling **small interactive UI** into server-rendered HTML (Laravel Blade, static pages, marketing).
- Choosing CDN vs npm module install.
- Reviewing directives (`x-data`, `@click`, `x-show`, `x-model`, `x-for`, …) or anti-patterns vs a full SPA framework.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated official URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Alpine defaults |
| [`quality.md`](quality.md) | Clean Code + when Alpine vs React/Next |
| [`alpinejs-v3/`](alpinejs-v3/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Alpine 3** usage.
- Product SRS owns whether Alpine is allowed at all (MasarHub FE is Next.js — do **not** add Alpine there without an ADR).
- Prefer Alpine for light progressive enhancement; do not rebuild an SPA in directives.

## Related

- Tailwind pack: [`../tailwindcss/`](../tailwindcss/README.md) (often paired)
- Next.js pack: add when owner asks (`technologies/nextjs/`)
