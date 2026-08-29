/**
 * =====================================================
 * CONCEPT: Return Values
 * =====================================================
 *
 * Definition:
 * return sends a value back to the caller and stops the
 * function immediately.
 *
 * Why it is important:
 * Functions that only console.log are hard to reuse. Return
 * values can be stored, tested, and sent as API responses.
 *
 * Real-world use case:
 * const user = await findUserById(id);
 * return res.json(user);
 *
 * Syntax explanation:
 *   return expression;
 *   return;          // returns undefined
 * No return at all also yields undefined.
 *
 * Backend relevance:
 * Service functions should return data or throw errors.
 * HTTP handlers return responses based on those values.
 *
 * Important notes:
 * - Code after return never runs
 * - You can return objects, arrays, functions, or primitives
 * - Returning early simplifies nested if/else
 *
 * Common mistakes:
 * - Forgetting return (caller gets undefined)
 * - Returning inside forEach (does not stop the outer function)
 */

function multiply(a, b) {
  return a * b;
}

const result = multiply(6, 7);
console.log("result:", result);

function findEven(numbers) {
  for (const n of numbers) {
    if (n % 2 === 0) {
      return n; // exits the whole function
    }
  }
  return null;
}

console.log("first even:", findEven([1, 3, 8, 9]));

function silent() {
  console.log("I print but return nothing");
}

console.log("silent() =>", silent()); // undefined

// -----------------------------------------------------
// Practical example: result object instead of throwing
// (throwing is also valid; see error-handling later)
// -----------------------------------------------------

function divide(a, b) {
  if (b === 0) {
    return { ok: false, error: "Cannot divide by zero" };
  }
  return { ok: true, value: a / b };
}

console.log(divide(10, 2));
console.log(divide(10, 0));
