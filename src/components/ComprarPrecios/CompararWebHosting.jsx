import React from 'react'

const CompararWebHosting = () => {
    return (
        <>
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
        </>
    )
}

export default CompararWebHosting
