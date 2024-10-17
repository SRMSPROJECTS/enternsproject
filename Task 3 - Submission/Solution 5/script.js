let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    if (currentInput === '0' && char !== '.') {
        currentInput = char; // Prevent multiple leading zeros
    } else {
        currentInput += char;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        display.innerText = '0';
    } else {
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
