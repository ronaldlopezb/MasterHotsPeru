import React from 'react'
import CabeceraBusquedaDominio from '../../components/Cabeceras/CabeceraBusquedaDominio'
import ResultadoDominio from '../../components/Dominio/ResultadoDominio'
import CaracterisitcasDominio from '../../components/Caracteristicas/CaracterisitcasDominio'
import CallToAction01 from '../../components/CallToActions/CallToAction01'
import Faq from '../../components/Caracteristicas/Faq'


const ResultadosBusqueda = () => {
    return (
        <>
            <div className="main">
                <CabeceraBusquedaDominio/>
                <ResultadoDominio/>
                <CaracterisitcasDominio/>
                <CallToAction01/>
                <Faq/>
            </div>
        </>
    )
}

export default ResultadosBusqueda
