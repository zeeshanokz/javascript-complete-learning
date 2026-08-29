/**
 * =====================================================
 * CONCEPT: Function Parameters and Arguments
 * =====================================================
 *
 * Definition:
 * Parameters are the names listed in the function definition.
 * Arguments are the actual values you pass when calling it.
 *
 * Why it is important:
 * Functions become useful when they accept input: user data,
 * IDs, options, and callbacks.
 *
 * Real-world use case:
 * createUser(name, email, role = "user")
 *
 * Syntax explanation:
 *   function fn(param1, param2 = defaultValue, ...rest) {}
 *   fn(arg1, arg2, extra1, extra2)
 *
 *   Default parameters: used when the argument is undefined
 *   Rest parameters: gather remaining args into an array
 *
 * Backend relevance:
 * Route handlers receive (req, res, next). Services take
 * DTOs (data objects) instead of long argument lists.
 *
 * Important notes:
 * - Default params apply only to undefined, not to null
 * - Rest must be the last parameter
 * - Prefer a single options object when there are many params
 *
 * Common mistakes:
 * - Relying on arguments (array-like, old style)
 * - Putting rest before other parameters
 * - Passing null and expecting the default to apply
 */

function add(a, b) {
  return a + b;
}

console.log("add arguments 2, 5 =>", add(2, 5));

function createUser(name, role = "user") {
  return { name, role };
}

console.log(createUser("Zeeshan"));
console.log(createUser("Ayesha", "admin"));
console.log(createUser("Ali", null)); // role becomes null, not "user"

function sumAll(label, ...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return { label, total, count: numbers.length };
}

console.log(sumAll("cart", 10, 15, 5));

// Prefer an options object for many settings
function queryUsers(options) {
  const { page = 1, limit = 10, role = "user" } = options;
  return { page, limit, role };
}

console.log(queryUsers({ page: 2, role: "admin" }));
