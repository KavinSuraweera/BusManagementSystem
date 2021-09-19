import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import Addadmin from "./adminadd";

export default function Alladmin() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const getAdmin = () => {
      axios
        .get("http://localhost:8000/admin/")
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getAdmin();
  }, []);

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


  function refreshpage(){
    
  }

  function onDelete(aId) {
    axios
      .delete(`http://localhost:8000/admin/delete/${aId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (admin) => {
    setRecordForEdit(admin);
    setOpenPopup(true);
    console.log(admin);
  };

  useState(() => {
    if (recordForEdit != null) {
      setAdmin({
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
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">NIC</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {admin.map((admin, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{admin.NIC}</td>
              <td>{admin.Name}</td>
              <td>{admin.Phone}</td>
              <td>{admin.Email}</td>
              <td>{admin.Password}</td>
              <td>{admin.Type}</td>
              <td>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-eye"></i>&nbsp;View
                </button>
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    openInPopup(admin);
                  }}
                >
                  <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  href="/add"
                  onClick={() => {
                    onDelete(admin._id);
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
        Add new admin
      </button>
      <Popup
        title="Add new admin form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        refreshpage = {refreshpage}
      >
        <Addadmin recordForEdit={recordForEdit} />
      </Popup>
    </div>
  );
}
