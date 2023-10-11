import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onPlantUpdate, onDeletePlant }) {
  const renderPlantCards = plants.map(({ id, name, price, image }) => (
    <PlantCard
      key={id}
      id={id}
      name={name}
      image={image}
      price={price}
      onPlantUpdate={onPlantUpdate}
      onDeletePlant={onDeletePlant}
    />
  ));
  return <ul className="cards">{renderPlantCards}</ul>;
}

export default PlantList;
