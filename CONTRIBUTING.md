# Contributing to Software Factory All-in-One

Thanks for helping raise the craft. This repository is **forever generic**: practices that help any team ship software with AI agents — never one product’s private details.

## What belongs here

- Reusable method docs, judgment notes, technology/agent packs, templates, and self-checks
- Lessons that prevent real rework, trust, or security mistakes for the next product
- Fixes that raise clarity, correctness, or professionalism

## What does not belong here

- Product names, people, tracker keys, day-page URLs, or org-only secrets
- Bar-lowering shortcuts, vanity coverage, or duplicate homes for an already-strong practice
- Real personal data

## How to contribute

1. Fork and branch from `main`.
2. Keep changes small and complete (callers, checks, coverage % when relevant).
3. Run factory self-checks when you touch wiring or packs:
   - `node scripts/check-requirements-activation.mjs`
   - `node scripts/check-playbook-freshness.mjs`
4. Prefer deepening an existing home over inventing a parallel file (see `coverage/`).
5. Open a PR with **why** the change raises professionalism.

## License

By contributing, you agree your work is licensed under the MIT License in [`LICENSE`](LICENSE).
