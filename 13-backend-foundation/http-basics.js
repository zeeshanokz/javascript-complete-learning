/**
 * =====================================================
 * CONCEPT: HTTP Request and Response
 * =====================================================
 *
 * Definition:
 * HTTP is the protocol of the web. A client sends a request.
 * A server sends a response (status, headers, body).
 *
 * Why backend developers use it:
 * REST APIs are HTTP servers that speak JSON.
 *
 * Real-world example:
 * GET /api/users -> 200 + JSON array
 *
 * How it connects with Node.js:
 * The core `http` module creates servers. Frameworks like Express
 * sit on top of it.
 *
 * Common mistakes:
 * - Forgetting to end the response (request hangs)
 * - Wrong Content-Type
 * - Blocking the event loop inside a request handler
 *
 * This file starts a temporary local server, calls /health, then exits.
 * To keep a server running while you browse, set KEEP_SERVER=1.
 */

const http = require("http");

function createApp() {
  return http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/health") {
      const body = JSON.stringify({ ok: true, service: "javascript-complete-learning" });
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(body);
      return;
    }

    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Not found" }));
  });
}

async function runDemo() {
  const server = createApp();

  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/health`);
  const data = await response.json();
  console.log("HTTP GET /health:", response.status, data);

  if (typeof server.closeAllConnections === "function") {
    server.closeAllConnections();
  }

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

if (process.env.KEEP_SERVER === "1") {
  const port = Number(process.env.PORT) || 3000;
  const server = createApp();
  server.listen(port, "127.0.0.1", () => {
    console.log(`HTTP demo listening on http://127.0.0.1:${port}/health`);
  });
} else {
  runDemo().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
