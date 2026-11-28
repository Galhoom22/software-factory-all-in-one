# Sidecar — applicability

## Signals

- Mesh proxies
- Log shippers
- Auth adapters language-agnostic

## Anti-signals

- Library middleware is enough
- Sidecar resource cost dominates

## Simpler alternative first

1. Shared library
2. Ambassador as library

Adopt **Sidecar** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | k8s sidecars; service mesh; Compose side services — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | k8s sidecars; service mesh; Compose side services — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
