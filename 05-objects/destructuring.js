/**
 * =====================================================
 * CONCEPT: Destructuring, Spread, and Rest
 * =====================================================
 *
 * Definition:
 * Destructuring unpacks values from arrays/objects into
 * variables. Spread copies items. Rest gathers the rest.
 *
 * Why it is important:
 * Cleaner function parameters and immutable updates.
 *
 * Real-world use case:
 * const { id } = req.params;
 * const { password, ...publicUser } = user;
 *
 * Syntax explanation:
 *   const { name, role = "user" } = object;
 *   const [first, ...rest] = array;
 *   const copy = { ...object, role: "admin" };
 *
 * Backend relevance:
 * Stripping secrets before JSON responses; merging config;
 * Express req.body destructuring.
 *
 * Important notes:
 * - Default values apply when the property is undefined
 * - Rest in objects omits picked keys
 * - Spread is a shallow copy
 *
 * Common mistakes:
 * - Deep-mutating after a shallow spread
 * - Destructuring undefined (TypeError) — use default {}
 */

const user = {
  id: 7,
  name: "Zeeshan",
  role: "admin",
  passwordHash: "not-for-clients",
};

const { name, role, passwordHash, ...publicUser } = user;
console.log("name:", name);
console.log("publicUser (no password):", publicUser);
console.log("passwordHash kept separately:", passwordHash);

const settings = { theme: "dark" };
const { theme, locale = "en" } = settings;
console.log("locale default:", locale);

const [firstSkill, ...otherSkills] = ["js", "node", "sql"];
console.log("firstSkill:", firstSkill, "otherSkills:", otherSkills);

const updated = { ...user, role: "superadmin" };
console.log("spread update:", updated.role);

function createSession({ userId, ttlSeconds = 3600 } = {}) {
  return { userId, ttlSeconds, createdAt: Date.now() };
}

console.log(createSession({ userId: 7 }));
console.log(createSession());
