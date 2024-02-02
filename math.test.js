const { sum, sub } = require("./math");

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2);
});

test("Subtracting 5 - 3 equals 2", () => {
  expect(sub(5, 3)).toBe(2);
});
