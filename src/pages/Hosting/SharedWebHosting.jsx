import React from 'react'


import CabeceraWebHosting from '../../components/Cabeceras/CabeceraWebHosting'
import PreciosWebHosting from '../../components/Precios/PreciosWebHosting'
import CallToAction03 from '../../components/CallToActions/CallToAction03'
import CaracteristicasHosting from '../../components/Caracteristicas/CaracteristicasHosting'
import CallToAction2 from '../../components/CallToActions/CallToAction2'
import Faq from '../../components/Caracteristicas/Faq'
import Testimonios02 from '../../components/Caracteristicas/Testimonios02'


const SharedWebHosting = () => {
    return (
        <>
            <div className="main">
                <CabeceraWebHosting/>
                <PreciosWebHosting/>
                <CallToAction03/>
                <CaracteristicasHosting/>
                <CallToAction2/>
                <Faq />
                <Testimonios02/>
            </div>
        </>
    )
}

export default SharedWebHosting
