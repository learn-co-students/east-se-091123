import React from "react";

import Card from "./Card";

function ProjectList() {

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..."/>

      <ul className="cards">
        {
          // projects.map(project => {
          //   return <Card key={project.id} project={project} />
          // })
        }
      </ul>
    </section>
  );
};

export default ProjectList;
