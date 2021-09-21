import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./ProfileCSS/Userlogin.css";
import { useDispatch, useSelector } from "react-redux";
import { setid } from "../../actions/authAction";
import Header from "../header";

export default function UserLogin() {
  const dispatch = useDispatch();

  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  const [loginForm, setLoginForm] = useState(initialValues);

  const onChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submit = () => {
    const payload = {
      Email: loginForm.email,
      Password: loginForm.password,
    };

    console.log(payload);
    axios
      .post(`http://localhost:8000/customer/login`, payload)
      .then((response) => {
        dispatch(setid(response.data._id));
        console.log(response);
        history.push(`/Userprofile`);
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
  };

  return (
    <div>
      <div className="usr_backgound">
        <Header/>
        <div className="inner-container">
          <div className="form">
            <div className="header">
              <h2>WELCOME BACK</h2>
              <hr className="linebar"/>
            </div>
            <br/>
            <br/>
            <label className="classheader" for="email">
              Enter Email:
            </label>
            <br />
            <input
              className="classanswer"
              type="text"
              name="email"
              placeholder="jhonedoe@gmial.com"
              onChange={onChange}
            />
            <br />
            <br />
            <label className="classheader" for="password">
              Enter Password:
            </label>
            <br />
            <input
              className="classanswer"
              type="text"
              name="password"
              placeholder="X X X X X X"
              onChange={onChange}
            />
            
            <br />
            <p className="Forgotp"><a href="#">Forget Password?</a></p>
            <center>
            <button className="submitbtn" onClick={submit}>
              L O G I N
            </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
