const fs = require("fs");

const getNotes = () => {
  try {
    const notesJSON = fs.readFileSync("./notes.json", "utf-8");
    return JSON.parse(notesJSON);
  } catch (error) {
    return [];
  }
};

const addNotes = (newNote) => {
  const notes = getNotes();
  if (notes.find((note) => newNote === note)) {
    console.log("Note already exists!");
  } else {
    notes.push(newNote);
    const data = JSON.stringify(notes);
    fs.writeFileSync("./notes.json", data);
    console.log("Note added successfully!");
  }
};

const showNotes = () => {
  const notes = getNotes();
  if (notes.length === 0) {
    console.log("No notes found!");
  } else {
    notes.forEach((note, idx) => console.log(`${idx + 1}. ${note}`));
  }
};

module.exports = {
  addNotes,
  showNotes,
};
