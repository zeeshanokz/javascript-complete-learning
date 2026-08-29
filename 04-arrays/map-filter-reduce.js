/**
 * =====================================================
 * CONCEPT: map, filter, and reduce
 * =====================================================
 *
 * Definition:
 * These methods transform lists without writing index loops.
 * map: transform each item -> new array of same length
 * filter: keep items that pass a test -> new (usually shorter) array
 * reduce: combine all items into one value
 *
 * Why it is important:
 * This is the standard way to shape API data and summaries.
 *
 * Real-world use case:
 * const emails = users.filter(u => u.active).map(u => u.email);
 * const revenue = orders.reduce((sum, o) => sum + o.total, 0);
 *
 * Syntax explanation:
 *   array.map((item) => nextValue)
 *   array.filter((item) => boolean)
 *   array.reduce((accumulator, item) => nextAccumulator, initialValue)
 *
 * Backend relevance:
 * DTO mapping, aggregations, and permission filtering.
 * For huge datasets, prefer SQL/aggregation pipelines.
 *
 * Important notes:
 * - They do not mutate the original array
 * - Always pass an initial value to reduce
 * - Avoid huge chained copies on very large lists in hot paths
 *
 * Common mistakes:
 * - Forgetting reduce's initial value
 * - Using map when you meant forEach (map's return is ignored)
 * - Mutating objects inside map (surprising side effects)
 */

const orders = [
  { id: 1, total: 20, status: "paid" },
  { id: 2, total: 35, status: "pending" },
  { id: 3, total: 15, status: "paid" },
];

const totals = orders.map((order) => order.total);
const paidOrders = orders.filter((order) => order.status === "paid");
const paidRevenue = paidOrders.reduce((sum, order) => sum + order.total, 0);

console.log("totals:", totals);
console.log("paidOrders:", paidOrders);
console.log("paidRevenue:", paidRevenue);

// Practical: group counts
const statusCounts = orders.reduce((counts, order) => {
  counts[order.status] = (counts[order.status] || 0) + 1;
  return counts;
}, {});

console.log("statusCounts:", statusCounts);

const publicUsers = [
  { passwordHash: "secret", name: "Zeeshan", role: "admin" },
  { passwordHash: "secret", name: "Ayesha", role: "user" },
].map((user) => ({
  name: user.name,
  role: user.role,
}));

console.log("publicUsers (password removed):", publicUsers);
