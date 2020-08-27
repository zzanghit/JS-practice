const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let count = 0;

let answer = [];
const pickNumbers = 4;
                 
for(insertCur = 0; insertCur < pickNumbers ; insertCur++){
    answer[insertCur] = Math.floor(Math.random() * 10);
 
    for(searchCur = 0; searchCur < insertCur; searchCur ++){
        if(answer[insertCur] == answer[searchCur]){
            insertCur--;
            break;
        }
    }
}

console.log(answer);

check.addEventListener('click', () => {
    const value = input.value;
    if(count > 9) {
        logs.appendChild(document.createTextNode('Game Over! ' + 'Answer = ' + answer.join('')));
        logs.appendChild(document.createElement('br'));
    } else if(value && value.length === 4) {
        count++;
        if(answer.join('') === value) { // answer[] 을 string 으로 변환해서 비교
            logs.appendChild(document.createTextNode('HR'));
        } else {
            let strike = 0;
            let ball = 0;
            for(const [aIndex, aNumber] of answer.entries()) {
                for(const [bIndex, bString] of input.value.split('').entries()) {
                    if(aNumber === Number(bString)) {
                        if(aIndex === bIndex) {
                            strike++;
                        } else {
                            ball++;
                        }
                    }
                }
            }
            // logs.appendChild(document.createTextNode(`${strike} strike ${ball} ball`)); 같은 표현 방식
            logs.appendChild(document.createTextNode(input.value + ' : ' +strike + ' strike ' + ball + ' ball'));
            logs.appendChild(document.createElement('br'));
        }
    }
    input.value = '';
});

