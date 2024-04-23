console.log("0 && 1 = "+(0 && 1));
const goToTop = () => window.scrollTo(0, 0);
const merge = [...new Set([...a, ...b])];
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isEven = (num) => num % 2 === 0;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);