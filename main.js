const operators = Object.freeze({
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
});

const calculation = {
    a: '',
    b: '',
    operator: '',
};

const display = document.querySelector('#display');

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
    return a / b;
}

function operate(a, operator, b) {
    switch (operator) {
        case operators.ADD:
            return add(a, b);
            break;
        case operators.SUBTRACT:
            return subtract(a, b);
            break;
        case operators.MULTIPLY:
            return multiply(a, b);
            break;
        case operators.DIVIDE:
            return divide(a, b);
            break;
    }
}

function buttonClicked() {
    let buttonText = this.textContent;

    if (buttonText === '=') {
        equalsClicked();
    } else if (buttonText === 'AC') {
        clear();
    } else if (buttonText.match(/[0-9]/)) {
        numberClicked(buttonText);
    } else {
        operatorClicked(buttonText);
    }
}

function numberClicked(number) {
    number = +number;
    if (calculation.operator) {
        calculation.b += number;
    } else {
        calculation.a += number;
    }

    refreshDisplay();
}

function operatorClicked(operator) {
    if (calculation.a) {
        calculation.operator = operator;
    }

    refreshDisplay();
}

function equalsClicked() {
    if (calculation.b) {
        calculation.a = operate(calculation.a, calculation.operator, calculation.b);
        calculation.b = '';
        calculation.operator = '';

        refreshDisplay();
    }
}

function refreshDisplay() {
    display.textContent = `${calculation.a} ${calculation.operator} ${calculation.b}`;
}

function clear() {
    calculation.a = '';
    calculation.b = '';
    calculation.operator = '';

    refreshDisplay();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked);
});

refreshDisplay();
