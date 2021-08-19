import React from 'react'

export default function home() {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>We Are,<br/>abc.</h1>
                    <button>BOOK NOW</button>
                </div>
                    <div className="hero-buttons">
                        <button>LOG IN</button>
                        <button>SIGN UP</button>

                        <div className="home-search">
                            <form className="d-flex">
                                <input className="home-search-form" type="search" placeholder="Search.." aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
            </div>
            <div className="home-content">
                <div className="home-content-topic">
                    <p><font color="red">BUZZY</font> BUS</p>
                </div>
                <div className="packagecards-container">
                    <div className="package-card">
                        <h1>HISTORY</h1>
                    </div>
                    <div className="package-card">
                        <h1>WHY WE?</h1>
                    </div>
                    <div className="package-card">
                        <h1>OUR SERVICES</h1>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}
