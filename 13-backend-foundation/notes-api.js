/**
 * =====================================================
 * CONCEPT: Mini REST Notes API (core http only)
 * =====================================================
 *
 * Definition:
 * An in-memory JSON API using Node's http module: GET list,
 * POST create, DELETE by id.
 *
 * Why backend developers use it:
 * This is the same request/response loop Express wraps.
 *
 * Run: node 13-backend-foundation/notes-api.js
 *
 * Common mistakes:
 * - Forgetting res.end()
 * - Not parsing JSON safely
 * - Storing data only in memory (lost on restart)
 */

const http = require("node:http");

function sendJson(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function createNotesServer() {
  const notes = [];
  let nextId = 1;

  return http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");

    try {
      if (req.method === "GET" && url.pathname === "/notes") {
        sendJson(res, 200, { notes });
        return;
      }

      if (req.method === "POST" && url.pathname === "/notes") {
        const raw = await readBody(req);
        const parsed = raw ? JSON.parse(raw) : {};
        if (typeof parsed.text !== "string" || parsed.text.trim() === "") {
          sendJson(res, 400, {
            error: { message: "text is required", code: "VALIDATION_ERROR" },
          });
          return;
        }
        const note = { id: nextId, text: parsed.text.trim() };
        nextId += 1;
        notes.push(note);
        sendJson(res, 201, { note });
        return;
      }

      if (req.method === "DELETE" && url.pathname.startsWith("/notes/")) {
        const id = Number(url.pathname.split("/")[2]);
        const index = notes.findIndex((note) => note.id === id);
        if (index === -1) {
          sendJson(res, 404, {
            error: { message: "Note not found", code: "NOT_FOUND" },
          });
          return;
        }
        const [removed] = notes.splice(index, 1);
        sendJson(res, 200, { note: removed });
        return;
      }

      sendJson(res, 404, { error: { message: "Not found", code: "NOT_FOUND" } });
    } catch (error) {
      sendJson(res, 400, { error: { message: error.message, code: "BAD_REQUEST" } });
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3001;
  createNotesServer().listen(port, "127.0.0.1", () => {
    console.log(`Notes API on http://127.0.0.1:${port}/notes`);
  });
}

module.exports = { createNotesServer };
