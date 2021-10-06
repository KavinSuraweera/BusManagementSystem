import { React, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import { Backdrop, Container } from '@material-ui/core';


export default function Seats() {


    const [bus, setBus] = useState({});

    const history = useHistory();
    const location = useLocation();

    const busNumber = location.state.BusNumber;
    const adult = location.state.adult;
    const child = location.state.child;
    const student = location.state.student;






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


    function display(checked){
        console.log(checked)
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
                <div className="bus">
                    <div className="seat-rows">


                        {/* ====================== */}

                        <ul>

                            <li><label><input
                                        onChange={e =>{
                                            let checked = e.target.checked;
                                            let id = 1 
                                            if(checked == true){
                                                console.log(id,checked)
                                            }else{
                                                console.log(id,checked)
                                            }
                                            // display(checked);
                                        }} type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                        </ul>
                        <ul>

                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                        </ul>

                        <ul>

                            <li><label><input
                                        onChange={e =>{
                                            let checked = e.target.checked;
                                            display(checked);
                                        }} type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                        </ul>
                        <br />
                        <ul>

                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                        </ul>
                        <ul>

                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                            <li><label><input type="checkbox" className="seat occupied" /><i className="fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                        </ul>



                        {/* ====================== */}

                        {/*
                         <div className="row" id="1">
                            <div ></div>
                            <div className="seatid selected" id="1"></div>
                            <div className="seatid occupied" id="2"></div>
                            <div className="seatid occupied" id="3"></div>
                            <div className="seatid selected" id="4"></div>
                            <div className="seatid" id="5"><input type="radio"/></div>
                            <div className="seatid" id="6"></div>
                            <div className="seatid" id="7"></div>
                            <div className="seatid" id="8"></div>
                            <div className="seatid" id="9"></div>
                            <div className="seatid " id="10"></div>
                        </div>

                        

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="11"></div>
                            <div className="seatid" id="12"></div>
                            <div className="seatid" id="13"></div>
                            <div className="seatid" id="14"></div>
                            <div className="seatid" id="15"></div>
                            <div className="seatid" id="16"></div>
                            <div className="seatid" id="17"></div>
                            <div className="seatid" id="18"></div>
                            <div className="seatid" id="19"></div>
                            <div className="seatid" id="20"></div>
                        </div>

                        

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="21"></div>
                            <div className="seatid" id="22"></div>
                            <div className="seatid" id="23"></div>
                            <div className="seatid" id="24"></div>
                            <div className="seatid" id="25"></div>
                            <div className="seatid" id="26"></div>
                            <div className="seatid" id="27"></div>
                            <div className="seatid" id="28"></div>
                            <div className="seatid" id="29"></div>
                            <div className="seatid" id="30"></div>
                        </div>

                        <br/>
                        <br/>

                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="31"></div>
                            <div className="seatid" id="32"></div>
                            <div className="seatid" id="33"></div>
                            <div className="seatid" id="34"></div>
                            <div className="seatid" id="35"></div>
                            <div className="seatid" id="36"></div>
                            <div className="seatid" id="37"></div>
                            <div className="seatid" id="38"></div>
                            <div className="seatid" id="39"></div>
                            <div class="seatid" id="40"></div>
                        </div>
                        
                        <div className="row" id="1">
                            <div className="rowNumb" id="1"></div>
                            <div className="seatid" id="41"></div>
                            <div className="seatid" id="42"></div>
                            <div className="seatid" id="43"></div>
                            <div className="seatid" id="44"></div>
                            <div className="seatid" id="45"></div>
                            <div className="seatid" id="46"></div>
                            <div className="seatid" id="47"></div>
                            <div className="seatid" id="48"></div>
                            <div className="seatid" id="49"></div>
                            <div className="seatid" id="50"></div>
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
