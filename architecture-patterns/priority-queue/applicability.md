# Priority Queue — applicability

## Signals

- SLA tiers
- Interactive vs batch
- Paid vs free tenants carefully

## Anti-signals

- All work equal
- Priority inversion without monitoring

## Simpler alternative first

1. Two queues: urgent and bulk
2. Separate worker pools

Adopt **Priority Queue** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | SQS fair queues / priority; Redis ZSET; Laravel multiple queues — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | SQS fair queues / priority; Redis ZSET; Laravel multiple queues — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
