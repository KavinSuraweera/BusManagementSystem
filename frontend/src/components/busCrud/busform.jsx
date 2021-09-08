import axios from 'axios'
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Popup from "../../components/popup";

import Addbus from './busadd';

export default function Allpackagse() {

    const[recordForEdit, setRecordForEdit] = useState(null);
    const[openPopup, setOpenPopup] = useState(false);
    
    const[bus, setbus] = useState([]);

    useEffect(() =>{
        const getbus = () =>{
            axios.get("http://localhost:8000/bus/").then((res) =>{
                setbus(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getbus();
    },[])

    

    const [bId, setId] =useState("")
    function sendId(e){
        e.preventDefault();
        alert(bId)
        const busId ={
            bId,
        }

        axios.post(`http://localhost:8000/bus/update/${bId}`, busId).then(() => {
            alert("Updated")
        }).catch((err) => {
            alert(err)
        })
    }

   
    function onDelete(bId){
        axios.delete(`http://localhost:8000/bus/delete/${bId}`).then((req,res) => {
            window.location.reload(false);
        }).catch((err)=>{
            alert(err);
        })
    }



    const openInPopup = bus =>{
        setRecordForEdit(bus)
        setOpenPopup(true);
        console.log(bus)
    }


    useState(() => { 
        if(recordForEdit != null){
            setbus({
                ...recordForEdit
            })
        }
    },[recordForEdit])
    return (
        <div className="container">

            



<table className="table">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">BusNo</th>
        <th scope="col">Seat Count</th>
        <th scope="col">Registration No</th>
        <th scope="col">Bus Type</th>
        <th scope="col">Permit ID</th>
    </tr>
  </thead>
  <tbody>
    {bus.map((bus, index) =>(
        <tr key={index}>
            <th scope="row">{index+1}</th>
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
                onClick={() => {openInPopup(bus)}}
                >
                    <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button className="btn btn-danger" href="/add" onClick={() => {onDelete(bus._id)}} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
            </td>
        </tr>
    ))}
  </tbody>
</table>
<button className="btn btn-success" onClick={() => setOpenPopup(true)}>Add new bus</button>
        <Popup
        title = "Add new bus form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <Addbus
            recordForEdit={recordForEdit} />
        </Popup>
        
       
        </div>
    )
}

