# Abstract Factory — applicability

## Signals

- Two or more product roles must always share the same provider, environment, or theme.
- Bugs appear when someone wires “family A client” with “family B verifier.”
- Switching provider/environment is a single operational decision, not N independent ones.
- Client code imports multiple concrete SDK types that always change together.

## Anti-signals

- Only one product role changes; other collaborators are shared infrastructure — use [Factory Method](../factory-method/) or injection.
- “Families” are speculative; production has one provider and no second toolkit on the roadmap.
- Each interface is already bound once in the container for the whole process, and config cannot mix them.
- You are inventing parallel product interfaces just so a factory can return them — YAGNI.
- A single facade over one SDK would remove the pain without a factory hierarchy.

## Simpler alternative first

1. **Inject each interface** at the composition root with bindings that share the same config object.
2. **One Factory Method / function** if only a single product varies.
3. **Provider module** that exports a struct/record of collaborators built together — without an abstract factory interface — when you have exactly one family today and might add a second later.

Graduate to Abstract Factory when multiple families are real *and* clients must swap the whole set through one abstraction.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Abstract Factory |
|----------|-------------------|----------------------------------------|
| Laravel | Service providers that bind a *group* of interfaces from one config; contextual binding | Register `ChargeClient` and `WebhookVerifier` in the same provider reading `config/payments.php`. The container is the toolkit. Avoid a DIY Abstract Factory unless multiple toolkits must be selectable per request ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | Composition-root module returning an array/DTO of collaborators | Keep family assembly at the edge ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | A factory module `createPaymentToolkit(env)` returning `{ charge, verify }` | Plain object as the family. Use middleware only for HTTP concerns; EventEmitter for fan-out — neither replaces a payment toolkit ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual, Laravel service container / providers): providers are the supported place to group related bindings; middleware is for HTTP pipeline stages, not for constructing payment SDK families.
