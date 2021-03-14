import React from 'react'

const Paginas = () => {
    return (
        <>
            {/* pages start */}
            <li className="nav-item hs-has-sub-menu custom-nav-item">
                <a id="pagesMegaMenu" className="nav-link custom-nav-link main-link-toggle" href="/#" aria-labelledby="pagesSubMenu">Páginas</a>

                {/* Pages - Submenu */}
                <ul id="pagesSubMenu" className="hs-sub-menu main-sub-menu" aria-labelledby="pagesMegaMenu" style={{minwidth: '230px',}}>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/blackfridaycoming">Black Friday Coming
                            <span className="badge badge-warning ml-auto">Nuevo</span>
                        </a>
                    </li>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/blackfridaysale">Black Friday Sale<span className="badge badge-warning ml-auto">Nuevo</span></a>
                    </li>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/blackfridaysingle">Black Friday Single<span className="badge badge-warning ml-auto">Nuevo</span></a>
                    </li>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/terminos-condiciones">Términos & Condiciones<span className="badge badge-warning ml-auto">Nuevo</span></a>
                    </li>
                    <li className="nav-item submenu-item">
                        <a className="nav-link sub-menu-nav-link" href="/politicas-privacidad">Políticas de Privacidad<span className="badge badge-warning ml-auto">Nuevo</span></a>
                    </li>

                    <li className="hs-has-sub-menu">
                        <a id="navLinkPagesPricing" className="nav-link sub-menu-nav-link sub-link-toggle" href="/" aria-controls="navSubmenuPagesPricing">Pricing</a>

                        <ul id="navSubmenuPagesPricing" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesPricing" style={{minwidth: '230px',}}>
                            <li><a className="nav-link sub-menu-nav-link" href="/precios">Precios</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/paquetes">Precios de paquetes</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/web-hosting">Web Hosting</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/web-hosting-windows">Windows Hosting</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/comparacion-precios">Comparación de precios</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/vps">VPS Hosting</a></li>
                        </ul>
                    </li>

                    <li className="hs-has-sub-menu">
                        <a id="navLinkPagesBlog" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesBlog">Blog</a>

                        <ul id="navSubmenuPagesBlog" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesBlog" style={{minwidth: '230px',}}>
                            <li><a className="nav-link sub-menu-nav-link" href="/blog">Blog</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/articulo">Artículo</a></li>
                        </ul>
                    </li>

                    <li className="hs-has-sub-menu">
                        <a id="navLinkPagesSpecialty" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesSpecialty">Specialty</a>

                        <ul id="navSubmenuPagesSpecialty" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesSpecialty" style={{minwidth: '230px',}}>
                            <li><a className="nav-link sub-menu-nav-link" href="/resultado-buscar-dominio">Resultado de búsqueda <span className="badge badge-warning ml-2">New</span></a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/cover">Cover</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/pronto-en-linea">Pronto en linea</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/agradecimiento">Agradecimiento</a></li>
                            <li><a className="nav-link sub-menu-nav-link" href="/404">Error 404</a></li>
                        </ul>
                    </li>

                    <li className="hs-has-sub-menu">
                        <a id="navLinkPagesLogin" className="nav-link sub-menu-nav-link sub-link-toggle" href="/#" aria-controls="navSubmenuPagesLogin">Acceso &amp; Registro</a>

                        <ul id="navSubmenuPagesLogin" className="hs-sub-menu main-sub-menu" aria-labelledby="navLinkPagesLogin" style={{minwidth: '230px',}}>
                            <li>
                                <a className="nav-link sub-menu-nav-link" href="/acceder">Acceder</a>
                            </li>
                            <li>
                                <a className="nav-link sub-menu-nav-link" href="/registro">Registro</a>
                            </li>
                            <li>
                                <a className="nav-link sub-menu-nav-link" href="/recuperar-cuenta">Recuperar cuenta</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* End Pages - Submenu */}
            </li>
            {/* pages end*/}
        </>
    )
}

export default Paginas
