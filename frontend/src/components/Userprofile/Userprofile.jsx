import { Update } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./ProfileCSS/Userprofile.css";
import Popup from "./userpopup";

 function DeleteCustomer({id}){

  const history = useHistory();

  const deleteProfile = () => {
    axios.delete(`http://localhost:8000/customer/delete/${id}`).then((req, res) => {
      history.push("/Login-Page")
  }).catch((err) => {
      alert(err);
  })
  };
  const[btnlock, setBtnlock]= useState(false);

  console.log(btnlock);

  return (
    <div>
      <input onChange={() => setBtnlock(!btnlock)} value={btnlock} type="checkbox"></input>
      <button className="logout-btn" onClick={deleteProfile} disabled={!btnlock} >
        Confirm
      </button>
    </div>
  )
 }


 function UpdateCustomer({customer , setOpenPopup}){


  const[profile, setProfile] = useState(customer);

  const history = useHistory();

  const onChange=(e)=>{
    setProfile({...profile,[e.target.name]:e.target.value})
} 

  const updateProfile = () => {

    const{      
      UserName,
      FirstName,
      LastName,
      Phone,
      Email,
      Password } = profile;

    const payload = {
      UserName,
      FirstName,
      LastName,
      Phone,
      Email,
      Password
    }

    axios.put(`http://localhost:8000/customer/update/${customer._id}`,payload).then((req, res) => {
      setOpenPopup(false);
      window.location.reload();
  }).catch((err) => {
      alert(err);
  })
  };

  return(
    <div>
            <center>
            <div className="form">
                Username:
                <input  type="text" name="UserName" value={profile.UserName} placeholder="First Name" onChange={onChange}/><br/><br/>
                First Name:
                <input type="text" name="FirstName" value={profile.FirstName} placeholder="First Name" onChange={onChange}/><br/><br/>
                Last Name:
                <input type="text" name="LastName" value={profile.LastName} placeholder="Last Name" onChange={onChange}/><br/><br/>
                Phone:
                <input type="tel" name="Phone" value={profile.Phone} placeholder="Phone" onChange={onChange}/><br/><br/>
                Email:
                <input type="text" name="Email" value={profile.Email} placeholder="Email" onChange={onChange}/><br/><br/>
                Enter Password:
                <input type="text" name="Password" value={profile.Password} placeholder="Enter Password" onChange={onChange}/><br/><br/>

               <button onClick={updateProfile}>
                   Submit
               </button>
            </div>
            </center>
        </div>
  )
}



export default function Userprofile() {


  const history = useHistory();

  const [openPopup, setOpenPopup] = useState(false);

  const initialState = {
    _id: "",
    UserName: "",
    FirstName: "",
    LastName: "",
    Phone: null,
    Email: "",
    Password: "",
  };

  const [error, setError] = useState(false);

  const [profile, setProfile] = useState(initialState);

  const { id } = useParams();

  const[isupdate, setisupdate] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/customer/${id}`)
      .then((response) => {
        setProfile(response?.data?.customer);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const logout = () => {
    history.push("/");
  };

  if (error) {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{profile.UserName}</h1>
      <h3>First Name</h3>
      <p>{profile.FirstName}</p>
      <h3>Last Name</h3>
      <p>{profile.LastName}</p>
      <h3> Phone</h3>
      <p>{profile.Phone}</p>
      <h3>Email</h3>
      <p>{profile.Email}</p>

      <button className="logout-btn" onClick={logout}>
        LOG OUT
      </button>


      <button className="logout-btn" onClick={() => { setOpenPopup(true); setisupdate(false) }}>
        Delete Profile
      </button>

      <button className="logout-btn" onClick={() => {setOpenPopup(true); setisupdate(true) }}>
        Update Profile
      </button>



       <Popup
          openPopup={openPopup}
          title={isupdate ? "Update Profile form" : "Delete Profile form"}
          setOpenPopup={setOpenPopup}
          
        >

        {isupdate? <UpdateCustomer customer={profile} setOpenPopup={setOpenPopup} /> : <DeleteCustomer id ={id}/>}

        </Popup> 

    </div>
  );
}
