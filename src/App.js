import React, { useState } from "react";
import Header from "./components/Header";
import "./components/Header.css";
import { v4 as uuidv4 } from "uuid";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

const DUMMY_DATA = [
  {
    id: uuidv4(),
    text: "Test 1",
    date: "12.3.2021",
  },
  {
    id: uuidv4(),
    text: "Test 2",
    date: "15.8.2022",
  },
  {
    id: uuidv4(),
    text: "Test ",
    date: "3.9.2019",
  },
  {
    id: uuidv4(),
    text: "Test 1",
    date: "26.9.2019",
  },
];

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [notes, setNotes] = useState(DUMMY_DATA);

  const toggleBackgroundColor = () => {
    setLightTheme(!lightTheme);
  };

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const removeNoteHandler = (id) => {
    const newList = notes.filter((item) => item.id !== id);

    setNotes(newList);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: lightTheme ? "white" : "#121212" }}
    >
      <Header
        dark={lightTheme}
        onToggleBtnHandler={toggleBackgroundColor}
      ></Header>
      <Search></Search>
      <NoteList
        items={notes}
        onAddNote={addNoteHandler}
        onRemoveNote={removeNoteHandler}
      ></NoteList>
    </div>
  );
}

export default App;
