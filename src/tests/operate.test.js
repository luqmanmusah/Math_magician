import operate from './test-files/operate';

describe('operation', () => {
  test('Addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('Subtration', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });
  test('Multiplication', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('Division', () => {
    expect(operate(1, 2, '÷')).toMatch('0.5');
  });
  test('Module', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});
