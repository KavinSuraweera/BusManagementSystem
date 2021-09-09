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
import adminLogin from "./components/adminLogin";
import availablebuses from "./components/availablebuses";
import dashbord from "./components/dashbord";
import seats from "./components/seats";
import adminregister from "./components/adminregister";
import customermain from "./components/customercrud/customermain";
import employeemain from "./components/employeecrud/employeemain";
<<<<<<< HEAD
import schedule from "./components/ScheduleCrud/ScheduleForm";

import bus from "./components/busCrud/busform";

import adminmain from "./components/admincrud/adminmain";

=======
import bus from "./components/busCrud/busform";
import adminmain from "./components/admincrud/adminmain";
>>>>>>> 86fb8042cb8ae11c3313b172858c3fdcb0124ccf
import "./CSS/App.css";
import "./CSS/booking.css";
import "./CSS/seats.css";
import Allpackages from "./components/Allpackages";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/bookings" exact component={Booking} />
        <Route path="/contact" exact component={contact} />
        <Route path="/avilablebus" exact component={availablebuses} />
        <Route path="/seats" exact component={seats} />
        <Route path="/packages" exact component={Allpackages} />
        <Route path="/dashbord" exact component={dashbord} />
        <Route path="/bus" exact component={bus}/>
        <Route path="/schedule" exact component={schedule}/>
        


        <Switch>
          <Route path="/adminLogin" exact component={adminLogin} />
        </Switch>
 
        <Switch>
         <Route path="/adminregister" exact component={adminregister} />
        </Switch>

        <Switch>
         <Route path="/customermain" exact component={customermain} />
        </Switch>

        <Switch>
         <Route path="/employeemain" exact component={employeemain} />
        </Switch>

        <Switch>
         <Route path="/adminmain" exact component={adminmain} />
        </Switch>



      </Router>
    </div>
  );
}

export default App;
