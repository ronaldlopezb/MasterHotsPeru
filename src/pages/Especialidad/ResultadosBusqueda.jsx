import React from 'react'

const ResultadosBusqueda = () => {
    return (
        <>
            <div className="main">
                {/* hero section start */}
                <section className="hero-equal-height ptb-120 gradient-overlay bg-image" image-overlay="7">
                    <div className="background-image-wraper" style={{background: "url('/img/hero-1.jpg')no-repeat center center / cover", opacity: '1',}}></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="hero-content-left text-white text-center">
                                    <h1 className="text-white">Search for Find Unique Domains!</h1>
                                    <p className="lead">Up to 50% Off domain and hosting, Starting from $2.99/month, free SSL certificate, 24/7/365 support, money back guarantee.</p>

                                    <form action="domain-search-result.php" className="domain-transfer-form mt-3 w-75 d-block mx-auto">
                                        <div className="input-group">
                                            <input type="text" name="domain" id="domain" className="form-control" placeholder="yourdomainname.com" />
                                            <div className="input-group-append">
                                                <button className="btn search-btn btn-brand-03 btn-hover d-flex align-items-center" type="submit">
                                                    <span className="ti-world mr-2"></span> Search
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="domain-list-wrap text-center mt-4">
                                        <ul className="list-inline domain-search-list">
                                            <li className="list-inline-item border rounded">
                                                <a href="/#"><img src="/img/com-w.png" alt="com" width="60" className="img-fluid" /> <span>$8.99</span></a>
                                            </li>
                                            <li className="list-inline-item border rounded">
                                                <a href="/#"><img src="/img/online-w.png" alt="com" width="60" className="img-fluid" /> <span>$0.99</span></a>
                                            </li>
                                            <li className="list-inline-item border rounded">
                                                <a href="/#"><img src="/img/net-w.png" alt="com" width="60" className="img-fluid" /> <span>$4.99</span></a>
                                            </li>
                                            <li className="list-inline-item border rounded">
                                                <a href="/#"><img src="/img/org-w.png" alt="com" width="60" className="img-fluid" /> <span>$2.99</span></a>
                                            </li>
                                            <li className="list-inline-item border rounded">
                                                <a href="/#"><img src="/img/store-w.png" alt="com" width="60" className="img-fluid" /> <span>$0.99</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* hero section end */}

                {/* domain search result section start */}
                <section className="domain-search-result-section gray-light-bg ptb-100">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-3">
                                <div className="domain-extension-filter-wrap p-4 white-bg rounded">
                                    <div className="domain-filter-title">
                                        <h5 className="mb-0">Filter Results <span className="ti-angle-down float-right"></span></h5>
                                    </div>
                                    <ul className="list-unstyled domain-filter-list mt-3">
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />Show All
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.com
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.net
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.online
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.org
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.xyz
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.store
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.website
                                            </label>
                                        </li>
                                        <li className="form-check">
                                            <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" value="" />.biz
                                            </label>
                                        </li>
                                        <button type="submit" className="btn btn-block btn-outline-brand-01 btn-sm mt-3">Apply</button>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-9">
                                <div className="content-with-sidebar">
                                    {/* alert table start */}
                                    <table className="table vps-hosting-pricing-table domain-search-result-table alert-table mb-5">
                                        <tbody>
                                            <tr className="vps-pricing-row">
                                                <td>Domain <span className="color-primary">example.com</span> is available!
                                                    <br/><small>Get this domain now </small></td>
                                                <td>
                                                    <p>
                                                        <span className="rate">$3.95<span>/month</span></span>
                                                        <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 30%</span></span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <a href="/#" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* alert table end */}
                                    <h4 className="text-center">More domain options</h4>
                                    <table className="table vps-hosting-pricing-table domain-search-result-table">
                                        <tbody>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.com</span></td>
                                                <td data-value="Price">
                                                    <p>
                                                        <span className="rate">$3.95<span>/month</span></span>
                                                        <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 30%</span></span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.net</span></td>
                                                <td data-value="Price">
                                                    <p>
                                                        <span className="rate">$8.95<span>/month</span></span>
                                                        <span className="pricing-onsale">On sale - <span className="badge color-1 color-1-bg">Save 50%</span></span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.org</span></td>
                                                <td data-value="Price">
                                                    <p>
                                                        <span className="rate">$12.95<span>/month</span></span>
                                                        <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 10%</span></span>
                                                    </p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.info</span></td>
                                                <td data-value="Price">
                                                    <p><span className="rate">$15.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                        className="badge color-3 color-3-bg">Save 30%</span></span></p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.store</span></td>
                                                <td data-value="Price">
                                                    <p><span className="rate">$23.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                        className="badge color-5 color-5-bg">Save 40%</span></span></p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                            <tr className="vps-pricing-row">
                                                <td data-value="Available">hostlar<span className="color-primary">.online</span></td>
                                                <td data-value="Price">
                                                    <p><span className="rate">$29.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                        className="badge color-3 color-3-bg">Save 10%</span></span></p>
                                                </td>
                                                <td>
                                                    <a href="/" className="btn btn-brand-01 btn-sm">Add to Cart</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* domain search result section end */}

                {/* popular domain list section start */}
                <section className="feature-tab-section ptb-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-12 order-lg-last">
                                <div className="image-box fadein text-xl-right text-center">
                                    <img src="/img/network-1.jpg" alt="wp-hosting" className="img-fluid rounded" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12 order-xl-first">
                                <h2>Advanced Search to Make your Life Fester and Easier</h2>
                                <p className="lead">Progressively matrix mission-critical core competencies without magnetic
                                    paradigms.</p>
                                <div className="row pt-2">
                                    <div className="col-12">
                                        <h5>Multi-layered security</h5>
                                        <p>Continually empower goal-oriented niche markets whereas interoperable outsourcing. Assertively incubate standardized methods of empowerment </p>
                                    </div>
                                    <div className="col-12">
                                        <h5>Green-friendly hosting</h5>
                                        <p>Monotonectally negotiate multifunctional applications whereas unique niche markets. Continually recaptiualize open-source catalysts for change whereas adaptive content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-xl-6 col-lg-6 col-12 order-lg-last">
                                <div className="image-box fadein text-xl-right text-center">
                                    <img src="/img/network-2.jpg" alt="wp-hosting" className="img-fluid rounded" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12 order-xl-last">
                                <h2>Fast connectivity & low latency</h2>
                                <p className="lead">Efficiently reintermediate long-term high-impact channels without equity
                                    invested technology.</p>
                                <div className="row pt-2">
                                    <div className="col-12">
                                        <h5>Exclusive Features</h5>
                                        <p>Globally seize functional products rather than compelling supply chains capital before frictionless quality vectors. Holisticly envisioneer worldwide niche markets for efficient services.</p>
                                    </div>
                                    <div className="col-12">
                                        <h5>Ultra-Fast Network</h5>
                                        <p>Dramatically aggregate granular resources vis-a-vis process-centric process deliver enterprise-wide scenarios improvements. Quickly target compelling e-services after cross functional schemas. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* popular domain list section end */}

                {/* domain name block start */}
                <section className="ptb-60 primary-bg">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-7 col-lg-6">
                                <div className="cta-content-wrap text-white">
                                    <h2 className="text-white">Best Cloud Hosting <br/> With Trusted Service</h2>
                                    <p>Objectively innovate high standards in methodologies vis-a-vis sustainable compellingly maintain multidisciplinary process proactively streamline mission-critical information via quality imperatives. </p>
                                </div>
                                <div className="action-btns mt-4">
                                    <a href="/#" className="btn btn-brand-03"> Get Start Now </a>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4">
                                <div className="cta-img-wrap text-center">
                                    <img src="/img/server-room.svg" className="img-fluid" alt="server room" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* domain name block end */}

                {/* faq new style start */}
                <section id="faq" className="ptb-100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Frequently Asked Queries</h2>
                                    <p>Efficiently productivate reliable paradigms before ubiquitous models. Continually utilize frictionless expertise whereas tactical relationships. Still have questions? Contact us</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-12">
                                <div id="accordion" className="accordion faq-wrap">
                                    <div className="card mb-3">
                                        <a className="card-header " data-toggle="collapse" href="#collapse0" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">Which license do I need?</h6>
                                        </a>
                                        <div id="collapse0" className="collapse show" data-parent="#accordion" style={{}}>
                                            <div className="card-body white-bg">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse1" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">How do I get access to a theme?</h6>
                                        </a>
                                        <div id="collapse1" className="collapse " data-parent="#accordion" style={{}}>
                                            <div className="card-body white-bg">
                                                <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus. Seamlessly optimize empowered testing procedures before revolutionary processes. Progressively facilitate client-centered technologies whereas extensive users. Authoritatively. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse2" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">How do I see previous orders?</h6>
                                        </a>
                                        <div id="collapse2" className="collapse " data-parent="#accordion" style={{}}>
                                            <div className="card-body white-bg">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&#x27;t heard of them accusamus labore sustainable VHS. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <a className="card-header collapsed" data-toggle="collapse" href="#collapse3" aria-expanded="false">
                                            <h6 className="mb-0 d-inline-block">Support related issues for the template?</h6>
                                        </a>
                                        <div id="collapse3" className="collapse " data-parent="#accordion" style={{}}>
                                            <div className="card-body white-bg">
                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Professionally embrace customer directed value vis-a-vis high-quality portals. Quickly underwhelm B2C users with maintainable benefits. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq new style end */}
            </div>
        </>
    )
}

export default ResultadosBusqueda
