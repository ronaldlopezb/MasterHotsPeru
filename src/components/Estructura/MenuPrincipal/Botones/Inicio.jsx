import React from 'react'

const Inicio = () => {
    return (
        <>
            <li className="nav-item hs-has-mega-menu custom-nav-item" data-position="center">
                <a id="homeMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Inicio</a>

                <div className="hs-mega-menu main-sub-menu w-100" aria-labelledby="homeMegaMenu">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-sm-6 col-12 gray-light-bg custom-radius-left">
                            <div className="menu-item-wrap p-4">
                                <h6>#1 Web Hosting Company</h6>
                                <ul className="list-unstyled tech-feature-list">
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Flexible</strong> Easy to Use Control Panel</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Unmetered</strong> Bandwidth</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Unmetered</strong> Sub Domains, Accounts</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</small></li>
                                    <li className="py-1"><small><span className="fas fa-check-circle text-success mr-2"></span><strong>Free SSL</strong> Certificate Included</small></li>
                                </ul>
                                <a className="btn btn-brand-03 mt-3" href="/#">
                                    Learn More <span className="fas fa-angle-right ml-2"></span>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-7 col-sm-6 col-12 custom-radius-right">
                            <div className="row no-gutters p-4">
                                <div className="col-12">
                                    <span className="sub-menu-title pl-3">Our Popular Products</span>
                                </div>
                                <div className="col-md-6">
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-1-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">Product Landing Page Template</small>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-2-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">Corporate Business & Agency Template</small>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-6-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">App Landing Page Template</small>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-3-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">App Landing Page Template</small>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-4-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">Corporate Business Template</small>
                                        </a>
                                    </div>
                                    <div className="title-with-icon-item">
                                        <a className="title-with-icon-link" href="/#">
                                            <img src="/img/client-5-color.png" width="85" className="img-fluid" alt="client" />
                                            <small className="u-header__promo-text">Hosting Provider Template</small>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Inicio
