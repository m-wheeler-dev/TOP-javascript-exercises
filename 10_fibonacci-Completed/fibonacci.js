const fibonacci = function (num) {
	let total = 0;
	let prev1 = 0;
	let prev2 = 1;
	Number(num);

	if (num < 0) {
		return "OOPS";
	} else {
		for (i = 1; i <= num; i++) {
			prev1 = prev2;
			prev2 = total;
			total = prev1 + prev2;
		}
	}
	return total;
};

// Do not edit below this line
module.exports = fibonacci;
