/*7-converter*/

function converter(sum, currentCurrency, targetCurrency) {
	const RUB_IN_USD = 0.01;
	const USD_IN_RUB = 50;
	const RUB_IN_EUR = 0.005;
	const EUR_IN_RUB = 100;
	const USD_IN_EUR = 0.5;
	const EUR_IN_USD = 1.5;
	switch (true) {
		case sum > 0 && currentCurrency === 'RUB' && targetCurrency === 'USD':
			return sum * RUB_IN_USD;
			break;
		case sum > 0 && currentCurrency === 'USD' && targetCurrency === 'RUB':
			return sum * USD_IN_RUB;
			break; 
		case sum > 0 && currentCurrency === 'RUB' && targetCurrency === 'EUR':
			return sum * RUB_IN_EUR;
			break; 
		case sum > 0 && currentCurrency === 'EUR' && targetCurrency === 'RUB':
			return sum * EUR_IN_RUB;
			break; 
		case sum > 0 && currentCurrency === 'USD' && targetCurrency === 'EUR':
			return sum * USD_IN_EUR;
			break; 
		case sum > 0 && currentCurrency === 'EUR' && targetCurrency === 'USD':
			return sum * EUR_IN_USD;
			break; 
		default:
			return null;
}
}
console.log(converter(200, 'RUB', 'USD'));