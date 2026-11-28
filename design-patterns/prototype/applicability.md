# Prototype — applicability

## Signals

- Spawning instances re-parses or rebuilds the same expensive structure repeatedly.
- Users/workflows start from named templates that differ mainly in nested content.
- A registry of example instances is easier than a switch of constructors.
- Independent copies are required; shared references have already caused bugs.

## Anti-signals

- Objects hold sockets, file handles, or ORM identity — cloning semantics are unclear or unsafe.
- A cheap builder/options path already produces instances fast enough.
- Shallow copy would share mutable nested state you cannot afford to share, and deep copy is not designed.
- You are using Prototype only to avoid writing a constructor.
- Cache *entries* need TTL/eviction policies — that is a cache store problem, not a GoF Prototype (though clone-on-read can appear at the edge).

## Simpler alternative first

1. **Immutable templates + copy-on-write fields** (spread/`with` records).
2. **Builder / static factory** from template id when construction is cheap.
3. **Language clone helpers** (`structuredClone` in modern JS, PHP clone + `__clone`) used carefully for value objects — without a registry pattern.

Adopt Prototype when the prototype *carries* the variation (type + nested data) and clone cost beats rebuild cost.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Prototype |
|----------|-------------------|----------------------------------|
| Laravel | View/mail Markdown templates; Eloquent `replicate()` for models when appropriate | Blade/mail templates are the product’s document prototypes — do not reinvent. `replicate()` is a model-level clone for Eloquent rows; know its relation caveats ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | `clone` + `__clone` for value objects; avoid cloning services from the container | Never clone container-managed services; clone values only ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | `structuredClone` for data graphs; module-level template objects copied with spreads | Prefer structured clone for plain data. Streams and EventEmitter instances are not prototypes — do not clone live emitters; create new ones ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): Laravel’s container should inject a `TemplateRegistry` service (scoped as needed); do not make the registry a hand-rolled Singleton. Middleware clones nothing — it decorates the HTTP cycle.
