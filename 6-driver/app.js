/*6-driver*/

const hasLicence = true;
const age = 18;
const isDrink = false;

const canDrive = hasLicence && age >= 18 && !isDrink;
console.log(canDrive ? 'Может' : 'Не может')
