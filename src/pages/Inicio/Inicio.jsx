import React from 'react'

import BannerPrincipal from '../../components/Inicio/BannerPrincipal'
//import Preload from '../../components/Inicio/Preload'
import DominioBuscador from '../../components/Inicio/DominioBuscador'
import Promocion from '../../components/Inicio/Promocion'
import CallToAction from '../../components/Inicio/CallToAction'
import Servicios from '../../components/Inicio/Servicios'
import Herramientas from '../../components/Inicio/Herramientas'
import PlanPrecios from '../../components/Inicio/PlanPrecios'
import Caracterisitcas from '../../components/Inicio/Caracterisitcas'
import CallToAction2 from '../../components/Inicio/CallToAction2'
import Red from '../../components/Inicio/Red'
import Testimonios from '../../components/Inicio/Testimonios'
import Blog from '../../components/Inicio/Blog'
import Equipo from '../../components/Inicio/Equipo'

const Inicio = () => {
    return (
        <>
            {/* <Preload /> */}
            <BannerPrincipal />
            <DominioBuscador />
            <Promocion />
            <CallToAction />
            <Servicios />
            <Herramientas />
            <PlanPrecios />
            <Caracterisitcas />
            <CallToAction2 />
            <Red />
            <Testimonios />
            <Blog />
            <Equipo/>
        </>
    )
}

export default Inicio
