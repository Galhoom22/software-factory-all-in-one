# Proxy — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Decorator](../decorator/) | Is the real object **always present** and you only add behavior, or do you **control access/lifetime** (lazy, protect, remote)? |
| [Adapter](../adapter/) | Are the interfaces **the same**, or are you **translating** an incompatible API? |
| [Facade](../facade/) | Are you simplifying a **subsystem of many types**, or standing in for **one** subject with the same contract? |
| Framework middleware | Is the pain **HTTP/request pipeline** stages, or a **domain object** boundary? Prefer middleware for the former. |
| [Flyweight](../flyweight/) | Are you sharing immutable state, or controlling access to a subject? |

## Combines with

- **Adapter inside Proxy:** rare — prefer adapting at the composition root, then proxying the adapted port.
- **Remote Proxy + retry/circuit policy:** keep network policy in one place; do not scatter SDK calls.
- **Dependency injection:** bind `DocumentBlob` → `LazyAuthDocumentProxy` in the container.

## Alternatives

- Laravel middleware, policies, gates ([`technologies/laravel/`](../../technologies/laravel/)).
- Container lazy/factory bindings ([`technologies/php/`](../../technologies/php/)).
- HTTP client interceptors / Express middleware ([`technologies/javascript/`](../../technologies/javascript/)).
- [Decorator](../decorator/) for additive behavior on a live object.
- [Adapter](../adapter/) for foreign API shapes.
