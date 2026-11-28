# Reverse proxy

| | |
|--|--|
| **Family** | Edge |
| **Kind** | concept |
| **Intent** | Terminate client connections at a proxy that forwards to backends — caching, compression, TLS, routing. |
| **WAF pillars (lens)** | Security, Performance Efficiency, Reliability |

## Summary

Terminate client connections at a proxy that forwards to backends — caching, compression, TLS, routing. Open this folder only after [`07-judgment/system-design.md`](../../07-judgment/system-design.md) names it. Prefer simpler baselines; record an Architecture Decision Record when consequential. Forever-generic — do not paste interview toy brands into products.

## Use when

- TLS termination
- Path routing
- Static + app combo

## Avoid when

- Giant unowned proxy config

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
