// Firebase imports for app initialization and database operations
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// Firebase configuration - connect to Realtime Database
const firebaseConfig = {
    databaseURL: "https://leads-tracker-js-scrimba-default-rtdb.firebaseio.com/"
};

// Initialize Firebase app and database reference
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");  // Reference to 'leads' node in database

// DOM elements
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

// Render leads list to the UI
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
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

// Listen for real-time database changes and update UI
onValue(referenceInDB, function (snapshot) {
    const snapshotExists = snapshot.exists();
    if (snapshotExists) {
        // Convert snapshot object to array of values
        const snapshotObjectValues = snapshot.val();
        const leads = Object.values(snapshotObjectValues);
        console.log(leads);
        render(leads);
    }
});

// Delete all leads from database on double click
deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB);
    ulEl.innerHTML = "";  // Clear the UI
});

// Add new lead to Firebase database
inputBtn.addEventListener("click", function () {
    push(referenceInDB, inputEl.value);  // Push new value to database
    console.log(inputEl.value);
    inputEl.value = "";  // Clear input field
});