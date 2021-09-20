import {React, useEffect, useState} from 'react'
import { useLocation} from 'react-router-dom';
import axios from 'axios';


export default function Seats() {


    const [bus, setBus] = useState({});

    const location = useLocation();

    const busNumber = location.state.BusNumber;
    const adult = location.state.adult;
    const child = location.state.child;
    const student = location.state.student;

    const seats = bus;
    console.log(seats)
    



    useEffect(() => {
        axios.get(`http://localhost:8000/bus/getbybusid/${busNumber}`).then((res) =>{
            setBus(res.data.bus)
         
        }).catch((err) =>{
            alert("get bus id err")
        })
    }, [])

    






    return (
        <div>
            <div className="seat-container">
                <div className="bus">
                    <div className="seat-rows">
                        <div>
                            
                        </div>
                        {/* <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid a" id="10"  onclick={clickseat(id)}></div>
                        </div>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid" id="10"></div>
                        </div>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid" id="10"></div>
                        </div>

                        <br/>
                        <br/>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid" id="10"></div>
                        </div>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid" id="10"></div>
                        </div>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="1"></div>
                            <div className="seatid" id="2"></div>
                            <div className="seatid" id="3"></div>
                            <div className="seatid" id="4"></div>
                            <div className="seatid" id="5"></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid" id="10"></div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div>
                <h1>{busNumber}</h1>
                <h1>{child}</h1>

               
                <h1>{adult}</h1> 
                <h1>{student}</h1>
            </div>
        </div>
    )
}
