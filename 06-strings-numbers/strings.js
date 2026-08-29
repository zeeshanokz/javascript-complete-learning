/**
 * =====================================================
 * CONCEPT: Strings and Template Literals
 * =====================================================
 *
 * Definition:
 * A string is a sequence of characters. Template literals
 * use backticks and ${} to embed expressions.
 *
 * Why it is important:
 * Names, emails, SQL (careful!), JSON text, log messages,
 * and HTML all start as strings.
 *
 * Real-world use case:
 * const message = `Hello, ${user.name}`;
 *
 * Syntax explanation:
 *   "double"  'single'  `template ${value}`
 * Common methods: length, toLowerCase, trim, includes,
 * startsWith, slice, split, replace, replaceAll
 *
 * Backend relevance:
 * Validate and sanitize strings. Never build SQL with
 * string concatenation; use parameterized queries.
 *
 * Important notes:
 * - Strings are immutable; methods return new strings
 * - trim before comparing user input
 *
 * Common mistakes:
 * - Comparing without trim/case-normalize
 * - Using replace when you needed replaceAll
 */

const course = "  Chai aur JavaScript  ";
const trimmed = course.trim();

console.log("length:", trimmed.length);
console.log("lower:", trimmed.toLowerCase());
console.log("includes JavaScript:", trimmed.includes("JavaScript"));
console.log("slice:", trimmed.slice(0, 4));
console.log("split:", trimmed.split(" "));

const learner = "Zeeshan";
const lesson = 1;
const summary = `${learner} completed lesson ${lesson} of ${trimmed}.`;
console.log(summary);

const slug = trimmed.toLowerCase().replaceAll(" ", "-");
console.log("slug:", slug);

function maskEmail(email) {
  const [local, domain] = email.split("@");
  if (!domain) {
    return email;
  }
  const visible = local.slice(0, 1);
  return `${visible}***@${domain}`;
}

console.log(maskEmail("zeeshan@example.com"));
