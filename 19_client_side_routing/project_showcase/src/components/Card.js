import React from "react";
import { FaTrash } from "react-icons/fa";

function Card({ project }) {
  const { name, image, link, phase, about, claps } = project;

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
          <button>👏 {claps} </button>
          <button>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
}

export default Card;
