import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {


  /*   state variable
             |     
             V                                                             */
  const [ listingsData, setListings ] = useState( [] )
  /*                    ^
                        |
                    a function to change
                  the value of the state variable */



  // removeListing gets passed down to <ListingCard /> so we can use it in the 
  // delete button handler                
  const removeListing = doomedID => {
    
    // always change state to "a new copy", never mutate state directly
    const newListings = listingsData.filter( lObj => lObj.id !== doomedID )
    // .filter gives us the new copy  :)

    // change state to the new array
    setListings( newListings )

  }


  // don't foreget the empty array as the second argument to prevent infinite
  // loops!
  useEffect( () => {
    fetch( 'http://localhost:6001/listings' )
      .then( r => r.json() )
      .then( listingsArray => {
        setListings( listingsArray )
      } )
  }, [] )



  const [ search, setSearch ] = useState( '' )

  // every time we submit the search form, our state variable gets changed
  // by the "setSearch" function
  const updateSearch = newValue => setSearch( newValue.toLowerCase() )

  // every time the state variable changes, we get a re-render and this
  // variable get reassigned
  const filteredListings = listingsData.filter( lObj => {
    if( lObj.description.includes( search.toLowerCase() ) ) {
      return true
    } else {
      return false
    }
  } )

  return (
    <div className="app">
      <Header updateSearch={ updateSearch } />
      <ListingsContainer 
        removeListing={ removeListing } 
        listings={ filteredListings } 
      />
    </div>
  );
}

export default App;
