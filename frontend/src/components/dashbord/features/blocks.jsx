import React, { useState, useEffect } from "react";
import "./blocks.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Datetime from "../datetime";
import Calender from "../../../img/dashbord/calendar.png";
import Profilepics from "../../../img/dashbord/profilepics.jpeg";
import Welcomeimg from "../../../img/dashbord/welcomeimg.png";
import Block3 from "../../../img/dashbord/3rdblock.png";

export default function Blocks({ id }) {

  const initialState = {
    _id: "",
    Name: "",
    Password: null,
    Email: "",
    Phone: null,
    NIC: null,
    Type: ""
  };

  const [adminprofile, setAdminProfile] = useState(initialState);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/admin/${id}`)
      .then((response) => {
        setAdminProfile(response?.data?.admin);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="main-container">
        <div className="nameDate-container">
          <div className="dashbord-name">
            <DashboardIcon className="dashbord-image" />
            Dashbord
          </div>
          <div className="dashbord-date">
            <img className="calendar" src={Calender} />
            <Datetime className="dt" />
          </div>
        </div>
        <div className="featured">
          <div className="featuredItems_component">
            <div className="featuredItem">
              a
            </div>

            <div className="featuredItem">
              a
            </div>

            <div className="featuredItem">
              a
            </div>
          </div>


          {/* <div className="featuredItem">
            <center>
              <p className="personal-info">Personal Info</p>
              <hr />
            </center>

            <span className="featuredTile">
              <img class="profilepics" src={Profilepics} />
            </span>
            <div className="block1-container">
              <div className="feature-profile">
                <p className="header">Name:</p>
                <p className="values">{adminprofile.Name}</p>
              </div>
              <div className="feature-profile">
                <p className="header">Email:</p>
                <p className="values">{adminprofile.Email}</p>
              </div>
              <div className="feature-profile">
                <p className="header">Position:</p>
                <p className="values">{adminprofile.Type}</p>
              </div>
            </div>
          </div>

          <div className="featuredItem">
            <center>
              <p className="personal-info">Welcome to BuzzyBus Admin Portal</p>
              <hr />
            </center>
            <div className="block2-container">
              <img src={Welcomeimg} className="welcome-img" />
            </div>
          </div>

          <div className="featuredItem">
            <div className="block3-container">
              <img src={Block3} className="block3-img" />
            </div>
            <p className="block3-para">
              With a whole new experience and completely adaptable booking, your
              significant serenity begins the second you start dreaming
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
