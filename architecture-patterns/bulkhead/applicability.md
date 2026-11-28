# Bulkhead — applicability

## Signals

- Multi-tenant noisy neighbors
- Critical checkout must survive search outages
- Separate connection pools per dependency

## Anti-signals

- Traffic is tiny and shared pools are fine
- Isolation cost exceeds blast-radius risk
- Circuit Breaker alone already sheds load

## Simpler alternative first

1. Timeouts + concurrency limits on one pool
2. Separate queue for the critical path only

Adopt **Bulkhead** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Separate queue workers; Redis connection pools; k8s resource quotas — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Separate queue workers; Redis connection pools; k8s resource quotas — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
