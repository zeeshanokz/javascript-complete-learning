/**
 * =====================================================
 * CONCEPT: Object Methods
 * =====================================================
 *
 * Definition:
 * A method is a function stored as an object property.
 * It usually uses `this` to read other properties.
 *
 * Why it is important:
 * Objects can group data and behavior: user.login(),
 * cart.addItem(), response.json().
 *
 * Real-world use case:
 * A service object: userService.findById(id)
 *
 * Syntax explanation:
 *   const obj = {
 *     value: 1,
 *     method() { return this.value; }
 *   };
 *
 * Backend relevance:
 * Class instances, SDK clients, and Mongoose documents
 * all expose methods.
 *
 * Important notes:
 * - Regular methods get `this` from the caller
 * - Arrow functions as methods do not get their own `this`
 *
 * Common mistakes:
 * - Detaching a method (const fn = obj.method; fn()) loses this
 * - Using arrow functions for methods that need this
 */

const cart = {
  items: [],
  addItem(name, price) {
    this.items.push({ name, price });
    return this;
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
  toJSON() {
    return { items: this.items, total: this.getTotal() };
  },
};

cart.addItem("Tea", 5).addItem("Coffee", 8);
console.log("total:", cart.getTotal());
console.log("json:", cart.toJSON());

const getTotal = cart.getTotal;
// console.log(getTotal()); // TypeError: cannot read items of undefined (this lost)

const bound = cart.getTotal.bind(cart);
console.log("bound total:", bound());
