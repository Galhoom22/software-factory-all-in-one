# CQRS — applicability

## Signals

- Read/write load asymmetry
- Complex writes, simple high-QPS reads
- Event-sourced write side

## Anti-signals

- CRUD app with symmetric needs
- Team cannot operate two models
- Premature split without measured pain

## Simpler alternative first

1. Read replicas
2. Materialized View / SQL view
3. Separate query DTOs without full CQRS

Adopt **CQRS** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel read models; projection workers; Eloquent for writes + query builders for reads — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel read models; projection workers; Eloquent for writes + query builders for reads — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
