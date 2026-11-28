# Health Endpoint Monitoring — implementation

## Steps

1. Write the pain in one sentence and reject simpler alternatives explicitly.
2. Identify participants (client, broker/store, workers, supervisors).
3. Define failure modes: timeout, duplicate, poison, partial success.
4. Add observability: metrics/logs/traces at the pattern boundary.
5. Prove the risk boundary with a test or chaos check (see below).
6. Document the Architecture Decision Record (selector template).

## Pseudocode

```
# Conceptual — adapt to stack
on trigger:
  apply health_endpoint_monitoring()
  observe outcome
  on failure: degrade or compensate per relations.md
```

## TypeScript sketch (illustration)

```ts
/** Illustration only — not production copy-paste. */
export type Outcome = { ok: true } | { ok: false; reason: string };

export async function applyHealthEndpointMonitoring(): Promise<Outcome> {
  // Wire platform primitives named in applicability.md
  return { ok: true };
}
```

## PHP sketch (illustration)

```php
/** Illustration only — not production copy-paste. */
final class HealthEndpointMonitoringExample
{
    public function apply(): void
    {
        // Prefer framework queues, HTTP clients, cache, and gateways
        // before inventing a new microservice for this pattern.
    }
}
```

## Testing at the risk boundary

- Simulate the failure the pattern claims to address (timeout, duplicate, spike, legacy mismatch).
- Assert degraded behavior is intentional (fail-fast, buffered lag, compensation), not silent data loss.
- Load or soak lightly enough to show pool isolation / limit behavior when relevant.

## Refactor toward / away

- **Toward:** measured pain matches signals; baseline rejected; ADR written.
- **Away:** traffic or topology no longer justifies the complexity; collapse to simpler alternative.
