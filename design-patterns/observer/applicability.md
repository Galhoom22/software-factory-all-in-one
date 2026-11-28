# Observer — applicability

## Signals

- A mutator method lists several unrelated side effects that grow every sprint.
- Plugins or modules need to react to the same change without editing the core type.
- You need runtime subscribe/unsubscribe (per session, per request, feature-flagged).
- Tests want to record “was notified” without running mail, HTTP, or disk.

## Anti-signals

- Exactly one consumer will ever care; a direct call is clearer and safer.
- Ordering and transactional success across all reactions are hard requirements and Observer’s default notify loop cannot promise them.
- The “observers” only exist to hide a circular dependency you should break with a third module instead.
- You are reinventing Laravel’s event dispatcher or Node’s `EventEmitter` in application code.
- Fan-out is really a pipeline of stages that must each transform the payload — that is closer to Chain of Responsibility or middleware.

## Simpler alternative first

1. **Direct call** to one collaborator injected into the subject.
2. **Framework events**: dispatch a domain event; register listeners at the composition root.
3. **Callback list** of plain functions if you need lightweight fan-out without types.

Adopt a hand-rolled Observer hierarchy only when those fail — typically a domain subject that must stay framework-agnostic *and* support dynamic attach/detach with a shared update contract.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Observer |
|----------|-------------------|--------------------------------|
| Laravel | `Event::dispatch` / event classes + listeners; Eloquent model observers (`Model::observe`, `ObservedBy`) | Laravel’s dispatcher is the productized Observer for app-wide reactions. Eloquent observers cover model lifecycle hooks without a custom Subject type ([`technologies/laravel/`](../../technologies/laravel/)). |
| Node / JavaScript | `EventEmitter` (`on` / `once` / `emit` / `removeListener`) | Built-in one-to-many notification. Prefer it over a custom Observer class for process-local events ([`technologies/javascript/`](../../technologies/javascript/)). |
| HTTP | Middleware / request lifecycle hooks | Use middleware when the pain is request/response stages, not domain-state fan-out. |

Verified claim (Laravel 13 events / Eloquent docs; Node.js `events` module): prefer the platform bus for application reactions; keep a custom Subject only when the domain object itself must own subscription semantics independent of the framework.
