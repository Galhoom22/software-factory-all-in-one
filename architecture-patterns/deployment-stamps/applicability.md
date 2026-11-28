# Deployment Stamps — applicability

## Signals

- Multi-region active footprints
- Tenant isolation by stamp
- Blast-radius control for releases

## Anti-signals

- Single-region MVP with tiny traffic
- Shared DB across stamps defeats the pattern

## Simpler alternative first

1. Horizontal pods in one cluster
2. Sharding inside one deployment

Adopt **Deployment Stamps** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Terraform modules per stamp; separate envs; Geode when any-node serves any client — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Terraform modules per stamp; separate envs; Geode when any-node serves any client — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
