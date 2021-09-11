import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import AddCustomers from "./customeradd";

export default function Customermain() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [customer, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = () => {
      axios
        .get("http://localhost:8000/customer/")
        .then((res) => {
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getCustomers();
  }, []);

  const [cId, setId] = useState("");
  function sendId(e) {
    e.preventDefault();
    alert(cId);
    const customerId = {
      cId,
    };

    axios
      .post(`http://localhost:8000/customer/update/${cId}`, customerId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/customer/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (customer) => {
    setRecordForEdit(customer);
    setOpenPopup(true);
    console.log(customer);
  };

  useState(() => {
    if (recordForEdit != null) {
      setCustomers({
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
            <th scope="col">NIC</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((customer, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{customer.CusNIC}</td>
              <td>{customer.Password}</td>
              <td>{customer.Phone}</td>
              <td>{customer.Name}</td>
              <td>{customer.Email}</td>
              <td>{customer.Address}</td>
              <td>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-eye"></i>&nbsp;View
                </button>
                &nbsp;

                <button
                  className="btn btn-warning"
                  onClick={() => {
                    openInPopup(customer);
                  }}
                >
                  <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                
                &nbsp;
                <button
                  className="btn btn-danger"
                  href="/add"
                  onClick={() => {
                    onDelete(customer._id);
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
        Add new customer
      </button>
      <Popup
        title="Add new customer form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddCustomers recordForEdit={recordForEdit} />
      </Popup>
    </div>
  );
}
