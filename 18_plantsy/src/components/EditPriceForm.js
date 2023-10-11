import { useState } from "react";

function EditPriceForm({ id, price, onEditPlant }) {
  const [newPrice, setNewPrice] = useState(price);

  function handlePriceChange(event) {
    setNewPrice(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw Error("Something went wrong");
        }
      })
      .then((updatedPlantFromServer) => onEditPlant(updatedPlantFromServer));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="price"
        step="0.01"
        placeholder="Price"
        value={newPrice}
        onChange={handlePriceChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}
export default EditPriceForm;
