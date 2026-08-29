/**
 * =====================================================
 * CONCEPT: Classes and Constructors
 * =====================================================
 *
 * Definition:
 * class is syntactic sugar over constructor functions +
 * prototypes. constructor() runs when you use `new`.
 *
 * Why it is important:
 * Services, models, custom errors, and SDKs are often classes.
 *
 * Real-world use case:
 * class UserRepository { async findById(id) { ... } }
 *
 * Syntax explanation:
 *   class Name {
 *     constructor(args) { this.x = args; }
 *     method() {}
 *   }
 *   const instance = new Name(args);
 *
 * Backend relevance:
 * Express apps may stay functional; large backends often
 * use classes for domain logic. Either is valid.
 *
 * Important notes:
 * - Always call with new
 * - Fields are per instance; methods live on the prototype
 *
 * Common mistakes:
 * - Forgetting new
 * - Putting heavy data on the prototype (shared by all)
 */

class Product {
  constructor(name, priceCents) {
    this.name = name;
    this.priceCents = priceCents;
  }

  formatPrice() {
    return `$${(this.priceCents / 100).toFixed(2)}`;
  }
}

const keyboard = new Product("Keyboard", 4999);
console.log(keyboard.name, keyboard.formatPrice());

try {
  Product("oops", 1);
} catch (error) {
  console.log("missing new:", error.message);
}
