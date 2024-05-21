const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomBoolean = () => Math.random() >= 0.5;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};