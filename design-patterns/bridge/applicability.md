# Bridge — applicability

## Signals

- Two axes of change (e.g. notification kind × delivery channel, export schema × storage sink) produce a combinatorial subclass list.
- High-level workflow code should not import transport SDKs.
- You expect new implementations *and* new abstractions over the same product life.

## Anti-signals

- Only one axis varies — prefer Strategy or a config → handler map.
- You are adapting one existing foreign class to a port ([Adapter](../adapter/README.md)), not designing dual hierarchies.
- The "implementor" is really a one-shot SDK wrapper with no second abstraction hierarchy.
- Framework middleware or jobs already separate "what to do" from "how to deliver."

## Simpler alternative first

1. One `Channel` interface + inject into a single notification service (Strategy-shaped).
2. A registry `Record<ChannelName, Dispatcher>` with plain functions.
3. Queue a job that already encapsulates transport (Laravel notification channels) before inventing dual class trees.

## Framework-native equivalents

- **Laravel Notifications:** mail / database / broadcast channels already separate message construction from delivery. Prefer that over a hand-rolled Bridge unless you truly need a second abstraction hierarchy. See [`technologies/laravel/`](../../technologies/laravel/README.md).
- **PHP:** composition of a channel interface into a notifier class is often enough without naming it Bridge. See [`technologies/php/`](../../technologies/php/README.md).
- **Node:** pluggable transport modules behind a `dispatch(envelope)` function; avoid dual prototype chains unless both sides grow. See [`technologies/javascript/`](../../technologies/javascript/README.md).
