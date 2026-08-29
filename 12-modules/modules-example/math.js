/**
 * Named exports from a math helper module.
 */
export const PI = 3.14159;

export function add(left, right) {
  return left + right;
}

export function multiply(left, right) {
  return left * right;
}

export default function areaOfCircle(radius) {
  return PI * radius * radius;
}
