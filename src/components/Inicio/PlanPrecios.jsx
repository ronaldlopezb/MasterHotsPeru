import React from 'react'

const PlanPrecios = () => {
    return (
        <>
            <section className="pricing-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-4">
                                <h2>Our Flexible Pricing Plan</h2>
                                <p>
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered
                                    core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-md-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="/img/dadicate-web-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">Web Hosting</h4>
                                <p className="mb-4">For small business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="popular-price text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="/img/vps-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">VPS Hosting</h4>
                                <p className="mb-4">For medium business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div className="pricing-icon">
                                    <img src="/img/cloud-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 className="package-title">Cloud Hosting</h4>
                                <p className="mb-4">Large and enterprise business</p>
                                <div className="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div className="h2">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" className="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="support-cta text-center mt-5">
                                <h5 className="mb-1"><span className="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                                </h5>
                                <p>Have some questions? <a href="/#">Chat with us now</a>, or <a href="/#">send us an email</a> to
                                    get in touch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanPrecios
