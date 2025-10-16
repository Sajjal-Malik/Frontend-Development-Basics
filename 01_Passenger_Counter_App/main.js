// DOM elements for counter display and save history
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

// Current count value
let count = 0;

// Increments counter and updates display
function increment() {
    count += 1;
    countEl.innerText = count;
}

// Resets counter to zero
function resetCount() {
    count = 0;
    countEl.textContent = count;
}

// Saves current count to history and resets counter
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    resetCount();
}