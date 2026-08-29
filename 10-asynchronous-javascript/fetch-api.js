/**
 * =====================================================
 * CONCEPT: fetch, APIs, and JSON
 * =====================================================
 *
 * Definition:
 * fetch() performs HTTP requests and returns a Promise.
 * JSON is a text format for objects/arrays used by REST APIs.
 *
 * Why it is important:
 * Frontends and backends communicate with HTTP + JSON.
 *
 * Real-world use case:
 * GET /api/users/1  ->  { "id": 1, "name": "Zeeshan" }
 *
 * Syntax explanation:
 *   const response = await fetch(url, { method, headers, body });
 *   const data = await response.json();
 *   JSON.parse(text) / JSON.stringify(object)
 *
 * Backend relevance:
 * Node 18+ has global fetch. Servers also SEND json:
 * res.setHeader("Content-Type", "application/json")
 *
 * Important notes:
 * - fetch only rejects on network failure, not on 404/500
 * - Always check response.ok
 *
 * Common mistakes:
 * - Not awaiting both fetch and .json()
 * - Treating HTTP errors as thrown exceptions automatically
 *
 * This file uses a public demo API. It needs network access.
 */

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const post = await response.json();
  return post;
}

const payload = { title: "Learning JS", body: "async fetch", userId: 1 };
console.log("JSON.stringify:", JSON.stringify(payload));
console.log("JSON.parse:", JSON.parse('{"ok":true}'));

getPost(1)
  .then((post) => {
    console.log("fetched title:", post.title);
  })
  .catch((error) => {
    console.log("fetch failed (offline or blocked):", error.message);
  });
