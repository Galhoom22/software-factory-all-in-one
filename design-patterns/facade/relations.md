# Facade — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Adapter](../adapter/README.md) | Are you reshaping *one* foreign API, or hiding a *cluster* of collaborators behind a coarse workflow? |
| [Bridge](../bridge/README.md) | Are you simplifying client access to subsystems, or splitting abstraction from implementation so both hierarchies grow? |
| [Mediator](../mediator/README.md) | Do colleagues stay unaware of each other through ongoing interaction, or do clients just need a one-shot coarse entry? |

## Combines with

- **Adapter:** façade calls adapters for each vendor.
- **Factory Method:** façade asks a factory for formatters.
- **Proxy:** expose the façade behind an authorized proxy.

## Alternatives

Application service / Action / Job; private helper for a single call site; modular monolith module API.
