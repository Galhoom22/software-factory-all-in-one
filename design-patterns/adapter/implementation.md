# Adapter — implementation

## Steps

1. Freeze the Target port the domain already uses (or extract it from duplicated call sites).
2. Identify Adaptee methods and the exact field/status mapping.
3. Implement one Adapter per foreign system; inject the Adaptee.
4. Map errors into domain failure types at the Adapter boundary — never leak SDK exceptions raw to use cases.
5. Bind Target → Adapter in the composition root; cover the mapping with one focused test.

## Pseudocode

```
client.charge(amount, currency, key)
  -> adapter.charge(...)
       payload = mapToVendor(amount, currency, key)
       vendorStatus = adaptee.createTransaction(payload)
       return mapToDomain(vendorStatus)
```

## TypeScript sketch (illustration)

```ts
interface PaymentGateway {
  charge(amount: number, currency: string, key: string): { ok: boolean; id?: string };
}
class VendorSdk {
  createTransaction(p: { cents: number; iso: string; requestId: string }) {
    return { state: "SETTLED", txn: "v-1" };
  }
}
class VendorPaymentAdapter implements PaymentGateway {
  constructor(private sdk: VendorSdk) {}
  charge(amount: number, currency: string, key: string) {
    const r = this.sdk.createTransaction({
      cents: Math.round(amount * 100),
      iso: currency,
      requestId: key,
    });
    return { ok: r.state === "SETTLED", id: r.txn };
  }
}
```

## PHP sketch (illustration)

```php
interface PaymentGateway {
    /** @return array{ok: bool, id?: string} */
    public function charge(float $amount, string $currency, string $key): array;
}
final class VendorSdk {
    /** @return array{state: string, txn: string} */
    public function createTransaction(array $payload): array {
        return ['state' => 'SETTLED', 'txn' => 'v-1'];
    }
}
final class VendorPaymentAdapter implements PaymentGateway {
    public function __construct(private VendorSdk $sdk) {}
    public function charge(float $amount, string $currency, string $key): array {
        $r = $this->sdk->createTransaction([
            'cents' => (int) round($amount * 100),
            'iso' => $currency,
            'requestId' => $key,
        ]);
        return ['ok' => $r['state'] === 'SETTLED', 'id' => $r['txn']];
    }
}
```

## Testing at the risk boundary

Unit-test the Adapter with a fake Adaptee: assert cents conversion, idempotency key passthrough, and that unknown vendor states become `{ ok: false }` (or your domain failure). Do not hit the real network in that test.

## Refactor toward / away

- **Toward:** from duplicated SDK calls and inline maps in multiple use cases.
- **Away:** delete the Adapter when the vendor is removed or when the port is rewritten to match a single remaining SDK.
