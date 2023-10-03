import { useState } from "react";

function Header() {
  const [ isLight, setIsLight ] = useState(true)
  
  const renderButtonText = isLight ? "Dark Mode" : "Light Mode"

  function handleButtonClick() {
    setIsLight((currentState) => !currentState)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleButtonClick}>{ renderButtonText }</button>
      </nav>
    </header>
  );
}

export default Header;
