import React from 'react'

import Preload from '../../components/Preload/Preload'
import CabeceraNosotros from '../../components/Cabeceras/CabeceraNosotros'
import Testimonios from '../../components/Caracteristicas/Testimonios'

const Nosotros = () => {
    return (
        <>
            <Preload />
            <CabeceraNosotros />

            <section id="about" className="about-section position-relative overflow-hidden ptb-100 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-12 col-lg-6">
                            <div className="feature-contents section-heading">
                                <h2>We Share the Same Values which Makes our Team Stronger</h2>
                                <p>Objectively deliver professional value with diverse web-readiness.
                                    Collaboratively transition wireless customer service without goal-oriented catalysts for
                                    change. Collaboratively.</p>

                                <ul className="check-list-wrap list-two-col py-3">
                                    <li>Data driven quality review</li>
                                    <li>Secure work environment</li>
                                    <li>24x7 coverage</li>
                                    <li>Lifetime updates</li>
                                    <li>Management team</li>
                                    <li>Tech support</li>
                                    <li>Integration ready</li>
                                    <li>Tons of assets</li>
                                    <li>Compliance driven process</li>
                                    <li>Workforce management</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="image-wrap">
                                <img className="img-fluid" src="/img/feature-17.svg" alt="Característica" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="network-map-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Our Data centers Location</h2>
                                <p className="lead">Cloudhub offers a low latency worldwide network, enabling you to deploy your
                                    service infrastructure in close proximity to your customer base.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="network-map-wrap">
                                <ul className="custom-map-location">
                                    <li style={{top: '29%', left: '15.5%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Canada"></span>
                                    </li>
                                    <li style={{top: '42%', left: '20%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="United States"></span>
                                    </li>
                                    <li style={{top: '70%', left: '32%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Brazil"></span>
                                    </li>
                                    <li style={{top: '57%', left: '48%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Nigeria"></span>
                                    </li>
                                    <li style={{top: '18%', left: '53%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Finland"></span>
                                    </li>
                                    <li style={{top: '34%', left: '55%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Ukraine"></span>
                                    </li>
                                    <li style={{top: '45%', left: '68%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="India"></span>
                                    </li>
                                    <li style={{top: '35%', left: '80%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="China"></span>
                                    </li>
                                    <li style={{top: '77%', left: '85%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Australia"></span>
                                    </li>
                                </ul>
                                <img src="/img/map-dark.svg" alt="location map" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="ptb-60 primary-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="cta-content-wrap text-white">
                                <h2 className="text-white">24/7 Expert Hosting Support Our Customers Love</h2>
                                <p>Objectively innovate high compellingly maintain progressively pursue mission-critical information quality imperatives. </p>
                            </div>
                            <div className="support-action d-inline-flex flex-wrap">
                                <a href="mailto:support@yourdomain.com" className="mr-3"><i className="fas fa-comment mr-1 color-accent"></i> <span>support@yourdomain.com</span></a>
                                <a href="tel:+00123456789" className="mb-0"><i className="fas fa-phone-alt mr-1 color-accent"></i> <span>+00123456789</span></a>
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


            <div className="feature-section ptb-100 ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7 col-lg-6">
                            <div className="feature-content-wrap">
                                <h2>99% Cloud Hosing High-speed Cutting-edge Platform</h2>
                                <p>Authoritatively transform functionalized information without cross-platform convergence. Quickly reconceptualize cross-unit e-markets without superior products. Appropriately foster timely collaboration and idea-sharing rather than magnetic potentialities. Authoritatively restore high standards in outsourcing whereas vertical meta-services. Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.</p>
                                <a href="/#" className="btn btn-outline-brand-01 mt-3" target="_blank">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 d-none d-md-block d-lg-block">
                            <div className="feature-img-wrap text-center">
                                <img src="/img/services.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between mt-5">
                        <div className="col-md-5 col-lg-5 d-none d-md-block d-lg-block">
                            <div className="feature-img-wrap text-center">
                                <img src="/img/create-website.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="feature-content-wrap">
                                <h2>Our Own Interfaces for All Management Processes</h2>
                                <p>Authoritatively transform functionalized information without cross-platform convergence. Quickly reconceptualize cross-unit e-markets without superior products. Appropriately foster timely collaboration and idea-sharing rather than magnetic potentialities. Authoritatively restore high standards in outsourcing whereas vertical meta-services. Compellingly reconceptualize out-of-the-box outsourcing through plug-and-play synergy.</p>
                                <a href="/#" className="btn btn-outline-brand-01 mt-3" target="_blank">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonios />
        </>
    )
}

export default Nosotros
