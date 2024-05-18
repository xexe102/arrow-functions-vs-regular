const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;