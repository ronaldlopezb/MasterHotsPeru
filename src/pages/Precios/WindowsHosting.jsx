import React from 'react'
import CabeceraWindowsHosting from '../../components/Cabeceras/CabeceraWindowsHosting'
import PreciosWindowsHosting from '../../components/Precios/PreciosWindowsHosting'
import Faq from '../../components/Caracteristicas/Faq'


const WindowsHosting = () => {
    return (
        <>
            <div className="main">
                <CabeceraWindowsHosting />
                <PreciosWindowsHosting />
                <Faq />
            </div>
        </>
    )
}

export default WindowsHosting
