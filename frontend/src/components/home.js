import React from 'react'

export default function home() {
    return (
        <div>
            <div className="hero-image">
                <div className="bg_banner"></div>
                <div className="hero-text">
                    <h1>CONNECTING PEOPLE <br/>
                        <font color="#1473E6">WITH</font> <br/>
                        DESTINATIONS </h1>
                        <p>With a whole new experience and completely adaptable. <br/>
                        Booking, your significant serenity begins second <br/>
                        you start dreaming.</p>
                        <div className="book-now-link" >
                            <a href="#">Book now
                                <i class="far fa-arrow-circle-right"></i>
                            </a>
                        </div>
                        
                        <div className="home-buttons">
                            <button>Login</button>
                            <button>Sign up</button>
                        </div>

                    
                </div>

            </div>
            <div className="gold-hr">
                <hr/>
            </div>
            <div className="home-content">
                <div className="whyus-container">
                    <h1>why us ?</h1>

                </div>

                <div className="whyus-content">
                    <div className="whyus-img">aa</div>
                    <div className="whyus-txt-l"></div>
                </div>
                <div className="whyus-content">
                    <div className="whyus-img-l">aa</div>
                    <div className="whyus-txt"></div>
                </div>
                <div className="whyus-content">
                    <div className="whyus-img">aa</div>
                    <div className="whyus-txt-l"></div>
                </div>

            </div>

        </div>
    )
}
