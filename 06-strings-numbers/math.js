/**
 * =====================================================
 * CONCEPT: Math
 * =====================================================
 *
 * Definition:
 * Math is a built-in object of numeric helpers. It is not
 * a constructor; you never write new Math().
 *
 * Why it is important:
 * Rounding, random IDs (with care), clamping, and min/max.
 *
 * Real-world use case:
 * const pageCount = Math.ceil(totalRows / pageSize);
 *
 * Syntax explanation:
 *   Math.round / floor / ceil / trunc
 *   Math.min / Math.max
 *   Math.abs
 *   Math.random() // 0 inclusive to 1 exclusive
 *
 * Backend relevance:
 * Pagination math, retry backoff, generating numeric codes.
 * Do not use Math.random() for security (tokens, passwords).
 *
 * Important notes:
 * - Math.random is not cryptographically secure
 * - In Node, use crypto.randomInt / randomBytes for secrets
 *
 * Common mistakes:
 * - Using Math.random for session tokens
 * - Forgetting ceil when computing page counts
 */

const values = [4.2, 4.5, 4.8];
for (const n of values) {
  console.log({
    n,
    round: Math.round(n),
    floor: Math.floor(n),
    ceil: Math.ceil(n),
    trunc: Math.trunc(n),
  });
}

console.log("min:", Math.min(10, 2, 8));
console.log("max:", Math.max(10, 2, 8));
console.log("abs:", Math.abs(-12));

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("otp demo (not for production auth):", randomInt(1000, 9999));

function pageCount(totalRows, pageSize) {
  if (pageSize <= 0) {
    throw new Error("pageSize must be > 0");
  }
  return Math.ceil(totalRows / pageSize);
}

console.log("pages for 23 rows / 10:", pageCount(23, 10));
