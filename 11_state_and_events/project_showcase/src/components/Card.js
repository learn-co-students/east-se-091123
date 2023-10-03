import React from "react";

function Card() {
  return (
    <li className="card">
      <figure className="image">
        <img src={"image"} alt={"name"} />
        <button className="claps">👏{0}</button>
      </figure>

      <section className="details">
        <h4>{"name"}</h4>
        <p>{"about"}</p>
        {"link" ? (
          <p>
            <a href={"link"}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {"phase"}</span>
      </footer>
    </li>
  );
};

export default Card;
