import './App.css';

import MenuPrincipal from './components/Estructura/MenuPrincipal/MenuPrincipal'
import Footer from './components/Estructura/Footer'

//MENU PRINCIPAL - Inicio
import Inicio from './pages/Inicio/Inicio'
 //Paginas
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

//HOSTING
import SharedWebHosting from './pages/Hosting/SharedWebHosting'
import VpsHosting from './pages/Hosting/VpsHosting'
import CloudHosting from './pages/Hosting/CloudHosting'
import EmailHosting from './pages/Hosting/EmailHosting'
import WindowsVpsHosting from './pages/Hosting/WindowsVpsHosting'
import WordpressHosting from './pages/Hosting/WordpressHosting'


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

          {/*INICIO*/}
          <Route path="/" exact component={Inicio} > <Inicio /> </Route>

          {/*PÁGINAS*/}
          <Route path="/nosotros" exact component={Nosotros} > <Nosotros/> </Route>
          <Route path="/blackfridaycoming" exact component={BlackFridayComing} > <BlackFridayComing/> </Route>
          <Route path="/blackfridaysale" exact component={BlackFridaySale} > <BlackFridaySale/> </Route>
          <Route path="/blackfridaysingle" exact component={BlackFridaySingle} > <BlackFridaySingle/> </Route>
          <Route path="/terminos-condiciones" exact component={TerminosCondiciones} > <TerminosCondiciones/> </Route>
          <Route path="/politicas-privacidad" exact component={PoliticasPrivacidad} > <PoliticasPrivacidad/> </Route>
            {/*Precios*/}
            <Route path="/precios" exact component={Precios} > <Precios/> </Route>
            <Route path="/paquetes" exact component={Paquetes} > <Paquetes/> </Route>
            <Route path="/web-hosting" exact component={WebHostingPaquetes} > <WebHostingPaquetes/> </Route>
            <Route path="/web-hosting-windows" exact component={WindowsHosting} > <WindowsHosting/> </Route>
            <Route path="/comparacion-precios" exact component={ComparacionPrecios} > <ComparacionPrecios/> </Route>
            <Route path="/vps" exact component={Vps} > <Vps/> </Route>
            {/*Blog*/}
            <Route path="/blog" exact component={BlogGrid} > <BlogGrid/> </Route>
            <Route path="/articulo" exact component={Articulo} > <Articulo/> </Route>
            {/*Especialidades*/}
            <Route path="/resultado-buscar-dominio" exact component={ResultadosBusqueda} > <ResultadosBusqueda/> </Route>
            <Route path="/cover" exact component={Cover} > <Cover/> </Route>
            <Route path="/pronto-en-linea" exact component={Coming} > <Coming/> </Route>
            <Route path="/agradecimiento" exact component={Agradecimiento} > <Agradecimiento/> </Route>
            <Route path="/404" exact component={Error404} > <Error404/> </Route>
            {/*Accesos*/}
            <Route path="/acceder" exact component={Login} > <Login/> </Route>
            <Route path="/registro" exact component={Registrar} > <Registrar/> </Route>
            <Route path="/recuperar-cuenta" exact component={RecuperarClave} > <RecuperarClave/> </Route>
          {/*HOSTING*/}
          <Route path="/hosting-compartido" exact component={SharedWebHosting} > <SharedWebHosting/> </Route>
          <Route path="/vps-hosting" exact component={VpsHosting} > <VpsHosting/> </Route>
          <Route path="/cloud-hosting" exact component={CloudHosting} > <CloudHosting/> </Route>
          <Route path="/email-hosting" exact component={EmailHosting} > <EmailHosting/> </Route>
          <Route path="/windows-vps-hosting" exact component={WindowsVpsHosting} > <WindowsVpsHosting/> </Route>
          <Route path="/wordpress-hosting" exact component={WordpressHosting} > <WordpressHosting/> </Route>
          
          
          
            
          
          
          

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
