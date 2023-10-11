import React, { useState } from "react";

const initialState = {
  name: "",
  image: "",
  price: 0,
};

function NewPlantForm({ onNewPlant }) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const { name, image, price } = formData;

  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }

  // function handleImageChange(event) {
  //   setImage(event.target.value);
  // }

  // function handlePriceChange(event) {
  //   setPrice(event.target.value);
  // }

  function handleChange(event) {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw Error("New plant not created");
        }
      })
      .then((newPlantFromServer) => {
        onNewPlant(newPlantFromServer);
        // setName("");
        // setImage("");
        // setPrice(0);
        setFormData(initialState);
      })
      .catch(console.log);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
