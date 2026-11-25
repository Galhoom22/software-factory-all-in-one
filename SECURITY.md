# Security Policy

## Supported versions

This repository is a **method + templates** kit (Markdown, scripts, CI skeletons). Only the default branch (`main`) is supported.

| Version | Supported |
|---------|-----------|
| `main`  | Yes       |
| other branches / forks | Best-effort |

## What counts as a security issue here

Please report:

- Secrets, credentials, or real personal data accidentally committed to this repository
- Unsafe defaults in templates or CI skeletons that would leak secrets when copied
- Script behavior that could delete or overwrite user data unexpectedly
- Supply-chain issues in GitHub Actions pins used by this repo

Out of scope for this kit (report in your **product** repos instead):

- Vulnerabilities in a product you built **from** these templates
- Third-party framework CVEs (Laravel, Next.js, …) unless our docs tell you to do something unsafe

## How to report

**Preferred:** open a private vulnerability report:

[Report a vulnerability](https://github.com/Galhoom22/software-factory-all-in-one/security/advisories/new)

Include:

1. What you found and where (path / workflow)
2. Impact if someone copies the kit as-is
3. A minimal reproduction or suggested fix (optional)

Do **not** open a public issue for secrets or exploitable defaults.

## Forever-generic note

Never paste real product secrets, personal data, or private org details into issues, PRs, or advisories for this public kit. Keep reports generic and reproducible.

## Response

Maintainers aim to acknowledge reports within a few days and ship a fix on `main` when confirmed. Thank you for helping keep the factory safe for every team that uses it.
