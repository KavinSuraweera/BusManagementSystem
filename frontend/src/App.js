import Header from './components/header';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Booking from './components/booking';
import Footer from './components/footer';
import contact from './components/contactUs';
import adminLogin from './components/adminLogin';
import './CSS/App.css'
import './CSS/booking.css'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/bookings" exact component={Booking} />
        <Route path="/contact" exact component={contact}/>

        <Switch>
          <Route path="/admin" exact component={adminLogin}/>
        </Switch>
        
      </Router>

      
     
    </div>
  );
}

export default App;
