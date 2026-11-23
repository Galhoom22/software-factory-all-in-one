# Rust 1.100 — stop using these

Sources: [the Book](https://doc.rust-lang.org/stable/book/), [Edition Guide](https://doc.rust-lang.org/stable/edition-guide/), [Nomicon](https://doc.rust-lang.org/stable/nomicon/), Clippy/Style Guide.

**Rule for agents:** do not introduce the left column in new code. When touching old code, prefer migrating in the same change if cheap.

## Ban in new code

| Stop using | Use instead |
|------------|-------------|
| Nightly as default for product apps | Stable 1.100.x (or product-pinned stable) |
| `edition = "2015"` / `"2018"` for greenfield | `edition = "2024"` |
| `unwrap()` / `expect()` on user/I/O paths | `?` + typed errors; `expect` only for invariants |
| Ignoring Clippy / rustfmt in CI | `cargo fmt --check` + Clippy gate |
| Broad `unsafe` without a safety comment | Minimal `unsafe` block + invariant; prefer safe crates |
| `unsafe` ops outside `unsafe` blocks (even in `unsafe fn`) | Explicit blocks (edition 2024 lint) |
| `static mut` for ordinary state | Interior mutability / channels / redesign |
| Stringly typed errors everywhere | `thiserror`/`anyhow` (when justified) or domain `enum` errors |
| Inventing HTTP/TLS/crypto by hand | Maintained crates after packages judgment |
| Copying random blog “Rust tips” into AGENTS | This pack + official Bookshelf |

## Avoid unless measured need

| Avoid | Prefer |
|-------|--------|
| Premature `Rc`/`Arc`/`Mutex` soup | Clear ownership; share only when required |
| Macro-heavy DSLs for one call site | Functions + types; macros when repetition is real |
| Disabling `clippy::all` | Allow specific lints with a one-line why |
| Mixing multiple async runtimes | One runtime per binary |

## Never as product constitution

| Stop | Why |
|------|-----|
| “Always Rust” for every product | [`stack-selection.md`](../../../07-judgment/stack-selection.md) |
| Bumping MSRV / edition mid-Story without ADR | Product DECISIONS / SRS pin |
| Treating Nomicon patterns as default style | Safe Rust first |
