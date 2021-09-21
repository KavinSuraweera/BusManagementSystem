import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import Addadmin from "./adminadd";
import Header from "../header";
import Sidebar from "../dashbord/sidebar/sidebar"
import Topbar from "../dashbord/topbar/tobbar";

export default function Allpackages() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [admin, setAdmin] = useState([]);

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/admin/add", admin)
      .then(() => {
        // alert("Customer added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

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

  // const [pId, setId] = useState("")
  // function sendId(pId) {

  // }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/admin/delete/${pId}`)
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

  const addOrEdit = (admin) => {
    const pid = admin._id;

    axios
      .put(`http://localhost:8000/admin/update/${pid}`, admin)
      .then(() => {
        alert("Updated");
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  function refreshpage() {
    window.location.reload();
  }

  // update error fixed ---------------------

  const [updateBtn, setUpdatebtn] = useState(false);
  console.log(updateBtn);

  // const updateBtnactive = () =>{

  //      updateBtn? setUpdatebtn(true):setUpdatebtn(false);
  //     }

  //------------------------------------------
  return (
    <div className="usr_background">
      <Topbar />
      <Sidebar />
      <div className="table-name">
        <h1>Admin</h1>
        <hr />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NIC</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Type</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((admin, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{admin.NIC}</td>
                <td>{admin.Name}</td>
                <td>{admin.Phone}</td>
                <td>{admin.Type}</td>
                <td>{admin.Email}</td>
                <td>{admin.Password}</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    <i class="far fa-eye"></i>&nbsp;View
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(admin);
                      setUpdatebtn(true);
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
        <button
          className="btn btn-success"
          onClick={() => {
            setOpenPopup(true);
            setUpdatebtn(false);
          }}
        >
          Add new Admin
        </button>
        <Popup
          title={updateBtn ? "Update Admin form" : "Add new Admin form"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <Addadmin recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </div>
    </div>
  );
}
