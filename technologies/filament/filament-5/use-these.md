# Filament 5.x — prefer these

Sources: [Getting started](https://filamentphp.com/docs/5.x/getting-started), [Installation](https://filamentphp.com/docs/5.x/introduction/installation).

## Install (panel builder)

| Prefer | Notes |
|--------|-------|
| `composer require filament/filament:"^5.0"` | PowerShell: `"~5.0"` |
| `php artisan filament:install --panels` | Registers panel provider |
| `php artisan make:filament-user` | First panel operator |
| Register provider in `bootstrap/providers.php` | If access errors |
| Visit `/admin` after install | Default panel path |

## Build (Getting started)

| Prefer | Role |
|--------|-------|
| **Resources** | List / Create / Edit (+ optional View) for Eloquent models |
| **Widgets** | Dashboard Livewire pieces |
| **Custom pages** | Non-CRUD panel pages |
| Official docs for each | Don’t invent parallel CRUD UIs |

## Components-only / Tailwind

| Prefer | Notes |
|--------|-------|
| Selective `filament/*:"^5.0"` packages | Smaller surface |
| `@import 'tailwindcss'` + Filament package CSS | Per install docs |
| `@tailwindcss/vite` in Vite | Tailwind **4.1+** |
| `@filamentStyles` / `@filamentScripts` | In Blade layout |

## Stack companions

| Prefer | Why |
|--------|-----|
| Livewire pack rules | Every page/widget is Livewire |
| One Alpine (via Livewire/Filament) | No second CDN |
| Tailwind v4 pack | Required baseline |
