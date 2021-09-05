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
      <div className="lowset-container">
        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg1} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Admin Type</h5>
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg2} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Active customers</h5>
          </div>
        </div>

        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg3} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Employees on work</h5>
          </div>
        </div>

        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg4} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Ratings</h5>
          </div>
        </div>
      </div>

      <div className="lowset-container">
        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg5} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Bookings</h5>
          </div>
        </div>

        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg6} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Available Buses</h5>
          </div>
        </div>

        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg7} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Buses not in use</h5>
          </div>
        </div>

        <div className="featuredlow">
          <div className="inner-lvl0">
            <div className="inner-lvl1">
              <img className="inner-image" src={TinyImg8} alt="" />
            </div>
            <div className="inner-lvl2">
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
              <p>sssssssssssssss</p>
            </div>
          </div>
          <div className="title-container">
            <h5>Routes</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
