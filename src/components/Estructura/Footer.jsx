import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer link start */}
            <footer className="footer-1 ptb-60 gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                            <a href="/#" className="navbar-brand mb-2">
                                <img src="/img/logo-white.png" alt="logo" className="img-fluid" />
                            </a>
                            <br/>
                            <p>Dynamically re-engineer high standards in functiona with alternative paradigms. Conveniently monetize resource maximizing initiatives.</p>
                            <ul className="list-inline social-list-default background-color social-hover-2 mt-2">
                                <li className="list-inline-item"><a className="twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a className="linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a className="dribbble" href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
                                <li className="list-inline-item"><a className="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="row mt-0">
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Recuersos</h6>
                                    <ul>
                                        <li>
                                            <a href="/#">Auyda</a>
                                        </li>
                                        <li>
                                            <a href="/#">Eventos</a>
                                        </li>
                                        <li>
                                            <a href="/#">Sesiones en vivo</a>
                                        </li>
                                        <li>
                                            <a href="/#">Código abierto</a>
                                        </li>
                                        <li>
                                            <a href="/#">Documentación</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Productos</h6>
                                    <ul>
                                        <li>
                                            <a href="/#">Precios</a>
                                        </li>
                                        <li>
                                            <a href="/#">Navigación</a>
                                        </li>
                                        <li>
                                            <a href="/#">AI Studio</a>
                                        </li>
                                        <li>
                                            <a href="/#">Velocidad de Carga </a>
                                        </li>
                                        <li>
                                            <a href="/#">Rendimiento</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                                    <h6 className="font-weight-normal">Empresa</h6>
                                    <ul>
                                        <li>
                                            <a href="/#">Conócenos</a>
                                        </li>
                                        <li>
                                            <a href="/#">Carreras</a>
                                        </li>
                                        <li>
                                            <a href="/#">Clientes</a>
                                        </li>
                                        <li>
                                            <a href="/#">Comunidad</a>
                                        </li>
                                        <li>
                                            <a href="/#">Nuestro Equipo</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3">
                                    <h6 className="font-weight-normal">Soporte</h6>
                                    <ul>
                                        <li>
                                            <a href="/#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="/#">Ventas</a>
                                        </li>
                                        <li>
                                            <a href="/#">Contacto de Soporte</a>
                                        </li>
                                        <li>
                                            <a href="/#">estado de Servidores</a>
                                        </li>
                                        <li>
                                            <a href="/#">Productos y Servicios</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer link end */}

            {/* footer bottom copyright start */}
            <div className="footer-bottom py-3 gray-light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <div className="copyright-wrap small-text">
                                <p className="mb-0">&copy; MasterHostPeru. Desarrollado por Ronald López. Todos los derechos reservados.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a className="small-text" href="/terms-condition.html">Términos & Condiciones</a></li>
                                    <li className="list-inline-item"><a className="small-text" href="/#">Seguridad</a></li>
                                    <li className="list-inline-item"><a className="small-text" href="/privacy-policy.html">Políticas de privacidad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer bottom copyright end */}

            {/* scroll bottom to top button start */}
            <div className="scroll-top scroll-to-target primary-bg text-white" data-target="html">
                <span className="fas fa-hand-point-up"></span>
            </div>
            {/* scroll bottom to top button end */}
        </>
    )
}

export default Footer
