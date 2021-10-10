
import { Link } from 'react-router-dom'
import Header from './header'

import React from 'react'

export default function PContact() {
    return (
        <>
        <div className="contact_info">
          <div className="container-fluid">
            <div className="col-lg-10 offset-lg-1">
              {/* {Phone number} */}
              <div className="contact_infor_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                  +91 1111 543 2198

                </div>

              </div>

            </div>

          </div>

        </div>
 
</>
        
    )
}
