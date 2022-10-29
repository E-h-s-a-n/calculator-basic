const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

function divide(a, b) {
    return a / b
}

const operate = (operator, operand1, operand2) => {

}

function display() {
    currentDisplay.textContent = displayValue;
}
let displayValue = '';
let evaluation = { first: NaN, second: NaN, operation: '' }

const currentDisplay = document.querySelector("#display-1");
const resultDisplay = document.querySelector("#display-2");
const buttonsGrid = document.querySelector(".keys");

buttonsGrid.addEventListener('click', e => {
    const eCont = (s) => e.target.classList.contains(s);

    if (eCont('number')) {
        if (displayValue.length > 28) return
        displayValue += e.target.value
        display()
    } else if (eCont('operate')) {

    }

})



display()