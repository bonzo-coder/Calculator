
let oldVal;
let newVal = "0";
let numValue = "0";
let funcChoice;
let funcChoiceToCalculate;
let result;
let displayWindow = document.querySelector('#displayWindow');
const numericalBtn = document.querySelectorAll('.numeric');
const funcBtn = document.querySelectorAll('.func');
const equalsBtn = document.getElementById('equals');
const cleanBtn = document.getElementById('cleanBtn');

 function add(oldVal,newVal){
    result = oldVal + newVal;
    console.log(result);
 }

 function subtract(oldVal,newVal){
    result = oldVal - newVal;
    console.log(result);
}

function multiply(oldVal,newVal){
    result = oldVal * newVal;
    console.log(result);
}

function divide(oldVal,newVal){
    result = oldVal / newVal;
    console.log(result);
}

function calculate (oldVal,newVal) {
    if (funcChoiceToCalculate == '+'){
        add(oldVal,newVal);
    } else if ( funcChoiceToCalculate == '-') {
        subtract(oldVal,newVal);
    } else if ( funcChoiceToCalculate == 'x') {
        multiply(oldVal,newVal);
    } else if ( funcChoiceToCalculate == '/') {
        divide(oldVal,newVal);
    }
}

let display = '';

function updateDisplay(display) {
    displayWindow.textContent = display;
}

function calcNumButtons() {
    numericalBtn.forEach(numericalBtn => numericalBtn.addEventListener('click', function (){
        numValue = this.textContent;
        newValue(newVal, numValue);
    }));
}

 function calcFuncButtons() { //gdzies tu jestem
    funcBtn.forEach(funcBtn => funcBtn.addEventListener('click', function (){
        funcChoice = this.textContent;
        funcChoiceToCalculate = funcChoice;
        console.log(funcChoice);
        
        
    }));
}

cleanBtn.addEventListener('click',()=> {
    display = '0'; 
    oldVal = 0;
    newVal = 0;
    updateDisplay(display);
})

function newValue (newVal,numValue) {
    display = newVal;
    if (displayWindow.innerText.length < 10) {
            if (display=='') {
                display = '0';
                updateDisplay(display);
                newVal = display;
            } else if (display=='0' && numValue=='0') {
                display = '0';
                updateDisplay(display);
                newVal = display;
            } else {
                display += numValue;
                updateDisplay(display.substring(1,10));
                newVal = display;
            }
    }
}

function oldValue (valueOfB) {
   oldVal = newVal;
   calcNumButtons();
   newValue();
}
 
function runCalc(newVal, numValue) {
    newValue(newVal, numValue);
    calcNumButtons();
    calcFuncButtons();

    
}
runCalc(newVal, numValue);

document.querySelector('.calcBox').addEventListener('click', (e)=> {
        
    if (funcChoice == '+') {
        newVal=display.substring(1,10);
        oldVal = newVal;
        //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
    if (funcChoice == '-') {
        newVal=display.substring(1,10);
        oldVal = newVal;
        //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
    if (funcChoice == 'x') {
        newVal=display.substring(1,10);
        oldVal = newVal;
       //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
    if (funcChoice == '/') {
        newVal=display.substring(1,10);
        oldVal = newVal;
        //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
});

equalsBtn.addEventListener('click', () => {
    oldVal = parseInt(oldVal);
    newVal = parseInt(newVal);
    calculate (oldVal,newVal);
    console.log(oldVal);
    console.log(newVal);
    updateDisplay(result);
    console.log(result);
});
//document.querySelector('.calcBox').addEventListener('click', (e)=> runCalc(e));
