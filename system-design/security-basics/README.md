# Security basics for system design

| | |
|--|--|
| **Family** | Security |
| **Kind** | concept |
| **Intent** | Bake authn/z, transport security, secrets, and least privilege into the design sketch — not as afterthought. |
| **WAF pillars (lens)** | Security, Reliability |

## Summary

Bake authn/z, transport security, secrets, and least privilege into the design sketch — not as afterthought. Open this folder only after [`07-judgment/system-design.md`](../../07-judgment/system-design.md) names it. Prefer simpler baselines; record an Architecture Decision Record when consequential. Forever-generic — do not paste interview toy brands into products.

## Use when

- Every public system
- Multi-tenant designs

## Avoid when

- Security theater without threat model

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative |
| [`implementation.md`](implementation.md) | Steps, sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, siblings |

## Sources

| Source | Checked |
|--------|---------|
| https://github.com/donnemartin/system-design-primer (topic inspiration — original prose here) | 2026-11-28 |
| Azure Well-Architected pillars (lens only) | 2026-11-28 |
