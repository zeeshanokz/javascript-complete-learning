/**
 * =====================================================
 * CONCEPT: switch
 * =====================================================
 *
 * Definition:
 * switch compares one value against many possible cases and
 * runs the matching block.
 *
 * Why it is important:
 * When you have many discrete options (HTTP methods, user
 * roles, order status), switch is clearer than a long if chain.
 *
 * Real-world use case:
 * A router handles GET, POST, PUT, and DELETE with one switch.
 *
 * Syntax explanation:
 *   switch (value) {
 *     case "A":
 *       ...
 *       break;
 *     default:
 *       ...
 *   }
 *
 * Backend relevance:
 * REST method handling, status mapping, and command parsers.
 *
 * Important notes:
 * - Always include break (or return) unless you want fall-through
 * - switch uses strict comparison (===)
 * - default handles unknown values
 *
 * Common mistakes:
 * - Forgetting break (accidental fall-through)
 * - Using switch for ranges (if/else is better for >= / <=)
 */

const method = "POST";

switch (method) {
  case "GET":
    console.log("Read data");
    break;
  case "POST":
    console.log("Create data");
    break;
  case "PUT":
  case "PATCH":
    console.log("Update data");
    break;
  case "DELETE":
    console.log("Remove data");
    break;
  default:
    console.log("Unsupported method");
}

// -----------------------------------------------------
// Practical example: map order status to a message
// -----------------------------------------------------

function getOrderMessage(status) {
  switch (status) {
    case "pending":
      return "Your order is waiting for payment.";
    case "paid":
      return "Payment received. We are preparing your order.";
    case "shipped":
      return "Your order is on the way.";
    case "delivered":
      return "Order delivered. Enjoy!";
    case "cancelled":
      return "This order was cancelled.";
    default:
      return "Unknown order status.";
  }
}

console.log(getOrderMessage("shipped"));
console.log(getOrderMessage("refunded"));
