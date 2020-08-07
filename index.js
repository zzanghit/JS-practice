document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value;
    const b = document.querySelector('#second').value;
    const r = document.querySelector('#result');

    if(a) {
        if(b) {
            const c = a * b;
            r.textContent = c;
        } else {
            r.textContent = '두 번째 값 입력';
        }
    } else {
        r = '첫 번째 값 입력';
    }
});