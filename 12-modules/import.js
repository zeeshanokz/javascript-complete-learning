/**
 * =====================================================
 * CONCEPT: ES Module Imports
 * =====================================================
 *
 * Definition:
 * import loads exported values from another module.
 *
 * Why it is important:
 * You compose small files into an application.
 *
 * Real-world use case:
 * import express from "express";
 * import { findUser } from "./users.js";
 *
 * Syntax explanation:
 *   import name from "./file.js";
 *   import { named } from "./file.js";
 *   import * as utils from "./file.js";
 *
 * Backend relevance:
 * Node ESM requires file extensions in relative imports.
 *
 * How to run:
 *   node --experimental-vm-modules  (or use modules-example)
 * This folder's demo is executed via modules-example/main.mjs
 *
 * Common mistakes:
 * - Forgetting .js extension in Node ESM
 * - Circular imports (A imports B imports A)
 */

import helpers, { APP_NAME, formatUser } from "./export.js";

console.log("APP_NAME:", APP_NAME);
console.log("formatUser:", formatUser({ name: "Zeeshan", email: "z@example.com" }));
console.log("default.APP_NAME:", helpers.APP_NAME);
