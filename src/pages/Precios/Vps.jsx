import React from 'react'

const Vps = () => {
    return (
        <>
            <div className="main">

                {/* page header section start */}
                <section className="page-header-section ptb-120 gradient-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center text-white">
                                    <h2 className="text-white">Choose Your VPS Hosting Plan</h2>
                                    <p className="lead">Uniquely restore open-source products via open-source relationships.
                                        Enthusiastically deliver competitive systems and client-centric.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* page header section end */}

                {/* vps hosting pricing plane start */}
                <section className="vps-pricing-plane ptb-100 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Choose Your VPS Hosting Plan</h2>
                                    <p className="lead">Uniquely restore open-source products via open-source relationships.
                                        Enthusiastically deliver competitive systems and client-centric.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <table className="table vps-hosting-pricing-table">
                                    <thead className="primary-bg text-white">
                                        <tr>
                                            <th>VCPU</th>
                                            <th>Memory</th>
                                            <th>CPU Power</th>
                                            <th>Storage</th>
                                            <th>Geekbench Score</th>
                                            <th>Bandwidth</th>
                                            <th colspan="2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">1 vCPU</td>
                                            <td data-value="Memory">2GB</td>
                                            <td data-value="CPU Power"><span>2.4GHz<span className="cpu-core">1 core</span></span></td>
                                            <td data-value="Storage">20GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">3513</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '30%',}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">1000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0">
                                                    <span className="rate">$3.95<span>/month</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 30%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">2 vCPU</td>
                                            <td data-value="Memory">4GB</td>
                                            <td data-value="CPU Power"><span>4.8GHz<span className="cpu-core">2 cores</span></span></td>
                                            <td data-value="Storage">40GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">5363</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '40%',}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">40%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">2000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0">
                                                    <span className="rate">$8.95<span>/month</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-1 color-1-bg">Save 50%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">3 vCPU</td>
                                            <td data-value="Memory">6GB</td>
                                            <td data-value="CPU Power"><span>7.2GHz<span className="cpu-core">3 cores</span></span></td>
                                            <td data-value="Storage">60GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">7545</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '60%',}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">3000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0">
                                                    <span className="rate">$12.95<span>/month</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 10%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">4 vCPU</td>
                                            <td data-value="Memory">8GB</td>
                                            <td data-value="CPU Power"><span>9.6GHz<span className="cpu-core">4 cores</span></span></td>
                                            <td data-value="Storage">80GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">8953</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">4000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0"><span className="rate">$15.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-3 color-3-bg">Save 30%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">6 vCPU</td>
                                            <td data-value="Memory">12GB</td>
                                            <td data-value="CPU Power"><span>14.4GHz<span className="cpu-core">6 cores</span></span></td>
                                            <td data-value="Storage">120GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">10789</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '85%',}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">6000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0"><span className="rate">$23.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-5 color-5-bg">Save 40%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row gray-light-bg">
                                            <td data-value="VCPU">8 vCPU</td>
                                            <td data-value="Memory">16GB</td>
                                            <td data-value="CPU Power"><span>19.2GHz<span className="cpu-core">8 cores</span></span></td>
                                            <td data-value="Storage">160GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">12632</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '100%',}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">8000GB</td>
                                            <td data-value="Price">
                                                <p className="mb-0"><span className="rate">$29.95<span>/month</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-3 color-3-bg">Save 10%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/* vps hosting pricing plane end */}

                {/* vps hosting pricing plane two start */}
                <section className="vps-pricing-plane ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>VPS Hosting Pricing Plane</h2>
                                    <p className="lead">Uniquely restore open-source products via open-source relationships.
                                        Enthusiastically deliver competitive systems and client-centric.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="offer-block gradient-bg d-flex align-items-center justify-content-between px-5 py-4 position-relative z-index">
                                    <div className="offer-content text-white">
                                        <h5 className="mb-1 text-white">Our Server is 25% Faster</h5>
                                        <p>With under 60 seconds worldwide deploy!</p>
                                    </div>
                                    <div className="offer-btn text-white">
                                        <a href="/#" className="btn btn-brand-03 offer-link">Get Offer</a>
                                    </div>
                                </div>
                                <table className="table vps-hosting-pricing-table vps-hosting-pricing-table-two">
                                    <thead>
                                        <tr>
                                            <th>VCPU</th>
                                            <th>Memory</th>
                                            <th>CPU Power</th>
                                            <th>Storage</th>
                                            <th>Geekbench Score</th>
                                            <th>Bandwidth</th>
                                            <th colspan="2">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">1 vCPU</td>
                                            <td data-value="Memory">2GB</td>
                                            <td data-value="CPU Power"><span>2.4GHz<span className="cpu-core">1 core</span></span></td>
                                            <td data-value="Storage">20GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">3513</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '30%',}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">1000GB</td>
                                            <td data-value="Price">
                                                <p>
                                                    <span className="rate">$3.95<span>/mo</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 30%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">2 vCPU</td>
                                            <td data-value="Memory">4GB</td>
                                            <td data-value="CPU Power"><span>4.8GHz<span className="cpu-core">2 cores</span></span></td>
                                            <td data-value="Storage">40GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">5363</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '40%',}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">40%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">2000GB</td>
                                            <td data-value="Price">
                                                <p>
                                                    <span className="rate">$8.95<span>/mo</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-1 color-1-bg">Save 50%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">3 vCPU</td>
                                            <td data-value="Memory">6GB</td>
                                            <td data-value="CPU Power"><span>7.2GHz<span className="cpu-core">3 cores</span></span></td>
                                            <td data-value="Storage">60GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">7545</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '60%',}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">3000GB</td>
                                            <td data-value="Price">
                                                <p>
                                                    <span className="rate">$12.95<span>/mo</span></span>
                                                    <span className="pricing-onsale">On sale - <span className="badge color-3 color-3-bg">Save 10%</span></span>
                                                </p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">4 vCPU</td>
                                            <td data-value="Memory">8GB</td>
                                            <td data-value="CPU Power"><span>9.6GHz<span className="cpu-core">4 cores</span></span></td>
                                            <td data-value="Storage">80GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">8953</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">4000GB</td>
                                            <td data-value="Price">
                                                <p><span className="rate">$15.95<span>/mo</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-3 color-3-bg">Save 30%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">6 vCPU</td>
                                            <td data-value="Memory">12GB</td>
                                            <td data-value="CPU Power"><span>14.4GHz<span className="cpu-core">6 cores</span></span></td>
                                            <td data-value="Storage">120GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">10789</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '85%',}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">6000GB</td>
                                            <td data-value="Price">
                                                <p><span className="rate">$23.95<span>/mo</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-5 color-5-bg">Save 40%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                        <tr className="vps-pricing-row">
                                            <td data-value="VCPU">8 vCPU</td>
                                            <td data-value="Memory">16GB</td>
                                            <td data-value="CPU Power"><span>19.2GHz<span className="cpu-core">8 cores</span></span></td>
                                            <td data-value="Storage">160GB</td>
                                            <td data-value="Geekbench Score">
                                                <div className="score-bar-wrap">
                                                    <span className="geekbench-score">12632</span>
                                                    <div className="progress w-100 score-bar-item">
                                                        <div className="progress-bar primary-bg" role="progressbar" style={{width: '100%',}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-value="Bandwidth">8000GB</td>
                                            <td data-value="Price">
                                                <p><span className="rate">$29.95<span>/mo</span></span><span className="pricing-onsale">On sale - <span
                                                    className="badge color-3 color-3-bg">Save 10%</span></span></p>
                                            </td>
                                            <td>
                                                <a href="/#" className="btn btn-brand-01 btn-xs">Order Now</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/* vps hosting pricing plane two end */}

                {/* faq new style start */}
                <section id="faq" className="ptb-100 gray-light-bg">
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

export default Vps
