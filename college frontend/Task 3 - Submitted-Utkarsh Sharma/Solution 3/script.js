const noteInput = document.getElementById('note-input');
const addNoteButton = document.getElementById('add-note');
const notesList = document.getElementById('notes-list');

// Load notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => {
        createNoteElement(note);
    });
}

// Create a note element
function createNoteElement(note) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = note;
    notesList.appendChild(noteDiv);
}

// Add note button click event
addNoteButton.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
        createNoteElement(noteText);
        saveNoteToLocalStorage(noteText);
        noteInput.value = ''; // Clear the input
    }
});

// Save note to local storage
function saveNoteToLocalStorage(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes on page load
loadNotes();
