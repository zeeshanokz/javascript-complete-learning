/**
 * =====================================================
 * CONCEPT: Closures
 * =====================================================
 *
 * Definition:
 * A closure is a function that remembers variables from
 * the outer scope even after that outer function has returned.
 *
 * Why it is important:
 * Closures enable data privacy, function factories, and
 * callbacks that keep context (partial application).
 *
 * Real-world use case:
 * Express middleware: return async (req, res, next) => { ... }
 * closes over `role` from `requireRole(role)`.
 *
 * Syntax explanation:
 * Outer function defines variables; inner function uses them
 * and is returned or passed as a callback.
 *
 * Backend relevance:
 * Rate limiters, memoization, config-bound helpers, and
 * middleware factories all use closures.
 *
 * Important notes:
 * - Each call to the outer function creates a new closed-over state
 * - Closures can keep memory alive if they hold large objects
 *
 * Common mistakes:
 * - Loops with var capturing the same binding (use let)
 * - Holding request objects in long-lived closures (leaks)
 */

function makeMultiplier(factor) {
  return function multiply(value) {
    return value * factor;
  };
}

const triple = makeMultiplier(3);
console.log("triple(10):", triple(10));

function requireRole(role) {
  return function check(user) {
    return user.role === role || user.role === "admin";
  };
}

const mustBeEditor = requireRole("editor");
console.log(mustBeEditor({ role: "editor" }));
console.log(mustBeEditor({ role: "viewer" }));

function createIdFactory(prefix) {
  let last = 0;
  return function nextId() {
    last += 1;
    return `${prefix}_${last}`;
  };
}

const nextOrderId = createIdFactory("ord");
console.log(nextOrderId());
console.log(nextOrderId());
