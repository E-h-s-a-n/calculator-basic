function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b == 0 ? 0 : a / b;
}

const operate = (calcObj) => {
    return window[`${calcObj.operation}`](+calcObj.first, +calcObj.second);
}

function display() {
    currentDisplay.textContent = displayValue;
}

let displayValue = '';
let calc = { first: '', operation: '', second: '' }

const currentDisplay = document.querySelector("#display-1");
const resultDisplay = document.querySelector("#display-2");
const buttonsGrid = document.querySelector(".keys");

buttonsGrid.addEventListener('click', e => {
    const eClass = (s) => e.target.classList.contains(s);
    const eValue = e.target.value;

    if (eClass('number')) {
        if (calc.operation) {
            if (!calc.second && eValue == '0' || calc.second.length > 19) return; //error
            calc.second += eValue;
            displayValue = calc.second;
        } else {
            if (!calc.first && eValue == '0' || calc.first.length > 19) return; //error
            calc.first += eValue;
            displayValue = calc.first;
        }
        display();

    } else if (eClass('operate')) {
        if (calc.second) {
            calc.first = operate(calc)
            calc.second = '';
            calc.operation = '';
            console.log(calc);
            displayValue = calc.first;
            display();
        } else if (calc.first) {
            calc.operation = eValue;
        }

    } else if (eClass('equal')) {
        if (!calc.second) return;
        displayValue = operate(calc);
        calc.first = '';
        calc.second = '';
        calc.operation = '';
        display();
    } else if (eClass('all-clear')) {
        calc.first = '';
        calc.second = '';
        calc.operation = '';
        displayValue = ''
        display()
    }
    console.log(calc);

});

window.addEventListener('keydown', e => {
    if (e.repeat) return;
    console.log(e);
})

document.querySelector('.odin-click').addEventListener('click', e => {
    console.log(e.target.classList.toggle("odin"));
})

currentDisplay.textContent = '0';
// resultDisplay.setAttribute('disabled');