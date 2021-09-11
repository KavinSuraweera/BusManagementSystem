import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

export default function contactUs() {
    return (
        <div>
            <Header/>
            <Link to="./adminLogin">
            <button>
                admin loginn
            </button><br/>
            </Link>
            <Link to="./dashbord">
            <button>
                dashbord
            </button><br/>
            </Link>
            <Link to="./adminmain">
            <button>
                admin cruds
            </button><br/><br/>
            </Link>

            <Link to="./Sign-Up">
            <button>
                user signup
            </button><br/>
            </Link>

            <Link to="./Login-Page">
            <button>
                user login
            </button><br/>
            </Link>

        </div>
    )
}
