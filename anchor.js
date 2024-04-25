const currentDate = () => new Date().toLocaleDateString('en-US');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());