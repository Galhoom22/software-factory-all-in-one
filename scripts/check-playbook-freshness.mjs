#!/usr/bin/env node
// Deprecated name, kept until 2.0.0 so existing CI keeps working (removing a path products call is a MAJOR change).
// Use scripts/check-structure.mjs instead (same checks plus judgment-index and README-facts checks).
console.warn("check-playbook-freshness.mjs is deprecated — run scripts/check-structure.mjs");
await import("./check-structure.mjs");
