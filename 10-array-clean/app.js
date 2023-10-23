/*10-array-clean*/

const arr = [1, 2, 3, 10, 4, 8, 5]

function filterFn(array, deleteOfElement) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!deleteOfElement(array[i])) {
        newArr.push(array[i]);
        } 
    }
    return newArr;
}


function deleteOfElement (num) {
   return num > 6;
}

console.log(filterFn(arr, deleteOfElement));