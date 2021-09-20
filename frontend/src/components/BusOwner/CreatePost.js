import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

    function CreatePost(){


    const state = {
        bid:"",
        bname:"",
        nic:"",
        pnum:"",
        email:"",
        sname:""
    }

    const [todo , setTodo] = useState(state);

    const history = useHistory();

    const handleInputChange = e =>{
        const {name,value} = e.target;

        setTodo({
            ...todo,
            [name]:value
        })
    }

    const onSubmit = e =>{

        e.preventDefault();

        const {bid,bname,nic,pnum,email,sname} = todo;

        const data = {
            bid:bid,
            bname:bname,
            nic:nic,
            pnum:pnum,
            email:email,
            sname:sname
        }

            console.log(data)

            axios.post("http://localhost:8000/posts/save",data).then((res) => {
                if(res.data.success){
                    alert("Bus Owner Added Successfully")
                    history.push("./BusOwner");
                    setTodo(
                        {
                            bid:"",
                            bname:"",
                            nic:"",
                            pnum:"",
                            email:"",
                            sname:""
                        }
                    )
                }
                })    
    }

         return (
            <div className="col-md-8-mt-4-mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add New Bus Owner</h1>

                    <form className="needs-validation" noValidate >

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Bus Owner Id</label>
                            <input type="text"
                            className="form-control"
                            name="bid"
                            placeholder="Enter Bus Owner Id"
                            value={todo.bid}
                            onChange={handleInputChange}/>
                            <small className="text-danger">ID is Required</small>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="bname"
                            placeholder="Enter Name"
                            value={todo.bname}
                            onChange={handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>NIC</label>
                            <input type="text"
                            className="form-control"
                            name="nic"
                            placeholder="Enter NIC"
                            value={todo.nic}
                            onChange={handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Contact Number</label>
                            <input type="text"
                            className="form-control"
                            name="pnum"
                            placeholder="Enter Contact Number"
                            value={todo.pnum}
                            onChange={handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Email</label>
                            <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={todo.email}
                            onChange={handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Service Name</label>
                            <input type="text"
                            className="form-control"
                            name="sname"
                            placeholder="Enter Service Name"
                            value={todo.sname}
                            onChange={handleInputChange}/>

                        </div>

                        <button className="btn btn-success" type="submit" style={{matginTop:'15px'}} onClick={onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                        </button>


                    </form>
            </div>
        )
    };

    export default CreatePost;
