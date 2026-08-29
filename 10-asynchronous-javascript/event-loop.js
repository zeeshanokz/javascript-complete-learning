/**
 * =====================================================
 * CONCEPT: Event Loop
 * =====================================================
 *
 * Definition:
 * The event loop is the algorithm that lets JavaScript run
 * asynchronous work on a single thread.
 *
 * Why it is important:
 * It explains why callbacks, promises, and timers run in a
 * predictable order.
 *
 * Real-world use case:
 * A Node HTTP server handles thousands of connections without
 * one thread per request, because I/O is async.
 *
 * Backend relevance:
 * CPU-heavy synchronous loops block the event loop and freeze
 * all requests. Keep CPU work short or offload it.
 *
 * Important:
 * Microtasks (Promises) run before the next timer macrotask.
 *
 * Common mistakes:
 * - while(true) or huge JSON.parse on the main thread
 * - Assuming async functions run in parallel on extra CPU cores
 */

console.log("A");

setTimeout(() => console.log("D timeout"), 0);

Promise.resolve()
  .then(() => console.log("B promise"))
  .then(() => console.log("C promise"));

console.log("A2");

/**
 * Expected order: A, A2, B, C, D
 */
