# Symfony — best practices

Sources: [Documentation hub](https://symfony.com/doc), [Setup](https://symfony.com/doc/current/setup.html), [Best practices](https://symfony.com/doc/current/best_practices.html), [Page creation](https://symfony.com/doc/current/page_creation.html). Re-check official docs before non-trivial Symfony work (SF-05).

## 1. Create and run

1. Meet **PHP 8.4+** for Symfony **8.1.*** (or PHP 8.2+ for LTS **7.4.***).
2. Prefer Symfony CLI: `symfony check:requirements`, then:
   ```bash
   symfony new my_project_directory --version="8.1.*" --webapp   # traditional web
   symfony new my_project_directory --version="8.1.*"            # API / console / microservice
   ```
3. Prefer `symfony server:start` / `symfony serve -d` for local HTTP.
4. Prefer Flex recipes (`composer require logger`, packs like `debug`) — commit `symfony.lock`.
5. Prefer Demo app for learning: `symfony new … --demo`.

## 2. Structure and config (official best practices)

- Prefer the **default directory structure** (`src/`, `config/`, `templates/`, `public/`, …).
- Prefer **env vars** for infrastructure; **secrets** for sensitive values; **parameters** (`app.*`) for app behavior; **constants** for rarely changing options.
- Prefer **no App bundle** — organize under `App\` namespaces.
- Prefer **autowiring** + autoconfiguration; keep services **private** when possible.

## 3. Controllers, Twig, forms, security

- Prefer controllers extending `AbstractController` as thin glue — **no business logic**.
- Prefer **attributes** for routing / caching / security (`#[Route]`, …).
- Prefer DI (constructor / action type-hints) over `$container->get()`.
- Prefer Twig templates; snake_case names; `_partial` prefix for fragments.
- Prefer form **classes**; validation on the **object**; buttons in templates (single-submit); one action to render+process.
- Prefer a **single firewall** when one auth system; `auto` password hasher; **voters** for fine-grained authz.
- Prefer **AssetMapper** for front-end assets (best practices) unless the product already chose Encore/UX otherwise.

## 4. Data and tests

- Prefer Doctrine mapping via **PHP attributes**.
- Prefer smoke tests of URLs; **hard-code public URLs** in functional tests so route changes fail loudly (redirects required).

## 5. Security tooling

- Prefer regular `symfony check:security` locally; prefer `composer audit` in CI.

## 6. Architecture honesty

- Symfony full-stack ≠ Laravel. Do not copy Laravel conventions into Symfony (or reverse) without reading this pack + Laravel pack.
- Components-only use is fine in non-Symfony PHP apps — still follow PHP pack quality.

---
