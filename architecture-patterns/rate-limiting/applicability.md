# Rate Limiting — applicability

## Signals

- Public APIs
- Multi-tenant fairness
- Protect expensive AI/payment calls

## Anti-signals

- Internal trusted low-QPS tools
- Limits so low they break real users without tiers

## Simpler alternative first

1. WAF rules
2. Gateway Offloading quota

Adopt **Rate Limiting** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | API gateway policies; Laravel RateLimiter; Redis counters — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | API gateway policies; Laravel RateLimiter; Redis counters — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
