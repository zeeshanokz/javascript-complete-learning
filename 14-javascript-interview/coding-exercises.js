/**
 * =====================================================
 * CONCEPT: Interview Coding Exercises
 * =====================================================
 *
 * Definition:
 * Small problems that test arrays, objects, closures, and
 * async thinking without a framework.
 *
 * Why it is important:
 * Interviews and real jobs both require transforming data
 * and handling edge cases.
 *
 * Run: node 14-javascript-interview/coding-exercises.js
 */

function unique(values) {
  return [...new Set(values)];
}

function frequency(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function flattenOneLevel(lists) {
  return lists.reduce((all, list) => all.concat(list), []);
}

function debounce(fn, ms) {
  let timerId;
  return function debounced(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), ms);
  };
}

async function sequentialMap(items, mapper) {
  const results = [];
  for (const item of items) {
    results.push(await mapper(item));
  }
  return results;
}

function assertEqual(actual, expected, label) {
  const left = JSON.stringify(actual);
  const right = JSON.stringify(expected);
  if (left !== right) {
    throw new Error(`${label}: expected ${right} but got ${left}`);
  }
  console.log("ok:", label);
}

assertEqual(unique([1, 1, 2, 2, 3]), [1, 2, 3], "unique");
assertEqual(frequency(["a", "b", "a"]), { a: 2, b: 1 }, "frequency");
assertEqual(flattenOneLevel([[1], [2, 3]]), [1, 2, 3], "flatten");

sequentialMap([1, 2], async (n) => n * 2).then((result) => {
  assertEqual(result, [2, 4], "sequentialMap");
});

const debouncedLog = debounce((message) => console.log("debounced:", message), 5);
debouncedLog("first");
debouncedLog("second");
