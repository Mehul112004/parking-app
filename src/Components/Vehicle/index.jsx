import React, { useEffect, useState } from "react";

const prices = {
  cycle: {
    daily: 5,
    monthly: 50,
    annually: 500,
  },
  bike: {
    daily: 10,
    monthly: 100,
    annually: 1000,
  },
  car: {
    daily: 50,
    monthly: 500,
    annually: 5000,
  },
};

const Vehicle = ({ users, setVehicles }) => {
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [owner, setOwner] = useState("");
  const [choice, setChoice] = useState("");
  const [expiry, setExpiry] = useState("");

  const addVehicle = (e) => {
    e.preventDefault();
    setVehicles((prev) => [...prev, { type, id, owner }]);
  };

  const calculateExpiry = (e) => {
    const now = new Date();
    // eslint-disable-next-line default-case
    switch (choice) {
      case "daily":
        now.setDate(now.getDate() + 1);
        setExpiry(now);
        break;
      case "monthly":
        now.setMonth(now.getMonth() + 1);
        setExpiry(now);
        break;
      case "annually":
        now.setFullYear(now.getFullYear() + 1);
        setExpiry(now);
        break;
    }
  };

  const changePrice = (e) => {
    setChoice(e.target.value.split(" : ")[0].toLowerCase());
  };

  useEffect(calculateExpiry, [choice]);
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
        <option value="cycle">cycle</option>
        <option value="bike">Bike</option>
        <option value="car">Car</option>
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
      <br />
      <br />

      {type ? (
        <>
          <input
            type="button"
            value={"Daily : " + prices[type].daily}
            onClick={changePrice}
          />
          <input
            type="button"
            value={"Monthly : " + prices[type].monthly}
            onClick={changePrice}
          />
          <input
            type="button"
            value={"Annually : " + prices[type].annually}
            onClick={changePrice}
          />
        </>
      ) : null}

      <br />

      <div
        style={{
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "#ddd",
          padding: 20,
          margin: "30px auto",
          maxWidth: "400px",
        }}
      >
        <div>Vehicle : {id}</div>
        <div>Owner : {owner.name}</div>
        <div>Expiry : {expiry.toString()}</div>
      </div>
    </form>
  );
};

export default Vehicle;
