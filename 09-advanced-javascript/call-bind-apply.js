/**
 * =====================================================
 * CONCEPT: call, apply, and bind
 * =====================================================
 *
 * Definition:
 * These Function methods set `this` (and arguments) when
 * invoking or creating a function.
 *
 * Why it is important:
 * Borrow methods, partial application, and fixing callbacks.
 *
 * Real-world use case:
 * const bound = this.handler.bind(this);
 * emitter.on("data", bound);
 *
 * Syntax explanation:
 *   fn.call(thisArg, arg1, arg2)
 *   fn.apply(thisArg, [arg1, arg2])
 *   const bound = fn.bind(thisArg, presetArg)
 *
 * Backend relevance:
 * Older Node APIs and some libraries still use this-style
 * callbacks. bind is the safe fix.
 *
 * Important notes:
 * - bind returns a new function; call/apply invoke immediately
 * - apply is useful when args are already an array
 *
 * Common mistakes:
 * - Binding repeatedly in a hot loop (creates new functions)
 * - Confusing apply's array with call's listed args
 */

function introduce(role, language) {
  return `${this.name} works as ${role} using ${language}`;
}

const person = { name: "Zeeshan" };

console.log(introduce.call(person, "backend developer", "JavaScript"));
console.log(introduce.apply(person, ["backend developer", "JavaScript"]));

const asFrontend = introduce.bind(person, "frontend developer");
console.log(asFrontend("JavaScript"));

const logger = {
  prefix: "[api]",
  log(message) {
    console.log(this.prefix, message);
  },
};

setTimeout(logger.log.bind(logger), 0, "server started");
