// toEqual
const person = { firstName: "Bishr", lastName: "Mubarack" };

test("Object Assignment", () => {
  expect(person).toEqual({ firstName: "Bishr", lastName: "Mubarack" });
});

// For truthiness
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
});
