import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./ProfileCSS/Userreg.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authAction";
import Header from "../header";

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

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  // The regular exprssion to validate the email pattern
  // It may not be 100% perfect but can catch most email pattern errors and assures that the form is mostly right
  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
      document.getElementById("pattaneh").disabled = false;
    } else {
      setIsValid(false);
      document.getElementById("pattaneh").disabled = true;
      setMessage('Please enter a valid email!');
    }}

  return (
    <div className="usr_backgound">
      <div className="outer-container">
        <Header />
        <div className="form-container">
          <div className="form">
            <center>
              <h3>Passenger Registration Form</h3>
            </center>
            <hr />
            <label className="Qheader">Username:</label>
            <input
              className="entries"
              type="text"
              name="username"
              placeholder="First Name"
              onChange={onChange}
            />

            <br />
            <label className="Qheader">First Name:</label>
            <input
              className="entries"
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={onChange}
            />

            <br />
            <label className="Qheader">Last Name:</label>
            <input
              className="entries"
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={onChange}
            />

            <br />
            <label className="Qheader">Enter Phone:</label>
            <input
              className="entries"
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{10}"
              onChange={onChange}
            />


            <br />
            <label className="Qheader">Enter Email:</label>
            <input
              className="entries"
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChange}
              onClick={ validateEmail}
              required
            />
            <div style={{color:"red"}} className={`message ${isValid ? 'success' : 'error'}`}>
        {message}
      </div>

            <br />
            <label className="Qheader">Enter Password:</label>
            <input
              className="entries"
              type="text"
              name="password"
              placeholder="Enter Password"
              onChange={onChange}
            />

            <br />
            <label className="Qheader">Confirm Password:</label>
            <input
              className="entries"
              type="text"
              name="password2"
              placeholder="Re Enter Password"
              onChange={onChange}
            />
            <p style={{ color: "red" }}>{error}</p>
            
            <center>
            <button id="pattaneh" className="submitbtn" onClick={submit}>R E G I S T E R</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

//Juggi