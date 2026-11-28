# AGENTS.md — Software Factory All-in-One

Rules for AI agents working **on this kit**: its own repository, or the vendored copy inside a product repository (`<product>/software-factory-all-in-one/`). Agents working on a *product* follow that product's `AGENTS.md`.

## Where am I?

- **Vendored copy** (the folder sits inside a product repository): treat it as **read-only**. Product facts belong in the product's own docs; improvements to the kit go upstream as a pull request to the kit's repository ([`CONTRIBUTING.md`](CONTRIBUTING.md)). The only exception is a maintainer's designated source copy.
- **The kit's own repository:** follow [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Load little

Start at [`ARCHITECTURE.md`](ARCHITECTURE.md) § 1 and follow one route. Open a judgment guide only when its trigger in [`07-judgment/README.md`](07-judgment/README.md) applies, only the pinned stack's technology pack, and only the harness pack you are driving. § 2 there says which document wins.

## Hard rules

1. **Forever generic** ([SF-14](DECISIONS.md#sf-14-forever-generic-public-contributions-upstream)): no product names, people, tracker keys, private URLs, secrets or real personal data; defaults are `{{PLACEHOLDERS}}`, never one product's choices.
2. **Cite only decisions defined in** [`DECISIONS.md`](DECISIONS.md) (`SF-NN`).
3. **One home per fact** ([`ARCHITECTURE.md`](ARCHITECTURE.md) § 4): deepen the existing home; never add a parallel document or restate a rule you can link.
4. **Never paste or write back a tool's compressed or elided view of a file.** Edit with exact replacements and review net deletions before committing.
5. **Templates use product coordinates** ([`ARCHITECTURE.md`](ARCHITECTURE.md) § 4).
6. **Candor** ([SF-07](DECISIONS.md#sf-07-candor)): refuse a change that would lower professionalism and propose a better one.

## Before you finish

```bash
node scripts/check-forever-generic.mjs
node scripts/check-content-integrity.mjs
node scripts/check-structure.mjs
node scripts/check-requirements-activation.mjs
node scripts/check-seed.mjs
```

## Documentation language (SF-21)

All kit documentation and agent instructions are **English only**. Do not add non-English aliases or guidance. Product UI locales in seeded products are separate from kit instruction language.
