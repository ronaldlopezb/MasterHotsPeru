import React from 'react'

const Empresa = () => {
    return (
        <>
            {/* about start */}
            <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                <a id="aboutMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Emrpesa</a>

                {/* about submenu start */}
                <div className="hs-mega-menu main-sub-menu" style={{width: '320px',}} aria-labelledby="aboutMegaMenu">
                    {/* menu title with subtitle and icon item start */}
                    <div className="title-with-icon-item">
                        <a className="title-with-icon-link" href="/contact-us.html">
                            <div className="media align-items-center">
                                <img className="menu-titile-icon" src="/img/chat-mobile.svg" alt="SVG" />
                                <div className="media-body">
                                    <span className="u-header__promo-title">Contact Us</span>
                                    <small className="u-header__promo-text">Face any problem contact with us
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* menu title with subtitle and icon item end */}

                    {/* menu title with subtitle and icon item start */}
                    <div className="title-with-icon-item">
                        <a className="title-with-icon-link" href="/about-us.html">
                            <div className="media align-items-center">
                                <img className="menu-titile-icon" src="/img/community.svg" alt="SVG" />
                                <div className="media-body">
                                    <span className="u-header__promo-title">About Us</span>
                                    <small className="u-header__promo-text">We are leading hosting company
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* menu title with subtitle and icon item end */}

                    {/* menu title with subtitle and icon item start */}
                    <div className="title-with-icon-item">
                        <a className="title-with-icon-link" href="/partners.html">
                            <div className="media align-items-center">
                                <img className="menu-titile-icon" src="/img/partner.svg" alt="SVG" />
                                <div className="media-body">
                                    <span className="u-header__promo-title">Our Partner</span>
                                    <small className="u-header__promo-text">We have trusted partners globally
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* menu title with subtitle and icon item end */}

                    {/* menu title with subtitle and icon item start */}
                    <div className="title-with-icon-item">
                        <a className="title-with-icon-link" href="/network.html">
                            <div className="media align-items-center">
                                <img className="menu-titile-icon" src="/img/network.svg" alt="SVG" />
                                <div className="media-body">
                                    <span className="u-header__promo-title">Network</span>
                                    <small className="u-header__promo-text">Keep your data save and secure
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* menu title with subtitle and icon item end */}

                    {/* menu title with subtitle and icon item start */}
                    <div className="title-with-icon-item">
                        <a className="title-with-icon-link" href="/blog-grid.html">
                            <div className="media align-items-center">
                                <img className="menu-titile-icon" src="/img/blog.svg" alt="SVG" />
                                <div className="media-body">
                                    <span className="u-header__promo-title">Company Blog</span>
                                    <small className="u-header__promo-text">Industry latest technology news &
                                        tips
                                    </small>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* menu title with subtitle and icon item end */}
                </div>
                {/* about submenu end */}
            </li>
            {/* about end */}
        </>
    )
}

export default Empresa
