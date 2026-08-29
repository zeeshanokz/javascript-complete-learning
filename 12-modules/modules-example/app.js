import areaOfCircle, { add, multiply } from "./math.js";
import createUser from "./user.js";

const user = createUser("Zeeshan", "developer");
console.log("user:", user);
console.log("add:", add(2, 3));
console.log("multiply:", multiply(4, 5));
console.log("area:", areaOfCircle(3));
