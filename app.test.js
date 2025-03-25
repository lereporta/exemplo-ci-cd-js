const { soma } = require('./app');

test('soma de 2 e 3 deve resultar em 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('soma de -1 e 1 deve resultar em 0', () => {
  expect(soma(-1, 1)).toBe(0);
});

