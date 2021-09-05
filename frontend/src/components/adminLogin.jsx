import React from 'react'
import logo from '../img/adminlogin/bus-blue.png'
import admincss from '../CSS/adminlogin.css'

export default function adminLogin() {
    
    console.log(logo)

    return (
        <div className="border">

                <div className="pageleft">
                   <div className="image12">
                   </div>
        <center>
             <div>

        </div>
        </center>
                </div>
                
            <div className="pageright">
                <hr className="line"/>
                <h2>LOGIN AS ADMIN</h2>
                    <div>
                            <p className="e_mail">Email</p><br/>
                            <input id="email" className="login-email"
                            placeholder="jhonedoe@abz.com"
                            type="text"
                            />

                            <p className="pword">Password</p><br/>
                            <input id="password" className="login-pw"
                            placeholder="X X X X X"
                            type="password"/><br/>
                         
                           <input className="loginbtn"

                            type="button"
                            value="L O G I N"
                            />     

                        <a href="#"><p className="forgot-pword">Forgot your password?</p></a><br/>
                        <center>
                            <a href="#"><p className="help">Get help Signin</p></a>
                            <a href="#"><p className="policy">Terms of use Privacy Policy</p></a>
                        </center>
                    </div>
            </div>
        </div> 
    )
}