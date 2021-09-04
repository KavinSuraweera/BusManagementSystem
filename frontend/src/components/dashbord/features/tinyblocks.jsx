import React from "react";
import "./tinyblocks.css";
import Img1 from "../../../img/dashbord/tinyblock/admin_image.png";
import Img2 from "../../../img/dashbord/tinyblock/customer_img.png";
import Img3 from "../../../img/dashbord/tinyblock/emp_image.png";
import Img4 from "../../../img/dashbord/tinyblock/ratings_img.png";
import Img5 from "../../../img/dashbord/tinyblock/booking_img.png";
import Img6 from "../../../img/dashbord/tinyblock/availabelbus_img.png";
import Img7 from "../../../img/dashbord/tinyblock/maintainance_img.jpg";
import Img8 from "../../../img/dashbord/tinyblock/route_img.png";

export default function blocks() {
  return (
    <div>
      <div className="lowset-container">
        <div className="featuredlow">
          <div className="inner-image">
            <Img1 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img2 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img3 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img4 />
          </div>
        </div>
      </div>
      <div className="lowset-container">
        <div className="featuredlow">
          <div className="inner-image">
            <Img5 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img6 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img7 />
          </div>
        </div>
        <div className="featuredlow">
          <div className="inner-image">
            <Img8 />
          </div>
        </div>
      </div>
    </div>
  );
}
