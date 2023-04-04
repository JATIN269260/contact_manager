import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState(location.state.contact.name);
  const [email, setEmail] = useState(location.state.contact.email);

  const update = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler({ name, email });
    setName("");
    setEmail("");

    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
