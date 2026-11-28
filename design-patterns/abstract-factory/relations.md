# Abstract Factory — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Factory Method](../factory-method/) | Do you create **one** product for a workflow, or a **set of related products** that must match? |
| [Builder](../builder/) | Are you choosing a **family of types**, or **assembling many optional fields** on one object? |
| Facade | Are you *creating* a consistent set of objects, or *simplifying calls* into an existing subsystem? |
| Dependency injection container | Can the container’s provider bind the whole set once, without a runtime-swappable factory type? |

## Combines with

- **Factory Method:** each `createX` on the abstract factory is often implemented as a factory method inside the concrete toolkit.
- **Singleton (avoid):** teams sometimes wrap the toolkit as a process global — prefer container scope instead ([`singleton`](../singleton/)).
- **Adapter:** concrete products are frequently adapters over vendor SDKs.

## Alternatives

- Composition-root module returning `{ charge, verify }` for a single family.
- Laravel service provider group bindings ([`technologies/laravel/`](../../technologies/laravel/)).
- [Factory Method](../factory-method/) when only one role varies.
- [Builder](../builder/) when the pain is stepwise construction of one complex value.
