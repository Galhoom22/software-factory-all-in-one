# Proxy — implementation

## Steps

1. Name the **Subject** interface the client already calls (`DocumentBlob.open`, `PaymentPort.charge`).
2. Keep or extract the **RealSubject** that does the real I/O.
3. Add a **Proxy** implementing the same interface. Decide the variant: lazy create, protection (authz), remote forward, or caching.
4. Inject the proxy where clients expected the subject. Do not let clients reach the real subject.
5. Forward after the check; fail closed on authz; create the real subject once for lazy variants.
6. Test the gate and the lazy path with a recording fake — do not hit real vaults in unit tests.

## Pseudocode

```
interface DocumentBlob:
  open(id) -> bytes

class VaultDocumentBlob implements DocumentBlob:
  method open(id): return vault.read(id)

class LazyAuthDocumentProxy implements DocumentBlob:
  field real = null
  field token
  method open(id):
    if not token.allows("document.read"): throw Forbidden
    if real == null: real = new VaultDocumentBlob(config)
    audit("open", id)
    return real.open(id)

// composition root
blob = new LazyAuthDocumentProxy(token, config)
screen = new WorkspaceScreen(blob)
```

## TypeScript sketch (illustration)

```ts
interface DocumentBlob {
  open(id: string): Uint8Array;
}

class VaultDocumentBlob implements DocumentBlob {
  constructor(private readonly endpoint: string) {}
  open(id: string): Uint8Array {
    // expensive remote read — omitted
    return new TextEncoder().encode(`${this.endpoint}:${id}`);
  }
}

class LazyAuthDocumentProxy implements DocumentBlob {
  private real: DocumentBlob | null = null;

  constructor(
    private readonly token: { allows(action: string): boolean },
    private readonly endpoint: string,
    private readonly audit: (event: string, id: string) => void,
  ) {}

  open(id: string): Uint8Array {
    if (!this.token.allows("document.read")) {
      throw new Error("forbidden");
    }
    if (!this.real) {
      this.real = new VaultDocumentBlob(this.endpoint);
    }
    this.audit("open", id);
    return this.real.open(id);
  }
}

// test seam: inject a fake RealSubject via a test double proxy or subclass
```

## PHP sketch (illustration)

```php
interface DocumentBlob
{
    public function open(string $id): string;
}

final class VaultDocumentBlob implements DocumentBlob
{
    public function __construct(private readonly string $endpoint) {}

    public function open(string $id): string
    {
        // expensive remote read — omitted
        return "{$this->endpoint}:{$id}";
    }
}

final class LazyAuthDocumentProxy implements DocumentBlob
{
    private ?DocumentBlob $real = null;

    /** @param callable(string, string): void $audit */
    public function __construct(
        private readonly object $token,
        private readonly string $endpoint,
        private readonly mixed $audit,
    ) {}

    public function open(string $id): string
    {
        if (! $this->token->allows('document.read')) {
            throw new RuntimeException('forbidden');
        }

        $this->real ??= new VaultDocumentBlob($this->endpoint);
        ($this->audit)('open', $id);

        return $this->real->open($id);
    }
}
```

## Testing at the risk boundary

- Risk: authz bypass; eager construction defeating laziness; double-create races; silent forward without audit.
- Assert forbidden tokens never call the real subject (recording fake / spy).
- Assert first successful `open` constructs once; second call reuses the same real instance.
- Assert audit receives the id on allowed paths.
- Keep vault/payment SDKs out of the unit test — inject a fake RealSubject behind a testable proxy constructor if needed.

## Refactor toward / away

- **Toward:** duplicated authz before one port; constructors paying for unused remote clients; need a local façade over a remote API with the same methods.
- **Away:** move HTTP checks into middleware/policies; replace lazy Proxy with container `lazy()` binding; switch to Decorator when the subject is always live and you only add behavior; delete the proxy when the real subject became cheap.
