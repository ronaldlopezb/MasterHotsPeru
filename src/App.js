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