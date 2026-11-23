# Rust — best practices (modern baseline)

Defaults for agents writing **Rust** under this pack. Grounded in [the Book](https://doc.rust-lang.org/stable/book/), [Cargo](https://doc.rust-lang.org/stable/cargo/), [Clippy](https://doc.rust-lang.org/stable/clippy/), and the [Edition Guide](https://doc.rust-lang.org/stable/edition-guide/). Version-specific 1.100 / edition 2024 notes live in [`rust-1.100/`](rust-1.100/README.md).

## 1. Toolchain and project shape

- Prefer **`rustup` + stable** channel matching the product pin (this pack: **1.100.x**). Avoid nightly for product code unless ADR requires it.
- Prefer **`cargo new` / `cargo init`** so `edition = "2024"` is the default for greenfield ([edition guide](https://doc.rust-lang.org/stable/edition-guide/editions/creating-a-new-project.html)).
- Prefer **workspace** layout when multiple crates share a product; one `Cargo.toml` per crate with clear `[package]` metadata.
- Prefer **`cargo fmt`**, **`cargo clippy`**, **`cargo test`**, and **`cargo doc`** as the default local/CI gate set — same idea as pint/phpunit for PHP products.

## 2. Ownership, types, and APIs

- Design APIs around **ownership and borrowing** first ([Book ch.4](https://doc.rust-lang.org/stable/book/ch04-00-understanding-ownership.html)). Prefer `&T` / `&mut T` over cloning; clone when ownership transfer is wrong and cost is acceptable.
- Prefer **`Result<T, E>`** for recoverable errors and **`Option<T>`** for absence ([Book ch.9](https://doc.rust-lang.org/stable/book/ch09-00-error-handling.html)). Prefer `?` for propagation.
- Prefer **`panic!` / `unwrap` / `expect`** only for programmer bugs or documented invariants — not for ordinary I/O or user input.
- Prefer **`match`**, **`if let`**, **`let…else`**, and exhaustive enums over boolean soup.
- Prefer **modules and `pub` privacy** that match the crate’s public API ([Book ch.7](https://doc.rust-lang.org/stable/book/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html)).

## 3. Concurrency and async

- Prefer Rust’s **type-system guarantees** for threads ([Book ch.16](https://doc.rust-lang.org/stable/book/ch16-00-concurrency.html)): share via channels / `Arc` + interior mutability only when needed.
- Prefer **`async` / `await`** with an explicit runtime the product pins (Tokio, async-std, …) — look up that crate’s official docs; do not invent executor APIs from memory.
- Prefer **`Send` / `Sync`** awareness at crate boundaries; do not `unsafe impl` without a written invariant.

## 4. `unsafe` and FFI

- Prefer **safe abstractions**. Treat [`The Rustonomicon`](https://doc.rust-lang.org/stable/nomicon/) as required reading before non-trivial `unsafe`.
- Prefer **small, reviewed `unsafe` blocks** with a one-line safety comment stating the invariant. Edition 2024 tightens **`unsafe_op_in_unsafe_fn`** — put operations in explicit `unsafe` blocks even inside `unsafe fn`.
- Prefer well-maintained FFI / binding crates over hand-rolled `extern` when packages judgment says so ([`packages.md`](../../07-judgment/packages.md)).

## 5. Dependencies and crates.io

- Prefer **verified crates** for non-trivial work (HTTP, TLS, serialization) after fit / maintenance / license / security checks.
- Prefer **pinning versions** in `Cargo.lock` for apps; libraries follow SemVer expectations in Cargo Book.
- Prefer **feature flags** intentionally — do not enable every feature “for later.”

## 6. Style and tooling

- Prefer **`rustfmt`** defaults ([Style Guide](https://doc.rust-lang.org/stable/style-guide/)); do not invent a second style bible.
- Prefer **Clippy** on CI (`cargo clippy -- -D warnings` when the product DoD allows); configure via `[lints]` / `[lints.clippy]` in `Cargo.toml` when needed.
- Re-check Context7 `/rust-lang/rust` and/or doc.rust-lang.org for the pinned line before non-trivial APIs ([`context7-docs.md`](../../07-judgment/context7-docs.md)).
