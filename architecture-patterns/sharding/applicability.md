# Sharding — applicability

## Signals

- Multi-tenant by tenant id
- Huge datasets
- Regional affinity

## Anti-signals

- Data fits comfortably
- Cross-shard queries dominate

## Simpler alternative first

1. Read replicas
2. Archival tiers
3. CQRS

Adopt **Sharding** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Postgres partitioning; Vitess-style; app-level routers — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Postgres partitioning; Vitess-style; app-level routers — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
