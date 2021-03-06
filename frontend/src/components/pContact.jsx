
import { Link } from 'react-router-dom'
import Header from './header'

import React, { Component } from 'react'

export default class pContact extends Component {
  render() {
    return (
      <>
      <section class="border">
<div class="card">
  <div class="row">
    <div class="col-lg-8">
      <div class="card-body form">   
        <h3 class="mt-4"><i class="fas fa-envelope pr-2"></i>Write to us:</h3>

        <div class="row">          
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input type="text" id="form-contact-name" class="form-control"/>
              <label for="form-contact-name" class="">Your name</label>
            </div>
          </div>
       

      
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input type="text" id="form-contact-email" class="form-control"/>
              <label for="form-contact-email" class="">Your email</label>
            </div>
          </div>
        </div>       
        <div class="row">

   
          <div class="col-md-6">
            <div class="md-form mb-0">
              <input type="text" id="form-contact-phone" class="form-control"/>
              <label for="form-contact-phone" class="">Your phone</label>
            </div>
          </div>


          <div class="col-md-6">
            <div class="md-form mb-0">
              <input type="text" id="form-contact-company" class="form-control"/>
              <label for="form-contact-company" class="">Subject</label>
            </div>
          </div>
    

        </div>
       
        <div class="row">

       
          <div class="col-md-12">
            <div class="md-form mb-0">
              <textarea id="form-contact-message" class="form-control md-textarea" rows="3"></textarea>
              <label for="form-contact-message">Your message</label>
              <a class="btn-floating btn-lg blue">
                <i class="far fa-paper-plane"></i>
              </a>
            </div>
          </div>
     

        </div>
       

      </div>

    </div>
    
    <div class="col-lg-4">

      <div class="card-body contact text-center ">

        <h3 class="my-4 pb-2">Contact information</h3>
        <ul class="text-lg-left list-unstyled ml-4">
        
          <li>
            
            <p><font color="black"><i class="fas fa-map-marker-alt pr-2"></i>14/9-1,Rajamaha Vihara Rd,Navinna,Maharagama</font></p>
          </li>
          <li>
            <p><font color="black"><i class="fas fa-phone pr-2"></i>+94 77 602 7072</font></p>
          </li>
          <li>
            <p><font color="black"><i class="fas fa-envelope pr-2"></i>buzzybus@gmail.com</font></p>
          </li>
          
        </ul>
        <hr class="hr-light my-4"/>
        <ul class="list-inline text-center list-unstyled">
          <li class="list-inline-item">
            <a class="p-2 fa-lg tw-ic">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg li-ic">
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="p-2 fa-lg ins-ic">
              <i class="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>
</section>

        
      </>
    )
  }
}
