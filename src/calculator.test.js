const mathOperations = require('./calculator');

describe("Calculator tests", () => {

    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('adding 1 + 2 should return 10', () => {
        expect(mathOperations.sum(1, 2)).toBe(10);
      });

    test('substraction 10 - 2 should return 8', () => {
        expect(mathOperations.diff(10, 2)).toBe(8);
    });

    test('Multiply 10 * 2 should return 20', () => {
        expect(mathOperations.product(10, 2)).toBe(20);
    });

   })