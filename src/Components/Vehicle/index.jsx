import React, { useState } from "react";

const Vehicle = ({ users, setVehicles }) => {
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [owner, setOwner] = useState("");

  const addVehicle = (e) => {
    e.preventDefault();
    setVehicles((prev) => [...prev, { type, id, owner }]);
  };
  return (
    <form className="vehicle" action="">
      <h1>Vehicle Registration</h1>
      <input
        type="text"
        placeholder="Name/ID *"
        required
        pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
        onChange={(e) => setId(e.target.value)}
      />
      <select name="" id="" onChange={(e) => setType(e.target.value)}>
        <option value="" disabled selected>
          --select type--
        </option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
      </select>
      <select
        name=""
        id=""
        onChange={(e) => {
          const contact = e.target.value;
          const vehicleOwner = users.filter(
            (user) => user.contact === contact
          )[0];
          setOwner(vehicleOwner);
        }}
      >
        <option value="" disabled selected>
          -- Select Owner --
        </option>
        {users.map((user) => {
          return (
            <option key={user.contact} value={user.contact}>
              {user.name}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Register" onClick={addVehicle} />
    </form>
  );
};

export default Vehicle;
