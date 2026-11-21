# Livewire 4.x — common mistakes

## Install / assets

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Missing `@livewireStyles` / `@livewireScripts` when inject disabled | No reactivity / 404 JS | Add directives or re-enable inject |
| Loading Alpine twice | Init errors, broken `x-*` / `wire:*` | One Alpine — Livewire’s |
| Nginx blocking `/livewire-*/` | JS 404 | Pass through to Laravel or publish/bundle |
| Stale `route:cache` after install | Update endpoint missing | `php artisan route:clear` / optimize:clear |

## Components

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Full-page SFC with `Route::get` only | Component not found / wrong render | `Route::livewire` |
| Multiple roots | Runtime error | One root element |
| Expecting every keystroke to hit the server with bare `wire:model` | “Validation not live” confusion | Use `wire:model.live` or validate on submit |
| Skipping authorization in actions | IDOR / mass assignment risk | Policies + validated input only |
| Putting secrets in public props | Leaked to browser | Server-only state / session |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Using Livewire for MasarHub job-seeker UI without ADR | Stack conflict with Next.js | API + Next; Livewire only if product decides |
| Giant god-component | Unmaintainable Blade/PHP | Child components / Form objects |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Memorizing v3 routing / wire:model defaults | Wrong 4.x code | Open Quickstart + Upgrade + this pack |
| Forgetting PHP/Laravel minimums | Install fails | Laravel 10+, PHP 8.1+ (prefer product pins) |
