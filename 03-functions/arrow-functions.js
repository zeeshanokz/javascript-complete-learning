/**
 * =====================================================
 * CONCEPT: Arrow Functions
 * =====================================================
 *
 * Definition:
 * Arrow functions are a shorter syntax for functions,
 * introduced in ES6. They also handle `this` differently
 * (they do not bind their own this).
 *
 * Why it is important:
 * Array methods (map, filter, reduce) and callbacks are
 * commonly written as arrows. Backend code uses them daily.
 *
 * Real-world use case:
 * const ids = users.map((user) => user.id);
 *
 * Syntax explanation:
 *   const fn = (a, b) => a + b;
 *   const fn = (a) => { return a * 2; };
 *   const fn = () => ({ ok: true }); // return an object
 *
 * Backend relevance:
 * Express middleware and promise .then() handlers often use
 * arrows. Be careful with methods that need `this`.
 *
 * Important notes:
 * - No own `this`, `arguments`, or `new` (not a constructor)
 * - Implicit return when there is no { } block
 * - Returning an object needs parentheses: () => ({ ... })
 *
 * Common mistakes:
 * - Using arrows as object methods that need `this`
 * - Forgetting parentheses when returning an object
 */

const add = (a, b) => a + b;
console.log("add:", add(3, 4));

const square = (n) => n * n;
console.log("square:", square(9));

const makeUser = (name) => ({ name, role: "user" });
console.log("user:", makeUser("Zeeshan"));

const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.08);
console.log("withTax:", withTax);

// `this` is lexical (covered more in 09-advanced-javascript)
const timer = {
  seconds: 0,
  startWrong: function startWrong() {
    // In a real timer this would be setInterval
    const increment = () => {
      this.seconds += 1;
      return this.seconds;
    };
    console.log("arrow sees timer.seconds:", increment());
  },
};

timer.startWrong();
