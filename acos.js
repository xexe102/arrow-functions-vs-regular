const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomString = () => Math.random().toString(36).slice(2);