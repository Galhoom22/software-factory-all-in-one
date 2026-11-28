# Adapter — applicability

## Signals

- A stable domain port exists; a foreign library does not match its method names, argument shapes, or error model.
- Conversion code is duplicated beside more than one call site.
- Tests want one fake for the port, not vendor SDK stubs.

## Anti-signals

- Both APIs are under your control and you can align them with a rename or shared DTO.
- The mismatch is a single field transform used once — a private helper is enough.
- Callers need a simplified *workflow* over many subsystems (that is [Facade](../facade/README.md), not Adapter).
- You plan to wrap the same object to add behavior while keeping the same interface ([Decorator](../decorator/README.md)).

## Simpler alternative first

1. Change the foreign call site once with an inline map (no new type).
2. A pure `toPortResult(vendorResponse)` function next to the use case.
3. Framework HTTP client + typed response DTO (no Adapter class).

Only add an Adapter type when the translation will be reused or when you need a replaceable binding.

## Framework-native equivalents

- **Laravel:** bind a `PaymentGateway` interface in a service provider to a concrete adapter that wraps an HTTP client or SDK. Prefer the container over a hand-rolled registry. See [`technologies/laravel/`](../../technologies/laravel/README.md). Do **not** invent an Adapter to replace Eloquent model casting or Form Request validation — those already map shapes at the boundary.
- **PHP:** a final class implementing your interface and composing the SDK is enough; avoid abstract "BaseAdapter" hierarchies. See [`technologies/php/`](../../technologies/php/README.md).
- **Node / JavaScript:** a thin module exporting functions that match the port, wrapping the SDK, often beats a class hierarchy. Middleware that *transforms requests* is not Adapter — that is pipeline decoration. See [`technologies/javascript/`](../../technologies/javascript/README.md).
