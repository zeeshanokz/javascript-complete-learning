/**
 * =====================================================
 * CONCEPT: JavaScript Introduction
 * =====================================================
 *
 * Definition:
 * JavaScript is a high-level, interpreted programming language
 * that runs in browsers and on servers (Node.js). It is the
 * language of the web and a core skill for backend work.
 *
 * Why it is important:
 * - Every modern web app uses JavaScript on the client
 * - Node.js uses JavaScript on the server
 * - APIs, databases, and auth layers are often written in JS
 *
 * Real-world use case:
 * A login form validates input in the browser, then a Node.js
 * server checks credentials and returns JSON.
 *
 * Syntax explanation:
 * JavaScript files use the .js extension. Node runs them with:
 *   node filename.js
 *
 * Backend relevance:
 * The same language powers Express APIs, file I/O, and HTTP.
 * Learn JS deeply before frameworks.
 *
 * Important notes:
 * - JavaScript is case-sensitive
 * - Statements usually end with a semicolon (optional but consistent)
 * - ECMAScript (ES) is the official language standard (ES6+ is modern JS)
 *
 * Common mistakes:
 * - Confusing JavaScript with Java (they are unrelated languages)
 * - Skipping fundamentals and jumping straight to frameworks
 */

// Beginner example: a simple program
const language = "JavaScript";
const yearCreated = 1995;

console.log("Language:", language);
console.log("First appeared:", yearCreated);

// Practical example: a tiny "app" message
const learnerName = "Zeeshan";
const goal = "backend development";

console.log(`${learnerName} is learning ${language} for ${goal}.`);
