# Contributing to Software Factory All-in-One

Thanks for helping raise the craft. This repository is **forever generic at 100%**: practices that help any team ship software with AI agents — never one product’s private details.

## Hard rule (enforced)

CI runs `node scripts/check-forever-generic.mjs` on every push and PR. Sync from a planning repo also refuses if that check fails. **Non-generic content cannot land on `main`.**

If a private product/person/org name ever slips in once:

1. Remove it in the same change.
2. Add a denylist rule in [`scripts/forever-generic-denylist.json`](scripts/forever-generic-denylist.json) so it cannot return.

## What belongs here

- Reusable method docs, judgment notes, technology/agent packs, templates, and self-checks
- Lessons that prevent real rework, trust, or security mistakes for the next product
- Fixes that raise clarity, correctness, or professionalism

## What does not belong here

- Product names, people, tracker keys (any `KAN-…` id), day-page URLs, or org-only secrets
- Implementation repo names for a private product
- Bar-lowering shortcuts, vanity coverage, or duplicate homes for an already-strong practice
- Real personal data or personal mailboxes

Put product-specific details only in a **private** product planning repository after copy (`docs/OWNER_STANDING.md`, DECISIONS, boards).

## How to contribute

1. Fork and branch from `main`.
2. Keep changes small and complete (callers, checks, coverage % when relevant).
3. Run factory self-checks when you touch wiring or packs:
   - `node scripts/check-forever-generic.mjs` (**required**)
   - `node scripts/check-requirements-activation.mjs`
   - `node scripts/check-playbook-freshness.mjs`
4. Prefer deepening an existing home over inventing a parallel file (see `coverage/`).
5. Open a PR with **why** the change raises professionalism.

## License

By contributing, you agree your work is licensed under the MIT License in [`LICENSE`](LICENSE).

