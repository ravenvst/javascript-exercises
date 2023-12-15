const add = function(x, y) {
	let result = x + y;
  return result;
};

const subtract = function(x, y) {
	let result = x - y;
  return result;
};

const sum = function() {
  let result = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    result += arguments[0][i];
  }
	return result;
};

const multiply = function() { 
  let result = arguments[0][0];
  for (let i = 1; i < arguments[0].length; i++) {
    result *= arguments[0][i];
  }
	return result;
};

const power = function(x, y) {
	let result = x ** y;
  return result;
};

const factorial = function(x) {
	let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i; 
  }
  return result;
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
