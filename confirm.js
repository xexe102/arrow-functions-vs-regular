const minNumber = arr => Math.min(...arr);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const allResults = await Promise.all(items.map(async (item) => {}));