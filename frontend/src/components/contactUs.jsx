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
            <Link to="./dashbordui">
            <button>
                dashbord
            </button><br/>
            </Link>
        </div>
    )
}
