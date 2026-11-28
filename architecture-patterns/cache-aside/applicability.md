# Cache-Aside — applicability

## Signals

- Read-heavy, write-light data
- Expensive queries with stable keys
- You can define TTL/invalidation rules

## Anti-signals

- Data must be strongly consistent on every read
- Working set does not fit cache
- Framework already caches the page/response safely

## Simpler alternative first

1. HTTP cache headers / CDN
2. DB materialized view
3. In-process memo for one request

Adopt **Cache-Aside** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel Cache / Redis; Next.js cache; CDN for static — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel Cache / Redis; Next.js cache; CDN for static — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
