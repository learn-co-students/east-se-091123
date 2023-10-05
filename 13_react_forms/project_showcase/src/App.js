import React, { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projectData from "./projects";

function App() {
  const [isLight, setIsLight] = useState(false);
  const [projects, setProjects] = useState(projectData);

  function onIsLightChange() {
    setIsLight((currentState) => !currentState);
  }

  function onNewProject(newProject) {
    setProjects((currentStateProjects) => [
      newProject,
      ...currentStateProjects,
    ]);
  }

  const className = isLight ? "App light" : "App";
  return (
    <div className={className}>
      <Header isLight={isLight} onIsLightChange={onIsLightChange} />
      <ProjectForm onNewProject={onNewProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
