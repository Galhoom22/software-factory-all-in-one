# Bridge — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Adapter](../adapter/README.md) | Are you reshaping one *existing* foreign API, or intentionally designing *two hierarchies* that both will grow? |
| [Facade](../facade/README.md) | Are you simplifying a subsystem cluster for clients, or decoupling abstraction from implementation *inside* your design? |
| Strategy | Does only the algorithm/channel vary under a fixed caller, or do high-level types also form a hierarchy? |

## Combines with

- **Abstract Factory:** create matching Implementor families for a product line.
- **Adapter:** ConcreteImplementor may wrap a vendor SDK via Adapter.
- **Decorator:** wrap a Channel Implementor to add logging without touching abstractions.

## Alternatives

Single `Channel` Strategy; config registry; framework notification channels; merge hierarchies when one axis is dead.
