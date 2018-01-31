const operators = Object.freeze({
    ADD: '+',
    SUBTRACT: '-',
    MULTIPLY: '*',
    DIVIDE: '/',
});

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
