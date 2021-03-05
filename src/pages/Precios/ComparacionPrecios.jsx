import React from 'react'

const ComparacionPrecios = () => {
    return (
        <div>
            <div className="main">

                {/* page header section start */}
                <section className="ptb-120 gradient-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-8">
                                <div className="hero-content-wrap text-white text-center position-relative">
                                    <h1 className="text-white">Comparando precios</h1>
                                    <p className="lead">Web hosting made easy & affordable, choose a fine-tuned web hosting services solution for successful personal and business websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* page header section end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Our Pricing Package Comparision</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">
                                                    <p className="mb-0"><strong>Choose your plan</strong></p>
                                                    <small><a href="/#">Or Chat with an expert</a></small>
                                                </th>
                                                <th><strong className="h5 mb-0">Cloud Starter</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Cloud Business <span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Cloud Enterprise</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$4.5 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$10.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$15.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left">Number of Websites</p>
                                                </td>
                                                <td>1</td>
                                                <td>5</td>
                                                <td>Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left">Bandwidth</p>
                                                </td>
                                                <td>2GB</td>
                                                <td>5GB</td>
                                                <td>Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left">Email Accounts</p>
                                                </td>
                                                <td>Available for Purchase</td>
                                                <td>Included</td>
                                                <td>Included</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left">Storage</p>
                                                </td>
                                                <td>30GB</td>
                                                <td>50GB</td>
                                                <td>Unlimited</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">Subdomains</p>
                                                </td>
                                                <td>5</td>
                                                <td>10</td>
                                                <td>Unlimited</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">FTP/SFTP/Shell Users</p>
                                                </td>
                                                <td>5</td>
                                                <td>10</td>
                                                <td>Unlimited</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">MySQL Databases</p>
                                                </td>
                                                <td>6</td>
                                                <td>15</td>
                                                <td>Unlimited</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">SSD Storage</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">Automated Daily Backups</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">24/7 Ticket Support</p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left">Live Chat Support</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left">Money-back Guarantee</p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Web Hosting Packages</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">

                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.75 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.95 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.95 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Disk Space</p>
                                                </td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Bandwidth</p>
                                                </td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Domains Allowed</p>
                                                </td>
                                                <td>1 Domain</td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Free SSL </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Free Dedicated IP</p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Free Positive SSL Upgrade </p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Packages Details</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">
                                                    <p className="mb-0"><strong>Choose your plan</strong></p>
                                                    <small><a href="/#">Or Chat with an expert</a></small>
                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.5 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">24/7/365 Support</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Instant Backups </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">No Contract</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">99.9% Uptime guarantee </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Google Adwords </p>
                                                </td>
                                                <td>$50 Credit</td>
                                                <td>$75 Credit</td>
                                                <td>$100 Credit</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Bing</p>
                                                </td>
                                                <td>$50 Credit</td>
                                                <td>$75 Credit</td>
                                                <td>$100 Credit</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Free/Instant Setup</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Domain/FTP Features</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">

                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.75 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.95 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.95 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Subdomains</p>
                                                </td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">FTP Accounts</p>
                                                </td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Addon/Parked Domains</p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td>Unmetered</td>
                                                <td>Unmetered</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Anonymous FTP </p>
                                                </td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-close text-danger"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Email Hosting</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">
                                                    <p className="mb-0"><strong>Choose your plan</strong></p>
                                                    <small><a href="/#">Or Chat with an expert</a></small>
                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.5 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">POP3 Accounts</p>
                                                </td>
                                                <td>Unlimited</td>
                                                <td>Unlimited</td>
                                                <td>Unlimited</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Web Mail</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Email Alias </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Auto Responders </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Mailing Lists </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Spam Assassin</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Mail Forwarding </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">SMTP</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100 gray-light-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>Website/FTP Features</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">
                                                    <p className="mb-0"><strong>Choose your plan</strong></p>
                                                    <small><a href="/#">Or Chat with an expert</a></small>
                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.5 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">AWStats (Real Time Updates)</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Webalizer</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Raw Logs</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Referrer Logs </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Error Logs </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}

                {/* compare pricing table start */}
                <section className="compare-pricing-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 col-lg-8">
                                <div className="section-heading text-center mb-5">
                                    <h2>E-Commerce Features</h2>
                                    <p className="lead">
                                        Globally incubate next-generation e-services via state of the art technology. Appropriately
                                        iterate quality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table w-100 table-hover table-bordered comparision-table text-center">
                                        <thead className="comparision-table-head">
                                            <tr className="active">
                                                <th className="text-left">
                                                    <p className="mb-0"><strong>Choose your plan</strong></p>
                                                    <small><a href="/#">Or Chat with an expert</a></small>
                                                </th>
                                                <th><strong className="h5 mb-0">Basic Plan</strong>
                                                    <p className="text-muted text-sm">For Small Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Baby Plan<span
                                                    className="badge color-1 color-1-bg">Popular</span></strong>
                                                    <p className="text-muted text-sm">For Medium Business</p>
                                                </th>
                                                <th><strong className="h5 mb-0">Business Plan</strong>
                                                    <p className="text-muted text-sm">For Large Business</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="comparision-table-body">
                                            <tr>
                                                <td>
                                                    <p className="mb-0 comparision-price-title text-left"><strong>Price</strong></p>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$2.5 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$3.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                                <td className="py-4">
                                                    <h4 className="mb-0 comparision-price">$5.99 <span>/month</span></h4>
                                                    <a href="/#" className="btn btn-brand-01 btn-xs mt-2">Get Started</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">osCommerce</p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">ZenCart </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Private SSL Allowed </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="text-left font-weight-bold">Dedicated IP </p>
                                                </td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                                <td><span className="ti-check color-primary"></span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* compare pricing table end */}
            </div>
        </div>
    )
}

export default ComparacionPrecios
