import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../CSS/App.css";

export default function EmployeeAdd(props) {
  const { addOrEdit, recordForEdit } = props;

  const [employee, setEmployee] = useState([]);

  const [EmpName, setEmpName] = useState("");
  const [Password, setPass] = useState("");
  const [Phone, setPhone] = useState("");
  const [NIC, setNIC] = useState("");
  const [Email, setEmail] = useState("");
  const [Type, setType] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      id: "0",
      EmpName,
      Password,
      Phone,
      NIC,
      Email,
      Type,
    };

    axios
      .post("http://localhost:8000/employee/add", newEmployee)
      .then(() => {
        // alert("Package added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }
  const [eId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(eId);
    const employeeId = {
      eId,
    };

    axios
      .post(`http://localhost:8000/employee/update/${eId}`, employeeId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    if (recordForEdit != null)
      setEmployee({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="customerNIC" className="form-label">
            Employee Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Employee Name"
            defaultValue={employee.EmpName}
            onChange={(e) => {
              setEmpName(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="customerName" className="form-label">
            Employee Password
          </label>
          <input
            type="text"
            className="form-control"
            id="tripsCount"
            placeholder="Enter Customer Name"
            defaultValue={employee.Password}
            onChange={(e) => {
                setPass(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPhone" className="form-label">
            Employee Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="customerphone"
            placeholder="Enter Customer phone"
            defaultValue={employee.Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="customerAddress" className="form-label">
          Employee NIC
          </label>
          <input
            type="text"
            className="form-control"
            id="customeraddress"
            placeholder="Enter Employee Name"
            defaultValue={employee.NIC}
            onChange={(e) => {
                setNIC(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerEmail" className="form-label">
          Enter Email
          </label>
          <input
            type="text"
            className="form-control"
            id="customeremail"
            placeholder="Enter Email"
            defaultValue={employee.Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="customerPassword" className="form-label">
            Employee Type
          </label>
          <input
            type="text"
            className="form-control"
            id="customerpword"
            placeholder="Enter Type"
            defaultValue={employee.Password}
            onChange={(e) => {
                setType(e.target.value);
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
