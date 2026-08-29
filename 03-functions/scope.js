/**
 * =====================================================
 * CONCEPT: Scope (in Functions)
 * =====================================================
 *
 * Definition:
 * Scope is the region of code where a variable can be
 * accessed. JavaScript has global, function, and block scope.
 *
 * Why it is important:
 * Scope prevents name collisions and hides internal details.
 * It is the foundation of closures and modules.
 *
 * Real-world use case:
 * A password hashing secret stays inside a module scope,
 * not as a global variable.
 *
 * Syntax explanation:
 * - Global: declared at the top level of a file
 * - Function: var and function-scoped bindings
 * - Block: let and const inside { }
 *
 * Backend relevance:
 * Each request should use local variables. Globals shared
 * across requests can leak data between users.
 *
 * Important notes:
 * - Inner scopes can read outer variables (scope chain)
 * - Outer scopes cannot read inner variables
 * - Module files in Node have their own file scope
 *
 * Common mistakes:
 * - Creating globals accidentally
 * - Assuming let is function-scoped
 * - Reusing the same variable name and shadowing by accident
 */

const appName = "javascript-complete-learning"; // module/global-in-file

function outer() {
  const outerValue = "outer";

  function inner() {
    const innerValue = "inner";
    console.log("inner can read:", appName, outerValue, innerValue);
  }

  inner();
  // console.log(innerValue); // ReferenceError
}

outer();

function blockScopeDemo(isAdmin) {
  if (isAdmin) {
    const message = "Welcome, admin";
    console.log(message);
  }
  // console.log(message); // ReferenceError
}

blockScopeDemo(true);

// Shadowing
const status = "global-status";
function printStatus() {
  const status = "local-status";
  console.log("shadowed status:", status);
}
printStatus();
console.log("outer status:", status);

// -----------------------------------------------------
// Practical example: do not share mutable globals per request
// -----------------------------------------------------

function handleRequest(userId) {
  const requestId = `req_${userId}_${Date.now()}`;
  return { requestId, userId };
}

console.log(handleRequest(1));
console.log(handleRequest(2));
