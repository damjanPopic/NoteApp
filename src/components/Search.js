import React from "react";
import "./Search.css";

const Search = ({ onSearchHandler }) => {
  return (
    <div className="search-container">
      <input
        placeholder="Search for your notes"
        onChange={(e) => onSearchHandler(e.target.value)}
      ></input>
    </div>
  );
};
export default Search;
