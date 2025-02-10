import React, { useState } from "react";
import User from "../Components/User";
import Vehicle from "../Components/Vehicle";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <User setUsers={setUsers} />
      <Vehicle users={users} />
    </>
  );
}

export default App;
