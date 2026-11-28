# Asynchronous Request-Reply — applicability

## Signals

- Exports, AI jobs, payments settlement
- Frontends need immediate acknowledgment
- Backend duration is unpredictable

## Anti-signals

- Work finishes in tens of milliseconds
- Client can wait on a stream/WebSocket already in place
- Fire-and-forget with no need for a result

## Simpler alternative first

1. Sync endpoint
2. Queue job + email when done without a status API

Adopt **Asynchronous Request-Reply** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel queues + job status table; Node Bull/SQS + status route — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel queues + job status table; Node Bull/SQS + status route — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
