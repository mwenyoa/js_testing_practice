const stringLength = (str) => {
  const stringLen = str.length;
  if (stringLen >= 1 && stringLen <= 10) {
    return stringLen;
  }
  return 'String length must be between 1 to 10';
};

// reverse function
const reverseString = (revString) => revString.split('').reverse().join('');

// calculator
class Calculator {
  constructor(num1, num2) {
    this.x = num1;
    this.y = num2;
  }

  add() {
    return (this.x + this.y);
  }

  subtract() {
    return (this.x - this.y);
  }

  divide() {
    return (this.x / this.y);
  }

  multiply() {
    return (this.x * this.y);
  }
}

// Capitalize first caharacter
const capitalisedString = (capStr) => {
  if (typeof capStr === 'string' && capStr.length > 0) {
    return capStr.charAt(0).toUpperCase() + capStr.slice(1);
  }
  throw new Error('Value must be a valid tring');
};

module.exports = {
  stringLength, reverseString, Calculator, capitalisedString,
};