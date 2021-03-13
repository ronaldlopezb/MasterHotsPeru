import React from 'react'

const PreciosPaquete = () => {
    return (
        <>
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Managed Our Hosting Price</h2>
                                <p className="lead">
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered
                                    core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12">
                            <div className="switch-wrap text-center mb-5">
                                <label className="form-switch">
                                    <span className="beforeinput text-success">
                                            Monthly
                                        </span>
                                    <input type="checkbox" id="js-contcheckbox" />
                                    <span className="switch-icon gray-light-bg"></span>
                                    <span className="afterinput">
                                            Yearly
                                        </span>
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">Cloud Starter</h5>
                                    <p>Medium traffic personal sites</p>
                                </div>
                                <div className="card-header py-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price">$19<span>mo</span></div>
                                    <div className="price text-center mb-0 yearly-price">$69<span>/yr</span></div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>10</span> Hosted Domains</li>
                                        <li><span>25 GB</span> RAID 10 Storage</li>
                                        <li><span>200 GB</span> Bandwidth</li>
                                        <li><span>1 Free</span> Domain included</li>
                                        <li><span>Super Fast</span> SSD Storage</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>99.95% Uptime</li>
                                        <li>24/7 Phone Support</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-01 mb-3" target="_blank">Purchase now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card popular-price text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">Cloud Business <span className="badge color-1 color-1-bg">Popular</span></h5>
                                    <p>High traffic corporate sites</p>
                                </div>
                                <div className="card-header py-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price text-white">$49<span>/mo</span></div>
                                    <div className="price text-center mb-0 yearly-price text-white">$159<span>/yr</span></div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>30</span> Hosted Domains</li>
                                        <li><span>75 GB</span> RAID 10 Storage</li>
                                        <li><span>700 GB</span> Bandwidth</li>
                                        <li><span>3 Free</span> Domain included</li>
                                        <li><span>Super Fast</span> SSD Storage</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>99.95% Uptime</li>
                                        <li>24/7 Phone Support</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-03 mb-3" target="_blank">Purchase now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="card text-center single-pricing-pack">
                                <div className="pt-5">
                                    <h5 className="mb-0">Cloud Enterprise</h5>
                                    <p>Enterprise content management</p>
                                </div>
                                <div className="card-header py-4 border-0 pricing-header">
                                    <div className="price text-center mb-0 monthly-price">$69<span>/mo</span></div>
                                    <div className="price text-center mb-0 yearly-price">$259<span>/yr</span></div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-4 pricing-feature-list">
                                        <li><span>60</span> Hosted Domains</li>
                                        <li><span>175 GB</span> RAID 10 Storage</li>
                                        <li><span>1500 GB</span> Bandwidth</li>
                                        <li><span>6 Free</span> Domain included</li>
                                        <li><span>Super Fast</span> SSD Storage</li>
                                        <li><span>Free</span> SSL Certificate</li>
                                        <li>99.95% Uptime</li>
                                        <li>24/7 Phone Support</li>
                                    </ul>
                                    <a href="/#" className="btn btn-brand-01 mb-3" target="_blank">Purchase now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="support-cta mt-5">
                                <h5 className="mb-1 d-flex align-items-center justify-content-center"><span className="ti-loop color-primary mr-3 icon-sm"></span>Choose Your <a href="pricing-comparison.html" className="ml-2">Compare Hosting Plans</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PreciosPaquete
