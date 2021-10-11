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
                <h1>CARD PAYMENT</h1>
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
                        <br />
                        <br />
                        <label htmlFor="name-on-card">
                            Name on card :
                        </label>
                        <select className="selection" id="">
                            <option selected></option>
                            <option >hi</option>
                        </select>



                    </form>
                </div>
                
                <div className="payButton">
                <Button variant="primary" ><BsCashCoin /> Book seats by package</Button>{' '}
                </div>
            </div>
        </div>
    )
}
