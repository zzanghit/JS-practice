let btn = document.querySelector('#button');
document.querySelector('#input').focus();
btn.addEventListener('click', () => {
    let inputTag = document.querySelector('#input');
    let wordTag = document.querySelector('#word');
    let errorTag = document.querySelector('#error');
    let promptTag = document.querySelector('#prompt');
    
    let word = wordTag.textContent; //input만 value 나머지 textContent
    let input = inputTag.value;
    let lastindex = word.length-1;

    if(word[lastindex] === input[0]) {
        wordTag.textContent = input;
        errorTag.textContent = '';
        inputTag.value = ''; 
        promptTag.textContent = '';
        inputTag.focus();
    } else {
        errorTag.textContent = '땡';
        inputTag.value = '';
        inputTag.focus();
    }
});