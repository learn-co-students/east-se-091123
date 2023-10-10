import React, { useState } from "react";

import Card from "./Card";

function ProjectList({ projects, onRemoveProject, onUpdateProject }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const filteredProjects = projects.filter((project) => {
    const lowerCaseProjectName = project.name.toLowerCase();
    const lowerCaseSearch = search.toLowerCase();

    return lowerCaseProjectName.includes(lowerCaseSearch);
  });

  const renderProjects = filteredProjects.map((project) => {
    return (
      <Card
        key={project.id}
        project={project}
        onRemoveProject={onRemoveProject}
        onUpdateProject={onUpdateProject}
      />
    );
  });

  return (
    <section>
      <h2>Projects </h2>

      <div className="filter">
        <button>All </button>
        <button> Phase 5 </button>
        <button> Phase 4 </button>
        <button> Phase 3 </button>
        <button> Phase 2 </button>
        <button> Phase 1 </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />

      <ul className="cards">{renderProjects}</ul>
    </section>
  );
}

export default ProjectList;
