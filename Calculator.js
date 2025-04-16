// calculator.js

function calculate(a, operator, b) {
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Invalid operator';
  }
}

module.exports = { calculate };
