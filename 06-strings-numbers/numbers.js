/**
 * =====================================================
 * CONCEPT: Numbers
 * =====================================================
 *
 * Definition:
 * JavaScript Number is a 64-bit floating-point value
 * (IEEE 754). Integers are safe up to Number.MAX_SAFE_INTEGER.
 *
 * Why it is important:
 * Money, IDs, pagination, and metrics are numbers. Floating
 * point rounding can break money math.
 *
 * Real-world use case:
 * Store money as integer cents on the backend, not 19.99.
 *
 * Syntax explanation:
 *   Number.parseInt(text, 10)
 *   Number.parseFloat(text)
 *   Number.isNaN(value)
 *   Number.isFinite(value)
 *   value.toFixed(digits) // returns a STRING
 *
 * Backend relevance:
 * JSON numbers have no bigint. Large IDs should be strings.
 *
 * Important notes:
 * - 0.1 + 0.2 !== 0.3
 * - isNaN("hello") is true (coerces); Number.isNaN does not
 *
 * Common mistakes:
 * - Using toFixed then adding more numbers (it's a string)
 * - Using global isNaN instead of Number.isNaN
 */

console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("0.1 + 0.2:", 0.1 + 0.2);
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('hello'):", Number.isNaN("hello"));

const price = 19.99;
console.log("toFixed(2):", price.toFixed(2), typeof price.toFixed(2));

function dollarsToCents(amount) {
  return Math.round(amount * 100);
}

function centsToDollars(cents) {
  return cents / 100;
}

const cents = dollarsToCents(19.99);
console.log("cents:", cents);
console.log("back:", centsToDollars(cents));

console.log("parseInt 08 with radix 10:", Number.parseInt("08", 10));
console.log("isFinite Infinity:", Number.isFinite(Infinity));
