import React, { useState } from "react";
import axios from "axios";

export default function JoinNow() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/customer/save", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });
      alert("Customer Registration Success!");
    }
       catch (err) {
        alert(err);
      }
    }

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>Customer Registration</h1>

          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="customername"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="customername"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
