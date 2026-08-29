/**
 * Default export of a simple User factory.
 */
export default function createUser(name, role = "student") {
  return { name, role, createdAt: new Date().toISOString().slice(0, 10) };
}
