/**
 * =====================================================
 * CONCEPT: Async Error Handling
 * =====================================================
 *
 * Definition:
 * Async errors are rejected promises. You handle them with
 * try/catch around await, or .catch() on the promise.
 *
 * Why it is important:
 * Unhandled rejections can crash Node.js. APIs must return
 * structured errors, not silent failures.
 *
 * Real-world use case:
 * try { await db.insert() } catch { return 500 }
 *
 * Syntax explanation:
 *   try { await fn() } catch (error) { ... }
 *   fn().catch((error) => ...)
 *
 * Backend relevance:
 * Central error middleware converts errors into HTTP status
 * codes and JSON bodies.
 *
 * Important notes:
 * - throw inside async becomes a rejection
 * - Promise.all fails fast on the first rejection
 *
 * Common mistakes:
 * - Empty catch blocks
 * - Logging and swallowing errors that the caller must see
 */

async function readConfig(path) {
  if (path !== "config.json") {
    throw new Error("Config not found");
  }
  return { port: 3000 };
}

async function boot() {
  try {
    const config = await readConfig("missing.json");
    return config;
  } catch (error) {
    console.log("handled:", error.message);
    return { port: 3000, source: "defaults" };
  }
}

boot().then((config) => console.log("boot config:", config));

async function allMustSucceed() {
  try {
    await Promise.all([
      Promise.resolve("ok"),
      Promise.reject(new Error("db timeout")),
    ]);
  } catch (error) {
    console.log("Promise.all failed:", error.message);
  }
}

allMustSucceed();
