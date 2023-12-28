import { useState } from "react";
import axios from "axios";

function Register() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/customer/save", {
        customerName: customerName,
        email: email,
        password: password,
      });
      alert("User Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container mt-4">
        <div class="card">
          <h1>Customer Registation</h1>

          <form>
            <div class="form-group">
              <label>User name</label>
              <input
                type="text"
                class="form-control"
                id="customerName"
                placeholder="Enter Name"
                value={customerName}
                onChange={(event) => {
                  setCustomerName(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
