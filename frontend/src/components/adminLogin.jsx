import React, { useState } from "react";
import axios from "axios";
import logo from "../img/adminlogin/bus-blue.png";
import admincss from "../CSS/adminlogin.css";
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
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
      .post(`http://localhost:8000/admin/login`, payload)
      .then((response) => {
        console.log(response);
        history.push(`/dashbord/${response.data._id}`);
      })
      .catch((err) => {
        alert(err?.response?.data?.msg);
      });
  };

  console.log(logo);

  return (
    <div className="border">
      <div className="pageleft">
        <div className="image12"></div>
        <center>
          <div></div>
        </center>
      </div>

      <div className="pageright">
        <hr className="line" />
        <h2>LOGIN AS ADMIN</h2>
        <div>
          <p className="e_mail">Email</p>
          <br />
          <input
            id="email"
            name="email"
            className="login-email"
            placeholder="example@abcgmail.com"
            type="text"
            onChange={onChange}
          />

          <p className="pword">Password</p>
          <br />
          <input
            id="password"
            name="password"
            className="login-pw"
            placeholder="Enter your password..."
            type="password"
            onChange={onChange}
          />
          <br />

          <input
            className="loginbtn"
            onClick={submit}
            type="button"
            value="L O G I N"
          />

          <div className="center">
          <a href="#">
            <p className="forgot-pword">Forgot your password?</p>
          </a>
          
            <a href="#">
              <p className="help">Get help Signin</p>
            </a>
            <a href="#">
              <p className="policy">Terms of use Privacy Policy</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
