import axios from 'axios'
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './ProfileCSS/Userlogin.css'
import {Alert} from 'react-bootstrap'

export default function UserLogin() {

    const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
  };

  const[loginForm, setLoginForm] = useState(initialValues);

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
        
        console.log(response);
        history.push(`/Userprofile/${response.data._id}`);
        
      })
      .catch((err) => {
       alert(err?.response?.data?.msg);
      });
  };

  return (
    <div className="login-container">
      <label for="email">Enter Email</label><br/>
      <input type="text" name="email" onChange={onChange}/>
      <br />
      <label for="password">Enter Password</label><br/>
      <input type="text" name="password" onChange={onChange}/>
      <br />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
