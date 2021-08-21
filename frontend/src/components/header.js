import React from 'react';
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div>
            <div className="blue_line">
            </div>
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><div className="header-logo"></div></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="item">
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="item">
                        <Link to="/bookings" className="link">BUS BOOKINGS</Link>
                    </li>
                    <li className="item">
                        <Link to="/packages" className="link">SCEDULES</Link>
                    </li>
                    <li className="item">
                        <Link to="/packages" className="link">PACKAGES</Link>
                    </li>
                    <li className="item">
                        <Link to="/add" className="link">CONTACT US</Link>
                    </li>
                    <li className="item">
                    <Link to="/add" className="link">ABOUT</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav> 
               
        </div>
    )
}
