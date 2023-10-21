
const array1 = ['28-02-2022', 'тест', '12/13/2023', '00/13/2022', '4/12/2023'];
console.log(array1);

function checkForDates(arrayToCheck) {
    const dateArray = [];

    arrayToCheck.forEach (el => {
        let components = [];

        if (el.includes('-')) {
            components = el.split('-');
        } else if (el.includes('.')) {
            components = el.split('.');
        } else if (el.includes('/')) {
            components = el.split('/');
        }else {
            return;
        }
    
        if (components.length !== 3) return;

        let [day, month, year] = components.map(Number);
       
        switch (month) {
            case 2:
                if (day < 1 || day > 28) {
                    return;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day < 1 || day > 30) {
                    return;
                }
                break;
            default:
                if (day < 1 || day > 31) {
                    return
                }
        };

        if (el.includes('/')) {
            [day, month] = [month, day];
        };

        if (month < 1 || month > 12 || year < 1) {
            return;
        };

        dateArray.push(`${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`);
    })
    return dateArray;
}

console.log(checkForDates(array1));