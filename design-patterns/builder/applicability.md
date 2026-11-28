# Builder — applicability

## Signals

- Constructors take many optional parameters; callers routinely pass `null` / omit keys incorrectly.
- Construction must enforce ordering (auth before body, header before sections).
- The same recipe should produce more than one representation.
- Half-built objects are reaching queues or caches and failing late.

## Anti-signals

- Three or fewer fields with defaults — an options object or named parameters is enough.
- “Fluent setters” that never validate and return `this` only for chain style.
- The object is a simple DTO filled from a form request / JSON schema already validated at the boundary.
- You need many copies of a finished template — prefer [Prototype](../prototype/) clone.
- HTTP middleware already composes the pipeline; a Builder for middleware order duplicates the framework.

## Simpler alternative first

1. **Options object / named args** with defaults and one validation function.
2. **Static factory** on the product for the common happy path (`ExportPackage::weeklyReport(...)`).
3. **Framework request builders** where they exist (HTTP client fluent APIs) — use the library’s builder instead of inventing a parallel one.

Adopt Builder when step combinations multiply and validation must happen at `build()`, or when directors share recipes across representations.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Builder |
|----------|-------------------|--------------------------------|
| Laravel | Form Requests + DTOs; HTTP client fluent API; Mail/Notification message builders | Validation belongs in Form Requests. Outbound HTTP already has a fluent client. Mailables assemble messages without a custom GoF builder ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | Constructor promotion + readonly DTOs; `array` shape validated once | Keep builders for genuine multi-step domain packages ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Options objects; stream pipeline for byte assembly; middleware for HTTP stages | Use `pipeline` / streams when assembling byte output. Express middleware composes request handling — not a substitute for building a domain export package, and not a reason to invent Builder for routing ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): Laravel’s service container wires dependencies; it does not replace a domain Builder for multi-step export assembly. Prefer container injection of a finished builder/director, not a Singleton builder.
