# Livewire — technology pack

**Pinned slice for new work in this pack:** **Livewire 4.x** (docs checked 2026-11-21).  
**Official home:** [Quickstart](https://livewire.laravel.com/docs/4.x/quickstart) · [Installation](https://livewire.laravel.com/docs/4.x/installation) · [Upgrade](https://livewire.laravel.com/docs/4.x/upgrading) · [Docs 4.x](https://livewire.laravel.com/docs/4.x)

**Requires:** Laravel **10+**, PHP **8.1+** (prefer product pin — MasarHub Laravel 13 / PHP per SRS).

## When to open this pack

- Building **reactive UI in Laravel + Blade** without a separate JS SPA.
- Choosing single-file / page components, `Route::livewire`, `wire:*` directives.
- Upgrading Livewire 3 → 4 or avoiding double Alpine installs.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated 4.x URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Livewire defaults |
| [`quality.md`](quality.md) | Clean Code + when Livewire vs Next/API |
| [`livewire-4/`](livewire-4/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack describes professional **Livewire 4** apps.
- **MasarHub** job-seeker UI is **Next.js ↔ Laravel API** — do **not** introduce Livewire into that product without an ADR that changes delivery architecture.
- Use this pack for Laravel Blade/Livewire products (or future studio apps that choose that stack).

## Related

- Laravel pack: [`../laravel/`](../laravel/README.md)
- Alpine pack: [`../alpinejs/`](../alpinejs/README.md) (Livewire **bundles** Alpine — do not load a second copy)
- Tailwind pack: [`../tailwindcss/`](../tailwindcss/README.md)
