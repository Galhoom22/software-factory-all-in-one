# Gateway Aggregation — applicability

## Signals

- Mobile/high-latency clients
- BFF needs composition
- Backends are fine-grained

## Anti-signals

- Aggregation hides ownership and creates a god gateway
- Client can call one coarse API already

## Simpler alternative first

1. BFF module
2. GraphQL gateway if already standard

Adopt **Gateway Aggregation** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | API gateway policies; Nest/Laravel aggregators — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | API gateway policies; Nest/Laravel aggregators — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
