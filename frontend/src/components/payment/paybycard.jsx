import React from 'react'
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { FaApplePay } from 'react-icons/fa';
import { BsPaypal } from 'react-icons/bs';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaCcPaypal } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export default function paybycard() {
    return (
        <div className="sub-payments">
            <div className="sub_payment_headings">
                <h1>PAYMENT</h1>
            </div>
            <div className="content">
                <div className="blue-bar">
                    <div className="icons">
                        <h1> <RiVisaFill /> </h1>
                        <h1> <FaCcMastercard /> </h1>
                        <h1> <SiAmericanexpress /> </h1>
                        <h1> <FaApplePay /> </h1>
                    </div>
                </div>



                <div className="form1">
                    <form action="">
                        <label htmlFor="name-on-card">
                            Name on card :
                        </label>
                        <input type="text" />
                        <label htmlFor="name-on-card">
                            Card number :
                        </label>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                        <label htmlFor="name-on-card">
                            Expiration date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CCV/CDC
                        </label>
                        <br/>
                        <input className="subs" type="text" placeholder="mm" />
                        <input className="subs" type="text" placeholder="yy" />
                        <input className="ccv" type="text" placeholder="****" />



                    </form>
                </div>
                <div className="blue-bar">
                    <div className="icons">
                        <h1> <BsPaypal /> </h1>
                        <h1> <BsCurrencyBitcoin /> </h1>
                        <h1> <FaCcPaypal /> </h1>
                    </div>
                </div>
                <div className="form1">
                <form action="">
                        <label htmlFor="name-on-card">
                            Paypal ID :
                        </label>
                        <input type="text" placeholder="example@mail.com"/>
                        <label htmlFor="name-on-card">
                            Password :
                        </label>
                        <input type="text" placeholder="Enter your password" />
                        


                        
                    </form>
                    
                </div>
                <div className="payButton">
                <Button variant="primary" ><BsCashCoin /> Pay 100.00 LKR</Button>{' '}
                </div>
            </div>
        </div>
    )
}
