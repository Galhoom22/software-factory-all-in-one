# Compute Resource Consolidation — applicability

## Signals

- Low traffic modules
- Cost pressure on many idle instances
- Team owns a modular monolith well

## Anti-signals

- Hard isolation or scale axes differ wildly
- Blast radius requires Bulkhead/stamps
- Compliance mandates separate hosts

## Simpler alternative first

1. Keep separate services if already healthy
2. Serverless with scale-to-zero

Adopt **Compute Resource Consolidation** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Modular monolith; multi-command workers; k8s multi-container carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Modular monolith; multi-command workers; k8s multi-container carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
