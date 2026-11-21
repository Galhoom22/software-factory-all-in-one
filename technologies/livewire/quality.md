# Livewire — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Livewire shape

| Rule | In Livewire terms |
|------|-------------------|
| Names reveal intent | Component names (`pages::post.create`), properties, and actions say what they do |
| One job | One component = one interactive job; extract child components when the Blade/PHP file grows |
| Readable in one pass | Prefer typed public props + short actions; Form objects when forms get large |
| Error handling | `$this->validate` / Form objects; show `@error`; never swallow failed saves |
| Campsite | Leave components smaller and clearer than you found them |

## 2. Architecture fit

- Livewire is a **Laravel full-stack UI** style (server components over HTTP).
- **MasarHub** job-seeker delivery is **Next.js FE + Laravel API** — Livewire is the wrong default there. Use this pack for Blade/Livewire products only (or after an ADR changes MasarHub’s UI strategy).
- Domain logic still belongs in services / actions the Laravel pack already prefers — Livewire components should stay thin.

## 3. Design patterns (judgment)

- Default: **component + Blade** with `wire:*` directives.
- Extract Form objects / child components when repetition shares meaning.
- Do not invent a second SPA framework on top of Livewire “for architecture.”
- Flux (official UI kit) is optional product choice — not required by this pack.

## 4. Automatic latest check (mandatory)

Before non-trivial Livewire work:

1. Open this pack (`best-practices` + `livewire-4/` slice).
2. Re-check [Quickstart](https://livewire.laravel.com/docs/4.x/quickstart) / [Upgrade](https://livewire.laravel.com/docs/4.x/upgrading) or Context7 for **4.x** — memory is not evidence.
3. Confirm Laravel/PHP prerequisites vs product SRS.

## Related

- Laravel + Alpine + Tailwind packs
- Coverage: `coverage/06-technologies.md`
