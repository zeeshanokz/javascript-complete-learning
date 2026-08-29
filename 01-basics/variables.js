/**
 * =====================================================
 * CONCEPT: JavaScript Variables (var, let, const)
 * =====================================================
 *
 * Definition:
 * A variable is a named container used to store data so you
 * can read and reuse that data later in the program.
 *
 * Why it is important:
 * Almost every program stores values: user names, prices,
 * request IDs, database results, and configuration.
 *
 * Real-world use case:
 * A backend handler stores `const userId = req.params.id`
 * and uses that id to query a database.
 *
 * Syntax explanation:
 *   const name = value;  // cannot be reassigned
 *   let name = value;    // can be reassigned
 *   var name = value;    // legacy; function-scoped (avoid)
 *
 * Backend relevance:
 * APIs use const for config, request data, and DB clients.
 * let is used for counters, retry loops, and mutable state.
 *
 * Important notes:
 * - Prefer const by default
 * - Use let only when the value must change
 * - Avoid var in modern JavaScript
 * - const does NOT make objects/arrays immutable (only the binding)
 *
 * Common mistakes:
 * - Reassigning a const (TypeError)
 * - Using var and accidentally leaking variables
 * - Declaring without const/let (creates a global in sloppy mode)
 */

// -----------------------------------------------------
// Beginner example
// -----------------------------------------------------

const userName = "Zeeshan";
let age = 24;
age = 25; // allowed: let can be reassigned

console.log("userName:", userName);
console.log("age:", age);

// -----------------------------------------------------
// const vs let
// -----------------------------------------------------

const MAX_LOGIN_ATTEMPTS = 3; // named constant (will not be reassigned)
let remainingAttempts = MAX_LOGIN_ATTEMPTS;

remainingAttempts = remainingAttempts - 1;
console.log("remainingAttempts:", remainingAttempts);

// MAX_LOGIN_ATTEMPTS = 5; // TypeError: Assignment to constant variable

// -----------------------------------------------------
// const objects: the binding is fixed, the contents can change
// -----------------------------------------------------

const user = {
  name: "Zeeshan",
  role: "learner",
};

user.role = "backend-developer"; // allowed
// user = {}; // not allowed: cannot replace the whole binding

console.log("user:", user);

// -----------------------------------------------------
// Why var is generally avoided
// -----------------------------------------------------

/**
 * var is function-scoped (not block-scoped) and is hoisted
 * in a way that surprises beginners. let and const are
 * block-scoped (inside { }) which matches how we write code.
 */

function demonstrateVarProblem() {
  if (true) {
    var leaked = "I leak outside this if-block";
    let blocked = "I stay inside this if-block";
    console.log("inside if (blocked):", blocked);
  }

  console.log("outside if (leaked var):", leaked);
  // console.log(blocked); // ReferenceError: blocked is not defined
}

demonstrateVarProblem();

// -----------------------------------------------------
// Practical example: request-like data in a backend handler
// -----------------------------------------------------

function createOrderSummary(productName, quantity, unitPrice) {
  const taxRate = 0.08; // will not change
  let subtotal = quantity * unitPrice;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    productName,
    quantity,
    subtotal,
    tax,
    total,
  };
}

const order = createOrderSummary("Mechanical Keyboard", 2, 40);
console.log("order summary:", order);
