import React, { useState } from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteContainer from "./NoteContainer";

function App() {
  const [totalNotes, setNotes] = useState(notes);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

  // console.log(notes)

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div>
      <Header />
      <NoteContainer onAdd={addNote} />
      {totalNotes.map((note, index) => {
        return (
          <Note
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
