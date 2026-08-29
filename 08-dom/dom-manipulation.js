/**
 * =====================================================
 * CONCEPT: DOM Manipulation
 * =====================================================
 *
 * Definition:
 * Manipulation means changing the tree: text, attributes,
 * classes, and creating or removing nodes.
 *
 * Why it is important:
 * UIs update after user actions or API responses.
 *
 * Real-world use case:
 * After fetch(), render a list of products into the page.
 *
 * Syntax explanation:
 *   element.textContent = "..."
 *   element.classList.add("active")
 *   parent.append(child)
 *   element.remove()
 *
 * Backend relevance:
 * Prefer sending JSON from the server and let the client
 * render. Server-side rendering is a separate topic.
 *
 * How to run:
 * Open 08-dom/manipulation.html in a browser.
 *
 * Common mistakes:
 * - Using innerHTML with unsanitized user input (XSS)
 * - Prefer textContent for plain text
 */

if (typeof document === "undefined") {
  console.log("Run this file in a browser via manipulation.html");
} else {
  const status = document.getElementById("status");
  const todos = document.getElementById("todos");

  status.textContent = "Loading todos...";

  const items = ["Learn scope", "Learn promises", "Build a small API"];

  for (const text of items) {
    const li = document.createElement("li");
    li.textContent = text;
    todos.append(li);
  }

  status.textContent = `${items.length} todos rendered`;
  status.classList.add("ready");
}
