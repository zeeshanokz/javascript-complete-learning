/**
 * =====================================================
 * CONCEPT: try / catch / finally
 * =====================================================
 *
 * Definition:
 * try runs code that might throw. catch receives the error.
 * finally always runs (cleanup).
 *
 * Why it is important:
 * Backend code talks to disks, networks, and databases.
 * Failures are normal; crashes should be rare.
 *
 * Real-world use case:
 * try { JSON.parse(body) } catch { return 400 }
 *
 * Syntax explanation:
 *   try { ... } catch (error) { ... } finally { ... }
 *
 * Backend relevance:
 * Parse JSON, validate input, map errors to HTTP codes.
 *
 * Important notes:
 * - throw anything, but prefer Error objects
 * - finally runs even if you return from try/catch
 *
 * Common mistakes:
 * - Catching then ignoring
 * - Using try/catch for normal control flow everywhere
 */

function parseJson(text) {
  try {
    return { ok: true, value: JSON.parse(text) };
  } catch (error) {
    return { ok: false, error: error.message };
  } finally {
    console.log("parseJson finished");
  }
}

console.log(parseJson('{"ok":true}'));
console.log(parseJson("not-json"));

function mustBePositive(n) {
  if (n <= 0) {
    throw new Error("n must be positive");
  }
  return n;
}

try {
  mustBePositive(-1);
} catch (error) {
  console.log("caught:", error.message);
}
