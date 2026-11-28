# Scheduler Agent Supervisor

| | |
|--|--|
| **Family** | Coordination |
| **Intent** | A scheduler kicks work, agents do it, a supervisor monitors and recovers. |
| **Also known as** | — |
| **WAF pillars (source map)** | Reliability, Performance Efficiency |

## Summary

A scheduler kicks work, agents do it, a supervisor monitors and recovers. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Long distributed tasks
- Need explicit recovery
- Agents may crash mid-work

## Avoid when

- Simple queue consumers with retries enough
- Overbuilt for one cron

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
