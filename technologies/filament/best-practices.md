# Filament — best practices

Sources: [Getting started](https://filamentphp.com/docs/5.x/getting-started), [Installation](https://filamentphp.com/docs/5.x/introduction/installation). Re-check official docs before non-trivial Filament work (D-66).

## Install defaults (5.x panel builder)

1. Prerequisites: **PHP 8.2+**, **Laravel 11.28+**, **Tailwind CSS 4.1+**.
2. Panel path (most apps):
   ```bash
   composer require filament/filament:"^5.0"
   php artisan filament:install --panels
   php artisan make:filament-user
   ```
   (PowerShell: use `"~5.0"` — `^` is ignored.)
3. Confirm `AdminPanelProvider` (or your panel provider) is registered in `bootstrap/providers.php`.
4. Sign in at `/admin` (default) and build via **Resources**.

## Building (Getting started map)

| Prefer | Role |
|--------|------|
| **Resources** | CRUD for Eloquent models (List / Create / Edit; optional View) |
| **Widgets** | Dashboard stats/charts — Livewire components |
| **Custom pages** | Settings / blank canvas — full-page Livewire |
| Generated sidebar items | Register with the resource; don’t hand-duplicate nav unless needed |

## Components-only path

- Install only needed packages (`filament/tables`, `forms`, `schemas`, …) with `"^5.0"`.
- Import matching CSS from `vendor/filament/...` into `app.css` with `@import "tailwindcss"` + `@tailwindcss/vite`.
- Layout: `@filamentStyles` / `@filamentScripts` + Vite; `x-cloak` CSS; optional `@livewire('notifications')`.
- New projects only: `filament:install --scaffold` (overwrites files — never on a dirty existing app).

## Security / trust

- Panel auth is not product API auth — keep gates/policies on models and actions.
- `make:filament-user` is for panel operators; do not confuse with end-user accounts without an explicit product design.
- Validate and authorize every mutating action (same bar as Livewire/Laravel packs).

## Pairing

- Livewire powers every page/widget — follow the Livewire pack (no second Alpine).
- Tailwind v4.1+ is mandatory — follow the Tailwind pack.
