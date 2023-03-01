class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }

  square(a) {
    return a * a;
  }

  squareRoot(a) {
    return Math.sqrt(a);
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  factorial(a) {
    return a === 0 ? 1 : a * this.factorial(a - 1);
  }

  remainder(a, b) {
    return a % b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2); // 3
calculator.subtract(1, 2); // -1
calculator.multiply(1, 2); // 2
calculator.divide(1, 2); // 0.5
calculator.square(3); // 9
calculator.squareRoot(9); // 3
calculator.power(2, 2); // 4
calculator.factorial(5); // 120
calculator.remainder(10, 3); // 1
