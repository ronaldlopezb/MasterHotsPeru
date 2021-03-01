import React from 'react'

//import { Link } from "react-router-dom";

const MenuPrincipal = () => {
    return (
        <>
            {/* header section start */}
            <header id="header" class="header-main">
                <div id="logoAndNav" class="main-header-menu-wrap bg-transparent fixed-top">
                    <div class="container">
                        <nav class="js-mega-menu navbar navbar-expand-md header-nav">

                            {/* logo */}
                            <a class="navbar-brand" href="/"><img src="/img/logo-white.png" width="120" alt="logo" class="img-fluid" /></a>

                            {/* responsive toggle button start */}
                            <button type="button" class="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                                <span id="hamburgerTrigger">
                                    <span class="ti-menu"></span>
                                </span>
                            </button>

                            {/* main menu start */}
                            <div id="navBar" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto main-navbar-nav">

                                    {/* home start */}
                                    <li class="nav-item hs-has-mega-menu custom-nav-item" data-position="center">
                                        <a id="homeMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="/#">Home</a>

                                        {/* home mega menu start */}
                                        <div class="hs-mega-menu main-sub-menu w-100" aria-labelledby="homeMegaMenu">
                                            <div class="row no-gutters">
                                                <div class="col-lg-5 col-sm-6 col-12 gray-light-bg custom-radius-left">
                                                    <div class="menu-item-wrap p-4">
                                                        <h6>#1 Web Hosting Company</h6>
                                                        <ul class="list-unstyled tech-feature-list">
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Flexible</strong> Easy to Use Control Panel</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Unmetered</strong> Bandwidth</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Unmetered</strong> Sub Domains, Accounts</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Free SSL</strong> Certificate Included</small></li>
                                                        </ul>
                                                        <a class="btn btn-brand-03 mt-3" href="/#">
                                                            Learn More <span class="fas fa-angle-right ml-2"></span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="col-lg-7 col-sm-6 col-12 custom-radius-right">
                                                    <div class="row no-gutters p-4">
                                                        <div class="col-12">
                                                            <span class="sub-menu-title pl-3">Our Popular Products</span>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-1-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">Product Landing Page Template</small>
                                                                </a>
                                                            </div>
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-2-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">Corporate Business & Agency Template</small>
                                                                </a>
                                                            </div>
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-6-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">App Landing Page Template</small>
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-3-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">App Landing Page Template</small>
                                                                </a>
                                                            </div>
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-4-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">Corporate Business Template</small>
                                                                </a>
                                                            </div>
                                                            <div class="title-with-icon-item">
                                                                <a class="title-with-icon-link" href="/#">
                                                                    <img src="/img/client-5-color.png" width="85" class="img-fluid" alt="client" />
                                                                    <small class="u-header__promo-text">Hosting Provider Template</small>
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
                                    <li class="nav-item hs-has-sub-menu custom-nav-item">
                                        <a id="pagesMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="/#" aria-labelledby="pagesSubMenu">Pages</a>

                                        {/* Pages - Submenu */}
                                        <ul id="pagesSubMenu" class="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style={{minwidth: '230px',}}>
                                            <li class="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/nosotros">Nosotros</a>
                                            </li>
                                            <li class="nav-item submenu-item">
                                                <a className="nav-link sub-menu-nav-link" href="/blackfridaycoming">Black Friday Coming
                                                    <span class="badge badge-warning ml-auto">Nuevo</span>
                                                </a>
                                            </li>
                                            <li class="nav-item submenu-item">
                                                <a class="nav-link sub-menu-nav-link" href="/blackfridaysale">Black Friday Sale<span class="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li class="nav-item submenu-item">
                                                <a class="nav-link sub-menu-nav-link" href="/blackfridaysingle">Black Friday Single<span class="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li class="nav-item submenu-item">
                                                <a class="nav-link sub-menu-nav-link" href="/terminos-condiciones">Términos & Condiciones<span class="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>
                                            <li class="nav-item submenu-item">
                                                <a class="nav-link sub-menu-nav-link" href="/politicas-privacidad">Políticas de Privacidad<span class="badge badge-warning ml-auto">Nuevo</span></a>
                                            </li>

                                            <li class="hs-has-sub-menu">
                                                <a id="navLinkPagesPricing" class="nav-link sub-menu-nav-link sub-link-toggle" href="/" aria-controls="navSubmenuPagesPricing">Pricing</a>

                                                <ul id="navSubmenuPagesPricing" class="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesPricing" style={{minwidth: '230px',}}>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/precios">Precios</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/paquetes">Precios de paquetes</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/web-hosting">Web Hosting</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/web-hosting-windows">Windows Hosting</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/comparacion-precios">Comparación de precios</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/vps">VPS Hosting</a></li>
                                                </ul>
                                            </li>

                                            <li class="hs-has-sub-menu">
                                                <a id="navLinkPagesBlog" class="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesBlog">Blog</a>

                                                <ul id="navSubmenuPagesBlog" class="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesBlog" style={{minwidth: '230px',}}>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/blog-grid.html">Blog Grid</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>

                                            <li class="hs-has-sub-menu">
                                                <a id="navLinkPagesSpecialty" class="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

                                                <ul id="navSubmenuPagesSpecialty" class="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesSpecialty" style={{minwidth: '230px',}}>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/domain-search-result.html">Search Result <span class="badge badge-warning ml-2">New</span></a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/cover-page.html">Cover Page</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/coming-soon.html">Coming Soon</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/thank-you.html">Thank You</a></li>
                                                    <li><a class="nav-link sub-menu-nav-link" href="/404.html">Error 404</a></li>
                                                </ul>
                                            </li>

                                            <li class="hs-has-sub-menu">
                                                <a id="navLinkPagesLogin" class="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesLogin">Login &amp; Signup</a>

                                                <ul id="navSubmenuPagesLogin" class="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesLogin" style={{minwidth: '230px',}}>
                                                    <li>
                                                        <a class="nav-link sub-menu-nav-link" href="/login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a class="nav-link sub-menu-nav-link" href="/sign-up.html">Signup</a>
                                                    </li>
                                                    <li>
                                                        <a class="nav-link sub-menu-nav-link" href="/password-reset.html">Recover Account</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* End Pages - Submenu */}
                                    </li>
                                    {/* pages end*/}


                                    {/* hosting start */}
                                    <li class="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="hostingMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="/#">Hosting</a>

                                        {/* Demos - Mega Menu */}
                                        <div class="hs-mega-menu main-sub-menu" style={{width: '715px',}} aria-labelledby="hostingMegaMenu">
                                            <div class="row no-gutters">
                                                <div class="col-md-6">
                                                    <div class="menu-item-wrap py-0 p-md-3 p-lg-3">

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/shared-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle primary-bg">
                                                                        <i class="fas fa-server"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">Shared Web Hosting</span>
                                                                        <small class="u-header__promo-text">Innovate reliable quality
                                                                            Starting at <strong>$2.99</strong></small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/vps-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle accent-bg">
                                                                        <i class="fas fa-box"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">VPS Hosting</span>
                                                                        <small class="u-header__promo-text">Pefficiently maintain
                                                                            Starting at <strong>$11.99</strong></small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/cloud-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle secondary-bg">
                                                                        <i class="fas fa-cloud"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">Cloud Hosting </span>
                                                                        <small class="u-header__promo-text">Conveniently cloud Starting
                                                                            at <strong>$5.99/mo</strong></small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="menu-item-wrap py-0 p-md-3 p-lg-3">
                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/email-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle twitter-bg">
                                                                        <i class="fas fa-envelope"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">Email Hosting</span>
                                                                        <small class="u-header__promo-text">First Starting at <strong>$0.99/mo
                                                                            per mailbox</strong></small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/windows-vps-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle btn-behance">
                                                                        <i class="fab fa-windows"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">Windows VPS Hosting</span>
                                                                        <small class="u-header__promo-text">Globally Starting at
                                                                            <strong>$9.99/mo</strong></small>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/wp-hosting.html">
                                                                <div class="media align-items-center">
                                                                    <div class="menu-item-icon rounded-circle dribbble-bg">
                                                                        <i class="fab fa-wordpress"></i>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <span class="u-header__promo-title">Wordpress Hosting</span>
                                                                        <small class="u-header__promo-text">Conveniently Starting at
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
                                            <div class="u-header__product-banner bg-image" image-overlay="8">
                                                <div class="background-image-wraper custom-radius-bottom" style={{background: "url('/img/hero-8.jpg')no-repeat center center / cover2", opacity: '1',}}></div>
                                                <div class="u-header__product-banner-content position-relative z-index text-center text-white">
                                                    <div class="mb-4">
                                                        <h5 class="text-white">Get 25% Discount Start Now</h5>
                                                        <div class="clock menu-countdown my-4"></div>
                                                    </div>
                                                    <a class="btn btn-brand-03" href="/#">Get Started<span class="ti-arrow-right pl-2"></span></a>
                                                </div>
                                            </div>
                                            {/* End Mega Menu Banner */}
                                        </div>
                                        {/* End Demos - Mega Menu */}
                                    </li>
                                    {/* hosting end */}

                                    {/* domain start */}
                                    <li class="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="domainMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="/#" >Domain</a>
                                        {/* Demos - Mega Menu */}
                                        <div class="hs-mega-menu main-sub-menu" style={{width: '660px',}} aria-labelledby="domainMegaMenu">
                                            <div class="row no-gutters">
                                                <div class="col-md-6 col-sm-6">
                                                    <div class="menu-item-wrap p-3">
                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/domain-checker.html">
                                                                <div class="d-flex align-items-center pb-1">
                                                                    <i class="fas fa-globe mr-2 color-primary"></i>
                                                                    <span class="u-header__promo-title">Domain Checker</span>
                                                                </div>
                                                                <small class="u-header__promo-text">Find the perfect domain for your business</small>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/domain-transfer.html">
                                                                <div class="d-flex align-items-center pb-1">
                                                                    <i class="fas fa-exchange-alt mr-2 color-accent"></i>
                                                                    <span class="u-header__promo-title">Domain Transfer</span>
                                                                </div>
                                                                <small class="u-header__promo-text">Transfer your domain easily using this tool</small>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}

                                                        {/* menu title with subtitle and icon item start */}
                                                        <div class="title-with-icon-item">
                                                            <a class="title-with-icon-link" href="/domain-registration.html">
                                                                <div class="d-flex align-items-center pb-1">
                                                                    <i class="fas fa-copyright mr-2 instagram-color"></i>
                                                                    <span class="u-header__promo-title">Domain Registration </span>
                                                                </div>
                                                                <small class="u-header__promo-text">Register your domain name for lifetime</small>
                                                            </a>
                                                        </div>
                                                        {/* menu title with subtitle and icon item end */}
                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-sm-6 gray-light-bg custom-radius-right">
                                                    <div class="menu-item-wrap p-4">
                                                        <h6>#1 Web Hosting Company</h6>
                                                        <ul class="list-unstyled tech-feature-list">
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Flexible</strong> Easy to Use Control Panel</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>99%</strong> Uptime Guarantee</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>45-Day</strong> Money-Back Guarantee</small></li>
                                                            <li class="py-1"><small><span class="fas fa-check-circle text-success mr-2"></span><strong>Free SSL</strong> Certificate Included</small></li>
                                                        </ul>
                                                        <a class="btn btn-brand-03 mt-3" href="/#">
                                                            Learn More <span class="fas fa-angle-right ml-2"></span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        {/* End Demos - Mega Menu */}
                                    </li>
                                    {/* domain end */}

                                    <li class="nav-item custom-nav-item">
                                        <a class="nav-link custom-nav-link" href="/affiliates.html">Affiliates</a>
                                    </li>

                                    {/* about start */}
                                    <li class="nav-item hs-has-mega-menu custom-nav-item position-relative" data-position="center">
                                        <a id="aboutMegaMenu" class="nav-link custom-nav-link main-link-toggle" href="/#">Company</a>

                                        {/* about submenu start */}
                                        <div class="hs-mega-menu main-sub-menu" style={{width: '320px',}} aria-labelledby="aboutMegaMenu">
                                            {/* menu title with subtitle and icon item start */}
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="/contact-us.html">
                                                    <div class="media align-items-center">
                                                        <img class="menu-titile-icon" src="/img/chat-mobile.svg" alt="SVG" />
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Contact Us</span>
                                                            <small class="u-header__promo-text">Face any problem contact with us
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* menu title with subtitle and icon item end */}

                                            {/* menu title with subtitle and icon item start */}
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="/about-us.html">
                                                    <div class="media align-items-center">
                                                        <img class="menu-titile-icon" src="/img/community.svg" alt="SVG" />
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">About Us</span>
                                                            <small class="u-header__promo-text">We are leading hosting company
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* menu title with subtitle and icon item end */}

                                            {/* menu title with subtitle and icon item start */}
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="/partners.html">
                                                    <div class="media align-items-center">
                                                        <img class="menu-titile-icon" src="/img/partner.svg" alt="SVG" />
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Our Partner</span>
                                                            <small class="u-header__promo-text">We have trusted partners globally
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* menu title with subtitle and icon item end */}

                                            {/* menu title with subtitle and icon item start */}
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="/network.html">
                                                    <div class="media align-items-center">
                                                        <img class="menu-titile-icon" src="/img/network.svg" alt="SVG" />
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Network</span>
                                                            <small class="u-header__promo-text">Keep your data save and secure
                                                            </small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {/* menu title with subtitle and icon item end */}

                                            {/* menu title with subtitle and icon item start */}
                                            <div class="title-with-icon-item">
                                                <a class="title-with-icon-link" href="/blog-grid.html">
                                                    <div class="media align-items-center">
                                                        <img class="menu-titile-icon" src="/img/blog.svg" alt="SVG" />
                                                        <div class="media-body">
                                                            <span class="u-header__promo-title">Company Blog</span>
                                                            <small class="u-header__promo-text">Industry latest technology news &
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
                                    <li class="nav-item header-nav-last-item d-flex align-items-center">
                                        <a class="btn btn-brand-03 animated-btn" href="/#" target="_blank">
                                            <span class="fa fa-user pr-2"></span> Client Area
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
