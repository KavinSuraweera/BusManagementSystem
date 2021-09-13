import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom'
import Header from './header'
import { Description } from '@material-ui/icons';



export default function Booking() {

    const [routes, setroutes] = useState([]);
    const [routedata , setRouteData] = useState([]);
    const [route, setRoute] = useState([]);



    const [routeId, setRId] = useState("")
    const [schedule, setSchedules] = useState([]);
    const [show, setShow] = useState(false);
    const [selecterRoute, setSelectedRoute] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");



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

    // useEffect(() => {
    //     const getSchedules = (routeId) => {
    //         axios.get("http://localhost:8000/booking/get/").then((res) => {
    //             setSchedule(res.data);
    //         }).catch((err) => {
    //             alert(err.message)
    //         })
    //         getSchedules();
    //     }
    // }, [])


   
    function sendTo(to){
        axios.get(`http://localhost:8000/booking/get/${to}`).then((res) =>{
            setRouteData(res.data.bookings);
            console.log(res.data.bookings) 
        }).catch((err) =>{
            alert(err)
        })
    }

    function sendRoute(routeN){
        axios.get(`http://localhost:8000/busShedules/getbyname/${routeN}`).then((res) =>{
            setRoute(res.data)
            console.log(res.data)
        }).catch((err) =>{
            alert("set route err")
        })
    }







   

    console.log(schedule)

   




    return (
        <div>
            <Header />
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
                            {/* <div className="form-row">
                                <input type="radio" name="way-selection" id="oneway" value="one way" className="radio" onChange={() => setShow(false)} /> <label for="one-way">One way</label>
                                <input type="radio" name="way-selection" id="roundtrip" value="round trip" className="radio" onChange={() => setShow(true)} /> <label for="round-trip">Round Trip</label>
                                <hr />
                            </div> */}
                            <div className="form-row">
                                <label for="depature">Your Location</label>
                                <select id="depatureTime" className="form-input-2"
                                    onChange={(e) =>{
                                        sendRoute(e.target.value);
                                    }}>
                                    <option selected >From</option>
                                    {routes.map((routes, index) => (
                                        <option key={index}>{routes.routeName                                        }</option>


                                    ))}

                                </select>

                                {/* <label for="destination">Destination</label>
                                <select id="depatureTime" class="form-input-2"
                                    onChange={handleDepature}
                                >

                                    <option selected>Going To</option>
                                    {bFrom.map((bFrom, index) => (
                                        <option key={index}>{bFrom.to}</option>
                                    ))}
                                </select> */}


                                <hr />
                            </div>
{/* 
                            <div className="form-row">
                                <label for="depature">Depature Time</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    {routes.map((routes, index) => (
                                        <option key={index}>{routes.time}</option>


                                    ))}
                                </select>
                                <hr />
                            </div> */}

                            {
                                show ? <div className="form-row">
                                    <label for="arrivalTime">Return Time</label>
                                    <select id="arrivalTime" class="form-input-2">
                                        <option selected>00.00</option>
                                        <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                    </select>
                                    <hr />
                                </div> : null
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
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <hr />

                            </div>

                            <div className="table">
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
                        {/* {schedule.map((schedule, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{schedule.name}</td>
                                <td>{schedule.trips_count}</td>
                                <td>{schedule.time_period}</td>
                                <td>{schedule.price}</td>
                                <td>
                                    <button type="button" class="btn btn-primary">
                                        <i class="far fa-eye"></i>&nbsp;View
                                    </button>
                                    &nbsp;
                                    
                                    
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
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