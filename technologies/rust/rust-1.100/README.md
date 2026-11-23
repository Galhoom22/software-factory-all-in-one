# Rust 1.100 — version slice

**Toolchain:** Rust **1.100.0** (stable, **2026-11-12**) — [Release notes](https://doc.rust-lang.org/stable/releases.html)  
**Edition for new crates:** **2024** — [Creating a new project](https://doc.rust-lang.org/stable/edition-guide/editions/creating-a-new-project.html) · [Edition Guide](https://doc.rust-lang.org/stable/edition-guide/)  
**Checked:** 2026-11-23  

**Also note:** Older editions (2015 / 2018 / 2021) remain supported on current stable; prefer **2024** for greenfield. Nightly / `future` edition are out of scope for product code unless ADR says otherwise.

## Files

| File | Purpose |
|------|---------|
| [`use-these.md`](use-these.md) | Prefer these on Rust 1.100 + edition 2024 |
| [`stop-using.md`](stop-using.md) | Legacy / ban in new code |
| [`common-mistakes.md`](common-mistakes.md) | Failure modes agents hit |

## Agent rule

Before writing Rust: open this slice **and** re-check doc.rust-lang.org / Context7 `/rust-lang/rust` for the product’s pinned toolchain. Product SRS/ADR owns the rustc + edition pin.
