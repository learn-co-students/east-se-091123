import React, { useState } from "react";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: "",
};

function ProjectForm({ onNewProject }) {
  const [formData, setFormData] = useState(initialState);
  const { name, phase, about, link, image } = formData;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentStateFormData) => {
      return {
        ...currentStateFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const project = {
      ...formData,
      id: Math.floor(Math.random() * 100),
    };
    // // make post request to server
    onNewProject(project);

    setFormData(initialState);
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={handleChange}
        />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={phase} onChange={handleChange}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          value={link}
          onChange={handleChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          value={image}
          onChange={handleChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
