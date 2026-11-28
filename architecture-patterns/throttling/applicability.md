# Throttling — applicability

## Signals

- Protect databases
- Shared CPU
- Multi-tenant fairness

## Anti-signals

- Idle systems
- Throttling without user-visible strategy

## Simpler alternative first

1. Rate Limiting at edge
2. Queue-Based Load Leveling

Adopt **Throttling** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Concurrency limits; gateway quotas; Laravel middleware — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Concurrency limits; gateway quotas; Laravel middleware — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
