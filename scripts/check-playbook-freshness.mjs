#!/usr/bin/env node
// Deprecated name, kept for one minor release so existing CI keeps working.
// Use scripts/check-structure.mjs instead (same checks plus judgment-index and README-facts checks).
console.warn("check-playbook-freshness.mjs is deprecated — run scripts/check-structure.mjs");
await import("./check-structure.mjs");
