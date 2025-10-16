// initiazlizing two variables
let num1 = 8
let num2 = 2

// selecting an html element by their 'id' attribute and changing their text using 'textContent' property of 'JS'
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// selecting an html element by their 'id' attribute
resultElement = document.getElementById('result-el');

// defining the add function to perform the required action
function add() {
    let addElementText = document.getElementById('add-el').innerText;
    let result = num1 + num2;
    resultElement.textContent = addElementText + ": " + result;
}

// defining the subtract function to perform the required action
function subtract() {
    let subElementText = document.getElementById('sub-el').innerText;
    let result = num1 - num2;
    resultElement.textContent = subElementText + ": " + result;
}

// defining the multiplication function to perform the required action
function multiply() {
    let mulElementText = document.getElementById('mul-el').innerText;
    let result = num1 * num2;
    resultElement.textContent = mulElementText + ": " + result;
}

// defining the division function to perform the required action
function divide() {
    let divElementText = document.getElementById('div-el').innerText;
    let result = num1 / num2;
    resultElement.textContent = divElementText + ": " + result;
}
