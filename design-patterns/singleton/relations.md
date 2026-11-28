# Singleton — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| Framework container / DI | Do you need a **static global accessor**, or **one managed instance injected** where it is used? Prefer the container. |
| [Factory Method](../factory-method/) | Are you controlling *how many* instances exist globally, or *which subtype* a workflow constructs? |
| [Abstract Factory](../abstract-factory/) | Is the pain family consistency of products, or process-wide uniqueness of one service? |
| Module export (JS) | Is the module cache an accidental single instance you can still rewire in tests, or a hard `getInstance()` seal? |
| [Flyweight](../flyweight/) | Do you need **one** process object, or **many shared immutable shards** keyed by content? |

## Combines with

- **Almost nothing cleanly.** Pairing Singleton with factories, builders, or observers usually spreads globals.
- Acceptable transitional pair: Singleton adapter behind an injected port while deleting call sites.

## Alternatives

- Laravel `$app->singleton()` / service providers ([`technologies/laravel/`](../../technologies/laravel/)).
- Constructor injection at a PHP composition root ([`technologies/php/`](../../technologies/php/)).
- Bootstrap-created instance passed into routers/services ([`technologies/javascript/`](../../technologies/javascript/)).
- Scoped bindings when “one per request” is the real need — not classical Singleton.
- No pattern: pass the collaborator as a function argument.
