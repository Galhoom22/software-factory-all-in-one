# Facade — applicability

## Signals

- The same multi-service sequence appears in several controllers, jobs, or CLI commands.
- New contributors cannot complete a workflow without learning five modules.
- Tests of the entrypoint should mock one collaborator graph, not every leaf.

## Anti-signals

- Only one foreign type needs reshaping ([Adapter](../adapter/README.md)).
- You want dual hierarchies of abstraction vs implementation ([Bridge](../bridge/README.md)).
- The proposed façade would absorb all domain rules and become a dump.
- A use-case / application service class already is the entry — renaming it "Facade" is theater.

## Simpler alternative first

1. One application-service method in the existing layering.
2. A queued job that encapsulates the sequence.
3. A private helper in the only caller, if there is truly one call site.

## Framework-native equivalents

- **Laravel:** Actions, Jobs, and service classes are the usual façade shape; prefer them over a pattern-named class. HTTP Kernel middleware is not a subsystem façade. See [`technologies/laravel/`](../../technologies/laravel/README.md).
- **PHP:** a final orchestrator class in the application layer is enough. See [`technologies/php/`](../../technologies/php/README.md).
- **Node:** a use-case module exporting one function often beats a Facade class. See [`technologies/javascript/`](../../technologies/javascript/README.md).
