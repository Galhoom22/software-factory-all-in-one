# Gateway Routing — applicability

## Signals

- Microservice edge
- Blue/green or version routing
- Hide topology from clients

## Anti-signals

- Single service
- Routing logic encodes deep business rules

## Simpler alternative first

1. Reverse proxy config
2. Platform ingress

Adopt **Gateway Routing** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Nginx/Traefik/API gateway; Laravel route prefixes in a gateway app — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Nginx/Traefik/API gateway; Laravel route prefixes in a gateway app — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
