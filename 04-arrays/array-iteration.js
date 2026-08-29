/**
 * =====================================================
 * CONCEPT: Array Iteration
 * =====================================================
 *
 * Definition:
 * Iteration means visiting each element. JavaScript offers
 * forEach, for...of, classic for, and iterators.
 *
 * Why it is important:
 * Side effects (logging, sending emails, writing files) need
 * iteration. Transformations belong in map/filter/reduce.
 *
 * Real-world use case:
 * for (const file of files) { await fs.promises.readFile(file); }
 *
 * Syntax explanation:
 *   array.forEach((item, index) => { ... })
 *   for (const item of array) { ... }
 *
 * Backend relevance:
 * Sequential async work uses for...of + await.
 * forEach does not wait for await inside it.
 *
 * Important notes:
 * - forEach cannot be stopped with break
 * - return inside forEach only skips that callback
 * - Prefer for...of when you need await, break, or continue
 *
 * Common mistakes:
 * - await inside forEach (it will not wait)
 * - Using forEach when you needed a returned array (use map)
 */

const queues = ["email", "sms", "push"];

queues.forEach((channel, index) => {
  console.log(`forEach ${index}: ${channel}`);
});

for (const [index, channel] of queues.entries()) {
  if (channel === "sms") {
    continue;
  }
  console.log(`for...of ${index}: ${channel}`);
}

// Demo: forEach ignores await (do not use this pattern in production)
async function fakeSend(channel) {
  return `sent:${channel}`;
}

async function sendAllWrong(channels) {
  const results = [];
  channels.forEach(async (channel) => {
    const result = await fakeSend(channel);
    results.push(result);
  });
  return results; // often empty because forEach did not wait
}

async function sendAllRight(channels) {
  const results = [];
  for (const channel of channels) {
    const result = await fakeSend(channel);
    results.push(result);
  }
  return results;
}

sendAllWrong(queues).then((r) => console.log("wrong (race):", r));
sendAllRight(queues).then((r) => console.log("right (awaited):", r));
