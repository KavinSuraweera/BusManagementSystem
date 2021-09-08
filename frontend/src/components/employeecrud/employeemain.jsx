import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import EmployeeAdd from "./employeeadd";

export default function Employeemain() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const getEmployee = () => {
      axios
        .get("http://localhost:8000/employee/")
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getEmployee();
  }, []);

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

  function onDelete(eId) {
    axios
      .delete(`http://localhost:8000/employee/delete/${eId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (employee) => {
    setRecordForEdit(employee);
    setOpenPopup(true);
    console.log(employee);
  };

  useState(() => {
    if (recordForEdit != null) {
      setEmployee({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">EmpName</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
            <th scope="col">NIC</th>
            <th scope="col">E-mail</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{employee.NIC}</td>
              <td>{employee.EmpName}</td>
              <td>{employee.Phone}</td>
              <td>{employee.Type}</td>
              <td>{employee.Email}</td>
              <td>{employee.Password}</td>
              
              <td>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-eye"></i>&nbsp;View
                </button>
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    openInPopup(employee);
                  }}
                >
                  <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  href="/add"
                  onClick={() => {
                    onDelete(employee._id);
                  }}
                >
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={() => setOpenPopup(true)}>
        Add new employee
      </button>
      <Popup
        title="Add new employee form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeAdd recordForEdit={recordForEdit} />
      </Popup>
    </div>
  );
}
