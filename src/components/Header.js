import React from "react";
import "./Header.css";

const Header = ({ dark, onToggleBtnHandler }) => {
  return (
    <header className="header">
      <h2 className="secondary-heading">
        <span>React</span>{" "}
        <span style={{ color: dark ? "#121212" : "white" }}>Notes</span>
      </h2>
      <button className="toggle-btn" onClick={onToggleBtnHandler}>
        Toggle Mode
      </button>
    </header>
  );
};
export default Header;
