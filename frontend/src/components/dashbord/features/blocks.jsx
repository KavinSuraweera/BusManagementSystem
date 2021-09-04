import React from "react";
import "./blocks.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Datetime from "../datetime";
import Calender from "../../../img/dashbord/calendar.png";
import Profilepics from "../../../img/dashbord/profilepics.jpeg";
import Welcomeimg from "../../../img/dashbord/welcomeimg.png";
import Block3 from "../../../img/dashbord/3rdblock.png";

export default function blocks() {
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
          <div className="featuredItem">
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
                <p className="values">Panchani Madanayaka</p>
              </div>
              <div className="feature-profile">
                <p className="header">Position:</p>
                <p className="values">Client Relations</p>
              </div>
              <div className="feature-profile">
                <p className="header">Email:</p>
                <p className="values">PanchiMad@gmail.com</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
