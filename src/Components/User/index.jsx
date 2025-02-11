import React, { useState } from "react";

const User = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    let userExists;
    setUsers((prev) => {
      userExists = prev.some((user) => user.contact === contact);
      if (userExists) {
        alert("You are already registered!");
        return prev;
      }
      return [...prev, { name, contact, role }];
    });
    if (userExists) return;
    else setSubmitted(true);
    console.log("here");

    let timeout = setTimeout(() => {
      setSubmitted(false);
      clearTimeout(timeout);
    }, 2000);
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
      {submitted && <h3>Submitted!</h3>}
    </form>
  );
};

export default User;
