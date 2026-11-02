# CodeRabbit guidelines — frontend

Copy into the frontend implementation repository. Keep this short; point to SECURITY and the API contract for full rules.

## Red lines

- No secrets in client code or NEXT_PUBLIC_ vars.
- No tokens or PII in localStorage, sessionStorage, or URLs.
- No dangerouslySetInnerHTML or raw HTML from API text.
- No browser calls to AI or payment providers.
- No client-side authority for authz, prices, or plan limits.

## Prefer

- Contract error-code mapping in one place.
- Loading, empty, error, success states.
- Accessibility labels and focus on dialogs.
- Small PRs with evidence of tests run.
