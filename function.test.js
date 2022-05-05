const {
  stringLength, reverseString, Calculator, capitalisedString,
} = require('./function.js');

describe('String Length', () => {
  test('Test the count of charactars in a string', () => {
    expect(stringLength('Anthony')).toBe(7);
  });
  test('String not in the range of 1 to 10', () => {
    expect(stringLength(-1)).toBe('String length must be between 1 to 10');
  });
});

describe('Reverse String', () => {
  test('Test pass when string is reversed', () => {
    expect(reverseString('anthony')).toMatch('ynohtna');
    expect(reverseString('anthony')).not.toMatch('ynohn');
  });
});

// calculator test cases
describe('Calculator', () => {
  const math = new Calculator(10, 2);
  test('Add: 10 plus 2', () => {
    expect(math.add()).toBe(12);
  });

  test('Subtract: 10 minus 2', () => {
    expect(math.subtract()).toBe(8);
  });

  test('Divide  : 10 on 2', () => {
    expect(math.divide()).toBe(5);
  });

  test('Multiply : 10 times 2', () => {
    expect(math.multiply()).toBe(20);
  });
});
// test captalized String
describe('Test: Capitalised String', () => {
  test('hello world to Hello world', () => {
    expect(capitalisedString('hello world')).toBe('Hello world');
  });
  test('Needs to be a string', () => {
    expect(() => {
      capitalisedString(404);
    }).toThrow();
  });
});