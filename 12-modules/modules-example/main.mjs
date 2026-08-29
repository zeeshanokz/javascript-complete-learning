/**
 * Runnable ESM example.
 * Run: node 12-modules/modules-example/main.mjs
 */
import { add, toCents } from "./math.mjs";

const subtotalCents = toCents(19.99);
const withFee = add(subtotalCents, 50);

console.log("subtotal cents:", subtotalCents);
console.log("with fee cents:", withFee);
