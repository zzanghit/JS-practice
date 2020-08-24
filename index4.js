const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let count = 0;

var answer = [];
var pickNumbers = 4;
                 
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
    if(value && value.length === 4) {

    }
});

