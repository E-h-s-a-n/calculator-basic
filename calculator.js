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

function display(value = '') {
    currentDisplay.textContent = value;
}

let displayValue = '';
let calc = { first: '', operation: '', second: '' }

const currentDisplay = document.querySelector("#display-1");
const resultDisplay = document.querySelector("#display-2");
const buttonsGrid = document.querySelector(".keys");
console.clear();

buttonsGrid.addEventListener('click', e => {
    const keyType = e.target.dataset.type;
    const keyValue = e.target.value;

    if (keyType == 'number') {
        if (calc.operation) {
            if (!calc.second && keyValue == '0' || calc.second.length > 19) return; //error
            calc.second += keyValue;
            displayValue = calc.second;
            display(calc.second);
        } else {
            if (!calc.first && keyValue == '0' || calc.first.length > 19) return; //error
            calc.first += keyValue;
            displayValue = calc.first;
            display(calc.first);
        }


    } else if (keyType == 'operator') {
        if (calc.second) {
            calc.first = operate(calc)
            calc.second = '';
            calc.operation = keyValue;
            displayValue = calc.first;
            display(calc.first);
        } else if (calc.first) {
            calc.operation = keyValue;
        }

    } else if (keyType == 'equal') {
        if (!calc.second) return;
        displayValue = operate(calc);
        calc.first = '';
        calc.second = '';
        calc.operation = '';
        display(displayValue);
    } else if (keyType == 'all-clear') {
        calc.first = '';
        calc.second = '';
        calc.operation = '';
        displayValue = ''
        display();
    }
    console.log(calc);

});

numberButtons = document.querySelectorAll('.number');
operatorButtons = document.querySelectorAll('.operate');
numberButtonsMap = {7:0, 8:1, 9:2, 4:3, 5:4, 6:5, 1:6, 2:7, 3:8, 0:9};
operateButtonsMap = {'%':0, '/':1, '*':2, '-':3 ,'+':4};

numberButtons.forEach(e => {
    console.log(e.value);
});


window.addEventListener('keydown', e => {
    if (e.repeat) return;
    console.log(e);
    // return true
    const numberKey = +e.key;
    const event = 11
    const click = new MouseEvent('click',{view: window, bubbles: true, cancelable: true})

    if (numberKey || numberKey == 0){
        const buttonIndex = numberButtonsMap[numberKey];
        numberButtons[buttonIndex].dispatchEvent(click);
        // console.log(cancelled);
    } else if (1==1){
        // const operatorIndex = 123213;
    }
})

document.querySelector('.odin-click').addEventListener('click', e => {
    console.log(e.target.classList.toggle("odin"));
})


// currentDisplay.textContent = '0';
display('0')
// resultDisplay.setAttribute('disabled');