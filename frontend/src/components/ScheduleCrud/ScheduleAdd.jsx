import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';


export default function Addschedule(props) {

    const { recordForEdit } = props;

    const [schedule, setSchedule] = useState({});

    const [scheduleId, setscheduleId] = useState("");
    const [RouteId, setRouteId] = useState("");
    const [Route, setRoute] = useState("");
    const [Time, setTime] = useState("");
    const [BusNumber, setBusNumber] = useState("");
    





    function sendData() {



        const newSchedule = {
            id: '0',
            scheduleId,
            RouteId,
            Route,
            Time,
            BusNumber,
        }


        axios.post("http://localhost:8000/busschedule/add", newSchedule).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(schedule)

    const updateSchedule = {
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber,
       
    };

    function editSchedule(uId) {

        axios
            .put(
                `http://localhost:8000/busschedule/update/${uId}`,
                updateSchedule
            )
            .then((res) => {
                alert("Schedule has been Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null) {
            setSchedule({
                ...recordForEdit
            })

            setscheduleId(recordForEdit.scheduleId)
            setRouteId(recordForEdit.RouteId)
            setRoute(recordForEdit.Route)
            setTime(recordForEdit.Time)
            setBusNumber(recordForEdit.BusNumber)
        

        }
    }, [recordForEdit]);




    const handleSubmit = (e) => {
        if (schedule._id == null)

            sendData(schedule)
        else {


            editSchedule(schedule._id)
        }

    }




    return (
        <div className="container">
            <form className="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="col-md-6">
                    <label htmlFor="scheduleId" className="form-label">Enter Schedule ID:</label>
                    <input type="text" className="form-control" id="scheduleId" placeholder="Enter Schedule ID"
                        value={scheduleId}
                        onChange={(e) => {
                            setscheduleId(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="RouteId" className="form-label">Enter Route ID:</label>
                    <input type="text" className="form-control" id="RouteId" placeholder="Enter Route ID"
                        value={RouteId}
                        onChange={(e) => {
                            setRouteId(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="Route" className="form-label">Enter Route</label>
                    <input type="text" className="form-control" id="Route" placeholder="Enter Route"
                        value={Route}
                        onChange={(e) => {
                            setRoute(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="Time" className="form-label">Enter Time</label>
                    <input type="tel" className="form-control" id="Time" placeholder="Enter Last Name"
                        value={Time}
                        onChange={(e) => {
                            setTime(e.target.value);
                        }}
                    />
                </div>


                <div className="col-md-2">
                    <label htmlFor="BusNumber" className="form-label">Enter Bus Number:</label>
                    <input type="BusNumber" className="form-control" id="BusNumber" placeholder="Bus Number"
                        value={BusNumber}
                        onChange={(e) => {
                            setBusNumber(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <input type="submit" className="btn btn-primary" href="/home" value="Submit" />
                </div>
            </form>

        </div>
    )
}