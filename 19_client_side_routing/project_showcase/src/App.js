import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [isLight, setIsLight] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch("http://localhost:3000/projects")
      .then((resp) => resp.json())
      .then((data) => setProjects(data));
  };

  useEffect(getProjects, []);

  function onIsLightChange() {
    setIsLight((currentState) => !currentState);
  }

  function onNewProject(newProject) {
    setProjects((currentStateProjects) => [
      newProject,
      ...currentStateProjects,
    ]);
  }

  function onRemoveProject(projectId) {
    setProjects((currentProjects) => {
      return currentProjects.filter((project) => project.id !== projectId);
    });
  }

  function onUpdateProject(updatedProject) {
    setProjects((currentProjects) => {
      return currentProjects.map((project) => {
        if (project.id === updatedProject.id) {
          return updatedProject;
        } else {
          return project;
        }
      });
    });
  }

  const className = isLight ? "App light" : "App";
  return (
    <div className={className}>
      <Header isLight={isLight} onIsLightChange={onIsLightChange} />
      <ProjectForm onNewProject={onNewProject} />
      <ProjectList
        projects={projects}
        onRemoveProject={onRemoveProject}
        onUpdateProject={onUpdateProject}
      />
    </div>
  );
}

export default App;
