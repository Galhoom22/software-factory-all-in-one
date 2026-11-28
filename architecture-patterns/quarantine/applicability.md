# Quarantine — applicability

## Signals

- User uploads
- Third-party artifacts
- Model/prompt packs from outside

## Anti-signals

- Fully trusted internal artifacts with other controls
- Checks that never promote (dead quarantine)

## Simpler alternative first

1. Sync antivirus on upload
2. CI dependency scanning

Adopt **Quarantine** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Object storage lifecycle; CI gates; Laravel upload pipelines — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Object storage lifecycle; CI gates; Laravel upload pipelines — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
