# Circuit Breaker — applicability

## Signals

- Remote dependencies with cascading risk
- Fail-fast UX is better than hanging
- You have a fallback or degraded mode

## Anti-signals

- Local in-process calls
- Failures are always transient and Retry alone is enough
- Breaker hides systemic bugs without alerts

## Simpler alternative first

1. Timeouts + Retry with budget
2. Bulkhead limits

Adopt **Circuit Breaker** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | HTTP client policies; resilience libraries; mesh outlier detection — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | HTTP client policies; resilience libraries; mesh outlier detection — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
