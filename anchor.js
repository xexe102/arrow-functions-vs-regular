const merge = Object.assign({}, obj1, obj2);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;