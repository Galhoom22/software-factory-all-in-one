# Factory Method — applicability

## Signals

- Several modules construct the same family of collaborators with duplicated `new` / constructor branches.
- A workflow method mixes orchestration with product selection (`if channel === "sms"` then construct).
- Feature flags or tenant editions must swap the product without editing the workflow body.
- Unit tests need a fake product while keeping the real dispatch path under test.

## Anti-signals

- There is only one notifier, writer, or store planned for this product for the next release cycle.
- Config already maps a string key to a pre-bound instance in the container; adding Factory Method would duplicate that map.
- “Creator” subclasses would each contain only a one-line `return new X` with no shared workflow worth inheriting.
- Call sites already receive the collaborator through constructor injection; inventing a factory method adds a second construction story.
- The team wants the pattern name on a PR for optics, not because construction sprawl is measurable.

## Simpler alternative first

1. **Inject the interface** at the call site (constructor or function argument). If one binding per process is enough, stop.
2. **Config map / registry**: `writers["csv"] = new CsvWriter()` resolved once at composition root.
3. **Framework container binding**: bind `Notifier` → `EmailNotifier` in a service provider; resolve where needed.

Adopt Factory Method only when those fail — typically because the *same class* must both own a shared algorithm *and* vary which product that algorithm uses across subclasses or plugged creators.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Factory Method |
|----------|-------------------|--------------------------------------|
| Laravel | Service container + service providers; contextual binding | Laravel’s container already resolves interfaces to concretes. Bind `Notifier::class` in a provider; inject into jobs/controllers. Middleware pipelines solve *request* variation, not product construction — use middleware when the pain is HTTP pipeline stages ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP (without framework) | Constructor injection + a composition root | Keep `new` at the edge; do not sprinkle Factory Method through domain services ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Factory *function* or module export map; middleware only for HTTP | A plain `createNotifier(kind)` function is enough for most apps. Use Express/Connect-style middleware when varying request handling, not when choosing an export writer. Prefer EventEmitter when the pain is fan-out of events, not construction ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual, Laravel 12/13 service container docs): the container is the default place to decide *which* implementation backs an interface for a request or job — not a hand-rolled Singleton or a Creator hierarchy for every binding.
