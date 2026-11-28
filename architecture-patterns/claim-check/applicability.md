# Claim Check — applicability

## Signals

- Payloads exceed bus limits
- Many consumers should not all receive the bytes
- Need retention separate from message TTL

## Anti-signals

- Messages are already small
- Store and bus share one tightly coupled product with no size issue

## Simpler alternative first

1. Pass URL to existing object storage
2. Compress if still under limits

Adopt **Claim Check** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | S3/R2/local disk + queue; Laravel Storage + jobs — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | S3/R2/local disk + queue; Laravel Storage + jobs — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
