// Function to get notes from local storage
function getNotes() {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
}

// Function to save notes to local storage
function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to add a note to the DOM
function addNoteToDOM(note, index) {
    const notesList = document.getElementById('notes-list');
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');
    
    noteItem.innerHTML = `
        <p>${note}</p>
        <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;

    notesList.appendChild(noteItem);
}

// Function to render all notes
function renderNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    const notes = getNotes();
    notes.forEach((note, index) => {
        addNoteToDOM(note, index);
    });
}

// Function to add a new note
document.getElementById('add-note').addEventListener('click', () => {
    const noteText = document.getElementById('note-text').value;
    if (noteText.trim()) {
        const notes = getNotes();
        notes.push(noteText);
        saveNotes(notes);
        document.getElementById('note-text').value = ''; // Clear input field
        renderNotes(); // Re-render notes
    }
});

// Function to delete a note
function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1); // Remove the note at the specified index
    saveNotes(notes);
    renderNotes(); // Re-render notes
}

// Render notes on page load
document.addEventListener('DOMContentLoaded', renderNotes);
