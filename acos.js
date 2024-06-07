const result = await makeHttpRequest(url);
const flattenedArray = arr => [].concat(...arr);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());