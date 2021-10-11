import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./ProfileCSS/Userlogin.css";
import { useDispatch, useSelector } from "react-redux";
import { setid } from "../../actions/authAction";
import Header from "../header";
import LoginImg from "../../img/login/loginimg.jpg";
import LoginBack from "../../img/login/london-bus.jpg"


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
    <div className="page-div" style={{ backgroundImage: `url(${LoginBack})` }}>
      <Header/>
      <div className="outer-shell">
        <div className="left1-container">
          
          <h1 className="LoginHeader">WELCOME BACK</h1>
          <div className="f1">

            <div class="group">
              <input className="login-input" type="text" name="email" onChange={onChange} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="login-label" >Email</label>
            </div>

            <div class="group">
              <input className="login-input" type="password" name="password" onChange={onChange} required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label className="login-label">Password</label>
            </div>

            <button className="submitbtn" onClick={submit}>
              LOGIN
            </button>
            <p>If you do not have an account already</p>
            {/* <Link to="./Sign-Up">
            <button className="submitbtn">
              SIGN UP
            </button>
            </Link> */}

          </div>
        </div>
       
        <div className="right1-container">
          <img src={LoginImg} className="image-login-form" />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="usr_backgound">
  //       <Header/>
  //       <div className="inner-container">
  //         <div className="form">
  //           <div className="header">
  //             <h2>WELCOME BACK</h2>
  //             <hr className="linebar"/>
  //           </div>
  //           <br/>
  //           <br/>
  //           <label className="classheader" for="email">
  //             Enter Email:
  //           </label>
  //           <br />
  //           <input
  //             className="classanswer"
  //             type="text"
  //             name="email"
  //             placeholder="jhonedoe@gmial.com"
  //             onChange={onChange}
  //           />
  //           <br />
  //           <br />
  //           <label className="classheader" for="password">
  //             Enter Password:
  //           </label>
  //           <br />
  //           <input
  //             className="classanswer"
  //             type="text"
  //             name="password"
  //             placeholder="X X X X X X"
  //             onChange={onChange}
  //           />

  //           <br />
  //           <p className="Forgotp"><a href="#">Forget Password?</a></p>
  //           <center>
  //           <button className="submitbtn" onClick={submit}>
  //             L O G I N
  //           </button>
  //           </center>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
