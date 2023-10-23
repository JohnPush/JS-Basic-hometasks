/*7-converter*/

function converter(sum, currentCurrency, targetCurrency) {
	if (!sum || sum < 0) return null;
	const RUB_IN_USD = 0.01;
	const USD_IN_RUB = 50;
	const RUB_IN_EUR = 0.005;
	const EUR_IN_RUB = 100;
	const USD_IN_EUR = 0.5;
	const EUR_IN_USD = 1.5;
	switch (true) {
		case currentCurrency === 'RUB' && targetCurrency === 'USD':
			return sum * RUB_IN_USD;
		case currentCurrency === 'USD' && targetCurrency === 'RUB':
			return sum * USD_IN_RUB;
		case currentCurrency === 'RUB' && targetCurrency === 'EUR':
			return sum * RUB_IN_EUR;
		case currentCurrency === 'EUR' && targetCurrency === 'RUB':
			return sum * EUR_IN_RUB;
		case currentCurrency === 'USD' && targetCurrency === 'EUR':
			return sum * USD_IN_EUR;
		case currentCurrency === 'EUR' && targetCurrency === 'USD':
			return sum * EUR_IN_USD;
		default:
			return null;
}
}
console.log(converter(200, 'RUB', 'USD'));