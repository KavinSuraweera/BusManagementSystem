// import { React, useEffect, useState } from 'react'
// import { useLocation, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import Header from './header';
// import { Backdrop, Container } from '@material-ui/core';


// export default function Seats() {


//     const [bus, setBus] = useState({});
//     const [busNumber, setBusId] = useState();
//     const [adult, setAdult] = useState();
//     const [child, setChild] = useState();
//     const [student, setStudent] = useState();

//     const [seat01, setSeat1] = useState(); 
//     const [seat02, setSeat2] = useState();
//     const [seat03, setSeat3] = useState();
//     const [seat04, setSeat4] = useState();
//     const [seat05, setSeat5] = useState();
//     const [seat06, setSeat6] = useState();
//     const [seat07, setSeat7] = useState();
//     const [seat08, setSeat8] = useState();
//     const [seat09, setSeat9] = useState();
//     const [seat010, setSeat10] = useState();
//     const [seat011, setSeat11] = useState();
//     const [seat012, setSeat12] = useState();
//     const [seat013, setSeat13] = useState();
//     const [seat014, setSeat14] = useState();
//     const [seat015, setSeat15] = useState();
//     const [seat016, setSeat16] = useState();
//     const [seat017, setSeat17] = useState();
//     const [seat018, setSeat18] = useState();
//     const [seat019, setSeat19] = useState();
//     const [seat020, setSeat20] = useState();
//     const [seat021, setSeat21] = useState();
//     const [seat022, setSeat22] = useState();
//     const [seat023, setSeat23] = useState();
//     const [seat024, setSeat24] = useState();
//     const [seat025, setSeat25] = useState();
//     const [seat026, setSeat26] = useState();
//     const [seat027, setSeat27] = useState();
//     const [seat028, setSeat28] = useState();
//     const [seat029, setSeat29] = useState();
//     const [seat030, setSeat30] = useState();
//     const [seat031, setSeat31] = useState();
//     const [seat032, setSeat32] = useState();
//     const [seat033, setSeat33] = useState();
//     const [seat034, setSeat34] = useState();
//     const [seat035, setSeat35] = useState();
//     const [seat036, setSeat36] = useState();
//     const [seat037, setSeat37] = useState();
//     const [seat038, setSeat38] = useState();
//     const [seat039, setSeat39] = useState();
//     const [seat040, setSeat40] = useState();
//     const [seat041, setSeat41] = useState();
//     const [seat042, setSeat42] = useState();
//     const [seat043, setSeat43] = useState();
//     const [seat044, setSeat44] = useState();
//     const [seat045, setSeat45] = useState();
//     const [seat046, setSeat46] = useState();
//     const [seat047, setSeat47] = useState();
//     const [seat048, setSeat48] = useState();
//     const [seat049, setSeat49] = useState();
//     const [seat050, setSeat50] = useState();



//     const history = useHistory();
//     const location = useLocation();


    


//     useEffect(() => {
//         setBusId(location.state.BusNumber);
//         setAdult(location.state.adult);
//         setChild(location.state.child);
//         setStudent(location.state.student);
//     },[])



//     useEffect(() => {
//         axios.get(`http://localhost:8000/bus/getbybusid/${busNumber}`).then((res) => {
//             setBus(res.data.bus)

//         }).catch((err) => {
//             alert("get bus id err")
//         })
//     }, [])




//     useEffect(() => {

//         const container = document.querySelector('.seat-rows');

//         container.addEventListener("click", (e) => {
//             if (e.target.classList.contains('seatid')) {
//                 e.target.classList.toggle('selected');
//             }
//         })

//     })


//     function bookSeats(){

