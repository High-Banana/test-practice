const analyseArray = require("../src/analyseArray");

test("Returns average of the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Returns minimum value of the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Returns maximum value of the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Returns length of the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
