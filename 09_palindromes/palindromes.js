const palindromes = function (string) {
	let lowerStr = string.toLowerCase().replace(/[^A-Za-z0–9]/g, "");

	let reverseString = lowerStr.split("").reverse().join("");

	return reverseString == lowerStr;
};

// Do not edit below this line
module.exports = palindromes;
