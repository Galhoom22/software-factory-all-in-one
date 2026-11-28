# Static Content Hosting — applicability

## Signals

- SPAs
- Images/docs
- Downloadables

## Anti-signals

- Highly dynamic personalized HTML without edge compute story

## Simpler alternative first

1. Platform static hosting
2. Nginx static root

Adopt **Static Content Hosting** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | S3/R2 + CDN; Laravel Vapor-style; Next static export — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | S3/R2 + CDN; Laravel Vapor-style; Next static export — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
