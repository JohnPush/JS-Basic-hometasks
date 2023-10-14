/*9-sort-loops*/

const arr = [1, 40, -5, 10, 0]

function sort (arrayOfNumbers) {
    let newArr = [];
    newArr[0] = arrayOfNumbers[0];

    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < newArr[0]) {
            newArr.unshift(arrayOfNumbers[i]);
        } else if (arrayOfNumbers[i] > newArr[newArr.length - 1]) {
            newArr.push(arrayOfNumbers[i]);
        } else {
            for (let j = 0; j < newArr.length; j++) {
               if (arrayOfNumbers[i] < newArr[j]) {
                newArr.splice(j, 0, arrayOfNumbers[i]);
                break;
               } 
            }
        }
    }
    console.log(newArr);
}
sort(arr);