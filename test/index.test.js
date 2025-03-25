const soma = require("../src/index");

test("adds 1 + 2 para 3", () => {
  expect(soma(1, 2)).toBe(3);
});
