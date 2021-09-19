import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';


export default function Addpackage(props) {

    const { recordForEdit } = props;

    const [route, setRoute] = useState({});

    const [routeId, setrouteId] = useState("");
    const [routeName, setrouteName] = useState("");
    const [to, setto] = useState("");
    const [from, setfrom] = useState("");
    const [pAdult, setpAdult] = useState("");
    const [pChild, setpChild] = useState("");
    const [pStudent, setpStudent] = useState("");
 


    function sendData() {



        const newRoute = {
            id: '0',
            routeId,
            routeName,
            to,
            from,
            pAdult,
            pChild,
            pStudent,
        }


        axios.post("http://localhost:8000/route/add", newRoute).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(route)

    const updateRoute = {
        routeId,
        routeName,
        to,
        from,
        pAdult,
        pChild,
        pStudent
    };

    function editBus(uId) {

        axios
            .put(
                `http://localhost:8000/route/update/${uId}`,
                updateRoute
            )
            .then((res) => {
                alert("Route Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null) {
            setRoute({
                ...recordForEdit
            })

            setrouteId(recordForEdit.routeId)
            setrouteName(recordForEdit.routeName)
            setto(recordForEdit.to)
            setfrom(recordForEdit.from)
            setpAdult(recordForEdit.pAdult)
            setpChild(recordForEdit.pChild)
            setpStudent(recordForEdit.pStudent)
         
        }
    }, [recordForEdit]);




    const handleSubmit = (e) => {
        if (route._id == null)

            sendData(route)
        else {


            editBus(route._id)
        }

    }




    return (
        <div className="container">
            <form className="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="col-md-6">
                    <label htmlFor="packageName" className="form-label">Enter Route ID:</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Route Number"
                        value={routeId}
                        onChange={(e) => {
                            setrouteId(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="packageName" className="form-label">Enter Route Name:</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Route Name"
                        value={routeName}
                        onChange={(e) => {
                            setrouteName(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="tripsCount" className="form-label">Enter To</label>
                    <input type="text" className="form-control" id="tripsCount" placeholder="Enter To"
                        value={to}
                        onChange={(e) => {
                            setto(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="tripsCount" className="form-label">Enter From</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter From"
                        value={from}
                        onChange={(e) => {
                            setfrom(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Enter Adult Name:</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Enter Adult Name"
                        value={pAdult}
                        onChange={(e) => {
                            setpAdult(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Enter Child Name:</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Enter Child Name"
                        value={pChild}
                        onChange={(e) => {
                            setpChild(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Enter Student Name:</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Enter Student Name"
                        value={pStudent}
                        onChange={(e) => {
                            setpStudent(e.target.value);
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

