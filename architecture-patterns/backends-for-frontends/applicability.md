# Backends for Frontends — applicability

## Signals

- Mobile needs different payloads/auth than web
- Partner API must not expose internal aggregates
- Release cadences differ per client

## Anti-signals

- One SPA with one API is enough
- BFFs duplicate domain rules instead of composing
- You only need Gateway Routing to existing services

## Simpler alternative first

1. Query params / sparse fieldsets on one API
2. GraphQL with client-specific queries (when already chosen)

Adopt **Backends for Frontends** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Next.js route handlers as BFF; Laravel API modules per channel — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Next.js route handlers as BFF; Laravel API modules per channel — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
