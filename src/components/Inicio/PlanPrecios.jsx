import React from 'react'

const PlanPrecios = () => {
    return (
        <>
            <section class="pricing-section ptb-100 gray-light-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-8">
                            <div class="section-heading text-center mb-4">
                                <h2>Our Flexible Pricing Plan</h2>
                                <p>
                                    Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
                                    core competencies through client-centered
                                    core competencies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-md-center justify-content-center">
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div class="pricing-icon">
                                    <img src="/img/dadicate-web-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 class="package-title">Web Hosting</h4>
                                <p class="mb-4">For small business</p>
                                <div class="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div class="h2">$8.99 <span class="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" class="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="popular-price text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div class="pricing-icon">
                                    <img src="/img/vps-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 class="package-title">VPS Hosting</h4>
                                <p class="mb-4">For medium business</p>
                                <div class="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div class="h2">$8.99 <span class="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" class="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="text-center bg-white single-pricing-pack-2 mt-4 rounded border">
                                <div class="pricing-icon">
                                    <img src="/img/cloud-hosting.svg" width="60" alt="hosing" />
                                </div>
                                <h4 class="package-title">Cloud Hosting</h4>
                                <p class="mb-4">Large and enterprise business</p>
                                <div class="pricing-price pt-4">
                                    <small>Starting at</small>
                                    <div class="h2">$8.99 <span class="price-cycle h4">/mo</span></div>
                                </div>
                                <a href="/#" class="btn btn-brand-01">Get Started Now</a>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="support-cta text-center mt-5">
                                <h5 class="mb-1"><span class="ti-headphone-alt color-primary mr-3"></span>We're Here to Help You
                                </h5>
                                <p>Have some questions? <a href="/#">Chat with us now</a>, or <a href="/#">send us an email</a> to
                                    get in touch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanPrecios
