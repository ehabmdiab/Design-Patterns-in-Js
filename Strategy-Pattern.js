function addOperation(a, b) {
  return a + b;
}

function subtractOperation(a, b) {
  return a - b;
}

function multiplyOperation(a, b) {
  return a * b;
}

// Context that uses a strategy
class Calculator {
  constructor(operation) {
    this.operation = operation;
  }

  setOperation(operation) {
    this.operation = operation;
  }

  calculate(a, b) {
    return this.operation(a, b);
  }
}

// Usage
const calculator = new Calculator(addOperation);

console.log("Addition:", calculator.calculate(5, 3)); // Output: 8

calculator.setOperation(subtractOperation);
console.log("Subtraction:", calculator.calculate(5, 3)); // Output: 2

calculator.setOperation(multiplyOperation);
console.log("Multiplication:", calculator.calculate(5, 3)); // Output: 15
