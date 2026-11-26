# Symfony — quality bar (Clean Code · architecture · patterns)

Works with Ponytail: smallest complete change that still meets this bar.

## 1. Clean Code in Symfony shape

| Rule | Symfony terms |
|------|---------------|
| Names reveal intent | Controllers/services/entities match the job |
| One job | Thin controllers; domain in services; Twig for presentation |
| Readable in one pass | Attributes next to code; default `services.yaml` |
| Trust boundaries | Validation + security voters; never trust request blindly |
| Campsite | Delete dead routes/services when touching a feature |

## 2. Architecture fit

- Prefer official layers: HTTP (controller/route) → services → Doctrine/infrastructure.
- Prefer Flex recipes over hand-wiring bundles for common features.
- If the product is Laravel, do not rewrite it in Symfony without an ADR.

## 3. Design patterns (judgment)

- Default: DI + events/subscribers when decoupling is earned; voters for authz.
- Prefer Symfony Messenger/Mailer/etc. from docs when the feature needs them — not DIY queues first.
- Avoid inventing App bundles for internal code (official best practice).

## 4. Automatic latest check (mandatory)

Before non-trivial Symfony work:

1. Open this pack (`best-practices` + `symfony-8/` slice).
2. Re-check [symfony.com/doc](https://symfony.com/doc), [setup](https://symfony.com/doc/current/setup.html), and [releases](https://symfony.com/releases) (stable vs LTS).
3. Never silently bump product PHP/Symfony pins — propose ADR.

## Related

- PHP pack · coverage `coverage/06-technologies.md`

---
