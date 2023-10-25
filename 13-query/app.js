/*13-query*/

const queryParams = {
    search: 'Vasya',
    take: 10,
};

function objectToString1(objectQueryParams) {
    let queryParamsString = '//';
    for (const key in objectQueryParams) {
        const value = objectQueryParams[key];
        queryParamsString += `${key}=${value}&`;
    }
    return queryParamsString.slice(0, -1);
}
console.log(objectToString1(queryParams));


function objectToString2(objectQueryParams) {
    return Object.keys(objectQueryParams)
    .map(key => `${key}=${objectQueryParams[key]}`)
    .join('&');
};
console.log(objectToString2(queryParams));


const objectToString3 = objectQueryParams => 
  Object.entries(objectQueryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
console.log(objectToString3(queryParams));


function objectToString4(objectQueryParams) {
    let queryParamsString1 = '//';
    for (const [key, value] of Object.entries(objectQueryParams)) {
        queryParamsString1 += `${key}=${value}&`
    }
    return queryParamsString1.slice(0, -1);
}
console.log(objectToString4(queryParams));

