import './App.css';

import MenuPrincipal from './components/Estructura/MenuPrincipal'
import Footer from './components/Estructura/Footer'

import Inicio from './pages/Inicio/Inicio'
import Nosotros from './pages/Empresa/Nosotros'
import BlackFridayComing from './pages/BlackFriday/BlackFridayComing'
import BlackFridaySale from './pages/BlackFriday/BlackFridaySale'
import BlackFridaySingle from './pages/BlackFriday/BlackFridaySingle'
import TerminosCondiciones from './pages/Empresa/TerminosCondiciones'
import PoliticasPrivacidad from './pages/Empresa/PoliticasPrivacidad'
import Precios from './pages/Precios/Precios'
import Paquetes from './pages/Precios/Paquetes'
import WebHostingPaquetes from './pages/Precios/WebHostingPaquetes'
import WindowsHosting from './pages/Precios/WindowsHosting'
import ComparacionPrecios from './pages/Precios/ComparacionPrecios'
import Vps from './pages/Precios/Vps'

import BlogGrid from './pages/Blog/BlogGrid';
import Articulo from './pages/Blog/Articulo'

import ResultadosBusqueda from './pages/Especialidad/ResultadosBusqueda'
import Cover from './pages/Especialidad/Cover'
import Coming from './pages/Especialidad/Coming'
import Agradecimiento from './pages/Especialidad/Agradecimiento'
import Error404 from './pages/Especialidad/Error404'

import Login from './pages/LoginRegister/Login'
import Registrar from './pages/LoginRegister/Registrar'
import RecuperarClave from './pages/LoginRegister/RecuperarClave'




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <MenuPrincipal />
        <Switch>

          <Route path="/recuperar-cuenta" exact component={RecuperarClave} >
            <RecuperarClave/>
          </Route>

          <Route path="/registro" exact component={Registrar} >
            <Registrar/>
          </Route>

          <Route path="/acceder" exact component={Login} >
            <Login/>
          </Route>

          <Route path="/404" exact component={Error404} >
            <Error404/>
          </Route>

          <Route path="/agradecimiento" exact component={Agradecimiento} >
            <Agradecimiento/>
          </Route>

          <Route path="/pronto-en-linea" exact component={Coming} >
            <Coming/>
          </Route>

          <Route path="/cover" exact component={Cover} >
            <Cover/>
          </Route>

          <Route path="/resultado-buscar-dominio" exact component={ResultadosBusqueda} >
            <ResultadosBusqueda/>
          </Route>

          <Route path="/articulo" exact component={Articulo} >
            <Articulo/>
          </Route>

          <Route path="/blog" exact component={BlogGrid} >
            <BlogGrid/>
          </Route>

          <Route path="/vps" exact component={Vps} >
            <Vps/>
          </Route>

          <Route path="/comparacion-precios" exact component={ComparacionPrecios} >
            <ComparacionPrecios/>
          </Route>

          <Route path="/web-hosting-windows" exact component={WindowsHosting} >
            <WindowsHosting/>
          </Route>

          <Route path="/web-hosting" exact component={WebHostingPaquetes} >
            <WebHostingPaquetes/>
          </Route>

          <Route path="/paquetes" exact component={Paquetes} >
            <Paquetes/>
          </Route>

          <Route path="/precios" exact component={Precios} >
            <Precios/>
          </Route>

          <Route path="/politicas-privacidad" exact component={PoliticasPrivacidad} >
            <PoliticasPrivacidad/>
          </Route>

          <Route path="/terminos-condiciones" exact component={TerminosCondiciones} >
            <TerminosCondiciones/>
          </Route>

          <Route path="/blackfridaysingle" exact component={BlackFridaySingle} >
            <BlackFridaySingle/>
          </Route>

          <Route path="/blackfridaysale" exact component={BlackFridaySale} >
            <BlackFridaySale/>
          </Route>

          <Route path="/blackfridaycoming" exact component={BlackFridayComing} >
            <BlackFridayComing/>
          </Route>

          <Route path="/nosotros" exact component={Nosotros} >
            <Nosotros/>
          </Route>

          <Route path="/" exact component={Inicio} >
            <Inicio />
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
