# Strangler Fig — applicability

## Signals

- Legacy modernization
- Risk-managed cutovers
- Parallel run

## Anti-signals

- Greenfield with no legacy
- Forever dual-running without an end plan

## Simpler alternative first

1. Branch-by-abstraction inside one repo
2. Anti-Corruption Layer only

Adopt **Strangler Fig** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Gateway Routing rules; feature flags; Laravel route proxies — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Gateway Routing rules; feature flags; Laravel route proxies — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
