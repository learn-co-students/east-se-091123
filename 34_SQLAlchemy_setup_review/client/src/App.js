
import { useState, useEffect } from 'react'

import './App.css';

function App() {

  const [ users, setUsers ] = useState( [] )
  const [ error, setError ] = useState( '' )

  useEffect( () => {
    fetch( '/users' )
      .then( r => {
        if( r.ok ) {
          r.json().then( setUsers )
        } else {
          r.json().then( eObj => {
            setError( eObj.error )
          } )
        }
      } )
      
  }, [] )

  return (
    <div>
     { users.map( u => <h1 key={u.id}>{ u.name }</h1> ) }  
    </div>
  );
}

export default App;
