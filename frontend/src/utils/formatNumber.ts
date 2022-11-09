const unitlist = ['', 'K', 'M', 'G'];

const formatNumber = (number: number): string => {
	const sign = Math.sign(number);
	let unit = 0;

	while (Math.abs(number) > 1000) {
		unit = unit + 1;
		number = Math.floor(Math.abs(number) / 100) / 10;
	}
	return sign * Math.abs(number) + unitlist[unit];
};

export default formatNumber;
