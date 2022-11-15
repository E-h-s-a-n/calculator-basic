// Woman, Life, Liberty

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
    resultDisplay.textContent = calc.operation || 'no operation'
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
            if (!calc.second && keyValue == '0' || calc.second.length > 19) return;
            calc.second += keyValue;
            displayValue = calc.second;
            display(calc.second);
        } else {
            if (!calc.first && keyValue == '0' || calc.first.length > 19) return;
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
            display(calc.first);
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

    } else if (keyType == 'back-clear') {
        if (calc.second) {
            calc.second = calc.second.slice(0, calc.second.length - 1);
            display(calc.second);
        } else {
            // calc.operation = '';
            calc.first = calc.first.slice(0, calc.first.length - 1);
            display(calc.first);
        }
    }
    console.log(calc);


});

const uiButtons = document.querySelectorAll('button');
// for (let i = 0; i < uiButtons.length; i++) {
//     uiButtons[i].dataset.index = ' ' + i;
// }
// 'Backspace': 1
const buttonsMap = {
    7: 4, 8: 5, 9: 6, 4: 8, 5: 9, 6: 10, 1: 12, 2: 13, 3: 14, 0: 17,
    '%': 2, '/': 3, '*': 7, '-': 11, '+': 15, 'Enter': 19, 'Backspace': 1
}

window.addEventListener('keydown', e => {
    if (e.repeat) return;
    const mouseClick = new MouseEvent('click', { view: window, bubbles: true, cancelable: true })
    // console.log(e);
    const buttonIndex = buttonsMap[e.key];
    // console.log('button index', buttonIndex);
    if (buttonIndex) {
        console.log(uiButtons[buttonIndex].dispatchEvent(mouseClick));
    }
})

document.querySelector('.odin-click').addEventListener('click', e => {
    console.log(e.target.classList.toggle("odin"));
})


// currentDisplay.textContent = '0';
display('_');
// resultDisplay.setAttribute('disabled');