import React from 'react'

const Cabecera = () => {
    return (
        <>
            <section className="hero-equal-height ptb-120 gradient-overlay bg-image">
                    <div className="background-image-wraper custom-overlay" style={{background: "url('/img/hero-offer-bg.svg')no-repeat center center / cover", opacity: '1',}}></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="hero-content-left text-white text-center">
                                    <h3 className="text-white">Black Friday Sale!</h3>
                                    <h1 className="text-white big-text mb-0"><span>UP TO</span> 90% OFF</h1>
                                    <p className="lead">Web Hosting & Free Domain</p>
                                    <a href="/#" className="btn btn-danger btn-lg mb-3">Get Started Now</a>
                                    <p>Hurry Up, Limited time offer is ticking down</p>
                                    <div id="clock" className="countdown-wrap-2  my-2"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
        </>
    )
}

export default Cabecera
