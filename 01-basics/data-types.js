/**
 * =====================================================
 * CONCEPT: JavaScript Data Types
 * =====================================================
 *
 * Definition:
 * A data type describes what kind of value a variable holds
 * (text, number, boolean, object, etc.) and what you can do
 * with that value.
 *
 * Why it is important:
 * Wrong types cause bugs: adding a string to a number,
 * sending the wrong JSON shape to an API, or storing null
 * when you expected an object.
 *
 * Real-world use case:
 * An API request body must be an object. A product price
 * must be a number. An "isAdmin" flag must be a boolean.
 *
 * Syntax explanation:
 * Use typeof to inspect a value's type:
 *   typeof value
 *
 * JavaScript types:
 * Primitive (copied by value):
 *   string, number, bigint, boolean, undefined, null, symbol
 * Non-primitive / reference (copied by reference):
 *   object (includes arrays, functions, dates, maps, sets)
 *
 * Backend relevance:
 * JSON only supports a subset of types. Dates become strings.
 * undefined is omitted in JSON.stringify. Know this for APIs.
 *
 * Important notes:
 * - typeof null === "object" (a long-standing language quirk)
 * - Arrays are objects: typeof [] === "object"
 * - Use Array.isArray() to check arrays
 *
 * Common mistakes:
 * - Assuming typeof null is "null"
 * - Treating arrays as a separate typeof result
 * - Using == instead of === and triggering type coercion
 */

// -----------------------------------------------------
// Primitive types
// -----------------------------------------------------

const productName = "Espresso Machine"; // string
const price = 129.99; // number
const stockCount = 12n; // bigint (integers beyond Number.MAX_SAFE_INTEGER)
const isInStock = true; // boolean
let couponCode; // undefined (declared, not assigned)
const discontinuedAt = null; // null = intentional empty value
const orderId = Symbol("orderId"); // unique identifier

console.log("string:", productName, typeof productName);
console.log("number:", price, typeof price);
console.log("bigint:", stockCount, typeof stockCount);
console.log("boolean:", isInStock, typeof isInStock);
console.log("undefined:", couponCode, typeof couponCode);
console.log("null:", discontinuedAt, typeof discontinuedAt); // "object"
console.log("symbol:", orderId, typeof orderId);

// -----------------------------------------------------
// Non-primitive types
// -----------------------------------------------------

const user = { id: 1, name: "Zeeshan" }; // object
const tags = ["javascript", "nodejs"]; // array (still an object)
const greet = function greet(name) {
  return `Hello, ${name}`;
}; // function (typeof "function")

console.log("object:", user, typeof user);
console.log("array:", tags, typeof tags, Array.isArray(tags));
console.log("function:", typeof greet);

// -----------------------------------------------------
// Practical example: validating an incoming API payload
// -----------------------------------------------------

const incomingUser = {
  name: "Ayesha",
  email: "ayesha@example.com",
  age: 22,
  isActive: true,
  roles: ["user"],
};

function describePayload(payload) {
  return {
    nameType: typeof payload.name,
    ageType: typeof payload.age,
    isActiveType: typeof payload.isActive,
    rolesIsArray: Array.isArray(payload.roles),
  };
}

console.log("payload types:", describePayload(incomingUser));

// JSON cannot store undefined, functions, or symbols
const jsonSafe = JSON.stringify({
  name: incomingUser.name,
  missing: undefined,
  createdAt: new Date(),
});
console.log("JSON sample:", jsonSafe);
