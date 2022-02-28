import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import "./NoteList.css";
import { v4 as uuidv4 } from "uuid";

const NoteList = ({ items, onAddNote, onRemoveNote }) => {
  const passNoteData = (savedNoteData) => {
    const newNote = {
      ...savedNoteData,
      id: uuidv4(),
    };
    onAddNote(newNote);
  };

  return (
    <div className="notes-list">
      {items.map((item) => (
        <Note
          key={item.id}
          item={item}
          /* text={item.text}
          date={item.date} */
          onRemoveNote={onRemoveNote}
        />
      ))}
      <AddNote onPassNoteData={passNoteData} />
    </div>
  );
};
export default NoteList;
