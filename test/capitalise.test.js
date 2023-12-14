const capitaliseFirstCharacter = require("../src/capitalise.js");

test("Capitalises first character of the string", () => {
  expect(capitaliseFirstCharacter("javascript")).toEqual("Javascript");
});

test("Capitalises first character of the string", () => {
  expect(capitaliseFirstCharacter("testing in javascript")).toBe("Testing in javascript");
});
