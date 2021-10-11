import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../popup";
import Addbusowner from "./busowneradd";
import Header from "../header";
import Sidebar from "../dashbord/sidebar/sidebar"
import Topbar from "../dashbord/topbar/tobbar";
import busownerimg from "./../../img/busowner/busowner1.jpg";
import "./../../CSS/busowner.css";

export default function Allpackages() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [busowner, setBusOwner] = useState([]);

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/busowner/add", busowner)
      .then(() => {
        alert("Owner added!")
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    const getBusOwner = () => {
      axios
        .get("http://localhost:8000/busowner/")
        .then((res) => {
          setBusOwner(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getBusOwner();
  }, []);

  // const [pId, setId] = useState("")
  // function sendId(pId) {

  // }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/busowner/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (busowner) => {
    setRecordForEdit(busowner);
    setOpenPopup(true);
    console.log(busowner);
  };

  const addOrEdit = (busowner) => {
    const pid = busowner._id;

    axios
      .put(`http://localhost:8000/busowner/update/${pid}`, busowner)
      .then(() => {
        alert("Bus Owner Added Successfully")
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

  //------------------------------------------style={{backgroundImage:`url(${busownerimg})`}}
  return (
    <div className="usr_background" id="busBackImg" >
      <Topbar />
      <Sidebar />
      <div className="table-name">
        <h1>Bus Owners</h1>
        <hr />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bid</th>
              <th scope="col">Bname</th>
              <th scope="col">Sname</th>
              <th scope="col">Nic</th>
              <th scope="col">Pnum</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {busowner.map((busowner, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{busowner.Bid}</td>
                <td>{busowner.Bname}</td>
                <td>{busowner.Sname}</td>
                <td>{busowner.Nic}</td>
                <td>{busowner.Pnum}</td>
                <td>{busowner.Email}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      openInPopup(busowner);
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
                      onDelete(busowner._id);
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
          Add new Owner
        </button>
        <Popup
          title={updateBtn ? "Update Bus Owner Form" : "Add new Bus Owner form"}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          refreshpage={refreshpage}
        >
          <Addbusowner recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
        </Popup>
      </div>
    </div>
  );
}
