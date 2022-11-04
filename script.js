
let a;
let b;

 function add(a,b){
    let result = a + b;
    console.log(result);
 }

 function subtract(a,b){
    let result = a - b;
    console.log(result);
}

function multiply(a,b){
    let result = a * b;
    console.log(result);
}

function divide(a,b){
    let result = a / b;
    console.log(result);
}

function calculate (a,b) {
    if (funcBtn == '+'){
        add(a,b);
    } else if ( funcBtn == '-') {
        subtract(a,b);
    } else if ( funcBtn == 'x') {
        multiply(a,b);
    } else if ( funcBtn == '/') {
        divide(a,b);
    }
}

let display = '';

function updateDisplay(display) {
    let displayWindow = document.getElementById('displayWindow');
    displayWindow.textContent = display;
}

function calcNumButtons() {
    const numericalBtn = document.querySelectorAll('.numeric')
    numericalBtn.forEach(numericalBtn => numericalBtn.addEventListener('click', function (){
        let numValue = this.textContent;
        aValue(numValue);
    }));
}

function calcFuncButtons() { //gdzies tu jestem
    const funcBtn = document.querySelectorAll('.func')
    funcBtn.forEach(funcBtn => fincBtn.addEventListener('click', function (){
        let funcChoice = this.textContent;
        aValue(numValue);
    }));
}

function aValue (valueOfA) {
    display += valueOfA;
    updateDisplay(display);
}
function bValue (valueOfB) {
    display += valueOfB;
    updateDisplay(display);
}
 
calcNumButtons();