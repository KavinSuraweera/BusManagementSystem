import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Popup from "../../components/popup";
import Addbus from './busadd';
import Header from '../header'

export default function Allbus() {

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [bus, setBus] = useState([]);





    function sendData(e) {

        e.preventDefault();



        axios.post("http://localhost:8000/bus/add", bus).then(() => {
            // alert("Bus added!")
            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    useEffect(() => {
        const getBus = () => {
            axios.get("http://localhost:8000/bus/").then((res) => {
                setBus(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getBus();
    }, [])



    // const [pId, setId] = useState("")
    // function sendId(pId) {




    // }


    function onDelete(bId) {
        axios.delete(`http://localhost:8000/bus/delete/${bId}`).then((req, res) => {
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }




    const openInPopup = bus => {
        setRecordForEdit(bus);
        setOpenPopup(true);
        console.log(bus)
    }







    const addOrEdit = (bus) => {

        const bid = bus._id


        axios.put(`http://localhost:8000/bus/update/${bid}`, bus).then(() => {
            alert("Updated")
            window.location.reload(false);
        }).catch((err) => {
            alert(err)
        })

    }




    // update error fixed ---------------------


    const [updateBtn, setUpdatebtn] = useState(false);
    console.log(updateBtn);

    // const updateBtnactive = () =>{

    //      updateBtn? setUpdatebtn(true):setUpdatebtn(false);
    //     }




    //------------------------------------------ 
    return (
        <div>
            <Header />
            <div className="container">




                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Bus Number</th>
                            <th scope="col">Number of seats</th>
                            <th scope="col">Registration Number</th>
                            <th scope="col">Bus Type</th>
                            <th scope="col">Permit ID</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {bus.map((bus, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{bus.busNo}</td>
                                <td>{bus.NoOfSeats}</td>
                                <td>{bus.regNo}</td>
                                <td>{bus.Type}</td>
                                <td>{bus.permitID}</td>

                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="far fa-eye"></i>&nbsp;View
                                    </button>
                                    &nbsp;
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            openInPopup(bus);
                                            setUpdatebtn(true);
                                        }}


                                    >
                                        <i className="fas fa-edit"></i>&nbsp;Update
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" href="/add" onClick={() => { onDelete(bus._id) }} >
                                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-success"
                    onClick={() => {
                        setOpenPopup(true);
                        setUpdatebtn(false);
                    }}>
                    Add new Bus</button>
                <Popup
                    title={updateBtn ? "Update Bus form" : "Add new Bus form"}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    <Addbus
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
                    />

                </Popup>


            </div>
        </div>
    )
}
