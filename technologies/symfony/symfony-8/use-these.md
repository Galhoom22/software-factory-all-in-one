# Symfony 8 — prefer these

Sources: [Setup](https://symfony.com/doc/current/setup.html), [Best practices](https://symfony.com/doc/current/best_practices.html), [Page creation](https://symfony.com/doc/current/page_creation.html), [Releases](https://symfony.com/releases).

## Create / toolchain

| Prefer | Notes |
|--------|-------|
| `symfony new … --version="8.1.*"` | Current stable line |
| `--webapp` for traditional web apps | Extra packages |
| Skeleton without `--webapp` for API/console | Leaner |
| `--version=lts` / `7.4.*` when product wants LTS | Explicit choice |
| Symfony CLI local server | `server:start` / `serve -d` |
| Flex + `symfony.lock` committed | Recipe automation |
| `symfony check:requirements` / `check:security` | Env + advisories |
| `composer audit` in CI | Broader than CLI check alone |

## App code

| Prefer | Notes |
|--------|-------|
| Default directory layout | Official BP |
| `App\` namespaces — no App bundle | BP |
| Autowiring / autoconfigure / private services | BP |
| `#[Route]` (and related attributes) | Co-located config |
| `AbstractController` + DI | Thin controllers |
| Twig + snake_case templates | BP |
| Form classes + object constraints | BP |
| Doctrine attribute mapping | BP |
| AssetMapper for assets | BP default |
| Single firewall + `auto` hasher + voters | BP security |

## First page pattern

| Prefer | Notes |
|--------|-------|
| Controller method → `Response` | Page creation |
| Twig via `$this->render()` | After `composer require twig` |
| `bin/console debug:router` | Inspect routes |

---
