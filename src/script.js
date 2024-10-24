let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function appendDot() {
    const lastSegment = display.value.split(/[\+\-\*\/]/).pop();
    
    if (!lastSegment.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value).toFixed(2);
    } catch (e) {
        display.value = 'Помилка';
    }
}
