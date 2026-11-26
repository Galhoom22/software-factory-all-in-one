# Rust — technology pack

**Pinned slice for new work in this pack:** **Rust 1.100** (stable toolchain **1.100.0**, released **2026-11-12**) with **edition = "2024"** (Cargo `new` default; latest stable edition). Docs checked **2026-11-23**.  
**Official home:** [Rust Documentation (stable)](https://doc.rust-lang.org/stable/) · [The Book](https://doc.rust-lang.org/stable/book/) · [std](https://doc.rust-lang.org/stable/std/) · [Cargo Book](https://doc.rust-lang.org/stable/cargo/) · [Edition Guide](https://doc.rust-lang.org/stable/edition-guide/) · [Release notes](https://doc.rust-lang.org/stable/releases.html)

**Context7:** `/rust-lang/rust` (prefer over mirrors). Reference: `/rust-lang/reference`.

## When to open this pack

- Writing or reviewing **Rust language** code (CLI, libraries, services, WASM, embedded, Tauri backends — language craft).
- Choosing modern **edition 2024** + stable toolchain defaults vs older editions / `unsafe`-heavy habits.
- Separating **language** (this pack) from future crates.io framework packs (Axum, Bevy, …) when the owner asks for one.

## Files

| File | Purpose |
|------|---------|
| [`official-refs.md`](official-refs.md) | Curated doc.rust-lang.org URLs (dated) |
| [`best-practices.md`](best-practices.md) | Modern Rust defaults |
| [`quality.md`](quality.md) | Clean Code + architecture + patterns in Rust form |
| [`rust-1.100/`](rust-1.100/README.md) | Version slice: use / stop / common mistakes |

## Product vs pack

- This pack is **Rust language + Cargo toolchain** professionalism grounded in the official Bookshelf.
- **Edition is not the compiler version.** Pin `edition = "2024"` in `Cargo.toml` for new crates ([creating a new project](https://doc.rust-lang.org/stable/edition-guide/editions/creating-a-new-project.html)); pin the **rustc/rustup** channel the product SRS names (prefer current stable **1.100.x** unless ADR pins otherwise).
- Do **not** silently rewrite a Laravel/Next (or other) product to Rust — stack choice stays [`stack-selection.md`](../../07-judgment/stack-selection.md) + product ADR.
- Prefer **stable** over nightly for product code unless an ADR documents a required unstable feature and a removal plan.

## Related

- Design patterns / Context7 / human review: factory `07-judgment/`
- Packages over reinvention (crates.io): [`07-judgment/packages.md`](../../07-judgment/packages.md)
- Industry surfaces (CLI, systems, Tauri affinity): [`coverage/07-software-surfaces.md`](../../coverage/07-software-surfaces.md)
- Stack selection before forcing Rust onto a product: [`07-judgment/stack-selection.md`](../../07-judgment/stack-selection.md)
