import React from 'react'

const BannerPrincipal = () => {
    return (
        <>
            <div className="main">
                <section className="ptb-100 overflow-hidden primary-bg">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between justify-content-md-center justify-content-sm-center">
                            <div className="col-md-12 col-lg-6">
                                <div className="hero-slider-content text-white py-5">
                                    <div className="headline mb-4">
                                        <p className="mb-0"><i className="fas fa-bell rounded-circle mr-2"></i> <span className="font-weight-bold">30% Discount </span> first annual purchase</p>
                                    </div>
                                    <h1 className="text-white">Unlimited Domain & Hosting in One Platform</h1>
                                    <p className="lead">A ton of website hosting options, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs.</p>

                                    <div className="action-btns mt-4">
                                        <a href="/#" className="btn btn-brand-03 btn-lg">Get Started Now </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-6">
                                <div className="img-wrap">
                                    <img src="/img/hero-home.svg" alt="hosting" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BannerPrincipal
