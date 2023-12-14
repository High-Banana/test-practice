const { add, subtract, divide, multiply } = require("../src/calculator");

test("Adds two numbers", () => {
  expect(add(3, 5)).toBe(8);
});

test("Subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("Divides two numbers", () => {
  expect(divide(15, 5)).toBe(3);
});

test("Multiplies two numbers", () => {
  expect(multiply(5, 3)).toBe(15);
});
