const findTheOldest = function (...[arr]) {
	return arr.reduce((oldest, current) => {
		const oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currAge = getAge(current.yearOfBirth, current.yearOfDeath);

		return currAge > oldAge ? current : oldest;
	});
};

getAge = (b, d) => {
	if (!d) {
		d = new Date().getFullYear();
	}

	return d - b;
};

// Do not edit below this line
module.exports = findTheOldest;
