# Content delivery network

| | |
|--|--|
| **Family** | Edge |
| **Kind** | concept |
| **Intent** | Serve static (and some dynamic) content from edge caches closer to users. |
| **WAF pillars (lens)** | Performance Efficiency, Cost Optimization |

## Summary

Serve static (and some dynamic) content from edge caches closer to users. Open this folder only after [`07-judgment/system-design.md`](../../07-judgment/system-design.md) names it. Prefer simpler baselines; record an Architecture Decision Record when consequential. Forever-generic — do not paste interview toy brands into products.

## Use when

- Images, JS/CSS, downloads
- Global marketing sites

## Avoid when

- Personalized private HTML on shared CDN without care

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
