import React from 'react'

const Dominio = () => {
    return (
        <>
            {/* domain start */}
            <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                <a id="domainMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#" >Dominios</a>
                {/* Demos - Mega Menu */}
                <div className="hs-mega-menu main-sub-menu" style={{width: '660px',}} aria-labelledby="domainMegaMenu">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-6">
                            <div className="menu-item-wrap p-3">
                                {/* menu title with subtitle and icon item start */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/domain-checker.html">
                                        <div className="d-flex align-items-center pb-1">
                                            <i className="fas fa-globe mr-2 color-primary"></i>
                                            <span className="u-header__promo-title">Domain Checker</span>
                                        </div>
                                        <small className="u-header__promo-text">Find the perfect domain for your business</small>
                                    </a>
                                </div>
                                {/* menu title with subtitle and icon item end */}

                                {/* menu title with subtitle and icon item start */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/domain-transfer.html">
                                        <div className="d-flex align-items-center pb-1">
                                            <i className="fas fa-exchange-alt mr-2 color-accent"></i>
                                            <span className="u-header__promo-title">Domain Transfer</span>
                                        </div>
                                        <small className="u-header__promo-text">Transfer your domain easily using this tool</small>
                                    </a>
                                </div>
                                {/* menu title with subtitle and icon item end */}

                                {/* menu title with subtitle and icon item start */}
                                <div className="title-with-icon-item">
                                    <a className="title-with-icon-link" href="/domain-registration.html">
                                        <div className="d-flex align-items-center pb-1">
                                            <i className="fas fa-copyright mr-2 instagram-color"></i>
                                            <span className="u-header__promo-title">Domain Registration </span>
                                        </div>
                                        <small className="u-header__promo-text">Register your domain name for lifetime</small>
                                    </a>
                                </div>
                                {/* menu title with subtitle and icon item end */}
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 gray-light-bg custom-radius-right">
                            <div className="menu-item-wrap p-4">
                                <h6>#1 Web Hosting Company</h6>
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Flexible</strong> Easy to Use Control Panel</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Free SSL</strong> Certificate Included</small></li>
                                </ul>
                                <a className="btn btn-brand-03 mt-3" href="/#">
                                    Learn More <span className="fas fa-angle-right ml-2"></span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End Demos - Mega Menu */}
            </li>
            {/* domain end */}
        </>
    )
}

export default Dominio
