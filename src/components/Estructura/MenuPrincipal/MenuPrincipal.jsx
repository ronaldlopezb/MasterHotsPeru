import React from 'react'

import Inicio from '../MenuPrincipal/Botones/Inicio'
import Paginas from '../MenuPrincipal/Botones/Paginas'
import Hosting from '../MenuPrincipal/Botones/Hosting'
import Dominio from '../MenuPrincipal/Botones/Dominio'
import Afiliados from '../MenuPrincipal/Botones/Afiliados'
import Empresa from '../MenuPrincipal/Botones/Empresa'
import AreaCliente from '../MenuPrincipal/Botones/AreaCliente'


const MenuPrincipal = () => {
    return (
        <>
            {/* header section start */}
            <header id="header" className="header-main">
                <div id="logoAndNav" className="main-header-menu-wrap bg-transparent fixed-top">
                    <div className="container">
                        <nav className="js-mega-menu navbar navbar-expand-md header-nav">

                            {/* logo */}
                            <a className="navbar-brand" href="/"><img src="/img/logo-white.png" width="120" alt="logo" className="img-fluid" /></a>

                            {/* responsive toggle button start */}
                            <button type="button" className="navbar-toggler btn" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                                <span id="hamburgerTrigger">
                                    <span className="ti-menu"></span>
                                </span>
                            </button>

                            {/* main menu start */}
                            <div id="navBar" className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto main-navbar-nav">
                                    <Inicio />
                                    <Paginas />
                                    <Hosting />
                                    <Dominio />
                                    <Afiliados />
                                    <Empresa />
                                    <AreaCliente />
                                </ul>
                            </div>
                            {/* main menu end */}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MenuPrincipal
