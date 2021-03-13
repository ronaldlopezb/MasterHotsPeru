import React from 'react'
import CabeceraVps from '../../components/Cabeceras/CabeceraVps'
import PreciosVps01 from '../../components/Precios/PreciosVps01'
import PreciosVps02 from '../../components/Precios/PreciosVps02'
import Faq from '../../components/Caracteristicas/Faq'


const Vps = () => {
    return (
        <>
            <div className="main">
                <CabeceraVps/>
                <PreciosVps01/>
                <PreciosVps02/>
                <Faq/>
            </div>
        </>
    )
}

export default Vps
