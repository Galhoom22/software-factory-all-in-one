# Livewire — best practices

Sources: [Quickstart](https://livewire.laravel.com/docs/4.x/quickstart), [Installation](https://livewire.laravel.com/docs/4.x/installation), [Upgrade](https://livewire.laravel.com/docs/4.x/upgrading). Re-check official docs before non-trivial Livewire work (D-66).

## Install defaults (4.x)

1. `composer require livewire/livewire` (or `^4.0` when upgrading).
2. Layout: `php artisan livewire:layout` → `resources/views/layouts/app.blade.php` with `@livewireStyles` / `@livewireScripts` (or auto-inject; prefer explicit placement).
3. **Do not load Alpine twice** — Livewire already includes Alpine. Remove CDN/npm Alpine on Livewire pages unless manually bundling Livewire’s Alpine instance.
4. Full-page routes: prefer **`Route::livewire(...)`** (required for view-based single-file / multi-file page components).

## Component shape (Quickstart)

- Prefer **single-file components** for small pages (`make:livewire pages::…`) unless the team standardizes multi-file.
- Exactly **one root HTML element** per component (no stray comments outside the root).
- Public typed properties for form state; validate in actions with `$this->validate([...])`.
- Use **`wire:submit="save"`** for forms (no full page reload).
- Default **`wire:model`** is deferred (submit/request); use **`wire:model.live`** only when you need realtime updates (extra requests).
- After save: persist + **`$this->redirect(...)`** — not `dd()` in production paths.

## Security / trust

- Treat every public property and action as a **trust boundary** — same as Form Requests: validate, authorize, never trust the browser.
- Prefer policies / gates inside actions that mutate domain data.
- Keep secrets and PII out of public properties that round-trip to the client.

## Pairing

- Tailwind for styling; Livewire for server-driven interactivity.
- Laravel pack rules still apply (Form Request patterns, Eloquent discipline, queues for slow work).
