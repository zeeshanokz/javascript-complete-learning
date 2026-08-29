/**
 * =====================================================
 * CONCEPT: Lexical Scope (Memory & Scope Module)
 * =====================================================
 *
 * Definition:
 * Lexical scope means nested functions can access variables
 * defined in outer functions because of where they were
 * written, not where they were called.
 *
 * Why it is important:
 * This is how JavaScript resolves names and how closures work.
 *
 * Real-world use case:
 * A factory function keeps a private `connection` variable
 * that inner methods can use but callers cannot.
 *
 * Syntax explanation:
 * Inner function looks outward: inner -> outer -> module -> global
 *
 * Backend relevance:
 * Module-level clients (DB pools) are in module scope and
 * reused by request handlers — efficient, but must be safe.
 *
 * Important notes:
 * - Scope is decided at write time (lexical)
 * - `this` is NOT lexical for regular functions (different topic)
 *
 * Common mistakes:
 * - Confusing scope with `this`
 * - Putting secrets on the global object
 */

function createCounter(start) {
  let count = start; // private to this scope

  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log("private count is not on the object:", counter.count);

const dbPoolFake = { connected: true };

function handleRequest(id) {
  if (!dbPoolFake.connected) {
    throw new Error("DB pool is closed");
  }
  return { id, source: "module-scoped-pool" };
}

console.log(handleRequest(42));
