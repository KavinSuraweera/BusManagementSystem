import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function AddCustomers(props) {
  const { addOrEdit, recordForEdit } = props;

  const [customer, setCustomers] = useState([]);

  const [CusNIC, setNic] = useState("");
  const [Password, setPass] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newCustomers = {
      id: "0",
      CusNIC,
      Password,
      Phone,
      Name,
      Email,
      Address,
    };

    axios
      .post("http://localhost:8000/customer/add", newCustomers)
      .then(() => {
        // alert("Package added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [cId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(cId);
    const customerId = {
      cId,
    };

    axios
      .post(`http://localhost:8000/package/update/${cId}`, customerId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null)
      setCustomers({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
            Customer NIC
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Customer NIC"
            defaultValue={customer.CusNIC}
            onChange={(e) => {
              setNic(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customerName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Customer Name"
            defaultValue={customer.Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPhone" className="form-label">
            Customer Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="customerphone"
            placeholder="Enter Customer phone"
            defaultValue={customer.Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="customerAddress" className="form-label">
            Customer Address
          </label>
          <input
            type="text"
            className="form-control"
            id="customeraddress"
            placeholder="Enter Customer Address"
            defaultValue={customer.Address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerEmail" className="form-label">
            Customer Email
          </label>
          <input
            type="text"
            className="form-control"
            id="customeremail"
            placeholder="Enter Email"
            defaultValue={customer.Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPassword" className="form-label">
            Customer Password
          </label>
          <input
            type="text"
            className="form-control"
            id="customerpword"
            placeholder="Enter Password"
            defaultValue={customer.Password}
            onChange={(e) => {
              setPass(e.target.value);
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
