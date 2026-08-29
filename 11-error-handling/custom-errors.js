/**
 * =====================================================
 * CONCEPT: Custom Errors
 * =====================================================
 *
 * Definition:
 * Custom error classes extend Error so you can attach a
 * status code, error code, and detect types with instanceof.
 *
 * Why it is important:
 * Middleware can turn NotFoundError into 404 and
 * ValidationError into 400 automatically.
 *
 * Real-world use case:
 * throw new ValidationError("email is required");
 *
 * Syntax explanation:
 *   class XError extends Error { constructor(message) { super(message); } }
 *
 * Backend relevance:
 * Consistent JSON: { error: { message, code } }
 *
 * Important notes:
 * - Set this.name
 * - In older Node, captureStackTrace is sometimes used
 *
 * Common mistakes:
 * - throw "string" instead of Error (loses stack)
 * - One giant Error type with no status
 */

class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400, "VALIDATION_ERROR");
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, 404, "NOT_FOUND");
  }
}

function toHttpError(error) {
  if (error instanceof AppError) {
    return {
      statusCode: error.statusCode,
      body: { error: { message: error.message, code: error.code } },
    };
  }

  return {
    statusCode: 500,
    body: { error: { message: "Internal server error", code: "INTERNAL" } },
  };
}

console.log(toHttpError(new ValidationError("email is required")));
console.log(toHttpError(new NotFoundError("User")));
console.log(toHttpError(new Error("unexpected")));
