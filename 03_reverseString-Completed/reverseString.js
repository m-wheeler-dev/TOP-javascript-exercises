const reverseString = function (str) {
	if (str.length === 0) {
		return "";
	} else {
		return str.split("").reverse().join("");
	}
};

// Do not edit below this line
module.exports = reverseString;
