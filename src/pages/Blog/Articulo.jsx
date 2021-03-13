import React from 'react'
import CabeceraArticulos from '../../components/Cabeceras/CabeceraArticulos'
import ArticuloMenuDerecha from '../../components/Blog/ArticuloMenuDerecha'
import ArticuloDetalle from '../../components/Blog/ArticuloDetalle'
import ArticulosComentarios from '../../components/Blog/ArticulosComentarios'

const Articulo = () => {
    return (
        <div>
            <div className="main">
                <CabeceraArticulos/>
                <div className="module ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <ArticuloDetalle/>
                                <ArticulosComentarios/>
                            </div>
                            <ArticuloMenuDerecha/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articulo
