import React from 'react'

const Hosting = () => {
    return (
        <>
            {/* hosting start */}
            <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                <a id="hostingMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Hosting</a>

                {/* Demos - Mega Menu */}
                <div className="hs-mega-menu main-sub-menu" style={{width: '715px',}} aria-labelledby="hostingMegaMenu">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="menu-item-wrap py-0 p-md-3 p-lg-3">

                                {/* hosting-compartido" */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/hosting-compartido">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle primary-bg">
                                                <i className="fas fa-server"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">Shared Web Hosting</span>
                                                <small className="u-header__promo-text">Innovate reliable quality
                                                    Starting at <strong>$2.99</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* vps hosting */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/vps-hosting">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle accent-bg">
                                                <i className="fas fa-box"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">VPS Hosting</span>
                                                <small className="u-header__promo-text">Pefficiently maintain
                                                    Starting at <strong>$11.99</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* cloud hosting */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/cloud-hosting">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle secondary-bg">
                                                <i className="fas fa-cloud"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">Cloud Hosting </span>
                                                <small className="u-header__promo-text">Conveniently cloud Starting
                                                    at <strong>$5.99/mo</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                                {/* email hosting*/}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/email-hosting">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle twitter-bg">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">Email Hosting</span>
                                                <small className="u-header__promo-text">First Starting at <strong>$0.99/mo
                                                    per mailbox</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* windows vps hosting */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/windows-vps-hosting">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle btn-behance">
                                                <i className="fab fa-windows"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">Windows VPS Hosting</span>
                                                <small className="u-header__promo-text">Globally Starting at
                                                    <strong>$9.99/mo</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* menu title with subtitle and icon item end */}

                                {/* menu title with subtitle and icon item start */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/wp-hosting.html">
                                        <div className="media align-items-center">
                                            <div className="menu-item-icon rounded-circle dribbble-bg">
                                                <i className="fab fa-wordpress"></i>
                                            </div>
                                            <div className="media-body">
                                                <span className="u-header__promo-title">Wordpress Hosting</span>
                                                <small className="u-header__promo-text">Conveniently Starting at
                                                    <strong>$9.99/mo</strong></small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* menu title with subtitle and icon item end */}
                            </div>
                        </div>

                    </div>

                    {/* Mega Menu Banner */}
                    <div className="u-header__product-banner bg-image" image-overlay="8">
                        <div className="background-image-wraper custom-radius-bottom" style={{background: "url('/img/hero-8.jpg')no-repeat center center / cover2", opacity: '1',}}></div>
                        <div className="u-header__product-banner-content position-relative z-index text-center text-white">
                            <div className="mb-4">
                                <h5 className="text-white">Get 25% Discount Start Now</h5>
                                <div className="clock menu-countdown my-4"></div>
                            </div>
                            <a className="btn btn-brand-03" href="/#">Get Started<span className="ti-arrow-right pl-2"></span></a>
                        </div>
                    </div>
                    {/* End Mega Menu Banner */}
                </div>
                {/* End Demos - Mega Menu */}
            </li>
            {/* hosting end */}
        </>
    )
}

export default Hosting
