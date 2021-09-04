import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../CSS/App.css';


export default function Addpackage(props) {

    const {addOrEdit, recordForEdit} = props;

    const[packages, setPackages] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [trips_count, setTripsCount] = useState("");
    const [time_period, setTimePeriod] = useState("");
    const [price, setPrice] = useState("");

    function sendData(e){

        e.preventDefault();

        const newPackage = { 
            id :'0',
            name,
            description,
            trips_count,
            time_period,
            price
        }

        
        axios.post("http://localhost:8000/package/add", newPackage).then(()=>{
            // alert("Package added!")
            window.location.reload(false);

        }).catch((err)=>{
            alert(err)
        })

    }
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

    useEffect(()=>{
        if(recordForEdit != null)
        setPackages({
                ...recordForEdit
            })
        
    }, [recordForEdit]);



    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="packageName" className="form-label">Package Name</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Package Name"
                    defaultValue={packages.name}
                    onChange ={(e) =>{
                        setName(e.target.value);
                    }}
                    />
                </div>
            
                <div className="input-group">
                    <span className="input-group-text">Descrioprion</span>
                    <textarea className="form-control" aria-label="With textarea"
                    defaultValue={packages.description}
                    onChange ={(e) =>{
                        setDescription(e.target.value);
                    }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="tripsCount" className="form-label">Trips Count</label>
                    <input type="text" className="form-control" id="tripsCount" placeholder="Enter trips count"
                    defaultValue={packages.trips_count}
                    onChange ={(e) =>{
                        setTripsCount(e.target.value);
                    }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Time Period</label>
                    <input type="text" className="form-control" id="timePeriod"  placeholder="Days"
                    defaultValue={packages.time_period}
                    onChange ={(e) =>{
                        setTimePeriod(e.target.value);
                    }}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="LKR"
                    defaultValue={packages.price}
                    onChange ={(e) =>{
                        setPrice(e.target.value);
                    }}
                    />
                </div>
                
                <div>
                    <button type="submit" className="btn btn-primary" href="/home" onClick={sendData}>Submit</button>
                </div>
                </form>            
        
        </div>
    )
}
