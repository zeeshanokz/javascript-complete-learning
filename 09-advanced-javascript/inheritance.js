/**
 * =====================================================
 * CONCEPT: Inheritance
 * =====================================================
 *
 * Definition:
 * Inheritance lets a child class reuse and extend a parent
 * class with `extends` and `super`.
 *
 * Why it is important:
 * Custom errors extend Error. Specialized services extend
 * a base repository.
 *
 * Real-world use case:
 * class NotFoundError extends AppError {}
 *
 * Syntax explanation:
 *   class Child extends Parent {
 *     constructor(...) {
 *       super(...); // must call parent constructor first
 *     }
 *   }
 *
 * Backend relevance:
 * Error hierarchies let middleware handle AppError vs unknown.
 *
 * Important notes:
 * - super() before using this in the child constructor
 * - Prefer composition when inheritance trees get deep
 *
 * Common mistakes:
 * - Forgetting super()
 * - Deep class hierarchies that are hard to test
 */

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} was not found`, 404);
  }
}

const err = new NotFoundError("User");
console.log(err.name, err.statusCode, err.message);
console.log("instanceof Error:", err instanceof Error);
console.log("instanceof AppError:", err instanceof AppError);
