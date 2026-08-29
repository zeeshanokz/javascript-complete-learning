/**
 * =====================================================
 * CONCEPT: DOM Selection
 * =====================================================
 *
 * Definition:
 * The DOM (Document Object Model) is a tree of objects that
 * represents an HTML page. Selection APIs find nodes in that tree.
 *
 * Why it is important:
 * Browser JavaScript must find elements before it can change
 * them or listen for events.
 *
 * Real-world use case:
 * document.querySelector("#login-form")
 *
 * Syntax explanation:
 *   document.getElementById("id")
 *   document.querySelector("css")
 *   document.querySelectorAll("css")  // NodeList
 *
 * Backend relevance:
 * Servers do not have a document. DOM is frontend-only.
 * Still useful so you understand full-stack apps.
 *
 * How to run:
 * Open 08-dom/selection.html in a browser (not Node).
 *
 * Important notes:
 * - querySelector returns the first match or null
 * - querySelectorAll is not a real Array (convert with [...list])
 *
 * Common mistakes:
 * - Running these files with `node` (no document)
 * - Forgetting null checks
 */

if (typeof document === "undefined") {
  console.log("Run this file in a browser via selection.html");
} else {
  const title = document.getElementById("title");
  const note = document.querySelector(".note");
  const items = document.querySelectorAll(".item");

  console.log("title text:", title?.textContent);
  console.log("note:", note?.textContent);
  console.log(
    "items:",
    [...items].map((el) => el.textContent)
  );
}
