function Calculator() {
  this.add = (a, b) => a + b;
  this.subtract = (a, b) => a - b;
  this.multiply = (a, b) => a * b;
  this.divide = (a, b) => a / b;
  this.square = (a) => a * a;
  this.squareRoot = (a) => Math.sqrt(a);
  this.power = (a, b) => Math.pow(a, b);
  this.factorial = (a) => (a !== 0 ? a * this.factorial(a - 1) : 1);
  this.remainder = (a, b) => a % b;
}

const obj = new Calculator();

console.log(obj.add(5, 10));
console.log(obj.subtract(5, 10));
console.log(obj.multiply(5, 10));
console.log(obj.divide(5, 10));
console.log(obj.square(3));
console.log(obj.squareRoot(9));
console.log(obj.power(2, 2));
console.log(obj.factorial(5));
console.log(obj.remainder(10, 3));
