import { useState } from "react";

import Nav from "./Nav";
import PigPen from "./PigPen";

import hogsData from "../porkers_data";

function App() {
  const [greaseFilter, setGreaseFilter] = useState(false);

  const toggleGrease = () => {
    setGreaseFilter(!greaseFilter);
  };

  const filteredHogs = hogsData.filter((hogObj) => {
    if (hogObj.greased == true) {
      return true;
    } else {
      return false;
    }
  });

  const theHogsToPassDown = greaseFilter ? filteredHogs : hogsData;

  const [sortString, setSortString] = useState("");

  const toggleSort = (newString) => {
    setSortString(newString);
  };

  /* The function we give to the .sort method NEEDS TO HAVE A RETURN VALUE
	   OF A NEGATIVE OR POSITVE NUMBER, so .sort will know which one goes
	   first when sorting */
  const theSortingFunction = (hogObjA, hogObjB) => {
    if (sortString == "name") {
      if (hogObjA.name < hogObjB.name) {
        return -1;
      } else {
        return 1;
      }
    } else if (sortString == "weight") {
      return hogObjA.weight - hogObjB.weight;
    } else {
      return 0;
    }
  };

  const sortedHogs = [...theHogsToPassDown].sort(theSortingFunction);

  return (
    <div className="App">
      <Nav toggleSort={toggleSort} toggleGrease={toggleGrease} />
      <PigPen hogs={sortedHogs} />
    </div>
  );
}

export default App;
