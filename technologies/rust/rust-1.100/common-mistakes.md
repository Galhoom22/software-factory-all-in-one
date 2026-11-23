# Rust 1.100 — common mistakes

## Ownership / borrowing

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Fighting the borrow checker with `clone` everywhere | Hidden costs; unclear ownership | Redesign ownership; borrow; only clone when needed ([Book ch.4](https://doc.rust-lang.org/stable/book/ch04-00-understanding-ownership.html)) |
| Holding a borrow across a move | E0505-class errors | End borrows before move |
| Returning references to locals | Does not compile / dangling | Return owned values or adjust lifetimes |

## Errors

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| `unwrap` on `Result`/`Option` from I/O | Panics in production | `?` + typed errors ([Book ch.9](https://doc.rust-lang.org/stable/book/ch09-00-error-handling.html)) |
| Swallowing errors with empty `match` / `let _ =` | Silent data loss | Propagate or handle explicitly |
| Using `panic!` for control flow | Unwinding as business logic | `Result` |

## Unsafe / edition 2024

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Large `unsafe fn` bodies without blocks | Hard audits; edition 2024 warns | Explicit `unsafe { … }` per op |
| `unsafe` without stating invariant | Memory/UB risk | Safety comment + Nomicon review |
| `unsafe impl Send/Sync` casually | Data races | Prove invariants or avoid |

## Tooling / agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Inventing std / crate APIs from memory | Wrong signatures | Context7 `/rust-lang/rust` + docs.rs / `cargo doc` |
| Skipping `cargo clippy` | Style and correctness debt | Clippy in CI |
| God `main.rs` | Untestable | Modules + `lib` for logic |
| Pattern-for-show (Builder on 3 fields) | Noise | [`design-patterns.md`](../../../07-judgment/design-patterns.md) |
| Assuming every product should be Rust | Wrong stack | Product SRS; this pack is craft only |

## Security

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Trusting FFI / unchecked slices | Memory unsafety | Safe wrappers; bound checks |
| Logging secrets / PII | Compliance breach | Redact; product SECURITY |
| DIY crypto | Broken crypto | Audited crates only |
