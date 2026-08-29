/**
 * =====================================================
 * CONCEPT: if, else if, else
 * =====================================================
 *
 * Definition:
 * Conditional statements run different code depending on
 * whether an expression is true or false.
 *
 * Why it is important:
 * Programs must branch: authenticated vs guest, success vs
 * error, in-stock vs sold-out.
 *
 * Real-world use case:
 * A backend route returns 401 if there is no token, 403 if
 * the role is wrong, and 200 if the user is allowed.
 *
 * Syntax explanation:
 *   if (condition) { ... }
 *   else if (otherCondition) { ... }
 *   else { ... }
 *
 * Backend relevance:
 * Request validation, authorization, and error responses
 * are almost always if/else chains (or early returns).
 *
 * Important notes:
 * - Conditions are converted to boolean (truthy/falsy)
 * - Prefer early return over deep nesting
 * - Keep conditions small and named
 *
 * Common mistakes:
 * - Using = instead of ===
 * - Checking truthiness of 0 when 0 is a valid value
 * - Nesting too many if statements (hard to test)
 */

const httpStatus = 200;

if (httpStatus >= 200 && httpStatus < 300) {
  console.log("Success");
} else if (httpStatus >= 400 && httpStatus < 500) {
  console.log("Client error");
} else if (httpStatus >= 500) {
  console.log("Server error");
} else {
  console.log("Other status");
}

// -----------------------------------------------------
// Practical example: authorize a request (early return)
// -----------------------------------------------------

function authorize(user, requiredRole) {
  if (!user) {
    return { ok: false, status: 401, message: "Not authenticated" };
  }

  if (!user.isActive) {
    return { ok: false, status: 403, message: "Account disabled" };
  }

  if (user.role !== requiredRole && user.role !== "admin") {
    return { ok: false, status: 403, message: "Insufficient permissions" };
  }

  return { ok: true, status: 200, message: "Authorized" };
}

console.log(authorize(null, "editor"));
console.log(authorize({ isActive: true, role: "viewer" }, "editor"));
console.log(authorize({ isActive: true, role: "admin" }, "editor"));
