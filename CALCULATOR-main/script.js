// Variables to store calculator data
let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentInput;
}

// Event listeners for number and operator buttons
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    currentInput += number.value;
    updateDisplay();
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operatorButton) => {
  operatorButton.addEventListener('click', () => {
    if (currentInput !== '') {
      previousInput = currentInput;
      currentInput = '';
      operator = operatorButton.value;
    }
  });
});

// Event listener for the equals (=) button to perform calculations
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  if (currentInput !== '' && previousInput !== '' && operator !== null) {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        currentInput = (num1 + num2).toString();
        break;
      case '-':
        currentInput = (num1 - num2).toString();
        break;
      case '*':
        currentInput = (num1 * num2).toString();
        break;
      case '/':
        if (num2 === 0) {
          currentInput = 'Error: Division by zero';
        } else {
          currentInput = (num1 / num2).toString();
        }
        break;
    }
    previousInput = '';
    operator = null;
    updateDisplay();
  }
});

// Event listener for the clear (C) button to reset the calculator
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
});

// Implementing scientific functions
function squareRoot() {
  const num = parseFloat(currentInput);
  if (num >= 0) {
    currentInput = Math.sqrt(num).toString();
  } else {
    currentInput = 'Error: Invalid input';
  }
  updateDisplay();
}

function power() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  currentInput = Math.pow(num1, num2).toString();
  previousInput = '';
  operator = null;
  updateDisplay();
}

function sine() {
  const num = parseFloat(currentInput);
  currentInput = Math.sin(num).toString();
  updateDisplay();
}

function cosine() {
  const num = parseFloat(currentInput);
  currentInput = Math.cos(num).toString();
  updateDisplay();
}

function tangent() {
  const num = parseFloat(currentInput);
  currentInput = Math.tan(num).toString();
  updateDisplay();
}

function logarithm() {
  const num = parseFloat(currentInput);
  if (num > 0) {
    currentInput = Math.log10(num).toString();
  } else {
    currentInput = 'Error: Invalid input';
  }
  updateDisplay();
}

function naturalLogarithm() {
  const num = parseFloat(currentInput);
  if (num > 0) {
    currentInput = Math.log(num).toString();
  } else {
    currentInput = 'Error: Invalid input';
  }
  updateDisplay();
}

function factorial() {
  const num = parseInt(currentInput);
  if (num >= 0) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    currentInput = result.toString();
  } else {
    currentInput = 'Error: Invalid input';
  }
  updateDisplay();
}

// Event listeners for scientific function buttons
document.getElementById('sqrt').addEventListener('click', squareRoot);
document.getElementById('power').addEventListener('click', power);
document.getElementById('sin').addEventListener('click', sine);
document.getElementById('cos').addEventListener('click', cosine);
document.getElementById('tan').addEventListener('click', tangent);
document.getElementById('log').addEventListener('click', logarithm);
document.getElementById('ln').addEventListener('click', naturalLogarithm);
document.getElementById('factorial').addEventListener('click', factorial);
