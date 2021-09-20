import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function AddAdmin(props) {
  const { addOrEdit, recordForEdit } = props;

  const [admin, setAdmin] = useState([]);

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [NIC, setNIC] = useState("");
  const [Type, setType] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newAdmin = {
      id: "0",
      Name,
      Password,
      Phone,
      Email,
      NIC,
      Type,
    };

    axios
      .post("http://localhost:8000/admin/add", newAdmin)
      .then(() => {
        // alert("Admin added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [aId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(aId);
    const adminId = {
        aId,
    };

    axios
      .post(`http://localhost:8000/admin/update/${aId}`, adminId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null)
      setAdmin({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-4">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
          Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Name"
            defaultValue={admin.Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customerName" className="form-label">
            Password:
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter admin Name"
            defaultValue={admin.Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPhone" className="form-label">
             Phone:
          </label>
          <input
            type="text"
            className="form-control"
            id="customerphone"
            placeholder="Enter Customer phone"
            defaultValue={admin.Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="customerAddress" className="form-label">
          Email
          </label>
          <input
            type="text"
            className="form-control"
            id="customeraddress"
            placeholder="Enter Email Address"
            defaultValue={admin.Address}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerEmail" className="form-label">
            Admin Nic
          </label>
          <input
            type="text"
            className="form-control"
            id="customeremail"
            placeholder="Enter NIC"
            defaultValue={admin.Email}
            onChange={(e) => {
              setNIC(e.target.value);
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary"
            href="/home"
            onClick={sendData}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
