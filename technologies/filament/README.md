# Filament — technology pack

**Pinned slice for new work in this pack:** **Filament 5.x** (docs checked 2026-11-21).  
**Official home:** [Getting started](https://filamentphp.com/docs/5.x/getting-started) · [Installation](https://filamentphp.com/docs/5.x/introduction/installation) · [Docs 5.x](https://filamentphp.com/docs/5.x)

**Requires:** PHP **8.2+**, Laravel **v11.28+**, Tailwind CSS **v4.1+** (prefer product pins when higher).

## When to open this pack

- Building a **Laravel admin / panel** (CRUD resources, widgets, custom pages).
- Choosing **panel builder** vs using Filament **components** inside existing Blade.
- Wiring Resources / Widgets / custom pages (all Livewire-powered).

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated 5.x URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Filament defaults |
| [`quality.md`](quality.md) | Clean Code + when Filament vs Next/API |
| [`filament-5/`](filament-5/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Filament 5** panels/components.
- If the product UI is **Next.js ↔ Laravel API**, do **not** make Filament the primary app shell without an ADR. Filament may still fit a **separate admin** panel if the team decides so in planning.
- Open Laravel + Livewire + Tailwind packs together when implementing.

## Related

- Laravel: [`../laravel/`](../laravel/README.md)
- Livewire: [`../livewire/`](../livewire/README.md)
- Alpine: [`../alpinejs/`](../alpinejs/README.md) (via Livewire/Filament — no second copy)
- Tailwind: [`../tailwindcss/`](../tailwindcss/README.md) (v4.1+ required)
