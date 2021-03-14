import React from 'react'

const Login = () => {
    return (
        <>
            <section className="page-header-section ptb-100 bg-image full-height" image-overlay="8">
                <div className="background-image-wraper" style={{background: "url('/img/hero-11.jpg')", opacity: "1",}}></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                                <div className="login-signup-header text-center">
                                    <a href="index.html"><img src="/img/logo-color.png" className="img-fluid mb-3" alt="Logo" /></a>
                                    <h4 className="mb-5">Login Your Account</h4>
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
                                            <input type="email" className="form-control" placeholder="name@address.com" />
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

                                    <button className="btn btn-block btn-brand-02 border-radius mt-4 mb-3">
                                        Login Now
                                    </button>
                                </form>
                                <div className="other-login-signup my-3">
                                    <div className="or-login-signup text-center">
                                        <strong>Or Login With</strong>
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
                                <p className="text-center mb-0">Don't have an account? <a href="registro">Register</a></p>
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

export default Login
