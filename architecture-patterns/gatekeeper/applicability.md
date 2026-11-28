# Gatekeeper — applicability

## Signals

- Zero-trust edge
- Untrusted clients
- Need a single policy enforcement point

## Anti-signals

- Private network only with no public edge
- API gateway already enforces the same checks

## Simpler alternative first

1. Framework middleware on one public API
2. WAF + auth at CDN

Adopt **Gatekeeper** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | API gateway; Laravel middleware stack; reverse proxy — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | API gateway; Laravel middleware stack; reverse proxy — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
