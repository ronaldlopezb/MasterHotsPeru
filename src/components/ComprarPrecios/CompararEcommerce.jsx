import React from 'react'

const CompararEcommerce = () => {
    return (
        <>
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
        </>
    )
}

export default CompararEcommerce
