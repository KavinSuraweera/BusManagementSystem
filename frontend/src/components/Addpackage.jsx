import React, { useState, useEffect, useForms } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../CSS/App.css';


export default function Addpackage(props) {

    const { recordForEdit } = props;
    const { addOrEdit } = props;




    const [packages, setPackages] = useState({});

    
    let pname = packages.name;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [trips_count, setTripsCount] = useState("");
    const [time_period, setTimePeriod] = useState("");
    const [price, setPrice] = useState("");

    console.log(packages.name,"aaaaa")
    console.log(name,"bbb")
  


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
 
    const updatePackage = {
        name ,
        description,
        trips_count,
        time_period,
        price,
    };
    function editPackage(uId) {
        
      

        

        axios
            .put(
                `http://localhost:8000/package/update/${uId}`,
                updatePackage
            )
            .then((res) => {
                alert("Package Updated");
                window.location.reload(false);
                //this.setState({ redirect: "/home" });
            })
            .catch((err) => {
                alert(err);
            });
    }





    useEffect(() => {
        if (recordForEdit != null){
            setPackages({
                ...recordForEdit
            })

            setName(recordForEdit.name)
           
            setDescription(recordForEdit.description)
            setTripsCount(recordForEdit.trips_count)
            setTimePeriod(recordForEdit.time_period)
            setPrice(recordForEdit.price)


        }

            

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

    const handleSubmit = (e) => {
        if (packages._id == null)

            sendData(packages)
        else {

            
            editPackage(packages._id) 
        }

    }
    



    return (
        <div className="container">
            <form className="row g-3" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="col-md-6">
                    <label htmlFor="packageName" className="form-label">Package Name</label>
                    <input type="text" className="form-control" id="packageName" placeholder="Enter Package Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>

                <div className="input-group">
                    <span className="input-group-text">Descrioprion</span>
                    <textarea className="form-control" aria-label="With textarea"
                        Value={packages.description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="tripsCount" className="form-label">Trips Count</label>
                    <input type="text" className="form-control" id="tripsCount" placeholder="Enter trips count"
                        Value={packages.trips_count}
                        onChange={(e) => {
                            setTripsCount(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="timePeriod" className="form-label">Time Period</label>
                    <input type="text" className="form-control" id="timePeriod" placeholder="Days"
                        Value={packages.time_period}
                        onChange={(e) => {
                            setTimePeriod(e.target.value);
                        }}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="LKR"
                        Value={packages.price}
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