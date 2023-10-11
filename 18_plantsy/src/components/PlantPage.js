import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((allPlants) => setPlants(allPlants));
  }, []);

  function onNewPlant(newPlant) {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
  }

  function onPlantUpdate(updatedPlant) {
    setPlants((currentPlants) =>
      currentPlants.map((plant) => {
        if (plant.id === updatedPlant.id) {
          return updatedPlant;
        } else {
          return plant;
        }
      })
    );
  }

  function onSearch(searchString) {
    setSearchTerm(searchString);
  }

  function onDeletePlant(plantId) {
    setPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.id !== plantId)
    );
  }

  const filterPlants = plants.filter((plant) => {
    const lowerCasedName = plant.name.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return lowerCasedName.includes(lowerCaseSearchTerm);
  });

  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant} />
      <Search onSearch={onSearch} />
      <PlantList
        plants={filterPlants}
        onPlantUpdate={onPlantUpdate}
        onDeletePlant={onDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
