'use strict';

/*17-calc*/

// document.querySelector('.multiplication').addEventListener('click', function() {
// 	const firstNumber = document.querySelector('.firstNumber').value;
// 	const secondNumber = document.querySelector('.secondNumber').value;
// 	const result = Number(firstNumber) * Number(secondNumber);
//     if (!result) {
//         return;
// 	}
// 	document.querySelector('.result').innerText = result;
// 	document.querySelector('.firstNumber').value = '';
// 	document.querySelector('.secondNumber').value = '';
// });

// document.querySelector('.division').addEventListener('click', function() {
// 	const firstNumber = document.querySelector('.firstNumber').value;
// 	const secondNumber = document.querySelector('.secondNumber').value;
// 	const result = Number(firstNumber) / Number(secondNumber);
//     if (!result) {
//         return;
// 	}
// 	document.querySelector('.result').innerText = result;
// 	document.querySelector('.firstNumber').value = '';
// 	document.querySelector('.secondNumber').value = '';
// });

// document.querySelector('.addition').addEventListener('click', function() {
// 	const firstNumber = document.querySelector('.firstNumber').value;
// 	const secondNumber = document.querySelector('.secondNumber').value;
// 	const result = Number(firstNumber) + Number(secondNumber);
//     if (!result) {
//         return;
// 	}
// 	document.querySelector('.result').innerText = result;
// 	document.querySelector('.firstNumber').value = '';
// 	document.querySelector('.secondNumber').value = '';
// });

// document.querySelector('.subtraction').addEventListener('click', function() {
// 	const firstNumber = document.querySelector('.firstNumber').value;
// 	const secondNumber = document.querySelector('.secondNumber').value;
// 	const result = fNumber(firstNumber) - Number(secondNumber);
//     if (!result) {
//         return;
// 	}
// 	document.querySelector('.result').innerText = result;
// 	document.querySelector('.firstNumber').value = '';
// 	document.querySelector('.secondNumber').value = '';
// });



function calc(operation) {
    const firstNumber = Number(document.querySelector('.firstNumber').value);
    const secondNumber = Number(document.querySelector('.secondNumber').value);
    let result;

    if (operation === "multiplication") {
        result = firstNumber * secondNumber;
    } else if (operation === "division") {
        result = firstNumber / secondNumber;
    } else if (operation === "addition") {
        result = firstNumber + secondNumber;
    } else if (operation === "subtraction") {
        result = firstNumber - secondNumber;
    } 
        document.querySelector('.result').innerText = result;
        document.querySelector('.firstNumber').value = '';
        document.querySelector('.secondNumber').value = '';
}






