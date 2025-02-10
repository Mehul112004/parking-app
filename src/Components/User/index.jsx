import React, { useState } from "react";

const User = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, { name, contact, role }]);
  };
  return (
    <form action="" className="user">
      <h1>User Registration</h1>
      <input
        type="text"
        placeholder="Name *"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact *"
        required
        pattern="[0-9]{10}"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <select name="" id="" onChange={(e) => setRole(e.target.value)}>
        <option value="" disabled selected>
          --select role--
        </option>
        <option value="Student">Student</option>
        <option value="Faculty">Faculty</option>
      </select>
      <input type="submit" value="Submit" onClick={addUser} />
    </form>
  );
};

export default User;
