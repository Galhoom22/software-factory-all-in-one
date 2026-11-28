# Queue-Based Load Leveling — applicability

## Signals

- Burst uploads/orders
- Downstream has hard RPS limits
- Decouple producers from consumers

## Anti-signals

- Need sync answers with no lag
- Queue without lag SLOs/alerts

## Simpler alternative first

1. Rate Limiting at edge
2. Fast autoscale if cold-start allows

Adopt **Queue-Based Load Leveling** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Any durable queue; Laravel queues; SQS — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Any durable queue; Laravel queues; SQS — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
