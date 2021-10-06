import { React, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import { Backdrop, Container } from '@material-ui/core';


export default function Seats() {


    const [bus, setBus] = useState({});
    const [busNumber, setBusId] = useState();
    const [adult, setAdult] = useState();
    const [child, setChild] = useState();
    const [student, setStudent] = useState();

    const [seat01, setSeat1] = useState();

    const history = useHistory();
    const location = useLocation();


    


    useEffect(() => {
        setBusId(location.state.BusNumber);
        setAdult(location.state.adult);
        setChild(location.state.child);
        setStudent(location.state.student);
    },[])



    useEffect(() => {
        axios.get(`http://localhost:8000/bus/getbybusid/${busNumber}`).then((res) => {
            setBus(res.data.bus)

        }).catch((err) => {
            alert("get bus id err")
        })
    }, [])




    useEffect(() => {

        const container = document.querySelector('.seat-rows');

        container.addEventListener("click", (e) => {
            if (e.target.classList.contains('seatid')) {
                e.target.classList.toggle('selected');
            }
        })

    })


    function bookSeats(){

        const busId = busNumber;
        const adultsCount = adult;
        const childrenCount = child;
        const studentCount = student;
        const seat1 = seat01;

        const newSeats = {
            busId,
            adultsCount,
            childrenCount,
            studentCount,
            seat1
        }

        axios.post("http://localhost:8000/seats/add", newSeats).then(() => {
            alert("Seats booked ")
            window.location.reload(false);
        }).catch((err) => {
            alert("hi")
        })
    }






    return (
        <div className="usr_background">
            <Header />
            <div className="seat-container">
                <button type="button" class="btn btn-primary"
                    onClick={() => {
                        history.goBack()
                    }
                    }>

                    <i class="fas fa-backward"></i></button>
                <h1>SELECT SEATS</h1>
                <hr />
                <form>
                    <div className="bus">

                        <div className="seat-rows">


                            {/* ====================== */}

                            <ul>


                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat1(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" checked={true} className="seat occupied" /><i className="i occupied fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            <ul>

                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>

                            <ul>

                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            <br />
                            <ul>

                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            <ul>

                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>


                        </div>
                    </div>
                </form>
                <button onClick={()=>{
                    bookSeats();
                }}>a</button>

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
