const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const toggleBool = () => (bool = !bool);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;