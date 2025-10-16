// selecting the html element by their 'id' attribute
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el')

// initializing a variable to 0
let count = 0;

// defining increment function (this function increases the count value by 1)
function increment() {
    count += 1;
    countEl.innerText = count;
}

// defining reset count function (this function will reset the count value to 0)
function resetCount() {
    count = 0;
    countEl.textContent = count;
}

// defining save function 
// (this function will save the current session count value and display in an html element selected by 'id')
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    resetCount();
}
