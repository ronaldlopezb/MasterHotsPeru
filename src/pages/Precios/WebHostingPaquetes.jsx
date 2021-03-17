import React from 'react'
import CabeceraHosting from '../../components/Cabeceras/CabeceraHosting'
import PreciosWebHosting from '../../components/Precios/PreciosWebHosting'
import Faq from '../../components/Caracteristicas/Faq'

const WebHostingPaquetes = () => {
    return (
        <>
            <div className="main">
                <CabeceraHosting />
                <PreciosWebHosting />
                <Faq />
            </div>
        </>
    )
}

export default WebHostingPaquetes
