const toggleBool = () => (bool = !bool);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));