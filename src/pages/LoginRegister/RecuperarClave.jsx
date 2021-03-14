import React from 'react'

const RecuperarClave = () => {
    return (
        <>
            <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                <div className="background-image-wraper" style={{background: "url('/img/hero-3.jpg')", opacity: "1",}}></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                                <div className="login-signup-header text-center">
                                    <a href="/"><img src="/img/logo-color.png" className="img-fluid mb-3" alt="Logo" /></a>
                                    <h4 className="mb-5">Reset Your Account</h4>
                                </div>
                                <form className="login-signup-form">
                                    <div className="form-group">
                                        <label className="pb-1">
                                            Email Address
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="ti-email"></span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3">
                                        Login Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="copyright-wrap small-text text-center mt-5 text-white">
                                <p className="mb-0">&copy; ThemeTags Design Agency, All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecuperarClave
