import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const renderPlantCards = plants.map(({ id, name, price, image }) => (
    <PlantCard key={id} name={name} image={image} price={price} />
  ));
  return <ul className="cards">{renderPlantCards}</ul>;
}

export default PlantList;
