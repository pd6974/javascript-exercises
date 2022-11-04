const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    x += a[i];
  }
  return x;
}

const multiply = function(a) {
  let x = 1;
  for (let i = 0; i < a.length; i++) {
    x *= a[i];
  }
  return x;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a <= 1) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
