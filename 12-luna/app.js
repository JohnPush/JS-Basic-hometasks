/**12-luna*/

const card = '4561-2612-1234-5464';

const luhn = num => num
    .replaceAll('-','')
    .split('')
    .map(Number)
    const step1 = []
    for (i = 0; i < luhn(card).length; i ++) {
        if (i % 2 === 0) {
        if ((luhn(card)[i] * 2) > 9) {
            step1.push(luhn(card)[i] * 2 - 9);
        } else {
            step1.push(luhn(card)[i] * 2);
        }
    } else {
        step1.push(luhn(card)[i]);
    }
    }
    const step2 = step1.reduce((acc, el) => {
    return acc += el
}, 0)
if (step2 % 10 === 0) {
    console.log('карта валидная')
} else {
    console.log('карта не валидная')
}
luhn(card)