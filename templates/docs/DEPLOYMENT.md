# Deployment — {{PRODUCT}}

> ⚠️ **Planning only.** How the implementation repositories go live. Prices and plans change: date every check and link the official page.

| Field | Value |
|-------|-------|
| Document | Deployment Guide (shared) |
| Status | Draft (proposed setup, D-xx) |
| Related | [Frontend deployment](frontend/DEPLOYMENT.md), [Backend deployment](backend/DEPLOYMENT.md), [`SRS.md`](SRS.md) §2, [`COMPLIANCE.md`](COMPLIANCE.md), [`SECURITY.md`](SECURITY.md) |

---

## 1. Rules

| ID | Rule | Owner | Source |
|----|------|-------|--------|
| DR-01 | Deploy only from `main`, only after CI passes, only through the pipeline. | Both | SRS NFR-xx |
| DR-02 | Secrets only in the host's environment settings and CI secrets; the frontend has none. | Both | SECURITY |
| DR-03 | HTTPS everywhere, with secure cookies. | Both | SRS NFR-xx |
| DR-04 | Data stays in the documented region; every vendor that sees personal data has a DPA and is in the privacy policy. | Both | COMPLIANCE |
| DR-05 | Only production holds real data. | Both | AGENTS.md |
| DR-06 | Daily off-site encrypted backups with a tested restore; backups expire within the deletion window. | BE | COMPLIANCE |
| DR-07 | Every release can be rolled back: zero-downtime deploys and expand-then-contract migrations. | Both | — |
| DR-08 | API changes deploy backend first. | Both | API_CONTRACT |

## 2. The Recommended Setup (initial production)

A diagram of browser → edge → frontend and API → database, workers, email, storage, and a table: part, choice, why, official link. Check that every stack requirement in SRS §2 (database version and extensions, background workers, browser-based tools) is supported.

## 3. Options Compared

| Option | Monthly cost (date checked) | Verdict |
|--------|-----------------------------|---------|
| {{OPTION}} | {{COST}} | {{WHY}} |

Read each platform's terms: some free tiers forbid commercial use.

## 4. Region and Data Residency

Which region, why, and what each launch market's transfer rules require (COMPLIANCE).

## 5. Monthly Cost

| Item | Cost |
|------|------|
| {{ITEM}} | {{COST}} |

## 6. When to Grow

| Signal | Step |
|--------|------|
| {{SIGNAL}} | {{STEP}} |

## 7. Environments

Local, staging (fictional data, separate domain if cookies are shared across subdomains), production.

**API readiness:** each environment needs its own proof (local HTTP tests → CI → staging smoke → production release smoke). See `software-factory-all-in-one/07-judgment/api-readiness.md` and `software-factory-all-in-one/09-CI-CD.md` § API readiness by environment. Never treat local green as staging/production green.

## 8. Release Flow

Pull request → CI → staging → smoke test → approved production deploy.

## 9. Rollback and Recovery

Bad release, migration rules, lost server (data-loss and downtime targets), security incident. Incident response and blameless postmortems: `software-factory-all-in-one/07-judgment/incident-response.md`.

## 10. Pre-Launch Checklist

- [ ] {{ITEM}}

## 11. Keeping This File Current

Re-check prices and plans on the official pages before buying and every three months.
