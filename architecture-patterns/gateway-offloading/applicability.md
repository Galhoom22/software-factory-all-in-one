# Gateway Offloading — applicability

## Signals

- Many services share edge policies
- Central cert management
- Consistent audit logs

## Anti-signals

- One service only
- Business rules pushed into the gateway

## Simpler alternative first

1. Shared library middleware
2. Service mesh policy

Adopt **Gateway Offloading** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | API gateways; ingress controllers; Laravel middleware at edge app — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | API gateways; ingress controllers; Laravel middleware at edge app — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
