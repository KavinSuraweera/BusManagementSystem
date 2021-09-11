import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function Addbus(props) {
  const { addOrEdit, recordForEdit } = props;

  const [bus, setbus] = useState([]);

  const [busNo, setbusNo] = useState("");
  const [NoOfSeats, setNoOfSeats] = useState("");
  const [regNo, setregNo] = useState("");
  const [Type, setType] = useState("");
  const [permitID, setpermitID] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newbus = {
      id: "0",
      busNo ,
      NoOfSeats,
      regNo,
      Type,
      permitID,
    };

    axios
      .post("http://localhost:8000/bus/add", newbus)
      .then(() => {
        // alert("Package added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [bId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(bId);
    const busId = {
      bId,
    };

    axios
      .post(`http://localhost:8000/bus/update/${bId}`, busId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null)
      setbus({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
            Bus Number
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Bus Number"
            defaultValue={bus.busNo}
            onChange={(e) => {
              setbusNo(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customerName" className="form-label">
            Number Of Seats
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Number of seats"
            defaultValue={bus.NoOfSeats}
            onChange={(e) => {
              setNoOfSeats(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPhone" className="form-label">
            Registration Number
          </label>
          <input
            type="text"
            className="form-control"
            id="customerphone"
            placeholder="Enter Registration number"
            defaultValue={bus.regNo}
            onChange={(e) => {
              setregNo(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="customerAddress" className="form-label">
            Bus Type
          </label>
          <input
            type="text"
            className="form-control"
            id="customeraddress"
            placeholder="Enter Bus Type"
            defaultValue={bus.Type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerEmail" className="form-label">
            PermitID
          </label>
          <input
            type="text"
            className="form-control"
            id="customeremail"
            placeholder="Enter PermitID"
            defaultValue={bus.permitID}
            onChange={(e) => {
              setpermitID(e.target.value);
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
