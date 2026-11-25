# Filament 5.x — stop using these

Sources: [Installation](https://filamentphp.com/docs/5.x/introduction/installation), [Getting started](https://filamentphp.com/docs/5.x/getting-started).

**Rule for agents:** do not introduce the left column in new Filament 5 code.

## Install / stack

| Stop using | Use instead |
|------------|-------------|
| Filament **3/4** install recipes on a 5.x project | `filament/filament:"^5.0"` + 5.x docs |
| Tailwind **v3** / PostCSS-only Tailwind for new Filament 5 | Tailwind **4.1+** + `@tailwindcss/vite` |
| Laravel **&lt; 11.28** or PHP **&lt; 8.2** | Meet official prerequisites |
| `filament:install --scaffold` on an **existing** dirty app | Manual install path (scaffold overwrites) |
| PowerShell `^5.0` without quoting quirks awareness | `"~5.0"` on Windows PowerShell |

## Architecture anti-patterns

| Stop using | Use instead |
|------------|-------------|
| Hand-rolled admin CRUD that duplicates Resources | `make:filament-resource` / Resources docs |
| Second Alpine CDN beside Filament/Livewire | Single bundled Alpine |
| Putting the primary actor UI inside Filament by habit | Next.js ↔ API for the primary actor UI; Filament only if product chooses admin |
| Fat Resources owning all domain rules | Thin UI over Laravel domain services |

## Config

| Stop using | Use instead |
|------------|-------------|
| Ignoring missing panel provider registration | Ensure provider in `bootstrap/providers.php` |
| Skipping policies “because it’s admin” | Authorize — admins still need least privilege |
