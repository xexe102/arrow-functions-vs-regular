const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];