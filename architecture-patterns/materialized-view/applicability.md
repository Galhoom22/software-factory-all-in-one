# Materialized View — applicability

## Signals

- Dashboards
- Cross-store compositions
- CQRS read side

## Anti-signals

- Source shape already matches queries
- Freshness requirements beat precompute cost

## Simpler alternative first

1. SQL materialized view
2. Cache-Aside of query results

Adopt **Materialized View** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Postgres MATVIEW; projection workers; Laravel denormalized tables — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Postgres MATVIEW; projection workers; Laravel denormalized tables — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
