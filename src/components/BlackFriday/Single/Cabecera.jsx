import React from 'react'

const cabecera = () => {
    return (
        <>
            <section className="hero-equal-height ptb-120 gradient-overlay bg-image" image-overlay="8">
                <div className="background-image-wraper" style={{background: "url('assets/img/offer-bg-4.jpg')no-repeat center center / cover", opacity: '1',}}></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-7">
                            <div className="hero-content-wrap text-white position-relative z-index">
                                <span className="text-white h5 font-weight-normal">Reliable hosting to make any website</span>
                                <h1 className="text-white">We Offer Shared Hosting Fast, Secure & Easy To Manage</h1>
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><span className="fas fa-check-circle text-success mr-2"></span><strong>Unmetered</strong> Sub Domains, Accounts</li>
                                    <li className="py-1"><span className="fas fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</li>
                                    <li className="py-1"><span className="fas fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</li>
                                </ul>
                                <div className="action-btns mt-2">
                                    <p>Get all the essentials features <strong>Starting at $2.59/mo</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="single-offer-wrap d-flex align-items-center justify-content-center">
                                <div className="offer-content-wrap">
                                    <div className="offer-header mb-2 text-white p-2">
                                        Shared Hosting
                                        <span className="triangle"></span>
                                    </div>
                                    <div className="offer-content text-white">
                                        <span className="text-uppercase">From $2.59/Mo</span>
                                        <div className="h1 starting-price mb-0 text-white">60%<small>Off</small></div>
                                    </div>
                                    <a href="/#" className="btn btn-outline-dark btn-sm save-now-btn">Started Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default cabecera
