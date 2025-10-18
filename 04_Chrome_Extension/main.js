// Initialize leads array and DOM elements
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// Check localStorage for existing leads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Load saved leads if they exist
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// Tab button - save current active tab URL
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

// Render leads to the list
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // Create list item with clickable link
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

// Delete button - clear all leads on double click
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

// Input button - save new lead from input field
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = ""; // Clear input field
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});