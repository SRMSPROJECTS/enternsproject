let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
    display.focus(); // Keep focus on the display
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Display error if any
        setTimeout(clearDisplay, 1500); // Clear display after 1.5 seconds
    }
}
