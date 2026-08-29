/**
 * =====================================================
 * CONCEPT: async / await
 * =====================================================
 *
 * Definition:
 * async functions always return a Promise. await pauses
 * that function until the promise settles, writing async
 * code that looks synchronous.
 *
 * Why it is important:
 * This is the standard style for Node.js and backend apps.
 *
 * Real-world use case:
 * const user = await db.user.findUnique({ where: { id } });
 *
 * Syntax explanation:
 *   async function main() {
 *     const value = await somePromise();
 *   }
 *
 * Backend relevance:
 * Express 5 / wrappers: async (req, res, next) => { await ... }
 *
 * Important notes:
 * - await only works inside async functions (or top-level in ESM)
 * - Use try/catch around await
 * - Parallel work: await Promise.all([...]) not sequential awaits
 *
 * Common mistakes:
 * - await in a loop when requests could run in parallel
 * - Forgetting async on the function that uses await
 */

function delay(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function getUser(id) {
  if (id <= 0) {
    throw new Error("Invalid id");
  }
  return delay(10, { id, name: "Zeeshan" });
}

async function getOrders(userId) {
  return delay(10, [{ id: 1, userId }]);
}

async function loadDashboard(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    return { user, orders };
  } catch (error) {
    return { error: error.message };
  }
}

async function loadDashboardFaster(userId) {
  const [user, orders] = await Promise.all([
    getUser(userId),
    getOrders(userId),
  ]);
  return { user, orders };
}

loadDashboard(1).then((data) => console.log("dashboard:", data));
loadDashboard(0).then((data) => console.log("dashboard error path:", data));
loadDashboardFaster(1).then((data) => console.log("faster:", data.user.name));
