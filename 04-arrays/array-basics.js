/**
 * =====================================================
 * CONCEPT: Array Basics
 * =====================================================
 *
 * Definition:
 * An array is an ordered list of values. Indexes start at 0.
 *
 * Why it is important:
 * Lists are everywhere: users, products, log lines, query
 * results, and HTTP headers.
 *
 * Real-world use case:
 * const ids = rows.map((row) => row.id);
 *
 * Syntax explanation:
 *   const items = [value1, value2];
 *   items[0]
 *   items.length
 *
 * Backend relevance:
 * Database query results are arrays. Request bodies often
 * send arrays of IDs to delete or update.
 *
 * Important notes:
 * - Arrays are objects (reference type)
 * - Sparse arrays exist but should be avoided
 * - Prefer const for the array binding; you can still push
 *
 * Common mistakes:
 * - Using arrays like objects with random string keys
 * - Confusing length with the last index (length - 1)
 */

const skills = ["html", "css", "javascript"];

console.log("first:", skills[0]);
console.log("last:", skills[skills.length - 1]);
console.log("length:", skills.length);

skills[2] = "javascript-es6";
console.log("updated:", skills);

const mixed = ["ok", 200, true, { id: 1 }];
console.log("mixed:", mixed);

// Nested arrays
const matrix = [
  [1, 2],
  [3, 4],
];
console.log("matrix[1][0]:", matrix[1][0]);

// Copy vs reference (see 05-objects/object-reference.js too)
const original = ["a", "b"];
const alias = original;
alias.push("c");
console.log("original after alias.push:", original);

const copy = [...original];
copy.push("d");
console.log("original stays:", original);
console.log("copy:", copy);
