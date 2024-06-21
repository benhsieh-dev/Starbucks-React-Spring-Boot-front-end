import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import axios from "axios";
import PasswordInput from "./PasswordInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useContext(LoginContext); 
  
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/customer/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);
            if (res.data.message === "Email does not exist") {
              alert("Email does not exist");
            } else if (res.data.message === "Login Successful!") {
               setLoggedIn(true); 
               console.log(loggedIn); 
               navigate("/account");
            } else {
              alert("Email and password are incorrect");
            }
          },
          (fail) => {
            console.log(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-6">
            <form>
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
                <PasswordInput/>
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

              <button type="submit" className="btn btn-primary" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
