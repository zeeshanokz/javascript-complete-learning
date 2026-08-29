# JavaScript Interview Preparation

Short answers you can say out loud. Practice writing the companion file `coding-exercises.js`.

## Fundamentals

**What is the difference between `let`, `const`, and `var`?**
`const` cannot be reassigned. `let` can, and both are block-scoped. `var` is function-scoped, hoisted, and should be avoided.

**What are primitive vs reference types?**
Primitives copy the value. Objects/arrays copy a reference to the same heap value.

**What is the difference between `==` and `===`?**
`==` coerces types. `===` does not. Prefer `===`.

**Name the falsy values.**
`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

## Functions and scope

**What is a closure?**
A function that remembers variables from its outer scope after that scope has returned.

**What is hoisting?**
Declarations are processed before execution. `var` is initialized as `undefined`. `let`/`const` stay in the temporal dead zone until their line. Function declarations are hoisted fully.

## `this`, prototypes, classes

**How is `this` decided?**
By the call site for regular functions: `obj.fn()` binds `obj`. Arrows use lexical `this`. `bind`/`call`/`apply` set it explicitly.

**What is the prototype chain?**
Property lookup walks `Object.getPrototypeOf` until the property is found or the chain ends at `null`.

## Async

**Callback hell?**
Deeply nested callbacks that are hard to read and error-handle. Prefer promises or async/await.

**Does `fetch` throw on HTTP 404?**
No. It throws on network failure. Check `response.ok`.

**Event loop?**
The call stack runs JS. When empty, **microtasks** (promises) run, then a **macrotask** (timer, I/O).

## Backend

**What is Node.js?**
A V8-based runtime with filesystem, HTTP, and `process` APIs.

**CommonJS vs ESM?**
`require`/`module.exports` vs `import`/`export`. Node supports both.

**Why not block the event loop?**
One thread handles many connections. Sync heavy work stalls all requests.

**REST?**
Resource-oriented HTTP APIs, typically JSON, using methods GET/POST/PUT/PATCH/DELETE and status codes.
