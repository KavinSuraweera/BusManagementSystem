import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function booking() {
    return (
        <div>
            <div className="booking-container-1">
                <div className="booking-container-2">
                    <div className="booking-container-left">
                        <div className="img-1">
                        </div>
                
                    </div>
                    <div className="booking-container-right">
                        <h1>ticket reservation</h1>
                        <hr className="gold-hr"/>
                        <form className="booking-form">
                            <div className="form-row">
                                <input type="radio" name="way-selection" id="oneway" value="one way" className="radio"/> <label for="one-way">One way</label>
                                <input type="radio" name="way-selection" id="roundtrip" value="round trip" className="radio"/> <label for="round-trip">Round Trip</label>
                                <hr/>
                            </div>
                            <div className="form-row">
                                <label for="depature">Depature</label>
                                <select id="depatureTime" className="form-input-2">
                                    <option selected>Leave From</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select> 
                                
                                <label for="destination">Destination</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>Going To</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select> 
                                <hr/>
                            </div>

                            <div className="form-row">
                                <label for="depature">Depature Time</label>
                                <select id="depatureTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select> 
                                <hr/>
                            </div>

                            <div className="form-row">
                                <label for="arrivalTime">Arrival Time</label>
                                <select id="arrivalTime" class="form-input-2">
                                    <option selected>00.00</option>
                                    <option>ඩේටා බේස් එකෙන් ගන්න</option>
                                </select> 
                                <hr/>
                            </div>

                            <div className="form-row">
                                <label for="Adult">Adult</label>
                                <select id="Adult" class="form-input-3">
                                    <option selected>0</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select> 

                                <label for="Student">Student</label>
                                <select id="Student" class="form-input-3">
                                    <option selected>0</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select> 

                                <label for="Child">Child</label>
                                <select id="Child" class="form-input-3">
                                    <option selected>0</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select> 
                                <hr/>
                            </div>

                            <div className="form-raw">
                                <div className="search-button">
                                    <Link to="/avilablebus">
                                        <button type="button" class="btn btn-primary"><i class="fas fa-search"></i>&nbsp;Seatch</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
