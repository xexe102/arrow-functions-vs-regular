const resultingPromises = urls.map((url) => makHttpRequest(url));
var pattern = {};
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);