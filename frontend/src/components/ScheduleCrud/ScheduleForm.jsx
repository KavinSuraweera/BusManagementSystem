import axios from 'axios'
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Popup from "../../components/popup";

import Addschedule from './ScheduleAdd'; 


export default function Allpackagse() {

    const[recordForEdit, setRecordForEdit] = useState(null);
    const[openPopup, setOpenPopup] = useState(false);
    
    const[schedule, setschedule] = useState([]);

    useEffect(() =>{
        const getschedule = () =>{
            axios.get("http://localhost:8000/busschedule/").then((res) =>{
                setschedule(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getschedule();
    },[])

    

    

    const [sId, setId] =useState("")
    function sendId(e){
        e.preventDefault();
        alert(sId)
        const scheduleId ={
            sId,
        }

        axios.post(`http://localhost:8000/busschedule/update/${sId}`, scheduleId).then(() => {
            alert("Updated")
        }).catch((err) => {
            alert(err)
        })
    }

   
    function onDelete(sId){
        axios.delete(`http://localhost:8000/busschedule/delete/${sId}`).then((req,res) => {
            window.location.reload(false);
        }).catch((err)=>{
            alert(err);
        })
    }



    const openInPopup = schedule =>{
        setRecordForEdit(schedule)
        setOpenPopup(true);
        console.log(schedule)
    }


    useState(() => { 
        if(recordForEdit != null){
            setschedule({
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
        <th scope="col">Schedule ID</th>
        <th scope="col">Route ID</th>
        <th scope="col">Route</th>
        <th scope="col">Departure Time</th>
        <th scope="col">Bus Number</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {schedule.map((schedule, index) =>(
        <tr key={index}>
            <th scope="row">{index+1}</th>
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
                onClick={() => {openInPopup(schedule)}}
                >
                    <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button className="btn btn-danger" href="/add" onClick={() => {onDelete(schedule._id)}} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
            </td>
        </tr>
    ))}
  </tbody>
</table>
<button className="btn btn-success" onClick={() => setOpenPopup(true)}>Add new schedule</button>
        <Popup
        title = "Add New  Bus Schedule Plan."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <Addschedule
            recordForEdit={recordForEdit} />
        </Popup>
        
       
        </div>
    )
}

