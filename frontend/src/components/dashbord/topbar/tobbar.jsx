import React from 'react'
import "./topbar.css"
import {AccountCircle} from '@material-ui/icons';
import profile from "../../../img/profile.jpg"

export default function tobbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    
                <span className="logo">Admin Portal</span> 
                </div>
                <div className="topleft">
                    <input 
                    className="searchbox" 
                    type="text"
                    placeholder="Search..."/>
                </div>
                <div className="topright">
                      <div className="topbarIcons">
                        <a href="#"><p>Logout</p></a>
                    </div>
                        <img src={profile} alt="" className="topAvatar" />
                    </div>
                </div>
            </div>
    )
}
