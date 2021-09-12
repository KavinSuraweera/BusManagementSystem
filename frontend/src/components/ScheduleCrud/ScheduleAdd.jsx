import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function AddSchedule(props) {
  const { addOrEdit, recordForEdit } = props;

  const [schedule, setSchedule] = useState([]);

  const [scheduleId, setscheduleId] = useState("");
  const [RouteId, setRouteId] = useState("");
  const [Route, setRoute] = useState("");
  const [Time, setTime] = useState("");
  const [BusNumber, setBusNumber] = useState("");
  

  function sendData(e) {
    e.preventDefault();

    const newSchedules = {
      id: "0",
      scheduleId,
      RouteId,
      Route,
      Time,
      BusNumber,
    };

    axios
      .post("http://localhost:8000/schedule/add", newSchedules)
      .then(() => {
        // alert("Schedule has been added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [sId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(sId);
    const scheduleId = {
      sId,
    };

    axios
      .post(`http://localhost:8000/package/update/${sId}`, scheduleId)
      .then(() => {
        alert("Schedule has been Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null)
    setSchedule({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="scheduleID" className="form-label">
            Schedule ID
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
          <label htmlFor="RouteID" className="form-label">
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
          <label htmlFor="Route" className="form-label">
            Route
          </label>
          <input
            type="text"
            className="form-control"
            id="Route"
            placeholder="Enter Route Name"
            defaultValue={schedule.Route}
            onChange={(e) => {
              setRoute(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Time" className="form-label">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            id="Time"
            placeholder="Enter Time"
            defaultValue={schedule.Time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="BusNumber" className="form-label">
            Bus Number
          </label>
          <input
            type="text"
            className="form-control"
            id="BusNumber"
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
            onClick={sendData}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
