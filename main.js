let a = ''; //first number
let b = ''; //second number
let sign = ''; //знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/'];

// Экран
const out = document.querySelector('calc-screen');

function clearAll(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onClick = clearAll;

document.querySelector('.buttons').onClick = (event) =>{
    // нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка clearAll
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    // получаю нажатую кнопку
const key = event.target.textContent;

    // если нажата кнопка 0-9 или .
    if(digit.includes(key)){
    a+=key;
    console.log ( a, b, sign);
    }

}