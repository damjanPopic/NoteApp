import React, { useState } from "react";
import "./AddNote.css";

const AddNote = ({ onPassNoteData }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 300;

  const changeHandler = (e) => {
    setNoteText(e.target.value);
  };

  const submitNoteDataHandler = () => {
    const newNote = {
      text: noteText,
      date: "25.2.2022",
    };

    onPassNoteData(newNote);
    setNoteText("");
  };

  return (
    <div className="add-note-container">
      <textarea
        rows={8}
        cols={100}
        placeholder="Type to add a new note..."
        onChange={changeHandler}
        value={noteText}
      ></textarea>
      <div className="footer">
        <p>{charLimit - noteText.length} Remaining</p>
        <button type="submit" onClick={submitNoteDataHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
