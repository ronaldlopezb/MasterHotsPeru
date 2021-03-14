import React from 'react'

const Error404 = () => {
    return (
        <>
            <div className="main">
                <section className="ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{background: "url('/img/hero-2.jpg')", opacity: "1",}}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-9 col-lg-7">
                                <div className="error-content-wrap text-center text-white">
                                    <div className="notfound-404">
                                        <h1 className="text-white">404</h1>
                                    </div>
                                    <h2 className="text-white">Sorry, something went wrong</h2>
                                    <p className="lead">The page you are looking for might have been removed had its name changed or is temporarily
                                        unavailable.</p><a className="btn btn-brand-03" href="index.html">Go to Homepage</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                </div>
        </>
    )
}

export default Error404
