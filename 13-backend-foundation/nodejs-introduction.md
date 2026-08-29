# Node.js Introduction

## What it is

**Node.js** is a JavaScript **runtime** built on Google’s **V8** engine. It lets JavaScript run outside the browser: files, networks, processes, and servers.

**V8** compiles JavaScript to machine code. **The JavaScript runtime** is V8 plus platform APIs (in the browser: DOM; in Node: `fs`, `http`, `process`).

## Why backend developers use it

- One language for frontend and backend
- Excellent async I/O for APIs
- Huge ecosystem via **npm**
- Same JSON/objects you already learned

## Real-world example

A REST API that reads `POST /users`, validates JSON, writes to a database, and returns `{ id, email }`.

## How it connects with Node.js

- `node file.js` starts a process
- That process has **one main thread** and an **event loop**
- Blocking CPU work (huge loops) delays **all** requests
- I/O (disk, HTTP, DB) should be asynchronous

## JavaScript runtime vs browser

| Browser | Node.js |
| --- | --- |
| `window`, `document` | `global`, `process` |
| DOM events | EventEmitter, HTTP |
| `fetch` (yes) | `fetch` (Node 18+), `http`, `fs` |

## Common mistakes

- Treating Node like a browser (no `document`)
- Blocking the event loop with heavy sync `fs.readFileSync` on every request
- Assuming one Node process uses all CPU cores (you need clustering or multiple processes)
