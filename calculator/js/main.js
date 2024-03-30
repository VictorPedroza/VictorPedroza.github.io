document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const clearAllBtn = document.getElementById('clear-all');
    const clearBtn = document.getElementById('clear');
    const percentageBtn = document.getElementById('percentage');
    const divideBtn = document.getElementById('divide');
    const multiplyBtn = document.getElementById('multiply');
    const subtractBtn = document.getElementById('subtract');
    const addBtn = document.getElementById('add');
    const equalsBtn = document.getElementById('equals');
    const decimalBtn = document.getElementById('decimal');
    const numbers = document.querySelectorAll('.calculator button:not(#clear-all):not(#clear):not(#percentage):not(#divide):not(#multiply):not(#subtract):not(#add):not(#equals):not(#decimal)');

    // Funções para as operações matemáticas
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
        if (b === 0) {
            return 'Error';
        }
        return a / b;
    }

    let currentOperation = '';
    let firstOperand = '';
    let secondOperand = '';
    let resultDisplayed = false;

    // Atualiza o display
    function updateDisplay(value) {
        if (resultDisplayed) {
            result.value = value;
            resultDisplayed = false;
        } else {
            result.value += value;
        }
    }

    // Limpa o display
    function clearDisplay() {
        result.value = '';
        firstOperand = '';
        secondOperand = '';
        currentOperation = '';
        resultDisplayed = false;
    }

    // Event listeners para os botões de números
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            updateDisplay(number.textContent);
        });
    });

    // Event listener para o botão de ponto decimal
    decimalBtn.addEventListener('click', () => {
        if (!result.value.includes('.')) {
            updateDisplay(decimalBtn.textContent);
        }
    });

    // Event listener para o botão de limpar tudo
    clearAllBtn.addEventListener('click', () => {
        clearDisplay();
    });

    // Event listener para o botão de limpar
    clearBtn.addEventListener('click', () => {
        result.value = result.value.slice(0, -1);
    });

    // Event listener para o botão de igual
    equalsBtn.addEventListener('click', () => {
        secondOperand = parseFloat(result.value);
        switch (currentOperation) {
            case '+':
                result.value = add(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
            case '-':
                result.value = subtract(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
            case 'x':
                result.value = multiply(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
            case '/':
                result.value = divide(parseFloat(firstOperand), parseFloat(secondOperand));
                break;
        }
        firstOperand = result.value;
        resultDisplayed = true;
    });

    // Event listener para os botões de operações
    addBtn.addEventListener('click', () => {
        firstOperand = result.value;
        currentOperation = '+';
        resultDisplayed = true;
    });

    subtractBtn.addEventListener('click', () => {
        firstOperand = result.value;
        currentOperation = '-';
        resultDisplayed = true;
    });

    multiplyBtn.addEventListener('click', () => {
        firstOperand = result.value;
        currentOperation = 'x';
        resultDisplayed = true;
    });

    divideBtn.addEventListener('click', () => {
        firstOperand = result.value;
        currentOperation = '/';
        resultDisplayed = true;
    });

    // Event listener para o botão de porcentagem
    percentageBtn.addEventListener('click', () => {
        result.value = parseFloat(result.value) / 100;
    });
});
