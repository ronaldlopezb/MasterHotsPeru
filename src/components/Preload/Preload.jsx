import React from 'react'

const Preload = () => {
    return (
        <div>
            <div id="preloader">
                <div className="preloader-wrap">
                    <img src="/img/logo-color.png" alt="logo" className="img-fluid" />
                    <div className="preloader">
                        <i>.</i>
                        <i>.</i>
                        <i>.</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preload
