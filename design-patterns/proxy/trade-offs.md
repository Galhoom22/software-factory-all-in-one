# Proxy — trade-offs

## Pros

- Callers keep one interface; interception stays in one type.
- Lazy creation avoids paying for unused heavy subjects.
- Protection and audit can fail closed before real I/O.
- Tests substitute a proxy or spy at the subject seam.

## Cons

- Extra type and lifetime logic to maintain.
- Readers must check whether a dependency is real or surrogate.
- Easy to pile unrelated concerns into one “god proxy.”
- Caching proxies risk stale reads without explicit invalidation rules.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Subject + Real + Proxy |
| Indirection | Harder “go to implementation” |
| Performance | Helps when laziness skips work; hurts if every call pays a thick preamble |
| Testability | Improves when RealSubject is injectable behind the proxy |

## Common misuse

- Naming every wrapper a Proxy when it changes the API (that is Adapter) or only stacks behavior (Decorator).
- Reimplementing framework middleware as domain Proxy classes for HTTP-only checks.
- Creating the real subject in the proxy constructor — defeating lazy intent.
- Soft-failing authz (logging and continuing) instead of failing closed.
- Using Proxy to hide Singleton-style globals.

## Review checklist

1. Do Proxy and RealSubject share the exact Subject interface?
2. Was middleware/gate/policy tried for HTTP concerns first?
3. Is construction of RealSubject deferred until first need (if lazy)?
4. Does authz fail closed with a test proving the real subject was not touched?
5. Is audit/cache policy documented and bounded?
6. Would Decorator or Adapter be the clearer name?
7. Is there an exit path (inject RealSubject directly) when laziness is no longer needed?
