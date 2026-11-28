# Visitor — applicability

## Signals

- Multiple algorithms walk the same stable tree with different per-type logic.
- Element classes keep gaining methods that pull in foreign SDKs.
- A shared `switch (type)` module grows with every new operation and breaks often.
- Product roadmap adds operations faster than new node kinds.

## Anti-signals

- New node types land every sprint — Visitor forces edits across all visitors.
- Only one operation exists and will remain alone.
- Pattern matching on a closed union already expresses the variants clearly.
- Iterator + external pure functions cover the need without double dispatch.
- Elements are framework models you cannot add `accept` to (prefer external pattern matching).

## Simpler alternative first

1. **Methods on elements** when there is one operation and dependencies are light.
2. **Iterator + functions** that take a discriminated union / type tag.
3. **Pattern matching** (TS unions, PHP `match`) over a closed set of variants.
4. **Serializer libraries** for “to JSON/XML” instead of a hand-rolled SerializeVisitor.

Adopt Visitor when the stable-structure / volatile-operations trade-off is explicit and accepted.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Visitor |
|----------|-------------------|--------------------------------|
| Laravel | Blade/components for view concerns; collection `map` over DTOs; pipeline classes for export stages | Do not Visitor-walk Eloquent models for every report — project to a stable DTO tree first ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | `match` on enums / class strings for small closed sets | Prefer `match` until the operation set grows and element APIs must stay thin ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Discriminated unions + `switch`/`never` exhaustiveness; AST visitor libs only when you own an AST | TypeScript exhaustiveness checking often beats inventing Visitor classes for small unions ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): Visitor trades easy new *operations* for painful new *element types* — if both change, pick another design.
