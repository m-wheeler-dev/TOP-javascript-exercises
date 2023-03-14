const add = function (x, y) {
	return (x += y);
};

const subtract = function (x, y) {
	return (x -= y);
};

const sum = function ([...nums]) {
	let total = 0;
	if (nums.length === 0) {
		return 0;
	} else if (nums.length === 1) {
		return nums[0];
	} else {
		for (i = 0; i < nums.length; i++) {
			total += nums[i];
		}
	}
	return total;
};

const multiply = function ([...nums]) {
	let total = nums[0];
	if (nums.length === 0) {
		return 0;
	} else if (nums.length === 1) {
		return nums[0];
	} else {
		for (i = 1; i < nums.length; i++) {
			total *= nums[i];
		}
	}
	return total;
};

const power = function (x, y) {
	let total = Math.pow(x, y);

	return total;
};

const factorial = function (x) {
	let total = 1;

	if (x === 0 || x === 1) {
		return total;
	} else {
		for (i = x; i > 0; i--) {
			total = total * i;
		}
	}
	return total;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
