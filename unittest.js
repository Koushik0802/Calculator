// test.js

const { expect } = require('chai');
const { calculate } = require('./calculator');

describe('Calculator', () => {
  it('adds numbers', () => {
    expect(calculate(2, '+', 3)).to.equal(5);
  });

  it('subtracts numbers', () => {
    expect(calculate(10, '-', 4)).to.equal(6);
  });

  it('multiplies numbers', () => {
    expect(calculate(3, '*', 4)).to.equal(12);
  });

  it('divides numbers', () => {
    expect(calculate(10, '/', 2)).to.equal(5);
  });

  it('handles division by zero', () => {
    expect(calculate(10, '/', 0)).to.equal('Error: Division by zero');
  });

  it('handles invalid operator', () => {
    expect(calculate(10, '^', 2)).to.equal('Invalid operator');
  });
});
