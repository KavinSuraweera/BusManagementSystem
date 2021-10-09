import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "../CSS/conLogin.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header"
import {logout} from '../actions/authAction'

export default function UserLogin() {

  const conid = useSelector(state => state.auth.conid);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutconducter=()=>{
    dispatch(logout());
    history.push('/conLogin');
  }
  return (
    <div>
        CONDUCTOR PAGE EKA WADA MALLI
        <a href="#"><p onClick={logoutconducter}>Logout &nbsp;</p></a>
    </div>
   
  );
}

