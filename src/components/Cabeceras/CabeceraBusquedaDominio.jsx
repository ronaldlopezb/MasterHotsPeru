import React from 'react'

const CabeceraBusquedaDominio = () => {
    return (
        <>
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
        </>
    )
}

export default CabeceraBusquedaDominio
