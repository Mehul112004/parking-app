import React, { useEffect, useState } from "react";
import User from "../Components/User";
import Vehicle from "../Components/Vehicle";

function App() {
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const usersString = window.localStorage.getItem("@users");
    const vehiclesString = window.localStorage.getItem("@vehicles");
    setUsers(JSON.parse(usersString) || []);
    setVehicles(JSON.parse(vehiclesString) || []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("@users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    window.localStorage.setItem("@vehicles", JSON.stringify(vehicles));
  }, [vehicles]);
  return (
    <>
      <User setUsers={setUsers} />
      <Vehicle users={users} setVehicles={setVehicles} />
      {vehicles.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>ID</th>
              <th>Type</th>
              <th>Owner</th>
              <th>Contact</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle.id}>
                <td>{index + 1}</td>
                <td>{vehicle?.id}</td>
                <td>{vehicle?.type}</td>
                <td>{vehicle?.owner?.name}</td>
                <td>{vehicle?.owner?.contact}</td>
                <td>{vehicle?.owner?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
