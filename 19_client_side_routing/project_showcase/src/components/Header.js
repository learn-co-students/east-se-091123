import { NavLink } from "react-router-dom";

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
        <NavLink to="/projects" end className="nav-link">
          projects
        </NavLink>
        <NavLink to="/projects/new" className="nav-link">
          new project
        </NavLink>
        <button onClick={handleButtonClick}> {renderButtonText} </button>
      </nav>
    </header>
  );
}

export default Header;
