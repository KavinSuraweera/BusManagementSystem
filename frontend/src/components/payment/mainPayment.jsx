import {React, useEffect, useState } from 'react'
import Paybycard from './paybycard';
import Paybypackage from './paybypackage'

export default function MainPayment() {

    const [paymentMethod, setPaymentMethod] = useState(false);

    return (
        <div className="payment-background">
            <div className="payment-container">
                <div className="payment_headings">
                    <h1>PAYMENT</h1>
                </div>
                <div className="main-paymentblock">
                    <div className="choose">
                        <div className="head">
                            <p>- Choose your payment method -</p>
                        </div>
                        <div className="chooseside">

                            <div className="button">
                                <label class="switch">
                                    <input 
                                        onChange = {(e)=>{
                                            let checked = e.target.checked;
                                            setPaymentMethod(checked);
                                        }}
                                    type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>

                        </div>

                    </div>

                    {/* left */}
                    <div className={paymentMethod?"left":"left checked"}>
                        <div className={paymentMethod?"hide":"show "}>
                            <Paybypackage/>
                        </div>
                    </div>
                        
                    


                    {/* right */}
                    <div className={paymentMethod?"right checked":"right "}>
                        <div className={paymentMethod?"show":"hide "}>
                            <Paybycard/>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
    )
}
