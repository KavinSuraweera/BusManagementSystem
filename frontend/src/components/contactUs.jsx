import React from 'react'
import { Link } from 'react-router-dom'

export default function contactUs() {
    return (
        <div>
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
            <Link to="./adminregister">
            <button>
                adminregister
            </button><br/>
            </Link>
            <Link to="./customermain">
            <button>
                customer cruds
            </button><br/>
            </Link>
            <Link to="./employeemain">
            <button>
                employee cruds
            </button><br/>
            </Link>
            <Link to="./adminmain">
            <button>
                admin cruds
            </button><br/>
            </Link>
        </div>
    )
}
