import React from 'react'

const CallToAction01 = () => {
    return (
        <>
            {/* call to action start */}
            <section className="ptb-60 primary-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7 col-lg-6">
                            <div className="cta-content-wrap text-white">
                                <h2 className="text-white">Best Cloud Hosting <br/> With Trusted Service</h2>
                                <p>Objectively innovate high standards in methodologies vis-a-vis sustainable compellingly maintain multidisciplinary process proactively streamline mission-critical information via quality imperatives. </p>
                            </div>
                            <div className="action-btns mt-4">
                                <a href="/#" className="btn btn-brand-03"> Get Start Now </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="cta-img-wrap text-center">
                                <img src="/img/server-room.svg" className="img-fluid" alt="server room" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action end */}
        </>
    )
}

export default CallToAction01
