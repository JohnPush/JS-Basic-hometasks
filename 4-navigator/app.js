/*4-navigator*/

const addressLat = 15;
const addressLong = 5;
const positionLat = 0;
const positionLong = 5;
const d = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log (d);

