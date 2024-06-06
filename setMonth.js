console.log( "A" - "B" + 2);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));