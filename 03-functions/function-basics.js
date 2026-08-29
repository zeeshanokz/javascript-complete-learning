/**
 * =====================================================
 * CONCEPT: Function Basics
 * =====================================================
 *
 * Definition:
 * A function is a reusable block of code that performs a
 * task. You define it once and call it whenever needed.
 *
 * Why it is important:
 * Functions keep code DRY (Don't Repeat Yourself), make
 * programs testable, and are the building blocks of APIs.
 *
 * Real-world use case:
 * hashPassword(), sendEmail(), and createUser() are functions
 * in a typical backend.
 *
 * Syntax explanation:
 * Function declaration (hoisted):
 *   function name(params) { ... }
 * Function expression (not hoisted):
 *   const name = function (params) { ... };
 *
 * Backend relevance:
 * Route handlers, middleware, and services are functions.
 *
 * Important notes:
 * - Declarations are hoisted; you can call them before they appear
 * - Expressions are not hoisted
 * - One function should do one thing when possible
 *
 * Common mistakes:
 * - Forgetting to call the function (missing ())
 * - Confusing declaration vs expression with hoisting
 */

function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Zeeshan");

const logStatus = function logStatus(status) {
  console.log("status:", status);
};

logStatus("ok");

// Hoisting demo
hoisted();
function hoisted() {
  console.log("function declarations can run before their line");
}

// notHoisted(); // ReferenceError if uncommented
const notHoisted = function () {
  console.log("function expressions are not hoisted");
};
notHoisted();

// -----------------------------------------------------
// Practical example: small, named helpers
// -----------------------------------------------------

function toSlug(title) {
  return title.trim().toLowerCase().replaceAll(" ", "-");
}

console.log("slug:", toSlug("JavaScript Complete Learning"));
