import React from "react";
import "./tinyblocks.css";
import TinyImg1 from "../../../img/dashbord/tinyblock/adminimg.png";
import TinyImg2 from "../../../img/dashbord/tinyblock/customer_img.png";
import TinyImg3 from "../../../img/dashbord/tinyblock/emp_image.png";
import TinyImg4 from "../../../img/dashbord/tinyblock/ratings_img.png";
import TinyImg5 from "../../../img/dashbord/tinyblock/booking_img.png";
import TinyImg6 from "../../../img/dashbord/tinyblock/availabelbus_img.png";
import TinyImg7 from "../../../img/dashbord/tinyblock/maintainance_img.jpg";
import TinyImg8 from "../../../img/dashbord/tinyblock/route_img.png";

export default function blocks() {
  return (
    <div>
      <div className="lowset-container ">
        <div className="featuredlow a">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <i class="fas fa-users-cog"></i>
            </div>
            <div className="inner-lvl2">
              <p>Admin</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>
        <div className="featuredlow b">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-users"></i>
            </div>
            <div className="inner-lvl2">
              <p>Users</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>

        <div className="featuredlow c">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-briefcase"></i>
            </div>
            <div className="inner-lvl2">
              <p>Employees</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>

        <div className="featuredlow d">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-grin-stars"></i>
            </div>
            <div className="inner-lvl2">
              <p>Reviews</p>
              <h1>50%</h1>
            </div>
          </div>
          
        </div>
      </div>

      <div className="lowset-container">
        <div className="featuredlow e">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-book"></i>
            </div>
            <div className="inner-lvl2">
              <p>Bookings</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>

        <div className="featuredlow f">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-bus"></i>
            </div>
            <div className="inner-lvl2">
              <p>Busses</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>

        <div className="featuredlow g">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
            <i class="fas fa-hammer"></i>
            </div>
            <div className="inner-lvl2">
              <p>break Downs</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>

        <div className="featuredlow h">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <i class="fas fa-road"></i>
            </div>
            <div className="inner-lvl2">
              <p>Routes</p>
              <h1>Count</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
