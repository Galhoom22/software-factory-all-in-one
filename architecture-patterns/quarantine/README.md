# Quarantine

| | |
|--|--|
| **Family** | Security / supply |
| **Intent** | Hold external assets until they pass agreed quality/security checks. |
| **Also known as** | — |
| **WAF pillars (source map)** | Security, Operational Excellence |

## Summary

Hold external assets until they pass agreed quality/security checks. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- User uploads
- Third-party artifacts
- Model/prompt packs from outside

## Avoid when

- Fully trusted internal artifacts with other controls
- Checks that never promote (dead quarantine)

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/quarantine | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
