const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var arr3 = "jones".split('');