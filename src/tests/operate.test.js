import Big from 'big.js';
import operate from './test-files/operate';

describe('operation', (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  test('Addition', () => {
    if (operation === '+') expect(one.plus(two)).toBe('');
  });
  test('Subtration', () => {
    if (operation === '-') expect(one.minus(two)).toBe('');
  });
  test('Multiplication', () => {
    if (operation === 'x')expect(one.times(two)).toBe('');
  });
  test('Division', () => {
    if (operation === '÷') expect(one.div(two)).toBe('');
  });
  test('Module', () => {
    if (operation === '÷') expect(one.mod(two)).toBe('');
  });
  test('For Error', () => {
    if (operation === '') expect().toBe(`Unknown operation '${operation}'`);
  });
});
