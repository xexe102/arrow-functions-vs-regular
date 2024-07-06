[foo, bar] = [bar, foo];
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);