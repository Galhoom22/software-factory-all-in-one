# Decorator — applicability

## Signals

- Cross-cutting extras must combine freely around one core object.
- Subclass matrix or boolean flags inside the core class are growing.
- Callers should keep using the same interface after wrapping.

## Anti-signals

- Laravel / Express / Node HTTP middleware already owns the pipeline — do not invent a parallel Decorator tree for HTTP.
- The wrapper changes method names or payloads for a foreign SDK ([Adapter](../adapter/README.md)).
- The wrapper's main job is access control, lazy creation, or remote stand-in ([Proxy](../proxy/README.md)).
- One optional behavior forever — a single subclass or a hook callback is enough.

## Simpler alternative first

1. A higher-order function `withAudit(store)`.
2. Middleware / pipeline provided by the framework.
3. One optional collaborator injected into the core class.

## Framework-native equivalents

- **Laravel HTTP middleware / job middleware:** prefer the framework stack for request and job pipelines over DIY Decorator. See [`technologies/laravel/`](../../technologies/laravel/README.md).
- **PHP:** stream filters and middleware-style callables often replace class Decorators. See [`technologies/php/`](../../technologies/php/README.md).
- **Node:** Connect/Express-style middleware and stream `.pipe()` compose layers natively. See [`technologies/javascript/`](../../technologies/javascript/README.md).
