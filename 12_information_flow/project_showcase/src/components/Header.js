function Header({ isLight, onIsLightChange }) {
  const renderButtonText = isLight ? "Dark Mode" : "Light Mode";

  function handleButtonClick() {
    onIsLightChange();
  }

  return (
    <header>
      <h1>
        <span className="logo"> {"//"} </span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleButtonClick}> {renderButtonText} </button>
      </nav>
    </header>
  );
}

export default Header;
