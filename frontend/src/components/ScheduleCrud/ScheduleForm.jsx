import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "../../components/popup";
import AddSchedule from "./ScheduleAdd";

export default function Schedulemain() {
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const getSchedule = () => {
      axios
        .get("http://localhost:8000/customer/")
        .then((res) => {
          setSchedule(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getSchedule();
  }, []);

  const [sId, setcheduleId] = useState("");
  function sendscheduleId(e) {
    e.preventDefault();
    alert(sId);
    const scheduleId = {
      sId,
    };

    axios
      .post(`http://localhost:8000/schedule/update/${sId}`, scheduleId)
      .then(() => {
        alert("Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function onDelete(pId) {
    axios
      .delete(`http://localhost:8000/schedule/delete/${pId}`)
      .then((req, res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const openInPopup = (schedule) => {
    setRecordForEdit(schedule);
    setOpenPopup(true);
    console.log(schedule);
  };

  useState(() => {
    if (recordForEdit != null) {
      setSchedule({
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
            <th scope="col">scheduleId</th>
            <th scope="col">RouteId</th>
            <th scope="col">Route</th>
            <th scope="col">Time</th>
            <th scope="col">BusNumber</th>
            
          </tr>
        </thead>
        <tbody>
          {schedule.map((schedule, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{schedule.scheduleId}</td>
              <td>{schedule.RouteId}</td>
              <td>{schedule.Route}</td>
              <td>{schedule.Time}</td>
              <td>{schedule.BusNumber}</td>
              
              <td>
                <button type="button" class="btn btn-primary">
                  <i class="far fa-eye"></i>&nbsp;View
                </button>
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    openInPopup(schedule);
                  }}
                >
                  <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  href="/add"
                  onClick={() => {
                    onDelete(schedule._id);
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
        Add new Schedule
      </button>
      <Popup
        title="Add new customer form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddSchedule recordForEdit={recordForEdit} />
      </Popup>
    </div>
  );
}
