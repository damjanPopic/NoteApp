import React, { useState } from "react";
import Header from "./components/Header";
import "./components/Header.css";
import Search from "./components/Search";

function App() {
  const [lightTheme, setLightTheme] = useState(true);

  const toggleBackgroundColor = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: lightTheme ? "white" : "#1C1C1C" }}
    >
      <Header
        dark={lightTheme}
        onToggleBtnHandler={toggleBackgroundColor}
      ></Header>
      <Search></Search>
    </div>
  );
}

export default App;
