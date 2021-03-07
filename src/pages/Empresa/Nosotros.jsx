import React from 'react'

import Preload from '../../components/Preload/Preload'
import CabeceraNosotros from '../../components/Cabeceras/CabeceraNosotros'
import Caracteristicas03 from '../../components/Caracteristicas/Caracteristicas03'
import Red from '../../components/Caracteristicas/Red'
import CallToAction2 from '../../components/CallToActions/CallToAction2'
import Caracteristicas02 from '../../components/Caracteristicas/Caracteristicas02'
import Testimonios from '../../components/Caracteristicas/Testimonios'

const Nosotros = () => {
    return (
        <>
            <Preload />
            <CabeceraNosotros />
            <Caracteristicas03 />
            <Red />
            <CallToAction2/>
            <Caracteristicas02 />
            <Testimonios />
        </>
    )
}

export default Nosotros
