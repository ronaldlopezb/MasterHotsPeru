import React from 'react'

const ArticuloMenuDerecha = () => {
    return (
        <>
            <div className="col-lg-4 col-md-4">
                <div className="sidebar-right pl-4">

                    {/* Search widget */}
                    <aside className="widget widget-search">
                        <form>
                            <input className="form-control" type="search" placeholder="Type Search Words" />
                            <button className="search-button" type="submit"><span className="ti-search"></span></button>
                        </form>
                    </aside>


                    {/* Categories widget */}
                    <aside className="widget widget-categories">
                        <div className="widget-title">
                            <h6>Categories</h6>
                        </div>
                        <ul>
                            <li><a href="/#">Journey <span className="float-right">112</span></a></li>
                            <li><a href="/#">Development <span className="float-right">86</span></a></li>
                            <li><a href="/#">Sport <span className="float-right">10</span></a></li>
                            <li><a href="/#">Photography <span className="float-right">144</span></a></li>
                            <li><a href="/#">Symphony <span className="float-right">18</span></a></li>
                        </ul>
                    </aside>

                    {/* Recent entries widget */}
                    <aside className="widget widget-recent-entries-custom">
                        <div className="widget-title">
                            <h6>Recent Posts</h6>
                        </div>
                        <ul>
                            <li className="clearfix">
                                <div className="wi"><a href="/#"><img src="/img/blog/1.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                            </li>
                            <li className="clearfix">
                                <div className="wi"><a href="/#"><img src="/img/blog/2.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                            </li>
                            <li className="clearfix">
                                <div className="wi"><a href="/#"><img src="/img/blog/3.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                            </li>
                        </ul>
                    </aside>

                    {/* Subscribe widget */}
                    <aside className="widget widget-categories">
                        <div className="widget-title">
                            <h6>Newsletter</h6>
                        </div>
                        <p>Enter your email address below to subscribe to my newsletter</p>
                        <form action="#" method="post" className="d-none d-md-block d-lg-block">
                            <input type="text" className="form-control input" id="email-footer" name="email" placeholder="info@yourdomain.com" />
                            <button type="submit" className="btn btn-brand-01 btn-block mt-3">Subscribe</button>
                        </form>
                    </aside>

                    {/* Tags widget */}
                    <aside className="widget widget-tag-cloud">
                        <div className="widget-title">
                            <h6>Tags</h6>
                        </div>
                        <div className="tag-cloud"><a href="/#">e-commerce</a><a href="/#">portfolio</a><a href="/#">responsive</a><a href="/#">bootstrap</a><a href="/#">business</a><a href="/#">corporate</a></div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default ArticuloMenuDerecha
