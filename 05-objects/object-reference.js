/**
 * =====================================================
 * CONCEPT: Object References (vs Primitive Copy)
 * =====================================================
 *
 * Definition:
 * Objects and arrays are stored by reference. Assigning
 * them copies the pointer, not a new independent value.
 * Primitives (string, number, boolean, etc.) are copied
 * by value.
 *
 * Why it is important:
 * Mutating a "copy" can change the original. This causes
 * bugs in caches, sessions, and shared config.
 *
 * Real-world use case:
 * Two requests must not share the same mutable user object
 * unless you intend that.
 *
 * Syntax explanation:
 * Shallow copy: { ...obj } or Object.assign({}, obj)
 * Deep copy (structured data): structuredClone(obj)
 *
 * Backend relevance:
 * Never mutate req.body in place if other middleware
 * needs the original. Clone or treat as immutable.
 *
 * Important notes:
 * - Spread is shallow: nested objects are still shared
 * - === on objects compares references, not contents
 *
 * Common mistakes:
 * - Comparing objects with === expecting deep equality
 * - Nested mutation after a shallow clone
 */

const original = { name: "Zeeshan", meta: { city: "Karachi" } };
const alias = original;
alias.name = "Zeeshan Okz";
console.log("original.name changed via alias:", original.name);

const shallow = { ...original };
shallow.name = "Independent name";
shallow.meta.city = "Lahore"; // nested object still shared
console.log("original.meta.city also changed:", original.meta.city);
console.log("shallow.name:", shallow.name);

const deep = structuredClone(original);
deep.meta.city = "Islamabad";
console.log("original.meta.city after deep clone:", original.meta.city);
console.log("deep.meta.city:", deep.meta.city);

console.log("alias === original:", alias === original);
console.log("shallow === original:", shallow === original);

function sameContents(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(
  "sameContents (demo only, not for dates/undefined):",
  sameContents({ a: 1 }, { a: 1 })
);
