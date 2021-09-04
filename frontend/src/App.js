import Header from './components/header';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Booking from './components/booking';
import Footer from './components/footer';
import contact from './components/contactUs';
import adminLogin from './components/adminLogin';
import availablebuses from './components/availablebuses';
import dashbord from './components/dashbord';
import seats from './components/seats';
import './CSS/App.css'
import './CSS/booking.css'
import './CSS/seats.css'
import Allpackages from './components/Allpackages';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/bookings" exact component={Booking} />
        <Route path="/contact" exact component={contact}/>
        <Route path="/avilablebus" exact component={availablebuses} />
        <Route path="/seats" exact component={seats}/>
        <Route path="/packages" exact component={Allpackages}/>

        <Switch>
          <Route path="/admin" exact component={adminLogin}/>

          <Route path="/dashbord" exact component={dashbord}/>

        </Switch>
        <Footer/>
        
      </Router>

      
     
    </div>
  );
}

export default App;
