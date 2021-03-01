import React from 'react'

const DominioBuscador = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8 col-12">
                            <div className="domain-search-wrap border gray-light-bg">
                                <h4 className="text-center">Looking For Domain Name?</h4>
                                <form action="domain-search-result.php" method="GET" className="domain-search-form my-4">
                                    <input type="text" name="domain" id="domain" className="form-control" placeholder="yourdomainname.com" />
                                    <div className="select-group">
                                        <select name="domainType" className="form-control">
                                            <option value="com" selected>.com</option>
                                            <option value="net">.net</option>
                                            <option value="io">.io</option>
                                            <option value="info">.info</option>
                                            <option value="store">.store</option>
                                            <option value="store">.org</option>
                                        </select>
                                        <button type="submit" className="btn btn-brand-01"><i className="fas fa-search pr-1"></i> Search</button>
                                    </div>
                                </form>

                                <div className="domain-list-wrap text-center">
                                    <ul className="list-inline domain-search-list">
                                        <li className="list-inline-item bg-white border rounded">
                                            <a href="/#"><img src="/img/com.png" alt="com" width="70" className="img-fluid" /> <span>$8.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded">
                                            <a href="/#"><img src="/img/online.png" alt="com" width="70" className="img-fluid" /> <span>$0.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded">
                                            <a href="/#"><img src="/img/net.png" alt="com" width="70" className="img-fluid" /> <span>$4.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded">
                                            <a href="/#"><img src="/img/org.png" alt="com" width="70" className="img-fluid" /> <span>$2.99</span></a>
                                        </li>
                                        <li className="list-inline-item bg-white border rounded">
                                            <a href="/#"><img src="/img/store.png" alt="com" width="70" className="img-fluid" /> <span>$0.99</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DominioBuscador
