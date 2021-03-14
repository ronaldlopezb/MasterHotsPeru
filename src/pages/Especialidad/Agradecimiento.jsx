import React from 'react'

const Agradecimiento = () => {
    return (
        <>
           <div className="main">
                <section className="ptb-100 bg-image full-height" image-overlay="8">
                    <div className="background-image-wraper" style={{background: "url('/img/hero-8.jpg')", opacity: "1",}}></div>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-9 col-lg-7">
                                <div className="hero-content-left text-white text-center">
                                    <h1 className="text-white">Thank You !</h1>

                                    <p className="lead">We will be in touch shortly. We're looking forward to your demo. If you have any questions feel free to give us a call.</p>

                                    <div className="mb-5">
                                        <h5 className="mb-0 text-white"> <span className="ti-mobile mr-2 align-items-center"></span> (612) 255-461</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-5 col-lg-5">
                                <form className="newsletter-form position-relative">
                                    <input type="text" className="input-newsletter form-control" placeholder="Enter your email" name="email" required="" autocomplete="off" />
                                    <button type="submit" className="disabled">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                </div> 
        </>
    )
}

export default Agradecimiento
