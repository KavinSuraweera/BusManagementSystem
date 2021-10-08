import { React, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import { useSelector, useDispatch } from "react-redux";
import { Backdrop, Container } from '@material-ui/core';


export default function Seats() {

    const id = useSelector((state) => state.auth.id);

    const [bus, setBus] = useState({});

    const [seats, setSeats] = useState("");
    const [seatsStatus, setSeatsStatus] = useState("");

    const [seat01, setSeat1] = useState("");
    const [seat02, setSeat2] = useState("");
    const [seat03, setSeat3] = useState("");
    const [seat04, setSeat4] = useState();
    const [seat05, setSeat5] = useState();
    const [seat06, setSeat6] = useState();
    const [seat07, setSeat7] = useState();
    const [seat08, setSeat8] = useState();
    const [seat09, setSeat9] = useState();
    const [seat010, setSeat10] = useState();
    const [seat011, setSeat11] = useState();
    const [seat012, setSeat12] = useState();
    const [seat013, setSeat13] = useState();
    const [seat014, setSeat14] = useState();
    const [seat015, setSeat15] = useState();
    const [seat016, setSeat16] = useState();
    const [seat017, setSeat17] = useState();
    const [seat018, setSeat18] = useState();
    const [seat019, setSeat19] = useState();
    const [seat020, setSeat20] = useState();
    const [seat021, setSeat21] = useState();
    const [seat022, setSeat22] = useState();
    const [seat023, setSeat23] = useState();
    const [seat024, setSeat24] = useState();
    const [seat025, setSeat25] = useState();
    const [seat026, setSeat26] = useState();
    const [seat027, setSeat27] = useState();
    const [seat028, setSeat28] = useState();
    const [seat029, setSeat29] = useState();
    const [seat030, setSeat30] = useState();
    const [seat031, setSeat31] = useState();
    const [seat032, setSeat32] = useState();
    const [seat033, setSeat33] = useState();
    const [seat034, setSeat34] = useState();
    const [seat035, setSeat35] = useState();
    const [seat036, setSeat36] = useState();
    const [seat037, setSeat37] = useState();
    const [seat038, setSeat38] = useState();
    const [seat039, setSeat39] = useState();
    const [seat040, setSeat40] = useState();
    const [seat041, setSeat41] = useState();
    const [seat042, setSeat42] = useState();
    const [seat043, setSeat43] = useState();
    const [seat044, setSeat44] = useState();
    const [seat045, setSeat45] = useState();
    const [seat046, setSeat46] = useState();
    const [seat047, setSeat47] = useState();
    const [seat048, setSeat48] = useState();
    const [seat049, setSeat49] = useState();
    const [seat050, setSeat50] = useState();



    const history = useHistory();
    const location = useLocation();



    const busNumber = location.state.BusNumber
    const adult = location.state.adult
    const child = location.state.child
    const student = location.state.student


    useEffect(() => {


        axios.get(`http://localhost:8000/seats/getseats/${busNumber}`).then((res) => {
            setSeats(res.data.seats[0])
            setSeat1(res.data.seats[0].seat1)
            setSeat2(res.data.seats[0].seat2)
            setSeat3(res.data.seats[0].seat3)
            setSeat4(res.data.seats[0].seat4)
            setSeat5(res.data.seats[0].seat5)
            setSeat6(res.data.seats[0].seat6)
            setSeat7(res.data.seats[0].seat7)
            setSeat8(res.data.seats[0].seat8)
            setSeat9(res.data.seats[0].seat9)
            setSeat10(res.data.seats[0].seat10)
            setSeat11(res.data.seats[0].seat11)
            setSeat12(res.data.seats[0].seat12)
            setSeat13(res.data.seats[0].seat13)
            setSeat14(res.data.seats[0].seat14)
            setSeat15(res.data.seats[0].seat15)
            setSeat16(res.data.seats[0].seat16)
            setSeat17(res.data.seats[0].seat17)
            setSeat18(res.data.seats[0].seat18)
            setSeat19(res.data.seats[0].seat19)
            setSeat20(res.data.seats[0].seat20)
            setSeat21(res.data.seats[0].seat21)
            setSeat22(res.data.seats[0].seat22)
            setSeat23(res.data.seats[0].seat23)
            setSeat24(res.data.seats[0].seat24)
            setSeat25(res.data.seats[0].seat25)
            setSeat26(res.data.seats[0].seat26)
            setSeat27(res.data.seats[0].seat27)
            setSeat28(res.data.seats[0].seat28)
            setSeat29(res.data.seats[0].seat29)
            setSeat30(res.data.seats[0].seat30)
            setSeat31(res.data.seats[0].seat31)
            setSeat32(res.data.seats[0].seat32)
            setSeat33(res.data.seats[0].seat33)
            setSeat34(res.data.seats[0].seat34)
            setSeat35(res.data.seats[0].seat34)
            setSeat36(res.data.seats[0].seat36)
            setSeat37(res.data.seats[0].seat37)
            setSeat38(res.data.seats[0].seat38)
            setSeat39(res.data.seats[0].seat39)
            setSeat40(res.data.seats[0].seat40)
            setSeat41(res.data.seats[0].seat41)
            setSeat42(res.data.seats[0].seat42)
            setSeat43(res.data.seats[0].seat43)
            setSeat44(res.data.seats[0].seat34)
            setSeat45(res.data.seats[0].seat45)
            setSeat46(res.data.seats[0].seat46)
            setSeat47(res.data.seats[0].seat47)
            setSeat48(res.data.seats[0].seat48)
            setSeat49(res.data.seats[0].seat49)
            setSeat50(res.data.seats[0].seat50)
            console.log("sets eats not null")
            setSeatsStatus(!null)
            

        }).catch((err) => {
            setSeatsStatus(null)
            console.log("set seats null")
        })


    }, [])

 
    

    
    

    function bookOrAdd(){
        if (seatsStatus == null){
            console.log("Null seats")
            bookSeats()
        }else{
            console.log("already exisits", )
            //console.log(seats._id)
            
            updateSeats(seats._id)
            
        }
    }






    function bookSeats() {

        const busId = busNumber;
        const seat1 = seat01; 
        const seat2 = seat02;
        const seat3 = seat03;
        const seat4 = seat04;
        const seat5 = seat05;
        const seat6 = seat06;
        const seat7 = seat07;
        const seat8 = seat08;
        const seat9 = seat09;
        const seat10 = seat010;
        const seat11 = seat011;
        const seat12 = seat012;
        const seat13 = seat013;
        const seat14 = seat014;
        const seat15 = seat015;
        const seat16 = seat016;
        const seat17 = seat017;
        const seat18 = seat018;
        const seat19 = seat019;
        const seat20 = seat020;
        const seat21 = seat021;
        const seat22 = seat022;
        const seat23 = seat023;
        const seat24 = seat024;
        const seat25 = seat025;
        const seat26 = seat026;
        const seat27 = seat027;
        const seat28 = seat028;
        const seat29 = seat029;
        const seat30 = seat030;
        const seat31 = seat031;
        const seat32 = seat032;
        const seat33 = seat033;
        const seat34 = seat034;
        const seat35 = seat035;
        const seat36 = seat036;
        const seat37 = seat037;
        const seat38 = seat038;
        const seat39 = seat039;
        const seat40 = seat040;
        const seat41 = seat041;
        const seat42 = seat042;
        const seat43 = seat043;
        const seat44 = seat044;
        const seat45 = seat045;
        const seat46 = seat046;
        const seat47 = seat047;
        const seat48 = seat048;
        const seat49 = seat049;
        const seat50 = seat050;

        const newSeats = {
            busId,
            seat1,
            seat2,
            seat3,
            seat4,
            seat5,
            seat6,
            seat7,
            seat8,
            seat9,
            seat10,
            seat11,
            seat12,
            seat13,
            seat14,
            seat15,
            seat16,
            seat17,
            seat18,
            seat19,
            seat20,
            seat21,
            seat22,
            seat23,
            seat24,
            seat25,
            seat26,
            seat27,
            seat28,
            seat29,
            seat30,
            seat31,
            seat32,
            seat33,
            seat34,
            seat35,
            seat36,
            seat37,
            seat38,
            seat39,
            seat40,
            seat41,
            seat42,
            seat43,
            seat44,
            seat45,
            seat46,
            seat47,
            seat48,
            seat49,
            seat50,
        }

        axios.post("http://localhost:8000/seats/add", newSeats).then(() => {
            alert("Seats booked ")
            window.location.reload(false);
        }).catch((err) => {
            alert(err)
        })
    }

    function updateSeats(id) {

        const busId = busNumber;
        const seat1 = seat01; 
        const seat2 = seat02;
        const seat3 = seat03;
        const seat4 = seat04;
        const seat5 = seat05;
        const seat6 = seat06;
        const seat7 = seat07;
        const seat8 = seat08;
        const seat9 = seat09;
        const seat10 = seat010;
        const seat11 = seat011;
        const seat12 = seat012;
        const seat13 = seat013;
        const seat14 = seat014;
        const seat15 = seat015;
        const seat16 = seat016;
        const seat17 = seat017;
        const seat18 = seat018;
        const seat19 = seat019;
        const seat20 = seat020;
        const seat21 = seat021;
        const seat22 = seat022;
        const seat23 = seat023;
        const seat24 = seat024;
        const seat25 = seat025;
        const seat26 = seat026;
        const seat27 = seat027;
        const seat28 = seat028;
        const seat29 = seat029;
        const seat30 = seat030;
        const seat31 = seat031;
        const seat32 = seat032;
        const seat33 = seat033;
        const seat34 = seat034;
        const seat35 = seat035;
        const seat36 = seat036;
        const seat37 = seat037;
        const seat38 = seat038;
        const seat39 = seat039;
        const seat40 = seat040;
        const seat41 = seat041;
        const seat42 = seat042;
        const seat43 = seat043;
        const seat44 = seat044;
        const seat45 = seat045;
        const seat46 = seat046;
        const seat47 = seat047;
        const seat48 = seat048;
        const seat49 = seat049;
        const seat50 = seat050;

        const updateSeats = {
            busId,
            seat1,
            seat2,
            seat3,
            seat4,
            seat5,
            seat6,
            seat7,
            seat8,
            seat9,
            seat10,
            seat11,
            seat12,
            seat13,
            seat14,
            seat15,
            seat16,
            seat17,
            seat18,
            seat19,
            seat20,
            seat21,
            seat22,
            seat23,
            seat24,
            seat25,
            seat26,
            seat27,
            seat28,
            seat29,
            seat30,
            seat31,
            seat32,
            seat33,
            seat34,
            seat35,
            seat36,
            seat37,
            seat38,
            seat39,
            seat40,
            seat41,
            seat42,
            seat43,
            seat44,
            seat45,
            seat46,
            seat47,
            seat48,
            seat49,
            seat50,
        }

        axios.put(`http://localhost:8000/seats/update/${id}`, updateSeats).then(() => {
            alert("Seats booked ")
            window.location.reload(false);
        }).catch((err) => {
            alert(err)
        })
    }

    

  


    


    
  

    return (
        <div className="usr_background">
            <Header />
            <div className="seat-container">
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        history.goBack()
                    }
                    }>

                    <i className="fas fa-backward"></i></button>
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
                                        console.log(seats.seat1?true:checked);
                                    }}
                                    type="checkbox" checked={seats.seat1?"checked":null} className="seat occupied" /><i className={seats.seat1?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat2(checked);
                                        console.log(seats.seat2?true:checked);
                                    }}
                                    type="checkbox" checked={seats.seat2?"checked":null} className="seat occupied" /><i className={seats.seat2?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat3(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat3?"checked":null} className="seat occupied" /><i className={seats.seat3?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat4(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat4?"checked":null} className="seat occupied" /><i className={seats.seat4?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat5(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat5?"checked":null} className="seat occupied" /><i className={seats.seat5?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat6(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat6?"checked":null} className="seat occupied" /><i className={seats.seat6?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat7(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat7?"checked":null} className="seat occupied" /><i className={seats.seat7?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat8(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat8?"checked":null} className="seat occupied" /><i className={seats.seat8?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat9(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat9?"checked":null} className="seat occupied" /><i className={seats.seat9?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat10(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" checked={seats.seat10?"checked":null} className="seat occupied" /><i className={seats.seat10?"i occupied fas fa-chair":"i fas fa-chair"} value="" name="" id="i occupied"></i></label></li>

                            </ul>

                            {/* 2nd row */}

                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat11(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat12(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat13(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat14(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat15(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat16(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat17(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat18(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat19(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat20(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>

                            {/* 3rd row */}

                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat21(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat22(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat23(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat24(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat25(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat26(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat27(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat28(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat29(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat30(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            <br />

                            {/* 4th raw */}
                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat31(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat32(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat33(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat34(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat35(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat36(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat37(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat38(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat39(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat40(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>
                            {/* 5th raw */}
                            <ul>

                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat41(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat42(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat43(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat44(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat45(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat46(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat47(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat48(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat49(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
                                <li><label><input
                                    onChange={e => {
                                        let checked = e.target.checked;
                                        setSeat50(checked);
                                        console.log(checked);
                                    }}
                                    type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

                            </ul>


                        </div>
                    </div>
                </form>
                <button onClick={() => {
                    bookOrAdd();
                }} className="btn btn-success">Book my seats </button>

            </div>

            <div>

                <h1>{busNumber}</h1>
                <h1>{id}</h1>
                <h1>{child}</h1>


                <h1>{adult}</h1>
                <h1>{student}</h1>

            </div>
        </div>
    )
}
