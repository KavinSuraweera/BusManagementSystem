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
import UserPackages from './components/UserPackages'

import bus from "./components/busCrud/busform";
import adminmain from "./components/admincrud/adminmain";

import schedule from "./components/ScheduleCrud/ScheduleForm";

import "./CSS/App.css";
import "./CSS/booking.css";
import "./CSS/seats.css";
import "./CSS/usercard.css"
import Allpackages from "./components/Allpackages";

import CreatePost from './components/BusOwner/CreatePost';
import EditPost from './components/BusOwner/EditPost';
import busOwner from './components/BusOwner/BusOwner';
import PostDetails from './components/BusOwner/PostDetails';
import ConLogin from "./components/conLogin";
import ConDash from "./components/conductorDash";


import {  useSelector } from 'react-redux';

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
        <Route path="/BusOwner" exact component={busOwner}/>
        <Route path="/admin" exact component={admin}/>
        <Route path="/conLogin" exact component={ConLogin}/>
        <Route path="/conDash" exact component={ConDash}/>
        <Route path="/Upackages" exact component={UserPackages}/>

        <Switch>
          <Route path="/Admin-Login">
             {adminID?<Redirect to="/dashbord"/>:<AdminLogin/>}
            </Route>
          <Route path="/customermain" exact component={customermain} />
          <Route path="/employeemain" exact component={employeemain} />
          <Route path="/adminmain" exact component={adminmain} />
          <Route path="/Sign-Up" exact component={userreg} />
          <Route path="/Login-Page" >
             {userID?<Redirect to="/Userprofile"/>:<UserLogin/>}
          </Route>
          <Route path="/Userprofile" exact component={Userprofile}/>    
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostDetails}></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
