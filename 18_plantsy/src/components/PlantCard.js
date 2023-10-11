import React, { useState } from "react";

import EditPriceForm from "./EditPriceForm";

function PlantCard({ id, name, image, price, onPlantUpdate, onDeletePlant }) {
  const [inStock, setInStock] = useState(true);
  const [showEdit, setShowEdit] = useState(false);

  function handleClick() {
    setInStock((currentStock) => !currentStock);
  }

  function handleEdit() {
    console.log("edit button clicked");
    setShowEdit((currentShowEdit) => !currentShowEdit);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        onDeletePlant(id);
      }
    });
  }

  function onEditPlant(updatedPlant) {
    onPlantUpdate(updatedPlant);
    setShowEdit(false);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {showEdit && (
        <EditPriceForm id={id} price={price} onEditPlant={onEditPlant} />
      )}
      {inStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
