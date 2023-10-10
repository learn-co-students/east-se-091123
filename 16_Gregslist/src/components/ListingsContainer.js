//import { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {

  /*
    that "listings" parameter is an array of objects:
        [ {}, {}, {}, {} ]

    what we need, is an array of ListingCard components:
        [ <ListingCard />, <ListingCard />, <ListingCard />, <ListingCard /> ]
  */

  const listingComponents = listings.map( listingObj => {
    return <ListingCard 
      removeListing={ removeListing } 
      listing={ listingObj } 
      key={ listingObj.id }
    />
  } )

  return (
    <main>
      <ul className="cards">
        { listingComponents }
      </ul>
    </main>
  );
}

export default ListingsContainer;
