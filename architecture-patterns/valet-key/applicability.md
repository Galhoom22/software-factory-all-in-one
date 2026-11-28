# Valet Key — applicability

## Signals

- Uploads/downloads
- CDN private objects
- Reduce app egress

## Anti-signals

- Tiny files where proxy is fine
- Tokens without scope/expiry

## Simpler alternative first

1. App proxy with auth
2. Static Content Hosting for public assets

Adopt **Valet Key** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | S3 pre-signed URLs; Azure SAS conceptually; Laravel temporary URLs — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | S3 pre-signed URLs; Azure SAS conceptually; Laravel temporary URLs — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
