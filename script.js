const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
let calcHistory = document.querySelector('.calcHistory')
let calcDisplay = document.querySelector('.calcDisplay');
const numberButton = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('.decimal');
const numSignBtn = document.querySelector('.numberSign');
const equalBtn = document.querySelector('.equal');


numberButton.forEach(button => {
    button.addEventListener('click',  () => {
    clearZero();
    calcDisplay.textContent += button.textContent;
    });
  });

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        if(calcHistory.textContent.includes('+') || calcHistory.textContent.substring(1, calcDisplay.textContent.length).includes('-') || calcHistory.textContent.includes('*') || calcHistory.textContent.includes('x') || calcHistory.textContent.includes('/') || calcHistory.textContent.includes('÷') || calcHistory.textContent.includes('^')){
            alert("You cannot do more than one operation at the same time!");
        } else{
        calcHistory.textContent += calcDisplay.textContent + button.textContent;
        clearDisplay();
        }
    })
} )

decimalBtn.addEventListener('click', () => {
    
    const decimalPoint = '.'
    if(calcDisplay.textContent.includes(decimalPoint) == false){
        calcDisplay.textContent += decimalBtn.textContent;
    } else{
        alert("Only one decimal point per number!");
    }
})

numSignBtn.addEventListener('click', () => {

    if (calcDisplay.textContent.charAt(0) == '-'){
        calcDisplay.textContent = calcDisplay.textContent.substring(1, calcDisplay.textContent.length);
    } else{
        calcDisplay.textContent =  '-' + calcDisplay.textContent.substring(0, calcDisplay.textContent.length);
    }
})

document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === '0'){
        document.querySelector('#zero').click();
    }
    if (e.key.toLowerCase() === '1'){
        document.querySelector('#one').click();
    }
    if (e.key.toLowerCase() === '2'){
        document.querySelector('#two').click();
    }
    if (e.key.toLowerCase() === '3'){
        document.querySelector('#three').click();
    }
    if (e.key.toLowerCase() === '4'){
        document.querySelector('#four').click();
    }
    if (e.key.toLowerCase() === '5'){
        document.querySelector('#five').click();
    }
    if (e.key.toLowerCase() === '6'){
        document.querySelector('#six').click();
    }
    if (e.key.toLowerCase() === '7'){
        document.querySelector('#seven').click();
    }
    if (e.key.toLowerCase() === '8'){
        document.querySelector('#eight').click();
    }
    if (e.key.toLowerCase() === '9'){
        document.querySelector('#nine').click();
    }
    if (e.key.toLowerCase() === 'escape'){
        document.querySelector('#clear').click();
    }
    if (e.key.toLowerCase() === 'backspace'){
        document.querySelector('#backspace').click();
    }
    if (e.key.toLowerCase() === '^'){
        document.querySelector('#exponent').click();
    }
    if (e.key.toLowerCase() === '+'){
        document.querySelector('#plus').click();
    }
    if (e.key.toLowerCase() === '-'){
        document.querySelector('#minus').click();
    }
    if (e.key.toLowerCase() === 'x' || e.key.toLowerCase() === '*'){
        document.querySelector('#multiply').click();
    }
    if (e.key.toLowerCase() === '/' || e.key.toLowerCase() === '÷'){
        document.querySelector('#divide').click();
    }
    if (e.key.toLowerCase() === '='){
        document.querySelector('#equal').click();
    }
    if (e.key.toLowerCase() === '.'){
        document.querySelector('#decimal').click();
    }
})

let firstNum = "";
let operator = "";
let secondNum = "";
let numOne = '';
let numTwo = '';
let result = '';
let answer = 0;

function clear(){
    calcHistory.textContent = "";
    calcDisplay.textContent = "";
}

function clearDisplay(){
    calcDisplay.textContent = "";
}

function clearHistory(){
    calcHistory.textContent = "";
}

function clearZero(){
    if(calcDisplay.textContent == '0'){
        clearDisplay();
    }
}

function backspace(){
    if(calcDisplay.textContent.length >= 1)
    calcDisplay.textContent = calcDisplay.textContent.slice(0, calcDisplay.textContent.length - 1);
}
function add(num1, num2){
    let sum = num1 + num2;
    return sum.toFixed(5);
}

function subtract(num1, num2){
    let difference = num1 - num2;
    return difference.toFixed(5);
}

function multiply(num1, num2){
    let product = num1 * num2;
    return product.toFixed(5);
}

function divide(num1, num2){
    let quotient = num1 / num2;
    return quotient.toFixed(5);
}

function exponent(num1, num2){
    let product = num1 ** num2;
    return product.toFixed(5);
}


function getNumbers(){
    let numOne = parseFloat(calcHistory.textContent);
    let numTwo = parseFloat(calcDisplay.textContent);
    return {
        numOne: numOne, 
        numTwo: numTwo
        };
}




function operate(){
    if(calcHistory.textContent.includes('+') == true){
        operator = '+';
    } else if(calcHistory.textContent.substring(1, calcDisplay.textContent.length).includes('-') == true){
        operator = '-';
    } else if(calcHistory.textContent.includes('x') == true || calcHistory.textContent.includes('*') == true ){
        operator = 'x';
    } else if(calcHistory.textContent.includes('÷') == true || calcHistory.textContent.includes('/') == true ){
        operator = '÷';
    } else if(calcHistory.textContent.includes('^') == true){
        operator = '^';
    }   
switch(operator){
        case "+":
            result = getNumbers();
            answer = add(result.numOne, result.numTwo).toString();
            calcDisplay.textContent = answer;
            clearHistory();
            break;
        case "-":
            result = getNumbers();
            answer = subtract(result.numOne, result.numTwo).toString();
            calcDisplay.textContent = answer;
            clearHistory();
            break;
        case "x": case "*":
            result = getNumbers();
            answer = multiply(result.numOne, result.numTwo).toString();
            calcDisplay.textContent = answer;
            clearHistory();
            break;
        case "÷": case "/":
            result = getNumbers();
            if (result.numTwo == 0){
                alert("Nice try! You can't divide by zero!");
                clearDisplay();
            } else{
            answer = divide(result.numOne, result.numTwo).toString();
            calcDisplay.textContent = answer;
            clearHistory();
            }
            break;
        case "^":
            result = getNumbers();
            answer = exponent(result.numOne, result.numTwo).toString();
            calcDisplay.textContent = answer;
            clearHistory();
            break;
    }
    
}

clearBtn.addEventListener("click", clear);
backspaceBtn.addEventListener("click", backspace);
equalBtn.addEventListener('click', operate);




