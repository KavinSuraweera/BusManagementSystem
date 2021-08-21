import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Booking from './components/booking';
import Footer from './components/footer';
import './CSS/App.css'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/bookings" exact component={Booking} />
        
      </Router>
    </div>
  );
}

export default App;
