/**
 * =====================================================
 * CONCEPT: Core Array Methods (mutating and copying)
 * =====================================================
 *
 * Definition:
 * Array methods add, remove, copy, or search items.
 * Some mutate the original array; others return a new one.
 *
 * Why it is important:
 * You will use these daily instead of writing manual loops.
 *
 * Real-world use case:
 * cart.push(item); const last = cart.pop();
 * const page = users.slice(0, 10);
 *
 * Syntax explanation:
 * Mutating: push, pop, shift, unshift, splice
 * Copying: slice
 * Search: find, some, every, includes, indexOf
 *
 * Backend relevance:
 * Building response lists, removing duplicates, slicing
 * pages of results (though DBs should paginate when possible).
 *
 * Important notes:
 * - push/pop are end-of-array (faster)
 * - shift/unshift are start-of-array (slower on large arrays)
 * - splice mutates; slice does not
 *
 * Common mistakes:
 * - Using splice when you meant slice
 * - Ignoring the returned value of push (it returns new length)
 */

const cart = ["tea"];

cart.push("coffee"); // add to end
cart.unshift("water"); // add to start
console.log("after add:", cart);

const last = cart.pop(); // remove end
const first = cart.shift(); // remove start
console.log("removed:", { first, last }, "cart:", cart);

const letters = ["a", "b", "c", "d", "e"];
const middle = letters.slice(1, 4); // copy from 1 up to (not including) 4
console.log("slice:", middle, "original:", letters);

const items = ["keep", "remove-me", "keep"];
items.splice(1, 1, "inserted"); // start, deleteCount, ...insert
console.log("splice mutated:", items);

const users = [
  { id: 1, name: "Zeeshan", active: true },
  { id: 2, name: "Ayesha", active: false },
  { id: 3, name: "Ali", active: true },
];

const found = users.find((user) => user.id === 2);
const hasInactive = users.some((user) => user.active === false);
const allActive = users.every((user) => user.active);
const names = ["Zeeshan", "Ayesha"];

console.log("find:", found);
console.log("some inactive:", hasInactive);
console.log("every active:", allActive);
console.log("includes Zeeshan:", names.includes("Zeeshan"));
