/**
 * =====================================================
 * CONCEPT: Callbacks, Sync vs Async, Event Loop
 * =====================================================
 *
 * Definition:
 * A callback is a function passed to another function to be
 * called later. Synchronous code finishes now. Asynchronous
 * code schedules work and continues.
 *
 * Why it is important:
 * Node.js is built on async I/O. Blocking the thread freezes
 * every request on that process.
 *
 * Real-world use case:
 * fs.readFile(path, (err, data) => { ... })
 *
 * Syntax explanation:
 *   function doWork(cb) { cb(null, result); }
 *
 * Event loop (mental model):
 * 1. Call stack runs the current function
 * 2. When stack is empty, microtasks run (Promises, queueMicrotask)
 * 3. Then a macrotask (timers, I/O, setImmediate) can run
 *
 * Backend relevance:
 * HTTP, databases, and files must be async or you cannot
 * scale concurrent requests.
 *
 * Important notes:
 * - Callback hell: deeply nested callbacks
 * - Error-first callbacks: (error, result)
 *
 * Common mistakes:
 * - Calling the callback twice
 * - Forgetting to handle err
 * - CPU-heavy loops that block the event loop
 */

console.log("1) sync start");

function fetchUserFake(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error("Invalid id"));
      return;
    }
    callback(null, { id, name: "Zeeshan" });
  }, 10);
}

fetchUserFake(1, (error, user) => {
  if (error) {
    console.log("callback error:", error.message);
    return;
  }
  console.log("3) callback user:", user);
});

console.log("2) sync end (callback not finished yet)");

// Callback hell (what we want to avoid)
fetchUserFake(1, (err, user) => {
  if (err) {
    return;
  }
  fetchUserFake(user.id, (err2, again) => {
    if (err2) {
      return;
    }
    console.log("nested callback user:", again.name);
  });
});

setTimeout(() => console.log("macrotask: setTimeout"), 0);
Promise.resolve().then(() => console.log("microtask: promise then"));
console.log("still on the call stack");
