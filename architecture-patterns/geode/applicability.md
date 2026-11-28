# Geode — applicability

## Signals

- Global read-heavy workloads
- Regional failover active-active
- Latency budgets across continents

## Anti-signals

- Strong single-primary writes without a conflict story
- Tiny local audience

## Simpler alternative first

1. CDN + one origin
2. Deployment Stamps with regional affinity

Adopt **Geode** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Multi-region deploy; Cosmos/global DB patterns carefully; read replicas — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Multi-region deploy; Cosmos/global DB patterns carefully; read replicas — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
