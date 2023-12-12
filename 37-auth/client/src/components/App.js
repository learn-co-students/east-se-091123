import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Signup from "./Signup";
import ProductionContainer from "./ProductionContainer";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/authorized')
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      } else {
        // handle what should happen if not logged in
        console.log('error')
      }
    })
  }, [])

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        //  handle logout on frontend
        setUser(null)
        // naigate to route
      }
    })
  }

  if (!user) {
    return <Signup setUser={setUser} />
  }

  return <div>
    <Button variant="contained" onClick={handleLogout}>Logout</Button>
    <ProductionContainer />
  </div>
}

export default App;
