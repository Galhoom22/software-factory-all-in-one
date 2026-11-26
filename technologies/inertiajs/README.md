# Inertia.js — technology pack

**Pinned slice for new work in this pack:** **Inertia.js 3.x** (released 2026-03-26; docs checked 2026-11-21).  
**Official home:** [Introduction](https://inertiajs.com/docs/v3/getting-started/index) · [Server-side setup](https://inertiajs.com/docs/v3/installation/server-side-setup) · [Client-side setup](https://inertiajs.com/docs/v3/installation/client-side-setup) · [Upgrade guide](https://inertiajs.com/docs/v3/getting-started/upgrade-guide)

**Laravel adapter requires:** PHP **8.2+**, Laravel **11+** (Packagist also lists Laravel 12/13).  
**Client adapters:** Vue 3 · React **19+** · Svelte **5+** · Vite plugin supports Vite **7/8**.

## When to open this pack

- Building a **server-driven SPA** (“modern monolith”) with controllers + page components and **no JSON API** for the UI.
- Choosing Inertia adapters (Laravel + React/Vue/Svelte) vs a separate SPA + API.
- Upgrading from Inertia 2 → 3 (Axios removed, config restructure, event renames).

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated v3 URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Inertia defaults |
| [`quality.md`](quality.md) | Clean Code + when Inertia vs SPA+API |
| [`inertiajs-v3/`](inertiajs-v3/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Inertia 3** apps (glue between server and client frameworks — not a replacement for either).
- Products that already chose **SPA ↔ HTTP API** (e.g. Next.js + Laravel API) must **not** silently switch to Inertia without an ADR — different architecture (no client routing / no API for pages).
- Open Laravel + the chosen client framework docs together; Tailwind/CSS packs still apply to presentation.

## Related

- Laravel: [`../laravel/`](../laravel/README.md)
- JavaScript / CSS / HTML packs for language/presentation
- Livewire / Filament: other Laravel UI styles — pick one product UI architecture deliberately

---
