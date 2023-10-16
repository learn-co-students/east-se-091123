import React from "react";
import { FaTrash } from "react-icons/fa";

function Card({ project, onRemoveProject, onUpdateProject }) {
  const { id, name, image, link, phase, about, claps } = project;

  function handleDelete() {
    // make request to the "/projects/:id"
    fetch(`http://localhost:3000/projects/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        onRemoveProject(id);
      }
    });
  }

  function handleUpdate() {
    fetch(`http://localhost:3000/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ claps: claps + 1 }),
    })
      .then((resp) => resp.json())
      .then((updatedProject) => onUpdateProject(updatedProject));
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
      </figure>

      <section className="details">
        <h4>{name} </h4>
        <p> {about} </p>
        {link ? (
          <p>
            <a href={link}> Link </a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue"> Phase {phase} </span>
        <div className="manage">
          <button onClick={handleUpdate}>👏 {claps} </button>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default Card;
