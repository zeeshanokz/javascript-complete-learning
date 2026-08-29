/**
 * =====================================================
 * CONCEPT: Object Basics
 * =====================================================
 *
 * Definition:
 * An object is a collection of key-value pairs. Keys are
 * strings (or symbols). Values can be any type.
 *
 * Why it is important:
 * Almost all structured data in JS is an object: users,
 * configs, HTTP bodies, database documents.
 *
 * Real-world use case:
 * const user = { id, email, role };
 * res.json(user);
 *
 * Syntax explanation:
 *   const obj = { key: value, method() {} };
 *   obj.key
 *   obj["key"]
 *
 * Backend relevance:
 * JSON objects are the lingua franca of REST APIs.
 *
 * Important notes:
 * - Keys you write without quotes are converted to strings
 * - Nested objects are common
 * - Shorthand: { name } means { name: name }
 *
 * Common mistakes:
 * - Accessing missing keys (undefined) without checking
 * - Confusing dot notation with bracket notation
 */

const user = {
  id: 1,
  name: "Zeeshan",
  email: "zeeshan@example.com",
  address: {
    city: "Karachi",
    country: "PK",
  },
};

console.log("dot:", user.name);
console.log("bracket:", user["email"]);

const key = "id";
console.log("dynamic key:", user[key]);

user.role = "learner";
delete user.email;
console.log("updated user:", user);
console.log("nested city:", user.address.city);

const name = "Ayesha";
const role = "admin";
const shorthand = { name, role };
console.log("shorthand:", shorthand);

console.log("keys:", Object.keys(user));
console.log("values:", Object.values(user));
console.log("entries:", Object.entries(user));
