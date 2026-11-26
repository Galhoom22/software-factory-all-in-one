# Contributing to Software Factory All-in-One

Thanks for helping raise the craft. This repository is **forever generic**: practices that help any team ship software with AI agents — never one product's private details. Agents also follow [`AGENTS.md`](AGENTS.md); this file is the procedure for humans and agents alike.

## Hard rule (enforced)

CI runs `node scripts/check-forever-generic.mjs` on every push and pull request. It blocks structural leakage — mailboxes, secret-shaped tokens, private page URLs, absolute user paths — not every possible private name, so review still matters. If structural private leakage (a mailbox, a secret, a private page URL, an absolute user path) ever slips in once:

1. Remove it in the same change.
2. Add a rule to [`scripts/forever-generic-denylist.json`](scripts/forever-generic-denylist.json) so that *shape* cannot return.

Names of private products, people or organisations cannot be listed in a public denylist; maintainers block them with a private one before publishing (see § Maintainers).

## What belongs here

- Reusable method docs, judgment guides, technology and agent packs, templates and self-checks
- Lessons that prevent real rework, trust or security mistakes for the next product
- Fixes that raise clarity, correctness or professionalism

## What does not belong here

- Product names, people, tracker keys (for example `ABC-123`), private page URLs or organisation-only secrets
- Repository names of a private product
- One product's choices presented as defaults — use `{{PLACEHOLDERS}}`
- Bar-lowering shortcuts, vanity numbers, or a second home for a practice that already has one
- Real personal data or personal mailboxes

Product-specific details belong in that product's own planning repository (`docs/OWNER_STANDING.md`, its DECISIONS, its boards).

## Changing the factory

Run this before inventing or "improving" a practice. The dimensions it must raise are defined in [`EXCELLENCE.md`](EXCELLENCE.md).

1. **North star** — does the change move at least one excellence dimension up without moving another down?
2. **Atlas first** — consult [`coverage/`](coverage/README.md) (✅ / ⚠️ / ❌ + %); deepen the existing home when it is strong.
3. **Candor** — if the change would lower professionalism, refuse and propose a safer alternative ([SF-07](DECISIONS.md#sf-07-candor)).
4. **Smallest complete** — the least new surface that fully works; no parallel constitutions; one home per fact ([`ARCHITECTURE.md`](ARCHITECTURE.md) § 4).
5. **Wire it** — method, prompts, lessons, day loop or CI as needed, so agents actually use it.
6. **Measure** — update the atlas row or % in the same change, and add a line under `## [Unreleased]` in [`CHANGELOG.md`](CHANGELOG.md) (with migration steps when vendored copies must act).
7. **Always-Current** — finish the freshness closeout in [`07-judgment/playbook-freshness.md`](07-judgment/playbook-freshness.md) and re-verify official docs for every pack you touched.
8. **Leave a trail** — a lasting change to how the kit works gets a decision in [`DECISIONS.md`](DECISIONS.md).

**Ratchet rule:** never ship a change that makes the next product less professional than before. Prefer skip over a noisy "upgrade."

## How to contribute

1. Fork and branch from `main`.
2. Keep changes small and complete (callers, checks, atlas, changelog). Edit with exact replacements; never paste a tool's compressed or elided view of a file back into it, and review net deletions in your diff before committing.
3. Run every gate — CI runs the same ones on your pull request:

   ```bash
   node scripts/check-forever-generic.mjs
   node scripts/check-content-integrity.mjs
   node scripts/check-structure.mjs
   node scripts/check-requirements-activation.mjs
   node scripts/check-seed.mjs
   ```

4. Open a pull request that says **why** the change raises professionalism.

## From a product repository

A vendored copy (`<product>/software-factory-all-in-one/`) is read-only. To improve the factory from a product:

1. Write the change generically in a checkout of the factory repository — never in the vendored copy — and open a pull request.
2. If the product needs the change before it merges, record the gap in the product (for example in `docs/OWNER_STANDING.md` or a decision note).
3. After it merges, refresh the product from a fresh checkout: `node <factory-checkout>/scripts/seed.mjs --update <product-repo>`, then read [`CHANGELOG.md`](CHANGELOG.md) for migration steps.

## Maintainers

A maintainer may develop the factory inside a private planning repository as its designated source copy. Publishing from it must run every gate plus a private product, person and organisation denylist on the files **and** on the publish message; refuse when the public repository has changes that are not back-ported yet; go through a pull request that public CI checks before it merges; and publish exactly the source tree, with nothing injected. Never force-push.

## Releasing (maintainers)

Versions follow [Semantic Versioning](https://semver.org/), read from a vendored copy's point of view ([SF-16](DECISIONS.md#sf-16-releases-and-immutable-tags)):

| Bump | When |
|------|------|
| **MAJOR** | A seeded repository that was green can turn red, or a path products reference (a file, a script, the template mapping) moves or disappears |
| **MINOR** | New guides, packs, templates or gates that keep seeded repositories green |
| **PATCH** | Fixes and clarifications |

1. Move the `## [Unreleased]` entries under `## [X.Y.Z] - YYYY-MM-DD` in [`CHANGELOG.md`](CHANGELOG.md) and update the link references at the bottom: add `[X.Y.Z]: …/releases/tag/vX.Y.Z` and point `[Unreleased]` at `…/compare/vX.Y.Z...HEAD` (the structure gate checks both).
2. Merge, and wait for Factory CI on `main`.
3. Publish from the commit you tag: check out `<main-sha>` (the CI-verified merge), run `node scripts/release-notes.mjs X.Y.Z > notes.md`, then `gh release create vX.Y.Z --target <main-sha> --title "vX.Y.Z" --notes-file notes.md`.
4. Tags are never moved or deleted; a bad release is fixed by the next PATCH release.

## Conduct and security

- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) — Contributor Covenant 2.1
- [`SECURITY.md`](SECURITY.md) — report vulnerabilities privately
- Prefer the issue forms (bug / idea / question) over blank issues

## License

By contributing, you agree your work is licensed under the MIT License in [`LICENSE`](LICENSE).
