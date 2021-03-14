import React from 'react'

const Registrar = () => {
    return (
        <>
            <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                <div className="background-image-wraper" style={{background: "url('/img/hero-6.jpg')", opacity: "1",}}></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                                <div className="login-signup-header text-center">
                                    <a href="/"><img src="/img/logo-color.png" className="img-fluid mb-3" alt="Logo" /></a>
                                    <h4 className="mb-5">Create Your Account</h4>
                                </div>
                                <form className="login-signup-form">
                                    <div className="form-group">
                                        <label className="pb-1">
                                            Your Name
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="ti-user"></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="pb-1">
                                            Email Address
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="ti-email"></span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="name@address.com"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="pb-1">
                                            Password
                                        </label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="ti-lock"></span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Enter your password" />
                                        </div>
                                    </div>

                                    <div className="my-4">
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="check-terms" />
                                            <label className="custom-control-label small-text" for="check-terms">I agree to the <a href="/terminos-condiciones">Terms &amp; Conditions</a></label>
                                        </div>
                                    </div>

                                    <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3">
                                        Sign up
                                    </button>
                                </form>
                                <div className="other-login-signup my-3">
                                    <div className="or-login-signup text-center">
                                        <strong>Or Sign Up With</strong>
                                    </div>
                                </div>
                                <ul className="list-inline social-login-signup text-center">
                                    <li className="list-inline-item my-1">
                                        <a href="/#" className="btn btn-facebook"><i className="fab fa-facebook-f pr-1"></i> Facebook</a>
                                    </li>
                                    <li className="list-inline-item my-1">
                                        <a href="/#" className="btn btn-google"><i className="fab fa-google pr-1"></i> Google</a>
                                    </li>
                                    <li className="list-inline-item my-1">
                                        <a href="/#" className="btn btn-twitter"><i className="fab fa-twitter pr-1"></i> Twitter</a>
                                    </li>
                                </ul>
                                <p className="text-center mb-0">Already have an account? <a href="/acceder">Login</a></p>
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

export default Registrar
