# Federated Identity — applicability

## Signals

- Enterprise SSO
- Social login
- Multiple apps one identity

## Anti-signals

- Offline device with no IdP reachability plan
- Over-federating for a tiny internal tool with platform auth already

## Simpler alternative first

1. Framework first-party auth
2. Managed auth service

Adopt **Federated Identity** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel Socialite / Sanctum+OIDC; NextAuth/Auth.js; platform IAM — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel Socialite / Sanctum+OIDC; NextAuth/Auth.js; platform IAM — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
