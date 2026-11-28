# Anti-Corruption Layer — applicability

## Signals

- Strangler migration with ongoing dual systems
- Vendor SDK shapes must not enter the domain
- Two bounded contexts speak incompatible languages

## Anti-signals

- One mapping function at the composition root is enough
- Systems share the same ubiquitous language already
- You only need a façade for a subsystem — see Facade (GoF)

## Simpler alternative first

1. One adapter class
2. OpenAPI codegen behind a port

Adopt **Anti-Corruption Layer** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Ports/adapters; Laravel AntiCorruption services; Node mappers — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Ports/adapters; Laravel AntiCorruption services; Node mappers — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
