import React from 'react'

//import { Link } from "react-router-dom";

const MenuPrincipal = () => {
    return (
        <>
            {/* header section start */}
            <header id="header" className="header-main">
                <div id="logoAndNav" className="main-header-menu-wrap bg-transparent fixed-top">
                    <div className="container">
                        <nav className="js-mega-menu navbar navbar-expand-md header-nav">

                            {/* logo */}
                            <a className="navbar-brand" href="/"><img src="/img/logo-white.png" width="120" alt="logo" className="img-fluid" /></a>

                            {/* responsive toggle button start */}
                            <button type="button" className="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                                <span id="hamburgerTrigger">
                                    <span className="ti-menu"></span>
                                </span>
                            </button>

                            {/* main menu start */}
                            <div id="navBar" className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto main-navbar-nav">

                                    {/* home start */}
                                    <li className="nav-item hs-has-mega-menu custom-nav-item" data-position="center">
                                        <a id="homeMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Home</a>

                                        {/* home mega menu start */}
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
                                        {/* home mega menu end */}
                                    </li>
                                    {/* home end */}

                                    {/* pages start */}
                                    <li className="nav-item hs-has-sub-menu custom-nav-item">
                                        <a id="pagesMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#" aria-labelledby="pagesSubMenu">Pages</a>

                                        {/* Pages - Submenu */}
                                        <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style={{minwidth: '230px',}}>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/nosotros">Nosotros</a>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/blackfridaycoming">Black Friday Coming
                                                    <span className="badge badge-warning ml-auto">Nuevo</span>
                                                </a>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/blackfridaysale">Black Friday Sale<span className="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/blackfridaysingle">Black Friday Single<span className="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/terminos-condiciones">Términos & Condiciones<span className="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li className="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/politicas-privacidad">Políticas de Privacidad<span className="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>

                                            <li className="hs-has-sub-menu">
                                                <a id="navLinkPagesPricing" className="nav-link sub-menu-nav-link sub-link-toggle" href="/" aria-controls="navSubmenuPagesPricing">Pricing</a>

                                                <ul id="navSubmenuPagesPricing" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesPricing" style={{minwidth: '230px',}}>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/precios">Precios</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/paquetes">Precios de paquetes</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/web-hosting">Web Hosting</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/web-hosting-windows">Windows Hosting</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/comparacion-precios">Comparación de precios</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/vps">VPS Hosting</a></li>
                                                </ul>
                                            </li>

                                            <li className="hs-has-sub-menu">
                                                <a id="navLinkPagesBlog" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesBlog">Blog</a>

                                                <ul id="navSubmenuPagesBlog" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesBlog" style={{minwidth: '230px',}}>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/blog">Blog</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/articulo">Artículo</a></li>
                                                </ul>
                                            </li>

                                            <li className="hs-has-sub-menu">
                                                <a id="navLinkPagesSpecialty" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

                                                <ul id="navSubmenuPagesSpecialty" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesSpecialty" style={{minwidth: '230px',}}>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/resultado-buscar-dominio">Resultado de búsqueda <span className="badge badge-warning ml-2">New</span></a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/cover">Cover</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/pronto-en-linea">Pronto en linea</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/agradecimiento">Agradecimiento</a></li>
                                                    <li><a className="nav-link sub-menu-nav-link" href="/404">Error 404</a></li>
                                                </ul>
                                            </li>

                                            <li className="hs-has-sub-menu">
                                                <a id="navLinkPagesLogin" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesLogin">Acceso &amp; Registro</a>

                                                <ul id="navSubmenuPagesLogin" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesLogin" style={{minwidth: '230px',}}>
                                                    <li>
                                                        <a className="nav-link sub-menu-nav-link" href="/acceder">Acceder</a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link sub-menu-nav-link" href="/registro">Registro</a>
                                                    </li>
                                                    <li>
                                                        <a className="nav-link sub-menu-nav-link" href="/recuperar-cuenta">Recuperar cuenta</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* End Pages - Submenu */}
                                    </li>
                                    {/* pages end*/}


                                    {/* hosting start */}
                                    <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="hostingMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Hosting</a>

                                        {/* Demos - Mega Menu */}
                                        <div className="hs-mega-menu main-sub-menu" style={{width: '715px',}} aria-labelledby="hostingMegaMenu">
                                            <div className="row no-gutters">
                                                <div className="col-md-6">
                                                    <div className="menu-item-wrap py-0 p-md-3 p-lg-3">

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div className="title-with-icon-item">
                                                            <a className="title-with-icon-link" href="/shared-hosting.html">
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
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div className="title-with-icon-item">
                                                            <a className="title-with-icon-link" href="/vps-hosting.html">
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
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div className="title-with-icon-item">
                                                            <a className="title-with-icon-link" href="/cloud-hosting.html">
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
                                                        {/* menu title with subtitle and icon item end */}
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="menu-item-wrap py-0 p-md-3 p-lg-3">
                                                        {/* menu title with subtitle and icon item start */}
                                                        <div className="title-with-icon-item">
                                                            <a className="title-with-icon-link" href="/email-hosting.html">
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
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div className="title-with-icon-item">
                                                            <a className="title-with-icon-link" href="/windows-vps-hosting.html">
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

                                    {/* domain start */}
                                    <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="domainMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#" >Domain</a>
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

                                    <li className="nav-item custom-nav-item">
                                        <a className="nav-link custom-nav-link" href="/affiliates.html">Affiliates</a>
                                    </li>

                                    {/* about start */}
                                    <li className="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="aboutMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#">Company</a>

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

                                    {/* button start */}
                                    <li className="nav-item header-nav-last-item d-flex align-items-center">
                                        <a className="btn btn-brand-03 animated-btn" href="/#" target="_blank">
                                            <span className="fa fa-user pr-2"></span> Client Area
                                        </a>
                                    </li>
                                    {/* button end */}
                                </ul>
                            </div>
                            {/* main menu end */}
                        </nav>
                    </div>
                </div>
                {/* main header menu end */}
            </header>
            {/* header section end */}
        </>
    )
}

export default MenuPrincipal
