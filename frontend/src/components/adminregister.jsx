import { Button } from '@material-ui/core'
import React from 'react'
import '../CSS/adminregister.css'

export default function adminregister() {
    return (
        <div>
            <center>
            <div className="form">
                Username:
                <input type="text" placeholder="Enter Name"/><br/><br/>
                Email:
                <input type="text" placeholder="Enter E-mail"/><br/><br/>
                Password:
                <input type="text" placeholder="Enter Password"/><br/><br/>
                Re-Enter Password:
                <input type="text" placeholder=""/><br/><br/>
                Contact:
                <input type="text" placeholder="Enter Phone"/><br/><br/>

                <input type="submit" value="Submit"/>
            </div>
            </center>
        </div>
    )
}
