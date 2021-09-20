import React, { Component } from 'react';
import axios from 'axios';
import './BusOwner.css';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}


componentDidMount(){
  this.retrievePosts();
}


retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }  

  });
}

onDelete = (id) =>{

  axios.delete(`http://localhost:8000/posts/delete/${id}`).then((res)=>{
    alert("Deleted Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){

  const result = posts.filter((post)=>
    post.bid.toLowerCase().includes(searchKey) || 
    post.bname.toLowerCase().includes(searchKey) ||
    post.nic.toLowerCase().includes(searchKey) ||
    post.sname.toLowerCase().includes(searchKey)
    
  )

  this.setState({posts:result})
}

handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/posts").then(res =>{
    if(res.data.success){
        
      this.filterData(res.data.existingPosts,searchKey)
    }
  });

}

  render(){
    return (
      <div className="bgimg">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2> Bus Owners </h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="search"
              name="searchQueue"
              onChange={this.handleSearchArea}>

              </input>
          </div>
        </div>
        
        <table className="table table-hover" style={{marginTop:'40px'}}>

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">NIC</th>
              <th scope="col">Service Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts,index) =>(
              
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/post/${posts._id}`}style={{textDecoration:'none'}}> 
                    {posts.bid}
                    </a>
                </td>
                <td>{posts.bname}</td>
                <td>{posts.nic}</td>
                <td>{posts.sname}</td>

                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a> 
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a> 
                </td>

              </tr>

            ))}
          </tbody>

        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Bus Owner</a></button>

      

      </div>
      </div>
    )
  }
}
