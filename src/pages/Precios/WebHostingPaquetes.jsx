import React from 'react'
import CabeceraHosting from '../../components/Cabeceras/CabeceraHosting'
import PreciosPaquete from '../../components/Precios/PreciosPaquete'
import Faq from '../../components/Caracteristicas/Faq'

const WebHostingPaquetes = () => {
    return (
        <>
            <div className="main">
                <CabeceraHosting />
                <PreciosPaquete />
                <Faq />
            </div>
        </>
    )
}

export default WebHostingPaquetes
