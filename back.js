const value = ( 5 < 7 ) ? "True" : "False" ;
console.log( "A" - "B" + 2);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));