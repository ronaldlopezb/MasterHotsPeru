import React from 'react'

const Cabecera = () => {
    return (
        <>
            <section className="hero-equal-height ptb-120 gradient-overlay bg-image" image-overlay="7">
                <div className="background-image-wraper" style={{background: "url('/img/offer-bg-4.jpg')no-repeat center center / cover", opacity: '1',}}></div>
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-between justify-content-sm-center align-items-center">
                        <div className="col-md-4 col-lg-5">
                            <div className="hero-content-wrap text-white mb-5 mb-md-0 mb-lg-0">
                                <h1 className="text-uppercase text-white font-weight-bold">Black <span className="text-danger">Friday!</span></h1>
                                <div className="offer-text">
                                    <span className="text-uppercase">Up To</span>
                                    50% OFF
                                </div>
                                <h6 className="text-white text-uppercase font-weight-normal">For All Web Hosting Packages</h6>
                                <div className="limited-time-text px-4 py-2">Limited Time Offer</div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="single-offer-box text-center rounded">
                                        <div className="offer-header bg-white text-uppercase h6 p-2 mb-0">Managed Wordpress</div>
                                        <div className="offer-content text-white">
                                            <span>Starting From</span>
                                            <div className="h1 starting-price mb-0 text-white d-flex justify-content-center align-items-center"><small>$</small>6.99</div>
                                            <span>Monthly</span>
                                        </div>
                                        <a href="/#" className="btn btn-danger btn-sm save-now-btn">Save Now <i className="fas fa-arrow-alt-circle-right pl-1"></i></a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-offer-box text-center rounded">
                                        <div className="offer-header bg-white text-uppercase h6 p-2 mb-0">Managed VPS</div>
                                        <div className="offer-content text-white">
                                            <span>Starting From</span>
                                            <div className="h1 starting-price mb-0 text-white d-flex justify-content-center align-items-center"><small>$</small>8.99</div>
                                            <span>Monthly</span>
                                        </div>
                                        <a href="/#" className="btn btn-danger btn-sm save-now-btn">Save Now <i className="fas fa-arrow-alt-circle-right pl-1"></i></a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-offer-box text-center rounded">
                                        <div className="offer-header bg-white text-uppercase h6 p-2 mb-0">Reseller Hosting</div>
                                        <div className="offer-content text-white">
                                            <span>Starting From</span>
                                            <div className="h1 starting-price mb-0 text-white d-flex justify-content-center align-items-center"><small>$</small>5.99</div>
                                            <span>Monthly</span>
                                        </div>
                                        <a href="/#" className="btn btn-danger btn-sm save-now-btn">Save Now <i className="fas fa-arrow-alt-circle-right pl-1"></i></a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-offer-box text-center rounded">
                                        <div className="offer-header bg-white text-uppercase h6 p-2 mb-0">Cloud Hosting</div>
                                        <div className="offer-content text-white">
                                            <span>Starting From</span>
                                            <div className="h1 starting-price mb-0 text-white d-flex justify-content-center align-items-center"><small>$</small>4.99</div>
                                            <span>Monthly</span>
                                        </div>
                                        <a href="/#" className="btn btn-danger btn-sm save-now-btn">Save Now <i className="fas fa-arrow-alt-circle-right pl-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cabecera
