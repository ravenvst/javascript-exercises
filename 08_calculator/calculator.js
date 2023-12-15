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
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
	return +result;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
