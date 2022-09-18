const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
let calcHistory = document.querySelector('.calcHistory')
let calcDisplay = document.querySelector('.calcDisplay');

let operator = "";

function clear(){
    calcHistory.textContent = "";
    calcDisplay.textContent = "";
}

function backspace(){
    if(calcDisplay.textContent.length >= 1)
    calcDisplay.textContent = calcDisplay.textContent.slice(0, calcDisplay.textContent.length - 1);
}
function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    let product = num1 * num2;
    return product;
}

function divide(num1, num2){
    let quotient = num1 / num2;
    return quotient;
}

function display(){

}

function operate(num1, num2){
switch(operator){
    case "+":
        return add(num1, num2);
    case "-":
        return subtract(num1, num2);
    case "x":
        return multiply(num1, num2);
    case "÷":
        return divide(num1, num2);
}
}

clearBtn.addEventListener("click", clear);
backspaceBtn.addEventListener("click", backspace);

//Functions for operators
//Function to recogninze operator
//Functions that populate display and stores variable
//Function for clear button