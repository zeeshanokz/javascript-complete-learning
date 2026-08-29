/**
 * =====================================================
 * CONCEPT: Promises and Promise Chaining
 * =====================================================
 *
 * Definition:
 * A Promise represents a future value: pending, fulfilled,
 * or rejected. .then/.catch/.finally chain later work.
 *
 * Why it is important:
 * Promises flatten callback hell and compose async steps.
 *
 * Real-world use case:
 * db.query().then(rows => res.json(rows)).catch(next)
 *
 * Syntax explanation:
 *   new Promise((resolve, reject) => { ... })
 *   promise.then(onSuccess).catch(onError)
 *   Promise.all / allSettled / race
 *
 * Backend relevance:
 * Almost every Node library returns promises today.
 *
 * Important notes:
 * - Always catch rejections (unhandledRejection crashes some Node setups)
 * - then() returns a new promise (chaining)
 *
 * Common mistakes:
 * - Mixing callbacks and promises without wrapping
 * - Forgetting to return a promise inside then (breaks chain)
 */

function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

function getUser(id) {
  if (id <= 0) {
    return Promise.reject(new Error("Invalid id"));
  }
  return delay(10, { id, name: "Zeeshan" });
}

function getOrders(userId) {
  return delay(10, [{ id: 1, userId, total: 20 }]);
}

getUser(1)
  .then((user) => {
    console.log("user:", user);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log("orders:", orders);
  })
  .catch((error) => {
    console.log("chain error:", error.message);
  })
  .finally(() => {
    console.log("chain finished");
  });

Promise.all([getUser(1), getOrders(1)]).then(([user, orders]) => {
  console.log("all:", user.name, orders.length);
});
