# Backend Deployment — {{PRODUCT}}

> ⚠️ **Planning only.** Step-by-step server setup and deployment of the backend repository. Read [`../DEPLOYMENT.md`](../DEPLOYMENT.md) first.

## 1. What Gets Deployed

API site, database, background workers, and scheduler, for staging and production.

## 2. One-Time Server Setup

Accounts with two-factor sign-in and DPAs, server size and region, runtime and database versions from SRS §2, extra system packages, database reachable from the server only, firewall, swap, alerts.

## 3. Sites, Domains, and TLS

Site, DNS, TLS, trusting only the edge's IP ranges, and no edge challenge on API or webhook paths.

## 4. Environment Variables

| Group | Variables | Notes |
|-------|-----------|-------|
| {{GROUP}} | {{VARIABLES}} | {{NOTES}} |

## 5. Deploy Script and CI

Install without dev dependencies, migrate, cache, restart workers.

## 6. Background Workers and Scheduler

Commands, timeouts shorter than the queue's retry window, and a heartbeat.

## 7. Email, Storage, and Webhooks

Domain authentication (DKIM, SPF, DMARC), leaving the email sandbox, private storage with lifecycle rules, signed webhooks tested (live endpoints registered; duplicate/delayed/out-of-order events handled; keys rotated before first live charge).

## 8. Smoke Test (after every deploy)

Run after **staging** deploy on every day closeout that reaches Phase B+, and after **production** only on an approved release. Fictional data only. Part of API readiness: `playbook/07-judgment/api-readiness.md`.

Minimum:

- [ ] Health route returns success (no debug stack traces)
- [ ] Sign-in / session cookie path works on this host’s domain and HTTPS settings
- [ ] Today’s critical API paths (from the day’s Stories) return contract-shaped JSON
- [ ] A background job that the day relies on actually runs
- [ ] Webhook or signed URL paths are reachable if the day touched them (no edge challenge blocking them)
- [ ] No debug output, no secrets in responses

## 9. Backups and Restore

Schedule, retention, encryption, and a restore test before launch and every quarter.

## 10. Monitoring and Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| {{SYMPTOM}} | {{CAUSE}} | {{FIX}} |

## 11. Launch Checklist

- [ ] {{ITEM}}
