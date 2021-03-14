import React from 'react'

const Cover = () => {
    return (
        <>
            <div classNameName="main">
                <section className="ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{background: "url('/img/hero-6.jpg')", opacity: '1',}}></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12">
                                <div className="hero-content-wrap text-white text-center pt-5">
                                    <h1 className="text-white">Trusted Over 5K Lovely Client</h1>
                                    <p className="lead">Searching for that perfect domain? Progressively benchmark turnkey innovation after quality channels.</p>
                                    <a href="#" className="btn btn-brand-03 mt-2">Work With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Cover
