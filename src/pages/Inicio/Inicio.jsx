import React from 'react'

import CabeceraHome from '../../components/Cabeceras/CabeceraHome'
//import Preload from '../../components/Preload/Preload'
import DominioBuscador from '../../components/Dominio/DominioBuscador'
import Caracteristicas01 from '../../components/Caracteristicas/Caracteristicas01'
import CallToAction01 from '../../components/CallToActions/CallToAction01'
import Herramientas from '../../components/Caracteristicas/Herramientas'
import PlanPrecios from '../../components/Precios/PlanPrecios'
import Caracteristicas02 from '../../components/Caracteristicas/Caracteristicas02'
import CallToAction2 from '../../components/CallToActions/CallToAction2'
import Red from '../../components/Caracteristicas/Red'
import Testimonios from '../../components/Caracteristicas/Testimonios'
import Blog from '../../components/Blog/Blog'
import Equipo from '../../components/Caracteristicas/Equipo'

const Inicio = () => {
    return (
        <>
            {/* <Preload />*/}
            <CabeceraHome />
            <DominioBuscador />
            <Caracteristicas01 />
            <CallToAction01 />
            <Herramientas />
            <PlanPrecios />
            <Caracteristicas02 />
            <CallToAction2 />
            <Red />
            <Testimonios />
            <Blog />
            <Equipo/>
        </>
    )
}

export default Inicio
