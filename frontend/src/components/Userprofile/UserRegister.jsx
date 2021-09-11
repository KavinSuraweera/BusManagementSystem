import { Button } from '@material-ui/core';
import axios from 'axios'
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import '../../CSS/adminregister.css';




export default function Adminregister() {

    const history = useHistory();

    const initialState = {
        username:"",
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        password2:""
    }


    const[registerForm, setRegisterForm] = useState(initialState);
    const[errorMessage, setErrorMessage] = useState("");

    const onChange=(e)=>{
        setRegisterForm({...registerForm,[e.target.name]:e.target.value})
    }

    const submit=()=>{

        const payload={
            UserName:registerForm.username,
            FirstName:registerForm.firstname,
            LastName:registerForm.lastname,
            Email:registerForm.email,
            Password:registerForm.password
        }

        if(registerForm.password ===registerForm.password2){
            axios.post(`http://localhost:8000/customer/add`, payload).then(() => {
                history.push('/Login-Page');
            }).catch((err) => {
                alert(err)
            });
        }
        else{
            setErrorMessage("Password mismatch");
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            
        }
    }

    return (
        <div>
            <center>
            <div className="form">
                Username:
                <input  type="text" name="username" placeholder="First Name" onChange={onChange}/><br/><br/>
                First Name:
                <input type="text" name="firstname" placeholder="First Name" onChange={onChange}/><br/><br/>
                Last Name:
                <input type="text" name="lastname" placeholder="First Name" onChange={onChange}/><br/><br/>
                Email:
                <input type="text" name="email"  placeholder="Last Name" onChange={onChange}/><br/><br/>
                Enter Password:
                <input type="text" name="password"  id="passone" placeholder="Enter Password" onChange={onChange}/><br/><br/>
                Confirm Password:
                <input type="text" name="password2"  id="passtwo" placeholder="re Enter Password" onChange={onChange}/><br/><br/>

               <button onClick={submit}>
                   Submit
               </button>

                <p style={{color:"red"}}>{errorMessage}</p>

            </div>
            </center>
        </div>
    )
}
