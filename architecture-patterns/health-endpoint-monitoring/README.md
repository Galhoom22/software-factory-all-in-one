# Health Endpoint Monitoring

| | |
|--|--|
| **Family** | Ops / reliability |
| **Intent** | Expose checks that probes can call to know if the instance should receive traffic. |
| **Also known as** | Health checks |
| **WAF pillars (source map)** | Reliability, Operational Excellence, Performance Efficiency |

## Summary

Expose checks that probes can call to know if the instance should receive traffic. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Orchestrated platforms
- Dependency-sensitive apps
- Automated remediation

## Avoid when

- Health check that is heavier than real traffic
- Checking every dependency on every probe without timeouts

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
