import calculate from '../logic/calculate';

describe('operation', () => {
  const obj = {
    total: 1,
    next: 2,
    operation: '+',
  };
  const buttonName = '=';
  test('Addition', () => {
    obj.operation = '+';
    expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '3' });
  });
  test('Muliplication', () => {
    obj.operation = 'x';
    expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '2' });
  });
  test('Subtraction', () => {
    obj.operation = '-';
    expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '-1' });
  });
  test('Division', () => {
    obj.operation = '÷';
    obj.total = 6;
    obj.next = 3;
    expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '2' });
  });
  test('%', () => {
    obj.operation = '%';
    obj.total = 8;
    obj.next = 2;
    expect(calculate(obj, buttonName)).toEqual({ next: null, operation: null, total: '0' });
  });
});
