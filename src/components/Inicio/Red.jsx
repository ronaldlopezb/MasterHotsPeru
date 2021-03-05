import React from 'react'

const Red = () => {
    return (
        <>
            <section className="network-map-section ptb-100 gray-light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-8">
                            <div className="section-heading text-center mb-5">
                                <h2>Our Data centers Location</h2>
                                <p className="lead">Cloudhub offers a low latency worldwide network, enabling you to deploy your
                                    service infrastructure in close proximity to your customer base.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="network-map-wrap">
                                <ul className="custom-map-location">
                                    <li style={{top: '29%', left: '15.5%', }}>
                                        <span data-toggle="tooltip" data-placement="top" title="Canada"></span>
                                    </li>
                                    <li style={{top: '42%', left: '20%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="United States"></span>
                                    </li>
                                    <li style={{top: '70%', left: '32%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Brazil"></span>
                                    </li>
                                    <li style={{top: '57%', left: '48%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Nigeria"></span>
                                    </li>
                                    <li style={{top: '18%', left: '53%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Finland"></span>
                                    </li>
                                    <li style={{top: '34%', left: '55%'}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Ukraine"></span>
                                    </li>
                                    <li style={{top: '45%', left: '68%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="India"></span>
                                    </li>
                                    <li style={{top: '35%', left: '80%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="China"></span>
                                    </li>
                                    <li style={{top: '77%', left: '85%',}}>
                                        <span data-toggle="tooltip" data-placement="top" title="Australia"></span>
                                    </li>
                                </ul>
                                <img src="/img/map-dark.svg" alt="location map" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Red
