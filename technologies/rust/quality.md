# Rust — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar. Stack-specific syntax lives in [`best-practices.md`](best-practices.md) and [`rust-1.100/`](rust-1.100/README.md). Cross-cutting rules live in playbook homes below — **do not duplicate them**; apply them in Rust form.

## 1. Clean Code (always on)

Source: project / user `clean-code.mdc` + playbook Clean Code rules.

| Rule | Rust shape |
|------|------------|
| Names reveal intent | `user_id`, `find_active_subscription()`, snake_case items, UpperCamelCase types |
| Functions do one thing | One `fn` ≈ one behavior; early `return` / `?` over deep nesting |
| Small focused units | Prefer small modules/types; extract when a block needs its own name |
| Comments explain **why** | `///` on public items; safety comments on `unsafe`; no narrating `for` |
| Errors are part of the design | `Result`/`Option` at trust boundaries; no empty `match` arms that swallow |
| Campsite rule | Leave the module clearer than you found it — only touch what the task needs |

Ponytail still wins on size: smallest **complete** change that meets this bar — no trait-object DIY DI scaffolding on a three-line fix.

## 2. Clean / modular architecture (Rust crates)

| Prefer | Avoid |
|--------|-------|
| Clear crate / module boundaries (`lib` vs `bin`, feature flags) | God `main.rs` mixing I/O, domain, and config |
| Framework/runtime conventions the product already chose | Second async runtime “for one call site” |
| Compiler + Clippy as the default correctness layer | Blanket `#[allow(clippy::all)]` |
| Depend on stable traits/types already in the crate graph | New abstraction crates “for later” with one call site |

When the product is not on Rust, do not invent a Rust rewrite — this pack is craft for when Rust **is** the chosen stack ([`stack-selection.md`](../../07-judgment/stack-selection.md)).

## 3. Design patterns (judgment only)

Source: [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md).

| Do | Don’t |
|----|-------|
| Problem → naive path → why this shape when the abstraction is consequential | Pattern encyclopedia in every PR |
| Prefer composition, enums, and small modules | Global `static mut` and singleton bags |
| Use idioms the codebase already has (newtype, builder when earned) | Drop Builder/Factory on a local helper |

## 4. Human review + current docs

- Human bar: [`human-code-review.md`](../../07-judgment/human-code-review.md) — readable Rust, modern pinned-line syntax, Clippy-clean when required.
- Freshness: [`context7-docs.md`](../../07-judgment/context7-docs.md) — Context7 ID `/rust-lang/rust` and/or https://doc.rust-lang.org/stable/ this session.
