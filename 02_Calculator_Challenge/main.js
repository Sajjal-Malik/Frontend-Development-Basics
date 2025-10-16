// Initialize numbers and display values
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Result display element
let resultElement = document.getElementById('result-el')

// Addition operation
function add() {
    let result = num1 + num2
    resultElement.textContent = "Sum: " + result
}

// Subtraction operation
function subtract() {
    let result = num1 - num2
    resultElement.textContent = "Difference: " + result
}

// Multiplication operation
function multiply() {
    let result = num1 * num2
    resultElement.textContent = "Product: " + result
}

// Division operation
function divide() {
    let result = num1 / num2
    resultElement.textContent = "Quotient: " + result
}