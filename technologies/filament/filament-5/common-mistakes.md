# Filament 5.x — common mistakes

## Install

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Panel provider not registered | `/admin` errors | Add to `bootstrap/providers.php` |
| Using `^5.0` in PowerShell unquoted | Wrong constraint installed | `"~5.0"` or proper quoting |
| Scaffold on existing app | Overwrote Vite/layout files | Use non-scaffold install |
| Tailwind 3 leftover with Filament 5 | Styles/build break | Upgrade to Tailwind 4.1+ per install docs |
| No `make:filament-user` | Can’t sign in | Create panel user |

## Building

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Custom Livewire page for basic CRUD | Extra maintenance | Use a Resource |
| Widget without understanding Livewire | Broken reactivity | Open Livewire pack + Widgets docs |
| Exposing mass-assignable fields freely | Security hole | Explicit forms + policies |
| Confusing panel users with API users | Auth mixups | Separate models/guards as product design requires |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Replacing the product Next.js UI with Filament silently | Breaks actor-loop FE plan | ADR required |
| Double Alpine | Init errors | Remove duplicate |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Following Filament 3 tutorials on a 5.x pin | Wrong APIs | 5.x docs only |
| Memorizing resource paths | Drift | Open Getting started + Resources docs |
