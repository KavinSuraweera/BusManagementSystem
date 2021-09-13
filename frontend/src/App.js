import Header from "./components/header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
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

import bus from "./components/busCrud/busform";
import adminmain from "./components/admincrud/adminmain";

import schedule from "./components/ScheduleCrud/ScheduleForm";

import "./CSS/App.css";
import "./CSS/booking.css";
import "./CSS/seats.css";
import Allpackages from "./components/Allpackages";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/bookings" exact component={Booking} />
        <Route path="/contact" exact component={contact} />
        <Route path="/avilablebus" exact component={availablebuses} />
        <Route path="/seats" exact component={seats} />
        <Route path="/packages" exact component={Allpackages} />
        <Route path="/dashbord/:id" exact component={dashbord} />
        <Route path="/bus" exact component={bus} />
        <Route path="/schedule" exact component={schedule} />

        <Switch>
          <Route path="/Admin-Login" exact component={AdminLogin} />
          <Route path="/customermain" exact component={customermain} />
          <Route path="/employeemain" exact component={employeemain} />
          <Route path="/adminmain" exact component={adminmain} />
          <Route path="/Sign-Up" exact component={userreg} />
          <Route path="/Login-Page" exact component={UserLogin}/>
          <Route path="/Userprofile/:id" exact component={Userprofile}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
