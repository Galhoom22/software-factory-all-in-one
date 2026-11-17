# Judgment — object-oriented design patterns

Absorb **GoF-style design pattern courses** (creational / structural / behavioral blueprints; problem → naive → enhanced) as judgment for implementation design. Do **not** dump a pattern encyclopedia into the repo, force a named pattern on every feature, or copy toy “pizza/duck” sample trees.

Upstream reading (human only, optional): classic GoF catalogs and reputable pattern courses. Prefer the **behaviors** below; keep instructor names and course PDFs out of product repos after absorption ([`01-STEPS.md`](../01-STEPS.md) § Absorb outside references).

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| A pattern is a **blueprint** (named solution shape), not a mandatory code paste | FEATURE_SDLC “Design pattern evaluation” · DECISIONS when architectural |
| **Define the problem first**, then a naive solution, then enhance — patterns earn their keep by fixing real pain (duplication, tight coupling, closed-for-extension) | Day design / spike notes · FEATURE design section |
| Patterns give a **shared language** (Factory, Strategy, Adapter, …) so review can say “this is an Adapter to the provider SDK” instead of inventing jargon | CodeRabbit / PR review · ARCHITECTURE |
| Prefer **composition (has-a)** over inheritance (is-a) unless the type hierarchy is the real domain model | clean-code / engineering-standards · FE/BE ARCHITECTURE |
| Creational / structural / behavioral is enough taxonomy for agents — pick the family that matches the pain | FEATURE conditional module |
| Framework-native mechanisms often **are** the pattern (middleware = Chain of Responsibility; queue jobs = Command; Eloquent relations ≠ invent Composite) | Prefer platform features (Ponytail order) |
| Not mandatory; **not only one valid pattern** per problem — document the choice and the rejected alternative when the abstraction is consequential | DECISIONS.md (options + ❌) |
| UML / simple structure sketches clarify IS-A, HAS-A, dependency before coding a new layer | FEATURE design · SAD/ADR judgment |

## Forbid

| Do not | Why |
|--------|-----|
| Introduce Factory / Observer / Strategy / DIY DI on a three-line fix | Ponytail + clean-code; pattern for show |
| Copy a full course sample domain into the product | Forever-generic; product domain wins |
| Treat Singleton as default for “global access” | Hidden coupling; prefer explicit injection / container the framework already has |
| Rewrite working modular-monolith boundaries to showcase patterns | Architecture stays the product’s chosen shape |
| Require a pattern name in every PR | Only when a consequential abstraction is added or changed |

## Professional bar (checklist)

Before adding or renaming a design-pattern-shaped abstraction:

1. **Problem named** in one sentence (what hurts today)?
2. **Naive path** stated (and why it fails on extensibility / coupling / duplication)?
3. **Pattern (or framework feature)** chosen because it removes that pain — not because it looks senior?
4. **Rejected alternative** named when the change is consequential (DECISIONS or FEATURE note)?
5. Call sites stay readable; no new package for a few lines?
6. Tests cover the behavior at the risk boundary (not the pattern slogan)?

## Day workflow hook

Same as [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md): when the day’s work introduces a **consequential new abstraction**, the design note or Pareto includes problem → naive → why this shape (or why the framework already covers it). If a surprising pattern misuse burned time, capture `docs/learning-from-mistakes/` and promote a generic bullet to [`06-LESSONS.md`](../06-LESSONS.md) automatically when professionalism rises.
