# Frontend Deployment — {{PRODUCT}}

> ⚠️ **Planning only.** Step-by-step deployment of the frontend repository. Read [`../DEPLOYMENT.md`](../DEPLOYMENT.md) first.

## 1. What Gets Deployed

| Site | Domain | Branch | Deploys |
|------|--------|--------|---------|
| Staging | {{STAGING_DOMAIN}} | `main` | After CI on every push |
| Production | {{DOMAIN}} | `main` | Approved workflow run |

## 2. One-Time Setup

Runtime version (SRS §2), site, TLS, DNS, deploy hook stored as a CI secret.

## 3. Environment Variables

| Variable | Production | Staging | Notes |
|----------|------------|---------|-------|
| {{PUBLIC_VAR}} | {{VALUE}} | {{VALUE}} | Public: built into the bundle, never a secret. |

## 4. Deploy Script

Install from the lockfile, build. Nothing slow.

## 5. CI Deploy Jobs

Staging deploy after checks on `main`; production deploy behind an environment that needs approval.

## 6. Smoke Test (after every deploy)

Pages load in every language, sign-in works, security headers present, HTTP redirects to HTTPS.

## 7. Rollback

Revert on `main` and redeploy.

## 8. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| {{SYMPTOM}} | {{CAUSE}} | {{FIX}} |

## 9. Launch Checklist

- [ ] {{ITEM}}
