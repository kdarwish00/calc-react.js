import { evaluateExpression } from './my-module';

describe('evaluateExpression', () => {
  test('correctly evaluates basic arithmetic expressions', () => {
    expect(evaluateExpression('2 + 2')).toBe(4);
    expect(evaluateExpression('2 * 3')).toBe(6);
    expect(evaluateExpression('10 / 2')).toBe(5);
    expect(evaluateExpression('10 - 5')).toBe(5);
  });

  test('correctly evaluates more complex expressions', () => {
    expect(evaluateExpression('(2 + 3) * 4')).toBe(20);
    expect(evaluateExpression('10 + (5 - 2) * 3')).toBe(19);
    expect(evaluateExpression('(1 + 2) / (3 - 1)')).toBe(2);
  });
});
