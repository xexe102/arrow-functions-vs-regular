const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isTabInView = () => !document.hidden;
const isArray = (arr) => Array.isArray(arr);