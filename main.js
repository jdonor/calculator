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
    let result;
    switch (operator) {
        case operators.ADD:
            result = add(a, b);
            break;
        case operators.SUBTRACT:
            result = subtract(a, b);
            break;
        case operators.MULTIPLY:
            result = multiply(a, b);
            break;
        case operators.DIVIDE:
            result = divide(a, b);
            break;
    }
    return result.toString();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', buttonClicked);
});

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
        calculation.b += number.toString();
    } else {
        calculation.a += number.toString();
    }

    refreshDisplay();
}

function operatorClicked(operator) {
    if (calculation.b) {
        calculation.a = operate(+calculation.a, calculation.operator, +calculation.b);
        calculation.b = '';
        calculation.operator = operator;
    } else if (calculation.a) {
        calculation.operator = operator;
    }

    refreshDisplay();
}

function equalsClicked() {
    if (calculation.b) {
        calculation.a = operate(+calculation.a, calculation.operator, +calculation.b);
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
