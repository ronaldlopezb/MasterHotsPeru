import React from 'react'

const CallToAction2 = () => {
    return (
        <>
            <section className="ptb-60 primary-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="cta-content-wrap text-white">
                                <h2 className="text-white">24/7 Expert Hosting Support Our Customers Love</h2>
                                <p>Objectively innovate high compellingly maintain progressively pursue mission-critical information quality imperatives. </p>
                            </div>
                            <div className="support-action d-inline-flex flex-wrap">
                                <a href="/mailto:support@yourdomain.com" className="mr-3"><i className="fas fa-comment mr-1 color-accent"></i> <span>support@yourdomain.com</span></a>
                                <a href="/tel:+00123456789" className="mb-0"><i className="fas fa-phone-alt mr-1 color-accent"></i> <span>+00123456789</span></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-none d-lg-block">
                            <div className="cta-img-wrap text-center">
                                <img src="/img/call-center-support.svg" width="250" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction2
