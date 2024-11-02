const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

document.addEventListener("DOMContentLoaded", loadNotes);

addNoteBtn.addEventListener("click", addNote);

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") {
    alert("Please enter a note!");
    return;
  }

  const notes = getNotesFromLocalStorage();
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";

  displayNotes();
}

function loadNotes() {
  displayNotes();
}

function displayNotes() {
  const notes = getNotesFromLocalStorage();
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      ${note}
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function getNotesFromLocalStorage() {
  let notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

function deleteNote(index) {
  let notes = getNotesFromLocalStorage();
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}
