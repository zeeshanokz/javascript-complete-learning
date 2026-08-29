/**
 * =====================================================
 * CONCEPT: Getters and Setters
 * =====================================================
 *
 * Definition:
 * get and set define computed properties. They look like
 * fields but run functions on read/write.
 *
 * Why it is important:
 * Validation on assignment, derived values, hiding internal
 * storage with a public API.
 *
 * Real-world use case:
 * user.email = "x" runs validation; user.email always returns
 * a normalized lowercase email.
 *
 * Syntax explanation:
 *   get email() { return this._email; }
 *   set email(value) { this._email = value.toLowerCase(); }
 *
 * Backend relevance:
 * Domain models can keep invariants without exposing _fields.
 *
 * Important notes:
 * - Infinite recursion if the getter assigns the same name
 * - JSON.stringify includes getters as values
 *
 * Common mistakes:
 * - Heavy work in getters (surprising performance)
 * - Forgetting that setters receive the right-hand value
 */

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (typeof value !== "string" || !value.includes("@")) {
      throw new Error("Invalid email");
    }
    this._email = value.trim().toLowerCase();
  }
}

const user = new User("  Zeeshan@Example.com ");
console.log("normalized:", user.email);

try {
  user.email = "not-an-email";
} catch (error) {
  console.log("setter validation:", error.message);
}
