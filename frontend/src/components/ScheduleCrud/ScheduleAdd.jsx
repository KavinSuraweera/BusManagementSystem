import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function Addschedule(props) {
  const { addOrEdit, recordForEdit } = props;

  const [schedule, setschedule] = useState([]);

  const [scheduleId, setscheduleId] = useState("");
  const [RouteId , setRouteId ] = useState("");
  const [Route, setRoute] = useState("");
  const [Time, setTime] = useState("");
  const [BusNumber, setBusNumber] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newschedule = {
      id: "0",
      scheduleId ,
      RouteId,
      Route,
      Time,
      BusNumber,
    };

    axios
      .post("http://localhost:8000/busschedule/add", newschedule)
      .then(() => {
        
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }







  useEffect(() => {
    if (recordForEdit != null)
      setschedule({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
          scheduleId
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Schedule ID"
            defaultValue={schedule.scheduleId}
            onChange={(e) => {
              setscheduleId(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customerName" className="form-label">
            Route ID  
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Route ID"
            defaultValue={schedule.RouteId}
            onChange={(e) => {
              setRouteId(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPhone" className="form-label">
            Route
          </label>
          <input
            type="text"
            className="form-control"
            id="customerphone"
            placeholder="Enter Route"
            defaultValue={schedule.Route}
            onChange={(e) => {
              setRoute(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="customerAddress" className="form-label">
            Departure Time
          </label>
          <input
            type="text"
            className="form-control"
            id="customeraddress"
            placeholder="Enter Departure Time"
            defaultValue={schedule.Time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerEmail" className="form-label">
            Bus Number
          </label>
          <input
            type="text"
            className="form-control"
            id="customeremail"
            placeholder="Enter Bus Number"
            defaultValue={schedule.BusNumber}
            onChange={(e) => {
              setBusNumber(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary"
            href="/home"
            onClick={sendData()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
