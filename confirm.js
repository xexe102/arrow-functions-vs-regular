const timeFromDate = date => date.toTimeString().slice(0, 8);
const merge = Object.assign({}, obj1, obj2);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const stringReverse = str => str.split("").reverse().join("");