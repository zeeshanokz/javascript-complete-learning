/**
 * =====================================================
 * CONCEPT: Prototypes and the Prototype Chain
 * =====================================================
 *
 * Definition:
 * Every object has an internal [[Prototype]] link. Property
 * lookup walks that chain until it finds the name or reaches null.
 *
 * Why it is important:
 * Methods on Array, String, and your classes live on
 * prototypes so they are shared, not copied per instance.
 *
 * Real-world use case:
 * All arrays share .map from Array.prototype.
 *
 * Syntax explanation:
 *   Object.getPrototypeOf(obj)
 *   obj.__proto__  (legacy; avoid in new code)
 *   Constructor.prototype.method = ...
 *
 * Backend relevance:
 * Node classes, Error subclasses, and libraries rely on
 * prototype inheritance.
 *
 * Important notes:
 * - hasOwn vs inherited properties
 * - Object.create(proto) makes an object with a chosen prototype
 *
 * Common mistakes:
 * - Mutating built-in prototypes (Array.prototype.foo = ...)
 * - Forgetting that {} inherits from Object.prototype
 */

const animal = {
  eat() {
    return `${this.name} eats`;
  },
};

const dog = Object.create(animal);
dog.name = "Kalu";

console.log(dog.eat());
console.log("own name?", Object.hasOwn(dog, "name"));
console.log("own eat?", Object.hasOwn(dog, "eat"));
console.log("prototype of dog is animal:", Object.getPrototypeOf(dog) === animal);

function User(name) {
  this.name = name;
}

User.prototype.greet = function greet() {
  return `Hello, ${this.name}`;
};

const u = new User("Zeeshan");
console.log(u.greet());
console.log("u.__proto__ === User.prototype:", Object.getPrototypeOf(u) === User.prototype);

const chain = [];
let current = u;
while (current) {
  chain.push(current.constructor?.name || typeof current);
  current = Object.getPrototypeOf(current);
}
console.log("prototype chain walk:", chain);
