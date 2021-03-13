import React from 'react'
import Cabecera from '../../components/BlackFriday/Single/Cabecera'
import Precios from '../../components/BlackFriday/Comming/Precios'
import CallToAction2 from '../../components/CallToActions/CallToAction2'
import Caracteristicas04 from '../../components/Caracteristicas/Caracteristicas04'
import CallToAction01 from '../../components/CallToActions/CallToAction01'
import Faq from '../../components/Caracteristicas/Faq'
import Testimonios02 from '../../components/Caracteristicas/Testimonios02'

const BlackFridaySingle = () => {
    return (
        <div>
            <div className="main">
                <Cabecera />
                <Precios />
                <CallToAction2 />
                <Caracteristicas04/>
                <CallToAction01 />
                <Faq />
                <Testimonios02 />

            </div>
        </div>
    )
}

export default BlackFridaySingle
