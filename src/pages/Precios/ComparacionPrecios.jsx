import React from 'react'
import CabeceraComprarPrecios from '../../components/Cabeceras/CabeceraComprarPrecios'
import CompararCloud from '../../components/ComprarPrecios/CompararCloud'
import CompararWebHosting from '../../components/ComprarPrecios/CompararWebHosting'
import CompararPaquetes from '../../components/ComprarPrecios/CompararPaquetes'
import CompararDominoFtp from '../../components/ComprarPrecios/CompararDominoFtp'
import CompararEmail from '../../components/ComprarPrecios/CompararEmail'
import CompararWebsiteFtp from '../../components/ComprarPrecios/CompararWebsiteFtp'
import CompararEcommerce from '../../components/ComprarPrecios/CompararEcommerce'

const ComparacionPrecios = () => {
    return (
        <div>
            <div className="main">
                <CabeceraComprarPrecios />
                <CompararCloud />
                <CompararWebHosting />
                <CompararPaquetes />
                <CompararDominoFtp/>
                <CompararEmail/>
                <CompararWebsiteFtp/>
                <CompararEcommerce/>
            </div>
        </div>
    )
}

export default ComparacionPrecios
