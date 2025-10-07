let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

resultElement = document.getElementById('result-el');

function add() {
    let addElementText = document.getElementById('add-el').innerText;
    let result = num1 + num2;
    resultElement.textContent = addElementText + ": " + result;
}

function subtract() {
    let subElementText = document.getElementById('sub-el').innerText;
    let result = num1 - num2;
    resultElement.textContent = subElementText + ": " + result;
}

function multiply() {
    let mulElementText = document.getElementById('mul-el').innerText;
    let result = num1 * num2;
    resultElement.textContent = mulElementText + ": " + result;
}

function divide() {
    let divElementText = document.getElementById('div-el').innerText;
    let result = num1 / num2;
    resultElement.textContent = divElementText + ": " + result;
}
