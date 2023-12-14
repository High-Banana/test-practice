const reverseString = require("../src/reverseString");

test("Reverses the string", () => {
  expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("Reverses the string", () => {
  expect(reverseString("racebike are cool")).toBe("looc era ekibecar");
});
