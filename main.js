// Add

function add(a, b) {
  return a + b;
}

console.log(add(4, 5));

// Multiplacation Kata

function multiply(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result = add(a, result);
    count++;
  }

  return result;
}

console.log(multiply(6, 4));

// Power/Exponentiation

function power(a, b) {
  let count = 0;
  let result = 1;
  while (count < b) {
    result = multiply(a, result);
    count++;
  }
  return result;
}

console.log(power(3, 4));

// Factorial

function factorial(a) {
  let count = 0;
  let result = 1;
  while (count < a) {
    result = multiply(a - count, result);
    count++;
  }
  return result;
}

console.log(factorial(8));
