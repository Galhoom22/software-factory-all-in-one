# Filament — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Filament shape

| Rule | In Filament terms |
|------|-------------------|
| Names reveal intent | Resource/page/widget class names match the model/job |
| One job | One Resource per aggregate; extract relation managers / widgets when lists grow |
| Readable in one pass | Prefer schema builders that a reviewer can scan; avoid mega anonymous closures without names |
| Trust boundaries | Policies on resources/actions; never expose mass-assignment via forms carelessly |
| Campsite | Leave Resources thinner than you found them |

## 2. Architecture fit

- Filament = **server-driven admin UI** on Laravel + Livewire + Tailwind.
- When the product UI is Next.js ↔ API, Filament is for **admin/ops panels** or other products that choose that stack — not a silent replacement for the SPA.
- Domain rules stay in Laravel services/models; Filament Resources stay a UI over that domain.

## 3. Design patterns (judgment)

- Default: **Resource + pages** for CRUD; **Widgets** for dashboard; **Custom pages** for non-CRUD.
- Use official form/table/infolist schemas before inventing custom Livewire pages for the same job.
- Do not rebuild a second design system outside Filament/Tailwind without cause.

## 4. Automatic latest check (mandatory)

Before non-trivial Filament work:

1. Open this pack (`best-practices` + `filament-5/` slice).
2. Re-check [Getting started](https://filamentphp.com/docs/5.x/getting-started) / [Installation](https://filamentphp.com/docs/5.x/introduction/installation) or Context7 for **5.x**.
3. Confirm PHP / Laravel / Tailwind minimums vs product SRS.

## Related

- Laravel + Livewire + Tailwind packs
- Coverage: `coverage/06-technologies.md`

