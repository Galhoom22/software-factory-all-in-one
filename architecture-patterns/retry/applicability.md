# Retry — applicability

## Signals

- HTTP 429/503
- Deadlocks
- Brief network glitches

## Anti-signals

- Logic bugs
- Non-idempotent posts without keys
- Retry without Circuit Breaker on persistent fail

## Simpler alternative first

1. Framework HTTP retry defaults
2. Queue automatic retry

Adopt **Retry** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Guzzle/Laravel HTTP retries; AWS SDK retries; poly policies — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Guzzle/Laravel HTTP retries; AWS SDK retries; poly policies — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
