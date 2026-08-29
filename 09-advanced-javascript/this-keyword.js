/**
 * =====================================================
 * CONCEPT: The this Keyword
 * =====================================================
 *
 * Definition:
 * `this` is a value set by HOW a function is called
 * (except arrow functions, which use lexical this).
 *
 * Why it is important:
 * Methods, classes, and event handlers all depend on this.
 * Getting it wrong is a top interview and production bug.
 *
 * Real-world use case:
 * user.save() needs this.id inside the method.
 *
 * Syntax explanation:
 * - obj.method()  => this is obj
 * - fn()          => this is undefined in strict mode (modules)
 * - bind/call/apply set this explicitly
 * - arrows inherit this from surrounding scope
 *
 * Backend relevance:
 * Class-based services and Mongoose methods use this.
 * Detaching methods in callbacks loses this.
 *
 * Important notes:
 * - Node CommonJS files are not always strict in the same way
 *   as ES modules; still write as if this is undefined at top level
 *
 * Common mistakes:
 * - Passing a method as a callback without bind
 * - Using this in arrows inside objects expecting the object
 */

const user = {
  name: "Zeeshan",
  greet() {
    return `Hi, I am ${this.name}`;
  },
};

console.log("method call:", user.greet());

const greet = user.greet;
try {
  console.log("detached:", greet());
} catch (error) {
  console.log("detached this failed:", error.message);
}

function showThis() {
  console.log("showThis this:", this);
}

showThis();

const arrowUser = {
  name: "Ayesha",
  greet: () => `arrow this name: ${this?.name}`,
};
console.log("arrow method (usually wrong):", arrowUser.greet());
