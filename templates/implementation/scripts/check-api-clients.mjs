#!/usr/bin/env node
/**
 * Always-current gate for docs/api-clients/:
 * 1) regenerate from inventory
 * 2) fail if generated files would change (drift)
 * 3) when ./artisan exists: fail if inventory ≠ framework route table (Laravel sketch)
 *
 * Copy beside generate-api-clients.mjs in the API implementation repo.
 * Adapt generatedGlobs / route filters to the product.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const clientsDir = path.join(root, "docs", "api-clients");
const generateCandidates = [
  path.join(root, "scripts", "generate-api-clients.mjs"),
  path.join(root, "scripts", "gen-api-clients.mjs"),
];
const generate = generateCandidates.find((p) => fs.existsSync(p));
if (!generate) {
  console.error("missing scripts/generate-api-clients.mjs (or gen-api-clients.mjs)");
  process.exit(1);
}

const invPath = path.join(clientsDir, "inventory.json");
if (!fs.existsSync(invPath)) {
  console.error("missing docs/api-clients/inventory.json");
  process.exit(1);
}
const inventory = JSON.parse(fs.readFileSync(invPath, "utf8"));

const generatedGlobs = [
  "openapi/openapi.json",
  "openapi/openapi.yaml",
  "postman",
  "insomnia",
  "apidog/local.env",
];

function hashTree(rel) {
  const abs = path.join(clientsDir, rel);
  if (!fs.existsSync(abs)) return null;
  const stat = fs.statSync(abs);
  if (stat.isFile()) {
    return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");
  }
  const parts = [];
  for (const name of fs.readdirSync(abs).sort()) {
    if (name === "README.md") continue;
    parts.push(`${name}:${hashTree(path.join(rel, name))}`);
  }
  return crypto.createHash("sha256").update(parts.join("|")).digest("hex");
}

function snapshot() {
  const out = {};
  for (const rel of generatedGlobs) out[rel] = hashTree(rel);
  return out;
}

function normalizePath(p) {
  return p
    .replace(/^\//, "")
    .replace(/\{\{(\w+)\}\}/g, "{$1}")
    .replace(/\{[^}]+\}/g, "{}");
}

const before = snapshot();
const gen = spawnSync(process.execPath, [generate], { cwd: root, encoding: "utf8" });
if (gen.status !== 0) {
  console.error(gen.stdout || "", gen.stderr || "");
  process.exit(gen.status ?? 1);
}
const after = snapshot();
const drifted = Object.keys(before).filter((k) => before[k] !== after[k]);
if (drifted.length) {
  console.error("API client packs are stale. Run: node scripts/generate-api-clients.mjs && commit.");
  console.error("Drifted:", drifted.join(", "));
  process.exit(1);
}

// Runnable on import: nothing the client could derive is left for a human to add by hand.
// Set inventory.auth = "cookie-session" for Sanctum-style SPAs; Bearer products skip the session checks.
const cookieSession = inventory.auth === "cookie-session";
const notRunnable = [];
// Collection v2.1 folders nest; a request is any item with `request`.
function* postmanRequests(items) {
  for (const item of items ?? []) {
    if (item.request) yield item;
    else yield* postmanRequests(item.item);
  }
}
const postmanDir = path.join(clientsDir, "postman");
for (const name of fs.existsSync(postmanDir) ? fs.readdirSync(postmanDir) : []) {
  if (!name.endsWith(".postman_collection.json")) continue;
  const collection = JSON.parse(fs.readFileSync(path.join(postmanDir, name), "utf8"));
  for (const item of postmanRequests(collection.item)) {
    const { method = "GET", header = [], url, body } = item.request;
    const raw = typeof url === "string" ? url : url?.raw ?? "";
    // Disabled headers are not sent, so they do not count.
    const has = (key) => header.some((h) => !h.disabled && h.key.toLowerCase() === key.toLowerCase());
    const problems = [];
    if (body && !has("Content-Type")) problems.push("Content-Type");
    if (cookieSession && !raw.includes("/webhooks/")) {
      if (!has("Origin")) problems.push("Origin");
      const unsafe = ["POST", "PUT", "PATCH", "DELETE"].includes(method.toUpperCase());
      const xsrf = (item.event ?? []).some(
        (e) => e.listen === "prerequest" && !e.disabled && [].concat(e.script?.exec ?? []).join("\n").includes("XSRF"),
      );
      if (unsafe && !xsrf) problems.push("XSRF pre-request");
    }
    if (problems.length) notRunnable.push(`${item.name}: ${problems.join(", ")}`);
  }
}
if (notRunnable.length) {
  console.error("Requests not runnable on import (see 07-judgment/api-clients.md § Runnable on import):");
  for (const n of notRunnable) console.error(" -", n);
  process.exit(1);
}

const artisanPath = path.join(root, "artisan");
if (!fs.existsSync(artisanPath)) {
  console.log("check-api-clients: packs current (no artisan — skip route parity)");
  process.exit(0);
}

const routes = spawnSync("php artisan route:list --json", {
  cwd: root,
  encoding: "utf8",
  maxBuffer: 10 * 1024 * 1024,
  shell: true,
  env: process.env,
});
if (routes.status !== 0) {
  console.error("php artisan route:list --json failed");
  console.error(routes.stderr || routes.stdout);
  process.exit(routes.status ?? 1);
}

let routeJson = (routes.stdout || "").trim();
if (!routeJson.startsWith("[")) {
  const start = routeJson.indexOf("[");
  const end = routeJson.lastIndexOf("]");
  if (start < 0 || end < 0) {
    console.error("could not parse route:list JSON");
    console.error(routeJson.slice(0, 2000));
    process.exit(1);
  }
  routeJson = routeJson.slice(start, end + 1);
}

const artisan = JSON.parse(routeJson);
const routeKeys = new Set();
for (const row of artisan) {
  const methods = String(row.method || "")
    .split("|")
    .map((m) => m.trim().toUpperCase())
    .filter((m) => m && m !== "HEAD");
  const uri = normalizePath(String(row.uri || ""));
  for (const m of methods) routeKeys.add(`${m} ${uri}`);
}

const missing = [];
for (const folder of inventory.folders ?? []) {
  for (const req of folder.requests ?? []) {
    const key = `${req.method.toUpperCase()} ${normalizePath(req.path)}`;
    if (!routeKeys.has(key)) missing.push(`${req.method} ${req.path}`);
  }
}
if (missing.length) {
  console.error("Inventory paths missing from artisan routes:");
  for (const m of missing) console.error(" -", m);
  process.exit(1);
}

// Adapt prefixes for non-Laravel or non-api/v1 products.
const apiRoutes = [...routeKeys].filter((k) => {
  const routePath = k.split(" ").slice(1).join(" ");
  if (routePath.startsWith("storage/") || routePath === "up" || routePath === "/") return false;
  return (
    routePath.startsWith("api/v1/") ||
    routePath === "sanctum/csrf-cookie" ||
    routePath.startsWith("webhooks/")
  );
});
const inventoryKeys = new Set();
for (const folder of inventory.folders ?? []) {
  for (const req of folder.requests ?? []) {
    inventoryKeys.add(`${req.method.toUpperCase()} ${normalizePath(req.path)}`);
  }
}
const uncovered = apiRoutes.filter((k) => !inventoryKeys.has(k) && !k.includes(" __probe/"));
if (uncovered.length) {
  console.error("Framework API routes missing from inventory:");
  for (const u of uncovered.slice(0, 40)) console.error(" -", u);
  process.exit(1);
}

console.log("check-api-clients: packs current + route parity ok");
