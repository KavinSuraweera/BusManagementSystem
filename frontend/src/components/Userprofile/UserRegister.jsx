import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../CSS/adminregister.css";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../actions/authAction"

export default function Adminregister() {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  };

  const [registerForm, setRegisterForm] = useState(initialState);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const payload = {
      UserName: registerForm.username,
      FirstName: registerForm.firstname,
      LastName: registerForm.lastname,
      Phone: registerForm.phone,
      Email: registerForm.email,
      Password: registerForm.password,
    };

    if (registerForm.password === registerForm.password2) {
      axios
        .post(`http://localhost:8000/customer/add`, payload)
        .then(() => {
          dispatch(logout());
          history.push("/Login-Page");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setError("Password Missmatch");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div>
      <center>
        <div className="form">
          Username:
          <input
            type="text"
            name="username"
            placeholder="First Name"
            onChange={onChange}
          />
          <br />
          <br />
          First Name:
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={onChange}
          />
          <br />
          <br />
          Last Name:
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={onChange}
          />
          <br />
          <br />
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={onChange}
          />
          <br />
          <br />
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
          <br />
          <br />
          Enter Password:
          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={onChange}
          />
          <br />
          <br />
          Confirm Password:
          <input
            type="text"
            name="password2"
            placeholder="re Enter Password"
            onChange={onChange}
          />
          <br />
          <br />
          <p style={{ color: "red" }}>{error}</p>

          <button onClick={submit}>Submit</button>
        </div>
      </center>
    </div>
  );
}