//         const busId = busNumber;
//         const adultsCount = adult;
//         const childrenCount = child;
//         const studentCount = student;
//         const seat1 = seat01;
//         const seat2 = seat02;
//         const seat3 = seat03;
//         const seat4 = seat04;
//         const seat5 = seat05;
//         const seat6 = seat06;
//         const seat7 = seat07;
//         const seat8 = seat08;
//         const seat9 = seat09;
//         const seat10 = seat010;
//         const seat11 = seat011;
//         const seat12 = seat012;
//         const seat13 = seat013;
//         const seat14 = seat014;
//         const seat15 = seat015;
//         const seat16 = seat016;
//         const seat17 = seat017;
//         const seat18 = seat018;
//         const seat19 = seat019;
//         const seat20 = seat020;
//         const seat21 = seat021;
//         const seat22 = seat022;
//         const seat23 = seat023;
//         const seat24 = seat024;
//         const seat25 = seat025;
//         const seat26 = seat026;
//         const seat27 = seat027;
//         const seat28 = seat028;
//         const seat29 = seat029;
//         const seat30 = seat030;
//         const seat31 = seat031;
//         const seat32 = seat032;
//         const seat33 = seat033;
//         const seat34 = seat034;
//         const seat35 = seat035;
//         const seat36 = seat036;
//         const seat37 = seat037;
//         const seat38 = seat038;
//         const seat39 = seat039;
//         const seat40 = seat040;
//         const seat41 = seat041;
//         const seat42 = seat042;
//         const seat43 = seat043;
//         const seat44 = seat044;
//         const seat45 = seat045;
//         const seat46 = seat046;
//         const seat47 = seat047;
//         const seat48 = seat048;
//         const seat49 = seat049;
//         const seat50 = seat050;

//         const newSeats = {
//             busId,
//             adultsCount,
//             childrenCount,
//             studentCount,
//             seat1  //
//             seat2
//             seat3  
//             seat4  
//             seat5  
//             seat6  
//             seat7 
//             seat8  
//             seat9  
//             seat10  
//             seat11  
//             seat12  
//             seat13  
//             seat14  
//             seat15  
//             seat16  
//             seat17  
//             seat18  
//             seat19  
//             seat20  
//             seat21  
//             seat22  
//             seat23 
//             seat24  
//             seat25  
//             seat26  
//             seat27  
//             seat28  
//             seat29  
//             seat30  
//             seat31  
//             seat32  
//             seat33  
//             seat34  
//             seat35  
//             seat36  
//             seat37  
//             seat38  
//             seat39  
//             seat40  
//             seat41  
//             seat42  
//             seat43  
//             seat44  
//             seat45  
//             seat46  
//             seat47  
//             seat48  
//             seat49  
//             seat50  
//         }

//         axios.post("http://localhost:8000/seats/add", newSeats).then(() => {
//             alert("Seats booked ")
//             window.location.reload(false);
//         }).catch((err) => {
//             alert("hi")
//         })
//     }






//     return (
//         <div className="usr_background">
//             <Header />
//             <div className="seat-container">
//                 <button type="button" class="btn btn-primary"
//                     onClick={() => {
//                         history.goBack()
//                     }
//                     }>

//                     <i class="fas fa-backward"></i></button>
//                 <h1>SELECT SEATS</h1>
//                 <hr />
//                 <form>
//                     <div className="bus">

//                         <div className="seat-rows">


//                             {/* ====================== */}

//                             <ul>


//                                 <li><label><input
//                                     onChange={e => {
//                                         let checked = e.target.checked;
//                                         setSeat1(checked);
//                                         console.log(checked);
//                                     }}
//                                     type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" checked={true} className="seat occupied" /><i className="i occupied fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

//                             </ul>
//                             <ul>

//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

//                             </ul>

//                             <ul>

//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

//                             </ul>
//                             <br />
//                             <ul>

//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

//                             </ul>
//                             <ul>

//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>
//                                 <li><label><input type="checkbox" className="seat occupied" /><i className="i fas fa-chair" value="" name="" id="i occupied"></i></label></li>

//                             </ul>


//                         </div>
//                     </div>
//                 </form>
//                 <button onClick={()=>{
//                     bookSeats();
//                 }}>a</button>

//             </div>

//             <div>
//                 <h1>{busNumber}</h1>
//                 <h1>{child}</h1>


//                 <h1>{adult}</h1>
//                 <h1>{student}</h1>

//             </div>
//         </div>
//     )
// }
