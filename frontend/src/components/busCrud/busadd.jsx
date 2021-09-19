import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../../CSS/App.css';


export default function Addpackage(props) {

    const { recordForEdit } = props;

    const [bus, setBus] = useState({});

    const [busNo, setbusNo] = useState("");
    const [NoOfSeats, setNoOfSeats] = useState("");
    const [regNo, setregNo] = useState("");
    const [Type, setType] = useState("");
    const [permitID, setpermitID] = useState("");
 


    function sendData() {



        const newBus = {
            id: '0',
            busNo,
            NoOfSeats,
            regNo,
            Type,
            permitID,
        }


        axios.post("http://localhost:8000/bus/add", newBus).then(() => {

            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(bus)

    const updateBus = {
        busNo,
        NoOfSeats,
        regNo,
        Type,
        permitID ,
    };

    function editBus(uId) {

        axios
            .put(
                `http://localhost:8000/bus/update/${uId}`,
                updateBus
            )
            .then((res) => {
                alert("Bus Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null) {
            setBus({
                ...recordForEdit
            })

            setbusNo(recordForEdit.busNo)
            setNoOfSeats(recordForEdit.NoOfSeats)
            setregNo(recordForEdit.regNo)
            setType(recordForEdit.Type)
            setpermitID(recordForEdit.permitID)
         
        }
    }, [recordForEdit]);




    const handleSubmit = (e) => {
        if (bus._id == null)

            sendData(bus)
        else {


            editBus(bus._id)
        }

    }




    return (
        <div className="container">
            <form className="row g-3" onSubmit={(e) => { handleSubmit(e) }}>
                <div className="col-md-5">
                    <label htmlFor="packageName" className="form-label">Enter Bus Number:</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Bus Number"
                        value={busNo}
                        onChange={(e) => {
                            setbusNo(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-5">
                    <label htmlFor="packageName" className="form-label">Select Number of seats:</label>
                    <select id="depatureTime" className="form-input-2"
                        onChange={(e) => {
                            // setShow(true);
                            setNoOfSeats(e.target.value);
                        }}>
                        <option selected >...</option>
                        <option >54</option>
                        <option >42</option>
                      
                        
                        

                    </select>
                    {/* <input type="text" className="form-control" id="packageName" placeholder="Enter Number of Seats"
                        value={NoOfSeats}
                        onChange={(e) => {
                            setNoOfSeats(e.target.value);
                        }}
                    /> */}
                </div>
                <div className="col-md-5">
                    <label htmlFor="tripsCount" className="form-label">Enter Registration Number</label>
                    <input type="text" className="form-control" id="tripsCount" placeholder="Enter Registration Number"
                        value={regNo}
                        onChange={(e) => {
                            setregNo(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-5">
                    <label htmlFor="tripsCount" className="form-label">Bus Type</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter Bus Type"
                        value={Type}
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-5">
                    <label htmlFor="timePeriod" className="form-label">Enter Permit ID:</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Enter permit ID"
                        value={permitID}
                        onChange={(e) => {
                            setpermitID(e.target.value);
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
