# Publisher-Subscriber — applicability

## Signals

- Domain events
- Fan-out notifications
- Decoupled integrations

## Anti-signals

- Need request/response to one consumer
- Strict sync consistency

## Simpler alternative first

1. In-process events
2. Observer (GoF) in one process

Adopt **Publisher-Subscriber** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel events/queues; SNS/SQS; Redis pub/sub carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel events/queues; SNS/SQS; Redis pub/sub carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
