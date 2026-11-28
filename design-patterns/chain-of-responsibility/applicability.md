# Chain of Responsibility — applicability

## Signals

- Multiple independent processors may accept, enrich, reject, or forward the same request.
- Order of processors is a product rule, not an accident of call nesting.
- Adding a processor should not force edits inside sibling processors.

## Anti-signals

- Only one processing step exists (or will exist) for this path.
- You need every wrapper to always run around a core object (logging + caching + metrics) — that is usually Decorator, not “who handles.”
- A flat ordered list of functions (`pipe(req, [a, b, c])`) already reads clearly and needs no object graph.
- The framework middleware / HTTP kernel already owns registration, order, and short-circuit.

## Simpler alternative first

1. One function that calls helpers in order.
2. An array of `(request) => request | stop` functions reduced left-to-right.
3. Framework middleware (Laravel HTTP middleware / Express-style `next`) — verify it covers order and termination before inventing a Handler class hierarchy.

Prove those fail (unreadable nest, untestable gates, or missing short-circuit) before adopting a GoF-shaped chain.

## Framework-native equivalents

| Platform | What already behaves like a chain | Honesty note |
|----------|-----------------------------------|--------------|
| Laravel | HTTP middleware stack; `Pipeline` for arbitrary pipes | Prefer middleware for HTTP. A custom `Handler` hierarchy on top of middleware is usually noise. |
| Node (Express / Connect style) | `(req, res, next)` middleware | Same idea: ordered list + `next()`. Do not re-implement unless you leave that stack. |
| Node (generic) | A small `compose(middlewares)` function | Enough for non-HTTP pipelines (notification filters, export pre-checks). |

Claim only what the platform documents: middleware *is* Chain of Responsibility for request pipelines. Queue job middleware (Laravel) is a related pipeline, not a free pass to invent parallel Handler trees.
