# Livewire 4.x — stop using these

Sources: [Upgrade](https://livewire.laravel.com/docs/4.x/upgrading), [Installation](https://livewire.laravel.com/docs/4.x/installation), [Quickstart](https://livewire.laravel.com/docs/4.x/quickstart).

**Rule for agents:** do not introduce the left column in new Livewire 4 code.

## Routing / structure

| Stop using | Use instead |
|------------|-------------|
| `Route::get('/x', Component::class)` as the **default** for new full pages | `Route::livewire('/x', …)` (v3 style still works; not recommended) |
| Multiple root elements / HTML comments outside the root | Single root element |
| `dd()` as the permanent end of `save()` | Validate → persist → redirect/flash |

## `wire:model` mental model (v3 → v4)

| Stop assuming | Reality on modern Livewire |
|---------------|----------------------------|
| Bare `wire:model` is “live” (v2-era muscle memory) | Deferred by default — use `.live` when needed |
| `wire:model.defer` as the way to defer | Plain `wire:model` |
| `wire:model.lazy` | Prefer `wire:model.blur` (per upgrade docs) |

Always re-check the [upgrade guide](https://livewire.laravel.com/docs/4.x/upgrading) for the full rename/behavior table.

## Assets / Alpine

| Stop using | Use instead |
|------------|-------------|
| Second Alpine script (CDN or app.js) next to Livewire | Livewire’s Alpine only; or manual bundle of Livewire’s Alpine |
| Publishing assets “just because” | Dynamic serving unless you have a real CDN/nginx constraint |
| Disabling inject + forgetting `@livewireScripts` | Keep directives or leave inject on |

## Product architecture

| Stop using | Why |
|------------|-----|
| Dropping Livewire into MasarHub Next.js FE by habit | Wrong delivery architecture (API + SPA) without ADR |
| Fat components that own all domain rules | Push domain to Laravel services; keep components thin |
