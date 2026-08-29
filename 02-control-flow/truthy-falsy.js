/**
 * =====================================================
 * CONCEPT: Truthy, Falsy, and the Ternary Operator
 * =====================================================
 *
 * Definition:
 * In a boolean context, every value is either falsy or
 * truthy. The ternary operator chooses one of two values
 * based on a condition: condition ? a : b
 *
 * Why it is important:
 * if (user) { ... } is used everywhere. You must know which
 * values silently fail the check.
 *
 * Real-world use case:
 * const name = req.body.name || "Guest";
 * But 0 and "" are falsy, so this pattern can be wrong.
 *
 * Syntax explanation:
 * Falsy values (only these):
 *   false, 0, -0, 0n, "", null, undefined, NaN
 * Everything else is truthy, including:
 *   "0", "false", [], {}, function() {}
 *
 * Backend relevance:
 * Request bodies, query params, and DB fields are often
 * empty strings or 0. Validate explicitly instead of
 * relying on truthiness.
 *
 * Important notes:
 * - Empty array [] is truthy
 * - Empty object {} is truthy
 * - Use Boolean(value) or !!value to convert
 *
 * Common mistakes:
 * - Treating [] as empty/false
 * - Using || to default a numeric 0
 * - Overusing nested ternaries (hard to read)
 */

const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

for (const value of falsyValues) {
  console.log("falsy?", value, Boolean(value));
}

const truthyExamples = ["0", "false", " ", [], {}, 1, "Zeeshan"];
for (const value of truthyExamples) {
  console.log("truthy?", value, Boolean(value));
}

// Ternary
const score = 72;
const result = score >= 50 ? "pass" : "fail";
console.log("result:", result);

// Nested ternary (avoid when it grows)
const grade = score >= 80 ? "A" : score >= 50 ? "B" : "C";
console.log("grade:", grade);

// -----------------------------------------------------
// Practical example: explicit checks vs truthiness
// -----------------------------------------------------

function normalizeUsername(username) {
  if (username === undefined || username === null) {
    return "guest";
  }

  const trimmed = String(username).trim();
  return trimmed === "" ? "guest" : trimmed;
}

console.log(normalizeUsername(undefined));
console.log(normalizeUsername("  "));
console.log(normalizeUsername("zeeshan"));

function hasItems(list) {
  return Array.isArray(list) && list.length > 0;
}

console.log("[] is truthy but empty:", Boolean([]), "hasItems:", hasItems([]));
