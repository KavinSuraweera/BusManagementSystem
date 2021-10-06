import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Popup from "../../components/popup";
import Addroute from './route';
import Header from '../header'
import Slider  from '../dashbord/sidebar/sidebar';
import Sidebar from '../dashbord/sidebar/sidebar';
import Topbar from '../dashbord/topbar/tobbar';

export default function Allroute() {

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [route, setRoute] = useState([]);


    function refreshpage(){
        window.location.reload();
    }


    function sendData(e) {

        e.preventDefault();



        axios.post("http://localhost:8000/route/add", route).then(() => {
            // alert("Route added!")
            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    useEffect(() => {
        const getRoute = () => {
            axios.get("http://localhost:8000/route/").then((res) => {
                setRoute(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getRoute();
    }, [])



    // const [pId, setId] = useState("")
    // function sendId(pId) {




    // }


    function onDelete(rId) {
        axios.delete(`http://localhost:8000/route/delete/${rId}`).then((req, res) => {
            window.location.reload(false);
        }).catch((err) => {
            alert(err);
        })
    }




    const openInPopup = route => {
        setRecordForEdit(route);
        setOpenPopup(true);
        console.log(route)
    }







    const addOrEdit = (route) => {

        const rid = route._id


        axios.put(`http://localhost:8000/route/update/${rid}`, route).then(() => {
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
        <div className="usr_background">
            <Topbar/>
            <Sidebar/>
            <div className="table-name">
                <h1>ROUTES</h1>
                <hr/>
            </div>

            <div className="container">




                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Route ID</th>
                            <th scope="col">Route Name</th>
                            <th scope="col">To</th>
                            <th scope="col">From</th>
                            <th scope="col">Adult</th>
                            <th scope="col">Child</th>
                            <th scope="col">Student</th>
                            <th scope="col">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {route.map((route, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{route.routeId}</td>
                                <td>{route.routeName}</td>
                                <td>{route.to}</td>
                                <td>{route.from}</td>
                                <td>LKR {route.pAdult}</td>
                                <td>LKR {route.pChild}</td>
                                <td>LKR {route.pStudent}</td>

                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="far fa-eye"></i>&nbsp;View
                                    </button>
                                    &nbsp;
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => {
                                            openInPopup(route);
                                            setUpdatebtn(true);
                                        }}


                                    >
                                        <i className="fas fa-edit"></i>&nbsp;Update
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" href="/add" onClick={() => { onDelete(route._id) }} >
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
                    Add new Route</button>
                <Popup
                    title={updateBtn ? "Update Route form" : "Add new Route form"}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                    refreshpage = {refreshpage}
                >
                    <Addroute
                        recordForEdit={recordForEdit}
                        addOrEdit={addOrEdit}
                    />

                </Popup>


            </div>
        </div>
    )
}
