let oldVal ='0';
let newVal = '0';
let numValue;
let funcChoice;
let funcChoiceToCalculate;
let result;
let display = '0';
const cleanBtn = document.getElementById('cleanBtn');
const numericalBtn = document.querySelectorAll('.numeric');
const funcBtn = document.querySelectorAll('.func');
const equalsBtn = document.getElementById('equals');
let displayWindow = document.querySelector('#displayWindow');

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

function updateDisplay(display) {
    displayWindow.textContent = display;
}

cleanBtn.addEventListener('click',()=> {
    display = '0'; 
    oldVal = '0';
    newVal = '0';
    updateDisplay(display);
});


numericalBtn.forEach(numericalBtn => numericalBtn.addEventListener('click', function (){
    numValue = this.textContent;
    newValue(numValue);
}));

funcBtn.forEach(funcBtn => funcBtn.addEventListener('click', function (){
    funcChoice = this.textContent;
    console.log(funcChoice); 
    if (funcChoice == '+') {
        newVal=display.substring(1,10);
        funcChoiceToCalculate = funcChoice;
        oldVal = newVal;
        display='0';
        newVal='0';
        console.log(oldVal);
        console.log(newVal);
    }
    else if (funcChoice == '-') {
        newVal=display.substring(1,10);
        funcChoiceToCalculate = funcChoice;
        oldVal = newVal;
        display='0';
        newVal='0';
        console.log(oldVal);
        console.log(newVal);
    }
    else if (funcChoice == 'x') {
        newVal=display.substring(1,10);
        funcChoiceToCalculate = funcChoice;
        oldVal = newVal;
       //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
    else if (funcChoice == '/') {
        newVal=display.substring(1,10);
        funcChoiceToCalculate = funcChoice;
        oldVal = newVal;
        //newVal = '0';
        //display='0';
        //funcChoice = '';
        newValue(newVal);
    }
    /*if (funcChoice == '=') {
        oldVal = parseInt(oldVal);
        newVal = parseInt(newVal);
        calculate (oldVal,newVal);
        console.log(oldVal);
        console.log(newVal);
        console.log(result);
        display = result;
        updateDisplay(result);
    } */
}));


function newValue (numValue) {
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




equalsBtn.addEventListener('click', () => {
        oldVal = parseInt(oldVal);
        newVal = parseInt(newVal);
        calculate (oldVal,newVal);
        console.log(oldVal);
        console.log(newVal);
        console.log(result);
        display = result;
        updateDisplay(result);
});

newValue('0');