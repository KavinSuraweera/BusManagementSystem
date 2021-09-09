import Header from "./components/header";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import dashbord from "./components/dashbord";


import "./CSS/App.css";
import "./CSS/booking.css";
import "./CSS/seats.css";
import Allpackages from "./components/Allpackages";

function App() {
  return (
    <div>
      <Router>
        <Route path="/dashbord" exact component={dashbord} />
      </Router>
    </div>
  );
}

export default App;
