import React from 'react'
import FiltroDominio from '../../components/Dominio/FiltroDominio'

const ResultadoDominio = () => {
    return (
        <>
            <section className="domain-search-result-section gray-light-bg ptb-100">
                <div className="container">
                    <div className="row justify-content-between">
                        
                        <div className="col-lg-3">
                            <FiltroDominio/>
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
        </>
    )
}

export default ResultadoDominio
