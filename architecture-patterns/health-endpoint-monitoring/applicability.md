# Health Endpoint Monitoring — applicability

## Signals

- Orchestrated platforms
- Dependency-sensitive apps
- Automated remediation

## Anti-signals

- Health check that is heavier than real traffic
- Checking every dependency on every probe without timeouts

## Simpler alternative first

1. Platform default /healthz
2. Synthetic uptime checks only

Adopt **Health Endpoint Monitoring** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel health routes; k8s probes; Spring Actuator-style endpoints — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel health routes; k8s probes; Spring Actuator-style endpoints — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
