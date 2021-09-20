import { Update } from "@material-ui/icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./ProfileCSS/Userprofile.css";
import Popup from "./userpopup";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authAction";
import { setid } from "../../actions/authAction";
import Header from "../header";
import { responsiveFontSizes } from "@material-ui/core";

//DELETE CUSTOMER
function DeleteCustomer({ id }) {
  const history = useHistory();

  const dispatch = useDispatch();

  const deleteProfile = () => {
    axios
      .delete(`http://localhost:8000/customer/delete/${id}`)
      .then((req, res) => {
        dispatch(setid(null));
        history.push("/Login-Page");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const [btnlock, setBtnlock] = useState(false);
  console.log(btnlock);

  return (
    <div>
      <input
        onChange={() => setBtnlock(!btnlock)}
        value={btnlock}
        type="checkbox"
      ></input>
      <button
        className="logout-btn"
        onClick={deleteProfile}
        disabled={!btnlock}
      >
        Confirm
      </button>
    </div>
  );
}

//UPDATE CUSTOMER
function UpdateCustomer({ customer, setOpenPopup }) {
  const [profile, setProfile] = useState(customer);

  const history = useHistory();

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const updateProfile = () => {
    const { UserName, FirstName, LastName, Phone, Email, Password } = profile;

    const payload = {
      UserName,
      FirstName,
      LastName,
      Phone,
      Email,
      Password,
    };

    axios
      .put(`http://localhost:8000/customer/update/${customer._id}`, payload)
      .then((req, res) => {
        setOpenPopup(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
        <div className="form">
          Username:
          <input
            type="text"
            name="UserName"
            value={profile.UserName}
            placeholder="First Name"
            onChange={onChange}
          />
          <br />
          <br />
          First Name:
          <input
            type="text"
            name="FirstName"
            value={profile.FirstName}
            placeholder="First Name"
            onChange={onChange}
          />
          <br />
          <br />
          Last Name:
          <input
            type="text"
            name="LastName"
            value={profile.LastName}
            placeholder="Last Name"
            onChange={onChange}
          />
          <br />
          <br />
          Phone:
          <input
            type="tel"
            name="Phone"
            value={profile.Phone}
            placeholder="Phone"
            onChange={onChange}
          />
          <br />
          <br />
          Email:
          <input
            type="email"
            name="Email"
            value={profile.Email}
            placeholder="Email"
            onChange={onChange}
          />
          <br />
          <br />
          Enter Password:
          <input
            type="text"
            name="Password"
            value={profile.Password}
            placeholder="Enter Password"
            onChange={onChange}
          />
          <br />
          <br />
          <button className="submit-btn" onClick={updateProfile}>
            Submit
          </button>
        </div>
      </center>
    </div>
  );
}

///USER PROFILEEEE

export default function Userprofile() {
  const dispatch = useDispatch();

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

  //Retrieve id from login page
  //Meken thama id ganne
  const id = useSelector((state) => state.auth.id);

  const [isupdate, setisupdate] = useState(false);
  const [profilepic, setProfilepic] = useState(null);

  ///IMAEG HANDLER

  const [image, setImage] = useState(null);

  const imageHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    setImage(formData);

    console.log(formData, "ccccc");
  };

  //IMAGE UP BTN function

  const uploadImage = () => {
    axios
      .post(`http://localhost:8000/customer/image/${id}`, image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImage(null);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/customer/${id}`)
      .then((response) => {
        setProfile(response?.data?.customer);
      })
      .catch((err) => {
        setError(true);
      });

    //IMAGE
    axios
      .get(`http://localhost:8000/customer/image/${id}`)
      .then((response) => {
        const data = response?.data?.image?.image?.split("/");
        setProfilepic(data[1]);
      })
      .catch((err) => {});
  }, []);

  //LOGOUT
  const userlogout = () => {
    dispatch(logout());
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
      <div className="outermost-container">
        <Header />
        <div className="outer-container">
          <div className="left-container">
            <div className="profilepic-container">
              <center>
                {profilepic && (
                  <img
                    className="profilepicture"
                    src={`http://localhost:8000/${profilepic}`}
                    alt="img"
                  />
                )}

                <h1>{profile.UserName}</h1>
              </center>
            </div>
            <div className="userinfo-container">
              <h4>First Name:</h4>
              <p style={{ fontSize: "18px" }}>{profile.FirstName}</p>
              <h4>Last Name:</h4>
              <p style={{ fontSize: "18px" }}>{profile.LastName}</p>
              <h4> Phone:</h4>
              <p style={{ fontSize: "18px" }}>{profile.Phone}</p>
              <h4>Email:</h4>
              <p style={{ fontSize: "18px" }}>{profile.Email}</p>
            </div>

            <div className="button-container">

            <div className="imageadd">
                {!profilepic && (
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple={false}
                    onChange={imageHandler}
                  />
                )}
                {!profilepic && (
                  <button
                    className="picAdd"
                    disabled={!image}
                    onClick={uploadImage}
                  >
                    UPLOAD IMAGE
                  </button>
                )}
              </div>

              <button className="logout-btn" onClick={userlogout}>
                LOG OUT
              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  setOpenPopup(true);
                  setisupdate(false);
                }}
              >
                DELETE PROFILE
              </button>

              <button
                className="update-btn"
                onClick={() => {
                  setOpenPopup(true);
                  setisupdate(true);
                }}
              >
                UPDATE PROFILE
              </button>

              <Popup
                openPopup={openPopup}
                title={isupdate ? "Update Profile form" : "Delete Profile form"}
                setOpenPopup={setOpenPopup}
              >
                {isupdate ? (
                  <UpdateCustomer
                    customer={profile}
                    setOpenPopup={setOpenPopup}
                  />
                ) : (
                  <DeleteCustomer id={id} />
                )}
              </Popup>
            </div>
          </div>
          <div className="right-container">
            <h1>HEllo</h1>
            <br />
            <h1>HEllo</h1>
            <br />
            <h1>HEllo</h1>
            <br />
            <h1>HEllo</h1>
            <br />
            <h1>HEllo</h1>
            <br />
            <h1>HEllo</h1>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div>
//       <Header />
// {profilepic && (
//   <img
//     className="profilepicture"
//     src={`http://localhost:8000/${profilepic}`}
//     alt="img"
//   />
// )}

// <h1>{profile.UserName}</h1>
//             <h3>First Name</h3>
//             <p>{profile.FirstName}</p>
//             <h3>Last Name</h3>
//             <p>{profile.LastName}</p>
//             <h3> Phone</h3>
//             <p>{profile.Phone}</p>
//             <h3>Email</h3>
//             <p>{profile.Email}</p>

//             {/* LOGOUTBUTTON */}
//             <button className="logout-btn" onClick={userlogout}>
//               LOG OUT
//             </button>

//             <button
//               className="delete-btn"
//               onClick={() => {
//                 setOpenPopup(true);
//                 setisupdate(false);
//               }}
//             >
//               Delete Profile
//             </button>

//             <button
//               className="update-btn"
//               onClick={() => {
//                 setOpenPopup(true);
//                 setisupdate(true);
//               }}
//             >
//               Update Profile
//             </button>

//             {!profilepic && (
//               <input
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 multiple={false}
//                 onChange={imageHandler}
//               />
//             )}
// {!profilepic && (
//   <button disabled={!image} onClick={uploadImage}>
//     upload image
//   </button>
// )}

// <Popup
//   openPopup={openPopup}
//   title={isupdate ? "Update Profile form" : "Delete Profile form"}
//   setOpenPopup={setOpenPopup}
// >
//   {isupdate ? (
//     <UpdateCustomer customer={profile} setOpenPopup={setOpenPopup} />
//   ) : (
//     <DeleteCustomer id={id} />
//   )}
// </Popup>
//   </div>
