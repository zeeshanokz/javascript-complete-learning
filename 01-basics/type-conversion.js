/**
 * =====================================================
 * CONCEPT: Type Conversion and Type Coercion
 * =====================================================
 *
 * Definition:
 * Type conversion is when YOU intentionally change a value
 * from one type to another (Number("10") => 10).
 * Type coercion is when JavaScript automatically converts
 * types during an operation ("10" + 1 => "101").
 *
 * Why it is important:
 * Form inputs, URL params, and environment variables are
 * always strings. Databases and APIs need numbers, booleans,
 * and objects. Silent coercion causes production bugs.
 *
 * Real-world use case:
 * process.env.PORT is a string. Your HTTP server needs a
 * number: const port = Number(process.env.PORT) || 3000;
 *
 * Syntax explanation:
 *   String(value) / value.toString()
 *   Number(value) / parseInt(value, 10) / parseFloat(value)
 *   Boolean(value)
 *
 * Backend relevance:
 * Always parse and validate request data. Never trust
 * query strings or env vars as already-correct types.
 *
 * Important notes:
 * - Number("") is 0
 * - Number("abc") is NaN (Not a Number)
 * - Number(null) is 0
 * - Number(undefined) is NaN
 * - parseInt stops at the first non-digit ("10px" => 10)
 *
 * Common mistakes:
 * - Using + to "add" numbers that are actually strings
 * - Using == which coerces types ("5" == 5 is true)
 * - Forgetting the radix in parseInt (always pass 10)
 */

// -----------------------------------------------------
// Explicit conversion (preferred)
// -----------------------------------------------------

const quantityFromForm = "3";
const quantity = Number(quantityFromForm);

console.log("string to number:", quantity, typeof quantity);
console.log("number to string:", String(42), typeof String(42));
console.log("to boolean:", Boolean("hello"), Boolean(0));

console.log("parseInt:", parseInt("42px", 10));
console.log("parseFloat:", parseFloat("19.99 USD"));

// -----------------------------------------------------
// Coercion (automatic, often surprising)
// -----------------------------------------------------

console.log("'5' + 2 =", "5" + 2); // "52"  string concatenation
console.log("'5' - 2 =", "5" - 2); // 3     minus forces numbers
console.log("'5' * '2' =", "5" * "2"); // 10
console.log("true + 1 =", true + 1); // 2  true becomes 1

// Loose equality coerces; strict equality does not
console.log("'5' == 5:", "5" == 5); // true  (avoid)
console.log("'5' === 5:", "5" === 5); // false (prefer)

// -----------------------------------------------------
// Practical example: env + query parsing
// -----------------------------------------------------

function parseServerConfig(envPort, queryLimit) {
  const port = Number(envPort);
  const limit = parseInt(queryLimit, 10);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error("PORT must be a positive number");
  }

  if (Number.isNaN(limit) || limit <= 0) {
    throw new Error("limit must be a positive integer");
  }

  return { port, limit };
}

const config = parseServerConfig("3000", "25");
console.log("server config:", config);

// Guard against NaN
console.log("Number('abc') is NaN:", Number.isNaN(Number("abc")));
