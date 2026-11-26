# Rust 1.100 — use these

Prefer on **stable 1.100.x** with **edition 2024** unless the product ADR pins older.

## Prefer for greenfield

| Prefer | Why / source |
|--------|----------------|
| `edition = "2024"` in `Cargo.toml` | Cargo `new` default ([edition guide](https://doc.rust-lang.org/stable/edition-guide/editions/creating-a-new-project.html)) |
| `rustup` **stable** matching product pin (1.100.x here) | [doc hub](https://doc.rust-lang.org/stable/) + [releases](https://doc.rust-lang.org/stable/releases.html) |
| `cargo fmt` + `cargo clippy` + `cargo test` | Bookshelf tooling ([Style Guide](https://doc.rust-lang.org/stable/style-guide/), [Clippy](https://doc.rust-lang.org/stable/clippy/)) |
| Ownership / borrowing before `clone`/`Rc` | [Book ownership](https://doc.rust-lang.org/stable/book/ch04-00-understanding-ownership.html) |
| `Result` + `?` for recoverable errors | [Book errors](https://doc.rust-lang.org/stable/book/ch09-00-error-handling.html) |
| `Option` for absence; `match` / `if let` / `let…else` | Book enums & control flow |
| Explicit `unsafe` **blocks** for unsafe ops (incl. inside `unsafe fn`) | Edition 2024 `unsafe_op_in_unsafe_fn` default warn |
| Modules + intentional `pub` API surface | [Book packages/crates/modules](https://doc.rust-lang.org/stable/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html) |
| `cargo doc --open` for crate + deps docs | [Documentation hub](https://doc.rust-lang.org/stable/) |
| Verified crates.io packages for non-trivial work | [`packages.md`](../../../07-judgment/packages.md) |

## Prefer when concurrency / async

| Prefer | Notes |
|--------|-------|
| Channels / structured concurrency patterns from the Book | [ch.16](https://doc.rust-lang.org/stable/book/ch16-00-concurrency.html) |
| One pinned async runtime + its official docs | Do not mix runtimes casually |
| `async`/`await` for I/O-bound work | [Book async](https://doc.rust-lang.org/stable/book/ch17-00-async-await.html) |

## Still fine from older editions

Edition 2021 crates can stay on 2021 until a deliberate migration. When touching them, do not silently bump edition mid-fix without tests — use the Edition Guide migration path.
