console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';