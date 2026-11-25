# Tailwind CSS — technology pack

**Pinned slice for new work in this pack:** **Tailwind CSS v4** (docs checked 2026-11-21).  
**Official home:** [Installation · Vite](https://tailwindcss.com/docs/installation/using-vite) · [Docs](https://tailwindcss.com/docs) · [Upgrade guide](https://tailwindcss.com/docs/upgrade-guide) · [Compatibility](https://tailwindcss.com/docs/compatibility)

## When to open this pack

- Any non-trivial **utility CSS** work (Vite/Next/Laravel Vite, `project-ui`, FE app).
- Choosing install path (Vite plugin vs PostCSS vs CLI).
- Migrating v3 → v4 or reviewing legacy `@tailwind` / `tailwind.config.js` setups.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated official URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Tailwind defaults |
| [`quality.md`](quality.md) | Clean Code + UI structure + when patterns earn keep |
| [`tailwindcss-v4/`](tailwindcss-v4/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Tailwind v4** setup and class usage.
- Product SRS / FE stack still owns the pin (the product SRS already pins Tailwind + its browser matrix).
- Never bump major CSS tooling silently — ADR + SRS/CI when product changes.

## Related

- Next.js pack: add when owner asks (`technologies/nextjs/`)
- Frontend day / CI: `08-IMPLEMENTATION-DAY.md`, `09-CI-CD.md`
