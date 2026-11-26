# Symfony 8 — stop using these

Sources: [Best practices](https://symfony.com/doc/current/best_practices.html), [Setup](https://symfony.com/doc/current/setup.html), [Releases](https://symfony.com/releases).

**Rule for agents:** do not introduce the left column in new Symfony 8 apps (unless product LTS pin says otherwise).

## Versions / stack

| Stop using | Use instead |
|------------|-------------|
| PHP **&lt; 8.4** on Symfony **8.1** | PHP 8.4+ |
| Pinning **8.2 beta** in production | **8.1.*** stable (or wait for stable 8.2) |
| Ignoring LTS vs stable choice | Document 8.1 stable vs 7.4 LTS in product SRS |
| Replacing Laravel with Symfony silently | ADR + product decision |

## Structure / DI

| Stop using | Use instead |
|------------|-------------|
| App-level bundles for internal code | `App\` namespaces |
| Public services + `$container->get()` habit | Private services + constructor/action DI |
| Env vars for app behavior toggles | Parameters / constants as BP describes |
| Secrets in plain `.env` committed | Symfony secrets / real secret store |

## Controllers / forms / security

| Stop using | Use instead |
|------------|-------------|
| Fat controllers with business logic | Services + thin controllers |
| Validation only on form fields | Constraints on the underlying object |
| Many firewalls without two real user systems | Single firewall |
| Hand-rolled asset bundler when AssetMapper fits | AssetMapper (or document Encore/UX choice) |

## Frontend (Symfony BP default)

| Stop using | Use instead |
|------------|-------------|
| Assuming Webpack Encore is mandatory on new 8.x apps | AssetMapper first per BP; Encore only if chosen |

---
