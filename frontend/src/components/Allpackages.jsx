import axios from 'axios'
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Add from './Addpackage';
import Popup from "../components/popup";
import Update from '../components/Updatepackage';
import Addpackage from './Addpackage';

export default function Allpackages() {

    const[recordForEdit, setRecordForEdit] = useState(null);
    const[openPopup, setOpenPopup] = useState(false);
    
    const[packages, setPackages] = useState([]);

    useEffect(() =>{
        const getPackages = () =>{
            axios.get("http://localhost:8000/package/").then((res) =>{
                setPackages(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getPackages();
    },[])

    

    const [pId, setId] =useState("")
    function sendId(e){
        e.preventDefault();
        alert(pId)
        const packageId ={
            pId,
        }

        axios.post(`http://localhost:8000/package/update/${pId}`, packageId).then(() => {
            alert("Updated")
        }).catch((err) => {
            alert(err)
        })
    }

   
    function onDelete(pId){
        axios.delete(`http://localhost:8000/package/delete/${pId}`).then((req,res) => {
            window.location.reload(false);
        }).catch((err)=>{
            alert(err);
        })
    }



    const openInPopup = packages =>{
        setRecordForEdit(packages)
        setOpenPopup(true);
        console.log(packages)
    }


    useState(() => { 
        if(recordForEdit != null){
            setPackages({
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
        <th scope="col">Name</th>
        <th scope="col">Trips Count</th>
        <th scope="col">Time Period</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {packages.map((packages, index) =>(
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{packages.name}</td>
            <td>{packages.trips_count}</td>
            <td>{packages.time_period}</td>
            <td>{packages.price}</td>
            <td>
            <button type="button" class="btn btn-primary">
                <i class="far fa-eye"></i>&nbsp;View
            </button>
            &nbsp;
                <button 
                className="btn btn-warning"
                onClick={() => {openInPopup(packages)}}
                >
                    <i className="fas fa-edit"></i>&nbsp;Update
                </button>
                &nbsp;
                <button className="btn btn-danger" href="/add" onClick={() => {onDelete(packages._id)}} >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                </button>
            </td>
        </tr>
    ))}
  </tbody>
</table>
<button className="btn btn-success" onClick={() => setOpenPopup(true)}>Add new package</button>
        <Popup
        title = "Add new package form."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        >
            <Addpackage
            recordForEdit={recordForEdit} />
        </Popup>
        
       
        </div>
    )
}
