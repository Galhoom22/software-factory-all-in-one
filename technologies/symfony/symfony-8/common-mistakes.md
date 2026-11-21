# Symfony 8 — common mistakes

## Setup

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| PHP 8.3 on Symfony 8.1 | Install/runtime failures | PHP 8.4+ |
| Unwritable `var/cache` / `var/log` | 500s | Fix permissions per docs |
| Skipping `composer install` on clone | Missing vendor | Install + configure `.env` |
| Using `--version=next` / beta in prod | Unstable | Pin `8.1.*` or LTS `7.4.*` |

## App

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Creating an App bundle | Unnecessary complexity | Namespaces under `App\` |
| Business logic in controllers | Hard to test/reuse | Extract services |
| Forgetting Flex recipes / `symfony.lock` | Manual setup drift | Commit lock; use Flex |
| Generating URLs in smoke tests only | Miss broken public URLs | Hard-code URLs in functional tests (BP) |

## Architecture

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Mixing Laravel habits (Facades, etc.) | Wrong APIs | Follow Symfony DI + docs |
| Silent framework switch from Laravel | Breaks product stack | ADR |

## Agent habits

| Mistake | What goes wrong | Fix |
|---------|-----------------|-----|
| Following Symfony 5/6 tutorials on 8.1 | Deprecated patterns | `doc/current` only |
| Assuming LTS is always “best” | Misses 8.1 features | Choose stable vs LTS deliberately |

---
