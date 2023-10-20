/**11-date-array*/

const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function date (array) {
    const newArr = array
    .map(el => el.split(''))
    .filter(el =>
        el.length === 10 &&
        el[2] === el[5] &&
        ['.', '-', '/'].includes(el[2])
    )
    .map(el => {
        const subArr = [
            Number(el.slice(0, 2).join('')),
            el[2],
            Number(el.slice(3, 5).join('')),
            el[5],
            Number(el.slice(6, 10).join(''))
        ];
  
        if (subArr[1] === '/' && subArr[3] === '/') {
            subArr[1] = subArr[3] = '-';
            [subArr[0], subArr[2]] = [subArr[2], subArr[0]];
        } else if (subArr[1] === '.' && subArr[3] === '.') {
            subArr[1] = subArr[3] = '-';
        }
        return subArr
    })
    .filter(el =>
        !el.includes(NaN) &&
        el[0] > 0 &&
        el[2] > 0 &&
        el[4] > 0 &&
        el[2] <= 12 &&
        (((el[2] === 2) && el[0] <= 28) ||
        ((el[2] === 4 || el[2] === 6 || el[2] === 9 || el[2] === 11) && el[0] <= 30) ||
        ((el[2] === 1 || el[2] === 3 || el[2] === 5 || el[2] === 7 || el[2] === 8 || el[2] === 10 || el[2] === 12) && el[0] <= 31))
    )
    .map(el => {
    const joined = el.join('');
    const split = joined.split('-');
    const modified = split.map((subEl, i) => {
        if ((i === 0 || i === 1) && subEl.length === 1) {
            return '0' + subEl;
        } 
        return subEl;
    });
    return modified.join('-');
});
    // .map(el => el.join(''))
    // .map(el => el.split('-'))
    // .map(el => el.map((subEl, i) => {
    //     if ((i === 0 || i === 1) && subEl.length === 1) {
    //         return '0' + subEl
    //     } 
    //     return subEl
    // }))
    // .map(el => el.join('-'))

    return newArr
}

console.log(date(arr));