import Header from "./components/header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect, } from "react-router-dom";

import Home from "./components/home";
import Booking from "./components/booking";
import Footer from "./components/footer";
import contact from "./components/contactUs";
import AdminLogin from "./components/adminLogin";
import availablebuses from "./components/availablebuses";
import dashbord from "./components/dashbord";
import seats from "./components/seats";
import customermain from "./components/customercrud/customermain";
import employeemain from "./components/employeecrud/employeemain";
import userreg from "./components/Userprofile/UserRegister";
import UserLogin from "./components/Userprofile/UserLogin";
import Userprofile from "./components/Userprofile/Userprofile";
import Blocks from "./components/dashbord/features/blocks"
import routes from "./components/routecrud/routeform";
import admin from './components/admincrud/adminmain'
import Schedulefront from "./components/Schedulefront";
import busfares from "./components/busfares";
import googlemap from "./components/googlemap";
import UserPackages from './components/UserPackages'

import pContact from "./components/pContact";


import bus from "./components/busCrud/busform";
import adminmain from "./components/admincrud/adminmain";

import schedule from "./components/ScheduleCrud/ScheduleForm";

import "./CSS/App.css";
import "./CSS/booking.css";
import "./CSS/seats.css";
import "./CSS/usercard.css"
import "./CSS/feedbaclCards.css"
import Allpackages from "./components/Allpackages";

import busowner from './components/BusOwner/busownermain'
import busownermain from "./components/BusOwner/busownermain";

import ConLogin from "./components/conLogin";
import ConDash from "./components/conductorDash";
import feedbackCards from "./components/feedbackCards/feedbackCards"


import {  useSelector } from 'react-redux';
import { FreeBreakfast } from "@material-ui/icons";

function App() {

  const  userID  = useSelector(state => state.auth.id)
  const adminID = useSelector(state => state.auth.adminid)

  return (

    <div>
      <Router>
      <Route path="/" exact component={Home} />  
        <Route path="/bookings" exact component={Booking} />
        <Route path="/contact" exact component={contact} />
        <Route path="/avilablebus" exact component={availablebuses} />
        <Route path="/seats" exact component={seats} />
        <Route path="/packages" exact component={Allpackages} />
        <Route path="/dashbord" exact component={dashbord} />
        <Route path="/bus" exact component={bus} />
        <Route path="/schedule" exact component={schedule} />
        <Route path="/routes" exact component={routes} />
        
        <Route path="/admin" exact component={admin}/>
        <Route path="/Schedulefront" exact component={Schedulefront}/>
        <Route path="/busfares" exact component={busfares}/>
        <Route path="/googlemap" exact component={googlemap}/>
        <Route path="/conLogin" exact component={ConLogin}/>
        <Route path="/conDash" exact component={ConDash}/>

        <Route path="/Upackages">
          {!userID?<Redirect to="/Login-Page"/>:<UserPackages/>}
        </Route>

        <Route path="/payment" exact component={mainPayment} />
        
        


        <Route path="/busowner" exact component={busowner}/>

        <Switch>
          <Route path="/Admin-Login">
             {adminID?<Redirect to="/dashbord"/>:<AdminLogin/>}
            </Route>
          <Route path="/customermain" exact component={customermain} />
          <Route path="/employeemain" exact component={employeemain} />
          <Route path="/adminmain" exact component={adminmain} />
          <Route path="/busownermain" exact component={busownermain} />
          <Route path="/Sign-Up" exact component={userreg} />
          <Route path="/Login-Page" >
             {userID?<Redirect to="/Userprofile"/>:<UserLogin/>}
          </Route>
          <Route path="/Userprofile" exact component={Userprofile}/>    
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
