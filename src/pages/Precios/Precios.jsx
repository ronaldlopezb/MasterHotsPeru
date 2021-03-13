import React from 'react'
import CabeceraPrecios from '../../components/Cabeceras/CabeceraPrecios'
import PlanPrecios from '../../components/Precios/PlanPrecios'
import Faq from '../../components/Caracteristicas/Faq'

const Precios = () => {
    return (
        <>
            <div className="main">
                <CabeceraPrecios />
                <PlanPrecios/>
                <Faq />
            </div>
        </>
    )
}

export default Precios
