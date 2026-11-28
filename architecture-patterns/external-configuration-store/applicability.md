# External Configuration Store — applicability

## Signals

- Feature flags / dynamic limits
- Many environments
- Secrets must not sit in images

## Anti-signals

- Truly static build-time constants
- Store becomes an undocumented second database of business rules

## Simpler alternative first

1. Env vars at deploy
2. Platform secrets manager only

Adopt **External Configuration Store** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel config + secrets manager; 12-factor env; Consul/App Config-style stores — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel config + secrets manager; 12-factor env; Consul/App Config-style stores — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
