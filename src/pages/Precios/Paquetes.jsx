import React from 'react'
import CabeceraPaquetesPrecios from '../../components/Cabeceras/CabeceraPequetesPrecios'
import PreciosPaquete from '../../components/Precios/PreciosPaquete'
import Faq from '../../components/Caracteristicas/Faq'

const Paquetes = () => {
    return (
        <>
            <div className="main">
                <CabeceraPaquetesPrecios />
                <PreciosPaquete />
                <Faq/>
            </div>
        </>
    )
}

export default Paquetes
