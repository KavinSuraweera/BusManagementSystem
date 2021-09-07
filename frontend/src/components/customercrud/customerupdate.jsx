import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { createHashHistory } from "history";
import { useHistory, useParams, Redirect } from "react-router-dom";
import async from "async";

import "../../CSS/App.css";

function UpdateCustomer(props) {
  const History = createHashHistory();

  const [CusNIC, setNic] = useState("");
  const [Password, setPass] = useState("");
  const [Phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");

  function editPackage(e) {
    e.preventDefault();

    const updateCustomer = {
      CusNIC,
      Password,
      Phone,
      Name,
      Email,
      Address,
    };

    axios
      .put(
        `http://localhost:8000/customer/update/${props.match.params.id}`,
        updateCustomer
      )
      .then((res) => {
        alert("Customer Updated");
        this.setState({ redirect: "/home" });
      })
      .catch((err) => {
        alert(err);
      });
  }

  const [customerList, setCustomer] = useState([]);
  const [data, setData] = useState({
    CusNIC: "",
    Password: "",
    Phone: "",
    Name: "",
    Email: "",
    Address: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/customer/get/${props.match.params.id}`)
      .then((res) => {
        setData(res.data.customer);

        console.log(CusNIC);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container" key="index">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
            Customer NIC
          </label>
          <input
            type="text"
            className="form-control"
            id="customerNic"
            placeholder="Enter Customer NIC"
            defaultValue={data.CusNIC}
            requird
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
            defaultValue={data.Name}
            requird
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
            defaultValue={data.Phone}
            requird
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
            defaultValue={data.Address}
            requird
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
            defaultValue={data.Email}
            requird
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
            defaultValue={data.Password}
            requird
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
            onClick={UpdateCustomer}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCustomer;
