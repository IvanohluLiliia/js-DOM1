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
        display.value = display.value.slice(0, -1); // Якщо останній символ оператор, замінюємо його
    }
    display.value += operator;
}

function appendDot() {
    const lastSegment = display.value.split(/[\+\-\*\/]/).pop();
    // Додаємо крапку тільки якщо в поточному сегменті її немає
    if (!lastSegment.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        let result = eval(display.value);
        // Перевірка, чи результат є цілим числом
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(2);
        }
    } catch (e) {
        display.value = 'Помилка';
    }
}
