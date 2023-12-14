const caesarChiper = require("../src/caesarCipher ");

test("Works with different cases (Capital and small)", () => {
  expect(caesarChiper("I am High Banana", 2)).toBe("K co Jkij Dcpcpc");
});

test("Wraps from z to a", () => {
  expect(caesarChiper("z", 1)).toBe("a");
});

test("Does a full loop", () => {
  expect(caesarChiper("The Axe", 26)).toBe("The Axe");
});

test("Works with negative value", () => {
  expect(caesarChiper("A", -1)).toBe("Z");
});

test("Works with punctuations", () => {
  expect(caesarChiper("Hello, world!", -3)).toBe("Ebiil, tloia!");
});
