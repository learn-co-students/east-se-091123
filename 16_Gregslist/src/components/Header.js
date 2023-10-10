import React from "react";
import Search from "./Search";

function Header({ updateSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearch={updateSearch} />
    </header>
  );
}

export default Header;
