/**
 * =====================================================
 * CONCEPT: Stack Memory vs Heap Memory
 * =====================================================
 *
 * Definition:
 * Primitive values are stored in stack-like slots (the
 * value lives with the variable). Objects/arrays/functions
 * live in the heap; variables hold a reference (address).
 *
 * Why it is important:
 * Copying a number is cheap and independent. Copying an
 * object variable copies the reference, so both names
 * point at the same heap object.
 *
 * Real-world use case:
 * Caching a user object: mutating the cache affects every
 * holder of that reference.
 *
 * Syntax explanation:
 * Primitive: string, number, bigint, boolean, undefined, null, symbol
 * Reference: object, array, function, date, map, set, ...
 *
 * Backend relevance:
 * Node has one heap per process. Large objects in memory
 * (unbounded arrays, caches) cause RAM growth and crashes.
 *
 * Important notes:
 * - The call stack also tracks function frames (see event loop)
 * - Garbage collection frees heap objects with no references
 *
 * Common mistakes:
 * - Growing a global array forever (memory leak)
 * - Assuming const object is an immutable heap value
 */

let score = 10;
let copyScore = score;
copyScore = 99;
console.log("primitives are independent:", score, copyScore);

const user = { name: "Zeeshan" };
const sameUser = user;
sameUser.name = "Updated";
console.log("heap object shared:", user.name);

function addScore(value) {
  const local = value + 1; // local primitive on this stack frame
  return local;
}

console.log("addScore:", addScore(score));
console.log("original score unchanged:", score);

// Leak pattern (do not do this in servers)
// const leak = [];
// setInterval(() => leak.push(Buffer.alloc(1024 * 1024)), 100);
