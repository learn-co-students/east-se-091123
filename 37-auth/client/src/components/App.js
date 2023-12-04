import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";

import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(null)

  if (!user) {
    return <Signup setUser={setUser} />
  }

  return <div>
    in the site!
  </div>
}

export default App;
