# Technologies — reusable stack references

**What this is:** a growing library of **per-technology** packs agents and humans use when a product chooses that stack. Each pack distills **official** docs into best practices, “prefer these,” “stop using these,” and common mistakes — forever-generic, no product names.

**What this is not:** a second SRS, a dump of the full manual, or permission to change a product’s pinned versions without an ADR / SRS update. Product stack pins stay in that product’s `docs/SRS.md` §2.

## Layout

```text
playbook/technologies/
  README.md                 ← this file
  php/                      ← language pack
    README.md
    official-refs.md
    best-practices.md
    php-8.6/                ← version slice (current Active line for this pack)
      README.md
      use-these.md
      stop-using.md
      common-mistakes.md
  laravel/                  ← (add when needed)
  nextjs/                   ← (add when needed)
  …
```

| Folder naming | Rule |
|---------------|------|
| Top-level slug | Lowercase, no spaces (`php`, `laravel`, `nextjs`, `postgresql`) |
| Version slice | Exact line the pack targets (`php-8.6`, `laravel-13`, `nextjs-16`) |
| Always include | `README.md` (pin + when to open) + `official-refs.md` (dated links to official sites) |

## How agents must use a pack

1. **Product SRS wins** for which major/minor the *product* runs. If SRS says PHP 8.4 and the pack is 8.6, do not upgrade silently — propose an ADR.
2. When coding in that language/framework, **read the matching pack** (version slice + `best-practices.md`) before inventing style.
3. Prefer **official** links in `official-refs.md`. Re-verify on the vendor site when bumping a version.
4. When the owner asks to “add docs for X,” either deepen the existing pack or add `technologies/<slug>/` — then update [`coverage/`](../coverage/README.md) and sync the studio playbook mirror.
5. Keep packs **actionable** (rules agents can apply). Do not paste entire manuals.

## Adding the next technology

1. Create `technologies/<slug>/README.md` + `official-refs.md` + `best-practices.md`.
2. Add a version slice `<slug>-<version>/` with `use-these.md`, `stop-using.md`, `common-mistakes.md` when the release line matters.
3. Link it from this README’s table below and bump coverage %.
4. Sync studio `planning-playbook` the same session.

## Packs present

| Pack | Current slice | Status |
|------|---------------|--------|
| [`php/`](php/README.md) | [`php-8.6/`](php/php-8.6/README.md) | ✅ Started 2026-11-21 (official PHP 8.6, released 2026-11-19) |
| `laravel/` | — | ❌ Placeholder — add when owner asks |
| `nextjs/` | — | ❌ Placeholder — add when owner asks |
