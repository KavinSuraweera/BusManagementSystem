import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../CSS/App.css';


export default function Addpackage(props) {

    const { recordForEdit } = props;
    const { addOrEdit } = props;





    const [name, setName] = useState("");
    const [packages, setPackages] = useState([]);
    const [description, setDescription] = useState("");
    const [trips_count, setTripsCount] = useState("");
    const [time_period, setTimePeriod] = useState("");
    const [price, setPrice] = useState("");


    const initialValues = {
        id: '0',
        name: '',
        description: '',
        trips_count: '',
        time_period: '',
        price: ''
    }

    
    

    function sendData() {

        

        const newPackage = {
            id: '0',
            name,
            description,
            trips_count,
            time_period,
            price
        }


        axios.post("http://localhost:8000/package/add", newPackage).then(() => {
            // alert("Package added!")
            window.location.reload(false);

        }).catch((err) => {
            alert(err)
        })

    }

    console.log(packages)

    function editPackage(uId) {
        

      

        
        const updatePackage = {
            name,
            description,
            trips_count,
            time_period,
            price,
        };

        axios
            .put(
                `http://localhost:8000/package/update/${uId}`,
                updatePackage
            )
            .then((res) => {
                alert("Package Updated");
                this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null)
            setPackages({
                ...recordForEdit
            })

    }, [recordForEdit]);

   

    // const handleSubmit = (packages) =>{
    //     if(packages.id == null)
    //         sendData(packages);
    //         else
    //         editPackage(packages.id);
    // }





    //  const handleSubmit = e => {
    //      e.preventDefault()

    //          addOrEdit(packages);

    //  }

    const handleSubmit = () => {
        if (packages._id == null)

            sendData(packages)
        else {

            
            editPackage(packages._id)
        }

    }
    



    return (
        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="packageName" className="form-label">Package Name</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Package Name"
                        Value={packages.name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group">
                    <span className="input-group-text">Descrioprion</span>
                    <textarea className="form-control" aria-label="With textarea"
                        defaultValue={packages.description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="tripsCount" className="form-label">Trips Count</label>
                    <input type="text" className="form-control" id="tripsCount" placeholder="Enter trips count"
                        defaultValue={packages.trips_count}
                        onChange={(e) => {
                            setTripsCount(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Time Period</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Days"
                        defaultValue={packages.time_period}
                        onChange={(e) => {
                            setTimePeriod(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="LKR"
                        defaultValue={packages.price}
                        onChange={(e) => {
                            setPrice(e.target.value);
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