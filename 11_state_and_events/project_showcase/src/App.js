import React from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList  />
    </div>
  );
};

export default App;
