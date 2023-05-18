let firstNumber;
let secoundNumber;
let operator;
let result;
const btn = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operate'));
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const equal = document.getElementById('doMath');

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return (a/b).toFixed(2);
}

function operate(operator,a,b) {
    if(operator == 'add') {
        return add(a,b);
    }
    if(operator == 'subtract') {
        return subtract(a,b);
    }
    if(operator == 'multiply') {
        return multiply(a,b);
    }
    if(operator == 'divide') {
        if(a == 0 || b == 0) {
            return "ERROR";
        } else {
            return divide(a,b);
        }
    }
}

function changeDisplay() {
    display.innerText = display.innerText + this.textContent;
}

function saveOperator() {
    firstNumber = display.innerText;
    operator = this.id;
    display.innerText = '';
}

function doMath() {
    secoundNumber = display.innerText;
    result = operate(operator, Number(firstNumber), Number(secoundNumber));
    display.innerText = result;
}

clear.addEventListener('click', () => display.innerText = '');
btn.forEach(button => button.addEventListener("click", changeDisplay));
operators.forEach(operator => operator.addEventListener("click", saveOperator));
equal.addEventListener("click", doMath);

