import React, { useState } from "react";

const Vehicle = ({ users }) => {
  const [type, seType] = useState("");
  const [id, setId] = useState("");

  const addVehicle = (e) => {
    e.preventDefault();
  };
  return (
    <form className="vehicle" action="">
      <h1>Vehicle Registration</h1>
      <input
        type="text"
        placeholder="Name/ID *"
        required
        pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
      />
      <select name="" id="">
        <option value="" disabled selected>
          --select type--
        </option>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
      </select>
      <select name="" id="">
        <option value="" disabled selected>
          -- Select Owner --
        </option>
        {users.map((user) => {
          return <option value={user.contact}>{user.name}</option>;
        })}
      </select>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Vehicle;
