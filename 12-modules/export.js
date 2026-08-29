/**
 * =====================================================
 * CONCEPT: ES Module Exports
 * =====================================================
 *
 * Definition:
 * export makes values available to other files. This is the
 * ES Modules (ESM) standard used in browsers and modern Node.
 *
 * Why it is important:
 * Real apps are split into modules: routes, services, utils.
 *
 * Real-world use case:
 * export function createUser() {}
 * export default router;
 *
 * Syntax explanation:
 *   export const x = 1;
 *   export function fn() {}
 *   export default class Service {}
 *
 * Backend relevance:
 * Node can use ESM ("type": "module") or CommonJS (require).
 * See 13-backend-foundation/modules.js for CommonJS.
 *
 * Important notes:
 * - Named exports can be many
 * - Default export is one per file
 *
 * Common mistakes:
 * - Mixing default and named imports incorrectly
 * - Using require() inside an ESM file without createRequire
 */

export const APP_NAME = "javascript-complete-learning";

export function formatUser(user) {
  return `${user.name} <${user.email}>`;
}

export default {
  APP_NAME,
  formatUser,
};
