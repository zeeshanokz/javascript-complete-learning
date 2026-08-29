/**
 * =====================================================
 * CONCEPT: Debugging JavaScript
 * =====================================================
 *
 * Definition:
 * Debugging is finding why code does not do what you
 * expected: wrong values, wrong types, wrong control flow.
 *
 * Why it is important:
 * Backend bugs cost users and data. Guessing is slow.
 *
 * Real-world use case:
 * A handler returns undefined because you forgot await.
 *
 * Syntax explanation:
 *   console.log / console.error / console.table
 *   debugger;  // pauses in DevTools or Node inspect
 *   node --inspect file.js
 *
 * Backend relevance:
 * Log request ids, status codes, and error stacks.
 * Do not log passwords or tokens.
 *
 * Important notes:
 * - Reproduce with a small input first
 * - Check types (typeof, Array.isArray)
 * - Read the stack trace from the top
 *
 * Common mistakes:
 * - Logging entire req objects (huge + secrets)
 * - Fixing symptoms without a failing example
 */

function findBug(users, id) {
  console.log("debug users length:", users.length, "id:", id, typeof id);
  const user = users.find((item) => item.id === id);
  if (!user) {
    console.error("debug: no user matched", { id, ids: users.map((u) => u.id) });
  }
  return user;
}

const users = [{ id: 1, name: "Zeeshan" }];
console.log("found with number:", findBug(users, 1));
console.log("found with string id (common API bug):", findBug(users, "1"));

console.table(users);
