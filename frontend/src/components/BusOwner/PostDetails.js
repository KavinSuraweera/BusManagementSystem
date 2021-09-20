import React, { Component } from 'react'
import axios from 'axios';

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/posts/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }
    render() {

        const {bid,bname,nic,pnum,email,sname} = this.state.post;
        return (
            <div style={{marginTop:'20px'}}>
                <h4>{bid}</h4>
                <hr/>

                <d1 className='row'>
                    <dt className="col-sm-3">Name :</dt>
                    <dd className="col-sm-9">{bname}</dd>

                    <dt className="col-sm-3">NIC :</dt>
                    <dd className="col-sm-9">{nic}</dd>

                    <dt className="col-sm-3">Phone Number :</dt>
                    <dd className="col-sm-9">{pnum}</dd>

                    <dt className="col-sm-3">Email :</dt>
                    <dd className="col-sm-9">{email}</dd>

                    <dt className="col-sm-3">Service Name :</dt>
                    <dd className="col-sm-9">{sname}</dd>
                </d1>
            </div>
        )
    }
}
