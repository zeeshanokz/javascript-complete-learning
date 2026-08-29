# JavaScript Complete Learning

A structured JavaScript learning repository covering fundamentals, advanced concepts, asynchronous JavaScript, and backend development foundations. The topic order follows the **Chai aur JavaScript** learning flow (basics → DOM → advanced → async → Node), with professional file names and comments written for long-term study.

This is a language-first resource. It is designed so you can later add **Node.js**, **Express**, **REST APIs**, **databases**, and **authentication** without relearning core JavaScript.

## Learning goals

- Write modern JavaScript with `const`/`let`, strict equality, and small functions
- Understand memory (stack vs heap), scope, and closures
- Use arrays and objects the way APIs and databases return data
- Reason about `this`, prototypes, and classes
- Use callbacks, promises, async/await, `fetch`, and the event loop
- Know how Node.js, npm, modules, `fs`, HTTP, and `process.env` fit together

## Learning path

1. JavaScript fundamentals
2. Control flow
3. Functions
4. Arrays and objects
5. Strings, numbers, and memory
6. DOM
7. Advanced JavaScript
8. Asynchronous JavaScript
9. Error handling and modules
10. Backend foundations
11. Interview preparation
12. Practical projects

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm` and global `fetch`)
- A code editor
- A browser for the DOM lessons and Project 02

## How to run examples

Most files are Node scripts:

```bash
node 01-basics/variables.js
node 04-arrays/map-filter-reduce.js
node 10-asynchronous-javascript/async-await.js
```

DOM lessons (browser only):

- Open `08-dom/index.html` and follow the links
- Or open `selection.html`, `manipulation.html`, `events.html` directly

ES modules:

```bash
node 12-modules/modules-example/main.mjs
node 12-modules/import.js
```

Backend HTTP examples:

```bash
node 13-backend-foundation/http-basics.js
```

That script requests `/health` and then exits. Keep a server running with `KEEP_SERVER=1`.

Mini in-memory REST API (stop with Ctrl+C):

```bash
node 13-backend-foundation/notes-api.js
```

Browser projects:

- `projects/project-01/index.html` — color changer
- `projects/project-02/index.html` — BMI calculator
- `projects/project-03/index.html` — GitHub profile lookup (`fetch`)

Syntax check many lessons at once:

```bash
npm run verify
```

`fetch-api.js` needs network access to a public demo API. If you are offline, the error is caught and printed.

## Folder structure

```text
javascript-complete-learning/
├── 01-basics/
├── 02-control-flow/
├── 03-functions/
├── 04-arrays/
├── 05-objects/
├── 06-strings-numbers/
├── 07-memory-and-scope/
├── 08-dom/
├── 09-advanced-javascript/
├── 10-asynchronous-javascript/
├── 11-error-handling/
├── 12-modules/
├── 13-backend-foundation/
├── 14-javascript-interview/
└── projects/
```

## Topics covered

| Area | What you will learn |
| --- | --- |
| Fundamentals | Introduction, `var`/`let`/`const`, primitives, objects, conversion, coercion, operators |
| Control flow | `if`/`else`, `switch`, ternary, truthy/falsy, all major loops, `break`/`continue` |
| Functions | Declarations, expressions, arrows, params, rest/defaults, return, scope |
| Arrays | Create, mutate vs copy, `map`/`filter`/`reduce`, `find`/`some`/`every`/`forEach` |
| Objects | Properties, methods, nested data, destructuring, spread/rest, references |
| Strings & numbers | Methods, templates, `Math`, money-safe cents |
| Memory | Stack vs heap, lexical scope, closures |
| DOM | Selection, manipulation, events |
| Advanced | `this`, `call`/`apply`/`bind`, prototypes, classes, inheritance, getters/setters |
| Async | Callbacks, promises, async/await, fetch/JSON, event loop queues, errors |
| Backend | Runtime, V8, npm, CJS/ESM, fs, HTTP, env, `process` |
| Interview | Q&A plus runnable exercises |
| Projects | Color changer, BMI calculator, GitHub profile lookup |

## Backend preparation

Study `13-backend-foundation/` after async JavaScript. That folder explains:

- JavaScript runtime, Node.js, and V8
- npm and `package.json`
- CommonJS vs ES Modules
- File system I/O
- HTTP request/response and REST-style JSON
- Environment variables and `process`

Project 03 calls a public HTTP JSON API in the browser—the same `fetch` + JSON pattern you will use against your own Node REST APIs. Core HTTP is in `http-basics.js`; a tiny in-memory REST server is in `notes-api.js`.

## Progress checklist

Mark these yourself as you finish each folder. They are not pre-checked.

- [ ] 01 Basics
- [ ] 02 Control flow
- [ ] 03 Functions
- [ ] 04 Arrays
- [ ] 05 Objects
- [ ] 06 Strings and numbers
- [ ] 07 Memory and scope
- [ ] 08 DOM
- [ ] 09 Advanced JavaScript
- [ ] 10 Asynchronous JavaScript
- [ ] 11 Error handling
- [ ] 12 Modules
- [ ] 13 Backend foundation
- [ ] 14 Interview
- [ ] Projects 01–03

## Suggested study habit

1. Read the file header (definition, why, notes, mistakes)
2. Run the file
3. Change one value and predict the output before running again
4. Write the idea in your own words

## License

MIT — use this as your personal learning notebook.
