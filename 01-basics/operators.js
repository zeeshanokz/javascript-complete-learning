/**
 * =====================================================
 * CONCEPT: JavaScript Operators
 * =====================================================
 *
 * Definition:
 * Operators are symbols that perform operations on values
 * (operands): arithmetic, comparison, logic, assignment,
 * and more.
 *
 * Why it is important:
 * You use operators to calculate totals, compare passwords,
 * combine conditions, and update state.
 *
 * Real-world use case:
 * if (user.role === "admin" && user.isActive) { ... }
 * const total = price * quantity;
 *
 * Syntax explanation:
 * Arithmetic: + - * / % **
 * Comparison: === !== > < >= <=
 * Logical: && || !
 * Assignment: = += -= *= /=
 * Nullish coalescing: ??
 * Optional chaining: ?.
 * Ternary: condition ? valueIfTrue : valueIfFalse
 *
 * Backend relevance:
 * Auth checks, pagination math, default config (??), and
 * safe access of nested JSON (?.).
 *
 * Important notes:
 * - Prefer === and !== (strict) over == and !=
 * - ?? only falls back for null or undefined (not 0 or "")
 * - || treats 0, "", and false as missing (often wrong for numbers)
 *
 * Common mistakes:
 * - Using || for default numbers (0 is valid but gets replaced)
 * - Mixing assignment (=) with comparison (===)
 * - Forgetting operator precedence; use parentheses
 */

const price = 40;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;
const discount = subtotal * (discountPercent / 100);
const total = subtotal - discount;

console.log("subtotal:", subtotal);
console.log("total after discount:", total);
console.log("remainder 10 % 3:", 10 % 3);
console.log("2 ** 8 (power):", 2 ** 8);

// -----------------------------------------------------
// Comparison and logical operators
// -----------------------------------------------------

const age = 20;
const hasId = true;

console.log("adult?", age >= 18);
console.log("can enter?", age >= 18 && hasId);
console.log("needs help?", age < 18 || !hasId);

// Ternary (covered more in control-flow)
const accessLabel = age >= 18 ? "allowed" : "denied";
console.log("accessLabel:", accessLabel);

// -----------------------------------------------------
// ?? vs ||  (very common backend bug)
// -----------------------------------------------------

const requestedPage = 0; // page 0 can be valid in some APIs
const pageWithOr = requestedPage || 1; // becomes 1 (wrong if 0 is valid)
const pageWithNullish = requestedPage ?? 1; // stays 0

console.log("pageWithOr:", pageWithOr);
console.log("pageWithNullish:", pageWithNullish);

const missingTitle = null;
console.log("title:", missingTitle ?? "Untitled");

// -----------------------------------------------------
// Optional chaining
// -----------------------------------------------------

const order = {
  id: "ord_1",
  customer: {
    name: "Zeeshan",
  },
};

console.log("customer name:", order.customer?.name);
console.log("missing address city:", order.customer?.address?.city);

// -----------------------------------------------------
// Practical example: pagination
// -----------------------------------------------------

function getPagination(page, pageSize) {
  const safePage = Math.max(1, Number(page) || 1);
  const safeSize = Math.max(1, Number(pageSize) || 10);
  const offset = (safePage - 1) * safeSize;

  return { page: safePage, pageSize: safeSize, offset };
}

console.log("pagination:", getPagination("2", "10"));
