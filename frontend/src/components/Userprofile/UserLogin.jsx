import axios from 'axios'
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

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
      .then(() => {
        history.push("/Userprofile");
      })
      .catch((err) => {
        alert(err);
        console.log(err.response);
      });
  };

  return (
    <div>
      Email:
      <input type="text" name="email" onChange={onChange}/>
      <br />
      <br />
      Password:
      <input type="text" name="password" onChange={onChange}/>

      <button onClick={submit}>Submit</button>
    </div>
  );
}
