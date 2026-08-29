/**
 * =====================================================
 * CONCEPT: Node.js Modules (CommonJS vs ESM)
 * =====================================================
 *
 * Definition:
 * Modules split a program into files. Node historically used
 * CommonJS: require / module.exports. Modern Node also supports
 * ES Modules: import / export.
 *
 * Why backend developers use it:
 * Routes, services, and config stay in separate files.
 *
 * Real-world example:
 * const userService = require("./services/userService");
 *
 * How it connects with Node.js:
 * - CommonJS is the default when package.json has no "type":"module"
 * - ESM when "type":"module" or .mjs files
 *
 * Common mistakes:
 * - Mixing require and import in the same file without a plan
 * - Forgetting module.exports (caller gets empty object)
 */

const path = require("node:path");

function describeRuntime() {
  return {
    nodeVersion: process.version,
    thisFile: path.basename(__filename),
    moduleType: "commonjs",
  };
}

module.exports = {
  describeRuntime,
};

if (require.main === module) {
  console.log("CommonJS module loaded:", describeRuntime());
  console.log("process.cwd():", process.cwd());
}
