import React from 'react'

const Precios = () => {
    return (
        <>
            <section id="pricing" className="pricing-section ptb-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-4">
                                <h2>Choose Your Web Hosting Plan</h2>
                                <p className="lead">
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered
                                    core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-md-center justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                                <h6 className="mb-4">Economy</h6>
                                <div className="pricing-price pb-4">
                                    <div className="h2 mb-0">$8.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <div className="pricing-content text-center">
                                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                                        <li><span>1</span> Website</li>
                                        <li><span>1</span> Email Address</li>
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="We don’t set limits basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">Limited</span> Bandwidth (100 GB)</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>24/7 phone support</li>
                                        <li>LiteSpeed Cache</li>
                                        <li>99.9% Uptime Guarantee</li>
                                        <li>DNS Management</li>
                                        <li>Daily Backups</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-01" target="_blank">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="feature-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                                <span className="label-corner primary-bg">Featured</span>
                                <h6 className="mb-4">Deluxe</h6>
                                <div className="pricing-price pb-4">
                                    <div className="h2 mb-0">$29.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <div className="pricing-content text-center">
                                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="We don’t set limits on the number of websites you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business account, your number of websites won’t be limited in any way.">Unlimited</span> Number of Websites</li>
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="Owners with more than 15 GB used email space may experience decreases in performance.">Unlimited</span> Email Accounts</li>
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="We don’t set limits on the amount of bandwidth you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">Unlimited</span> Bandwidth</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>24/7 phone support</li>
                                        <li>LiteSpeed Cache</li>
                                        <li>99.9% Uptime Guarantee</li>
                                        <li>DNS Management</li>
                                        <li>Daily Backups</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-01" target="_blank">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="popular-price text-center bg-white single-pricing-pack-2 price-2 mt-4 rounded border">
                                <h6 className="mb-4">Ultimate</h6>
                                <div className="pricing-price pb-4">
                                    <div className="h2 mb-0">$39.99 <span className="price-cycle h4">/mo</span></div>
                                </div>
                                <div className="pricing-content text-center">
                                    <ul className="list-unstyled pricing-feature-list p-4 mb-0">
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="We don’t set limits on the number of websites you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business account, your number of websites won’t be limited in any way.">Unlimited</span> Number of Websites</li>
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="Owners with more than 15 GB used email space may experience decreases in performance.">Unlimited</span> Email Accounts</li>
                                        <li><span className="text-under-line" data-toggle="tooltip" data-placement="top" title="" data-original-title="We don’t set limits on the amount of bandwidth you may use, as long as your usage complies with our Terms of Service. Basically, if you have a regular personal or a small business website, your bandwidth won’t be limited in any way.">Unlimited</span> Bandwidth</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>24/7 phone support</li>
                                        <li>LiteSpeed Cache</li>
                                        <li>99.9% Uptime Guarantee</li>
                                        <li>DNS Management</li>
                                        <li>Daily Backups</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-01" target="_blank">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="support-cta text-center mt-5">
                                <a href="pricing-comparision.html" target="_blank">
                                    <h5 className="mb-1"><span className="ti-loop color-primary mr-2"></span>Compare Hosting Plans
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Precios
