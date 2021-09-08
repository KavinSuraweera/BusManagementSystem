import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom'

export default function Booking() {

    const [routes, setroutes] = useState([]);
    const [bFrom, setfrom] = useState([]);
    const [show, setShow] = useState(false)
    const [selecterRoute, setSelectedRoute] = useState("");

    useEffect(() => {
        const getRoutes = () => {
            axios.get("http://localhost:8000/route/").then((res) => {
                setroutes(res.data);
            }).catch((err) => {
                alert(err.message)
            })
        }
        getRoutes();
    }, [])



    function sendfrom(loc){

        axios.get(`http://localhost:8000/booking/get/${loc}`).then((res) => {
            setfrom(res.data.bookings)
            console.log(res.data.bookings)
        }).catch((err) => {
            alert(err)
        })
    }

    






    return (
        <div>
            <div className="booking-container-1">
                <div className="booking-container-2">
                    <div className="booking-container-left">
                        <div className="img-1">
                        </div>

                    </div>
                    <div className="booking-container-right">
                        <h1>ticket reservation</h1>
                        <hr className="gold-hr" />
                        <form className="booking-form">
                            <div className="form-row">
                                <input type="radio" name="way-selection" id="oneway" value="one way" className="radio" onChange={()=>setShow(false)}/> <label for="one-way">One way</label>
                                <input type="radio" name="way-selection" id="roundtrip" value="round trip" className="radio" onChange={()=>setShow(true)}/> <label for="round-trip">Round Trip</label>
                                <hr />
                            </div>
                            <div className="form-row">
                                <label for="depature">Select Route</label>
                                <select id="depatureTime" className="form-input-2"
                                    onChange={(e) => {
                                        const sRoute = e.target.value;
                                        sendfrom(sRoute);
                                    }}>
                                    <option selected >Select route</option>
                                    {routes.map((routes, index) => (
                                        <option key={index}>{routes.from}</option>


                                    ))}

                                </select>

                                <label for="destination">Destination</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>Going To</option>
                                    {bFrom.map((bFrom, index) => (
                                        <option key={index}>{bFrom.to}</option>
                                    ))}
                                </select>
                                <hr />
                            </div>

                            <div className="form-row">
                                <label for="depature">Depature Time</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select>
                                <hr />
                            </div>
                            
                            {
                                show?<div className="form-row">
                                <label for="arrivalTime">Return Time</label>
                                <select id="arrivalTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select>
                                <hr />
                            </div>:null
                            }

                            

                            <div className="form-row">
                                <label for="Adult">Adult</label>
                                <select id="Adult" class="form-input-3">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label for="Student">Student</label>
                                <select id="Student" class="form-input-3">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>

                                <label for="Child">Child</label>
                                <select id="Child" class="form-input-3">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <hr />

                            </div>

                            <div className="form-raw">
                                <div className="search-button">
                                    <Link to="/avilablebus">
                                        <button type="button" class="btn btn-primary"><i class="fas fa-search"></i>&nbsp;Seatch</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )

}