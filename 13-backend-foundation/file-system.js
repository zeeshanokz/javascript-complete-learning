/**
 * =====================================================
 * CONCEPT: File System (fs)
 * =====================================================
 *
 * Definition:
 * The fs module reads and writes files on disk. Prefer
 * fs.promises (async) so you do not block the event loop.
 *
 * Why backend developers use it:
 * Logs, uploads, config files, templates, and migrations.
 *
 * Real-world example:
 * await fs.readFile("package.json", "utf8")
 *
 * How it connects with Node.js:
 * fs is a Node core module (not available in browsers).
 *
 * Common mistakes:
 * - fs.readFileSync on every HTTP request
 * - Building paths with string concat (use path.join)
 * - Trusting user-supplied paths (path traversal)
 */

const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");

async function runDemo() {
  const dir = path.join(os.tmpdir(), "javascript-complete-learning");
  await fs.mkdir(dir, { recursive: true });

  const filePath = path.join(dir, "note.txt");
  await fs.writeFile(filePath, "Backend foundation: file system demo\n", "utf8");

  const text = await fs.readFile(filePath, "utf8");
  const stats = await fs.stat(filePath);

  console.log("wrote:", filePath);
  console.log("contents:", text.trim());
  console.log("size bytes:", stats.size);

  await fs.unlink(filePath);
}

if (require.main === module) {
  runDemo().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { runDemo };
