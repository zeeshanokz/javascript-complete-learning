/**
 * =====================================================
 * CONCEPT: DOM Events
 * =====================================================
 *
 * Definition:
 * Events are signals that something happened: click, submit,
 * input, load. Listeners run your function in response.
 *
 * Why it is important:
 * Interactive UIs are event-driven. Node HTTP is also
 * event-driven (request, data, end, error).
 *
 * Real-world use case:
 * form.addEventListener("submit", handler)
 *
 * Syntax explanation:
 *   element.addEventListener("click", handler)
 *   event.preventDefault()
 *   event.target
 *
 * Backend relevance:
 * EventEmitter in Node uses the same mental model:
 * on("data"), on("error").
 *
 * How to run:
 * Open 08-dom/events.html in a browser.
 *
 * Common mistakes:
 * - Forgetting preventDefault on forms (page reloads)
 * - Adding listeners in a loop without cleanup
 */

if (typeof document === "undefined") {
  console.log("Run this file in a browser via events.html");
} else {
  const button = document.getElementById("save-btn");
  const form = document.getElementById("note-form");
  const input = document.getElementById("note-input");
  const output = document.getElementById("output");

  button.addEventListener("click", () => {
    output.textContent = "Saved at " + new Date().toLocaleTimeString();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = input.value.trim();
    if (!note) {
      output.textContent = "Note cannot be empty";
      return;
    }
    output.textContent = "Added: " + note;
    input.value = "";
  });
}
