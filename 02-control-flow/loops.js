/**
 * =====================================================
 * CONCEPT: Loops (for, while, do...while, for...of, for...in)
 * =====================================================
 *
 * Definition:
 * A loop repeats a block of code until a condition is no
 * longer true, or until every item in a collection is visited.
 *
 * Why it is important:
 * You process lists: users, products, database rows, files.
 *
 * Real-world use case:
 * Hash many passwords, send emails to a list, or paginate
 * through API results until there is no next page.
 *
 * Syntax explanation:
 *   for (let i = 0; i < n; i++) { ... }
 *   while (condition) { ... }
 *   do { ... } while (condition);
 *   for (const item of array) { ... }
 *   for (const key in object) { ... }
 *   break    // exit the loop
 *   continue // skip this iteration
 *
 * Backend relevance:
 * Streaming records, retry loops, batch jobs, and building
 * response arrays.
 *
 * Important notes:
 * - for...of is for iterable values (arrays, strings, maps)
 * - for...in is for object keys (usually avoid on arrays)
 * - Infinite loops freeze Node.js (no Ctrl+C if you ignore signals)
 *
 * Common mistakes:
 * - Off-by-one errors in for indexes
 * - Mutating an array while iterating it
 * - Using for...in on arrays (includes inherited keys)
 */

const products = ["tea", "coffee", "milk"];

// for
for (let index = 0; index < products.length; index += 1) {
  console.log("for index", index, products[index]);
}

// while
let remaining = 3;
while (remaining > 0) {
  console.log("while remaining:", remaining);
  remaining -= 1;
}

// do...while always runs at least once
let tries = 0;
do {
  tries += 1;
  console.log("do...while try:", tries);
} while (tries < 1);

// for...of (preferred for arrays)
for (const product of products) {
  if (product === "coffee") {
    continue; // skip coffee
  }
  console.log("for...of product:", product);
}

// for...in (object keys)
const user = { id: 10, name: "Zeeshan", role: "admin" };
for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log("for...in", key, user[key]);
  }
}

// break
for (const product of products) {
  if (product === "coffee") {
    console.log("found coffee, stopping");
    break;
  }
}

// -----------------------------------------------------
// Practical example: retry until success or max attempts
// -----------------------------------------------------

function fakeUnstableCall(attempt) {
  return attempt >= 3;
}

function retryOperation(maxAttempts) {
  let attempt = 1;

  while (attempt <= maxAttempts) {
    const success = fakeUnstableCall(attempt);
    if (success) {
      return { ok: true, attempt };
    }
    attempt += 1;
  }

  return { ok: false, attempt: maxAttempts };
}

console.log("retry result:", retryOperation(5));
