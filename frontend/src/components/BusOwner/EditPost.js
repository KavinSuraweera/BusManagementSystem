import React, { Component } from 'react'
import axios from 'axios'

export default class EditPost extends Component {

    constructor(props){
        super(props);
        this.state={
            bid:"",
            bname:"",
            nic:"",
            pnum:"",
            email:"",
            sname:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();

        const id = this.props.match.params.id;

        const {bid,bname,nic,pnum,email,sname} = this.state;

        const data = {
            bid:bid,
            bname:bname,
            nic:nic,
            pnum:pnum,
            email:email,
            sname:sname
        }

            console.log(data)

            axios.put(`http://localhost:8000/posts/update/${id}`,data).then((res) => {
                if(res.data.success){
                    alert("Bus Owner Updated Successfully")
                    this.setState(
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

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/posts/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    bid:res.data.post.bid,
                    bname:res.data.post.bname,
                    nic:res.data.post.nic,
                    pnum:res.data.post.pnum,
                    email:res.data.post.email,
                    sname:res.data.post.sname
                });

                console.log(this.state.post);
            }
        });
    }    

    render() {
        return (
            <div className="col-md-8-mt-4-mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Bus Owner</h1>

                    <form className="needs-validation" noValidate >

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>ID</label>
                            <input type="text"
                            className="form-control"
                            name="bid"
                            placeholder="Enter Bus Owner ID"
                            value={this.state.bid}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Name</label>
                            <input type="text"
                            className="form-control"
                            name="bname"
                            placeholder="Enter Name"
                            value={this.state.bname}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>NIC</label>
                            <input type="text"
                            className="form-control"
                            name="nic"
                            placeholder="Enter NIC"
                            value={this.state.nic}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Contact Number</label>
                            <input type="text"
                            className="form-control"
                            name="pnum"
                            placeholder="Enter Contact Number"
                            value={this.state.pnum}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Email</label>
                            <input type="text"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            value={this.state.email}
                            onChange={this.handleInputChange}/>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>

                            <label style={{marginBottom:'5px'}}>Service Name</label>
                            <input type="text"
                            className="form-control"
                            name="sname"
                            placeholder="Enter Service Name"
                            value={this.state.sname}
                            onChange={this.handleInputChange}/>

                        </div>

                        <button className="btn btn-success" type="submit" style={{matginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Update
                        </button>


                    </form>
            </div>
        )
    }
}
