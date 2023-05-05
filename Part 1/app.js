/*
const languageSelect = document.querySelector("#language-select");
const noteInput = document.querySelector("#note-input");
const addNoteBtn = document.querySelector("#add-note-btn");
const noteList = document.querySelector("#note-list");

let currentLanguage = localStorage.getItem("language") || "sv"; // default to Swedish

function addNote() {
    const noteText = noteInput.value;
    if (noteText.trim() === "") {
        return;
    }

    const noteItem = document.createElement("div");
    noteItem.innerText = currentLanguage === "sv" ? noteText : translateToFi(noteText); // use translation function if language is Finnish
    noteList.appendChild(noteItem);
    noteInput.value = "";
}

function translateToFi(text) {
    // function to translate Swedish text to Finnish goes here
}

function init() {
    // set the language select dropdown to the saved language
    languageSelect.value = currentLanguage;

    addNoteBtn.addEventListener("click", addNote);

    languageSelect.addEventListener("change", () => {
        currentLanguage = languageSelect.value;
        localStorage.setItem("language", currentLanguage);
    });
}

init();
*/