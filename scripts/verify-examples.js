/**
 * Verifies lesson files: syntax check, then run Node-safe examples.
 * Skips browser-only files and long-running HTTP servers.
 */
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");

const skipRun = new Set([
  path.join("13-backend-foundation", "notes-api.js"),
  path.join("projects", "project-01", "script.js"),
  path.join("projects", "project-02", "script.js"),
  path.join("projects", "project-03", "script.js"),
  path.join("scripts", "verify-examples.js"),
]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.name.endsWith(".js") || entry.name.endsWith(".mjs")) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(root);
let failed = 0;

for (const file of files) {
  const rel = path.relative(root, file);
  try {
    execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    console.log("syntax ok:", rel);
  } catch (error) {
    failed += 1;
    console.error("syntax fail:", rel);
    console.error(error.stderr?.toString() || error.message);
  }
}

for (const file of files) {
  const rel = path.relative(root, file);
  if (skipRun.has(rel)) {
    console.log("skip run:", rel);
    continue;
  }
  try {
    execFileSync(process.execPath, [file], {
      stdio: "pipe",
      timeout: 15000,
      cwd: root,
    });
    console.log("run ok:", rel);
  } catch (error) {
    failed += 1;
    console.error("run fail:", rel);
    const out = (error.stderr && error.stderr.toString()) || error.message;
    console.error(out);
  }
}

if (failed > 0) {
  process.exitCode = 1;
  console.error("verify failed:", failed);
} else {
  console.log("verify passed");
}
