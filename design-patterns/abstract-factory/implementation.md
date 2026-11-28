# Abstract Factory — implementation

## Steps

1. List product **roles** that must stay consistent (charge, verify, refund). Write a narrow interface per role.
2. Confirm at least **two real families** (sandbox/live, provider A/B). If only one, stop and use a module that builds the set.
3. Declare `PaymentToolkit` (abstract factory) with one `create…` method per role.
4. Implement one concrete toolkit per family; each method returns products that share credentials and protocol.
5. At the composition root, choose **one** toolkit from config/env. Prefer injecting the products into clients rather than the toolkit, unless clients must create products lazily.
6. Test with a fake toolkit that returns recording fakes — assert the client never crosses families.

## Pseudocode

```
interface ChargeClient: charge(amount)
interface WebhookVerifier: verify(payload)

interface PaymentToolkit:
  createChargeClient() -> ChargeClient
  createWebhookVerifier() -> WebhookVerifier

class SandboxToolkit implements PaymentToolkit:
  createChargeClient() -> SandboxCharge
  createWebhookVerifier() -> SandboxVerifier

class LiveToolkit implements PaymentToolkit:
  createChargeClient() -> LiveCharge
  createWebhookVerifier() -> LiveVerifier

// composition root
toolkit = config.env == "live" ? LiveToolkit() : SandboxToolkit()
checkout = Checkout(toolkit.createChargeClient(), toolkit.createWebhookVerifier())
```

## TypeScript sketch (illustration)

```ts
interface ChargeClient {
  charge(cents: number): Promise<string>;
}
interface WebhookVerifier {
  verify(raw: string): boolean;
}
interface PaymentToolkit {
  createChargeClient(): ChargeClient;
  createWebhookVerifier(): WebhookVerifier;
}

class SandboxToolkit implements PaymentToolkit {
  createChargeClient(): ChargeClient {
    return { charge: async (cents) => `sandbox:${cents}` };
  }
  createWebhookVerifier(): WebhookVerifier {
    return { verify: (raw) => raw.startsWith("sandbox:") };
  }
}

function wireCheckout(toolkit: PaymentToolkit) {
  return {
    charge: toolkit.createChargeClient(),
    verify: toolkit.createWebhookVerifier(),
  };
}
```

## PHP sketch (illustration)

```php
interface ChargeClient
{
    public function charge(int $cents): string;
}

interface WebhookVerifier
{
    public function verify(string $raw): bool;
}

interface PaymentToolkit
{
    public function createChargeClient(): ChargeClient;
    public function createWebhookVerifier(): WebhookVerifier;
}

final class SandboxToolkit implements PaymentToolkit
{
    public function createChargeClient(): ChargeClient
    {
        return new class implements ChargeClient {
            public function charge(int $cents): string
            {
                return "sandbox:{$cents}";
            }
        };
    }

    public function createWebhookVerifier(): WebhookVerifier
    {
        return new class implements WebhookVerifier {
            public function verify(string $raw): bool
            {
                return str_starts_with($raw, 'sandbox:');
            }
        };
    }
}
```

## Testing at the risk boundary

- Risk: client uses mismatched family members; or toolkit methods return products that disagree on credentials.
- Provide a `FakeToolkit` whose products share an in-memory ledger.
- Assert checkout/refund flows succeed with one toolkit and fail closed when verify rejects foreign payloads.
- Do not call real payment networks in unit tests.

## Refactor toward / away

- **Toward:** repeated “construct A and B together” blocks; environment bugs from mixed SDKs; clients importing multiple concrete providers.
- **Away:** if only one family remains, delete the abstract factory interface and keep a single `createPaymentToolkit()` module or container provider. If only one role varies, demote to [Factory Method](../factory-method/).
