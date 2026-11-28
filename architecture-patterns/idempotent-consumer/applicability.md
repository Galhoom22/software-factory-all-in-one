# Idempotent Consumer — applicability

## Signals

- Queues with at-least-once
- Payment webhooks
- Retries across Crash

## Anti-signals

- Operations already naturally idempotent and cheap
- Exactly-once platform guarantee you truly have

## Simpler alternative first

1. Unique DB constraints
2. Upserts

Adopt **Idempotent Consumer** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Idempotency middleware; Laravel unique job + cache locks — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Idempotency middleware; Laravel unique job + cache locks — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
