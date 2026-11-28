# Ambassador — applicability

## Signals

- Many consumers share the same outbound policy
- You need one place to rotate credentials for egress
- Local language SDKs cannot express mesh policy

## Anti-signals

- A single HTTP call with framework middleware is enough
- You need request routing for many backends — prefer Gateway Routing
- Sidecar already covers the same concerns in your mesh

## Simpler alternative first

1. Shared HTTP client module
2. Service-mesh sidecar without a custom ambassador

Adopt **Ambassador** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel HTTP client middleware; Node fetch wrappers; mesh sidecars — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel HTTP client middleware; Node fetch wrappers; mesh sidecars — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
