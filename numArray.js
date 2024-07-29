const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const merge = (a, b) => a.concat(b);