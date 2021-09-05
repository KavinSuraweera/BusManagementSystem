import React from 'react'
import { Link } from 'react-router-dom'

export default function contactUs() {
    return (
        <div>
            <Link to="./adminLogin">
            <button>
                admin login
            </button><br/>
            </Link>
            <Link to="./dashbord">
            <button>
                dashbord
            </button><br/>
            </Link>
        </div>
    )
}
