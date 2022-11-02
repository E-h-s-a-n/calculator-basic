function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operate = (calcObj) => {
    return window[`${calcObj.operation}`](+calcObj.first, +calcObj.second);
}

function display() {
    currentDisplay.textContent = displayValue;
}

let displayValue = '';
let calc = { first: '', second: '', operation: '' }

const currentDisplay = document.querySelector("#display-1");
const resultDisplay = document.querySelector("#display-2");
const buttonsGrid = document.querySelector(".keys");

buttonsGrid.addEventListener('click', e => {
    const eClass = (s) => e.target.classList.contains(s);
    const eValue = e.target.value;

    if (eClass('number')) {
        if ((!calc.first || !calc.second) && eValue == '0') return;
        if (calc.first.length > 25) return;
        if (calc.operation){
            calc.second += eValue;
            displayValue = calc.second;
        } else {
            calc.first += eValue;
            displayValue = calc.first;
        }
        display();

    } else if (eClass('operate')) {
        calc.operation = eValue;

    } else if (eClass('equal')) {
        operate(calc);
    }

});


currentDisplay.textContent = 0;
// resultDisplay.setAttribute('disabled');