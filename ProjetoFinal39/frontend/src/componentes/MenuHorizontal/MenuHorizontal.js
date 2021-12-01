import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AreaDados from '../AreaDados/AreaDados.js'
import Funcionarios from '../Funcionarios/Funcionarios.js';
import MenuBotoes from '../MenuBotoes/MenuBotoes.js'

import './MenuHorizontal.css';

export default function MenuHorizontal() {
/*
  var elemento = document.getElementById('idArea')
//  elemento.innerHTML = <Autores />
  elemento = <Autores />
*/
  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li> <Link to="/"> Início </Link> </li>
              <li> <Link to="/funcionarios"> Funcionarios   </Link> </li>
              <li> <Link to="/prefeituras"> Prefeituras </Link> </li>
              <li> <Link to="/usuarios"> Usuários </Link> </li>
              <li> <Link to="/configuracoes"> Configurações </Link> </li>
            </ul>
          </nav>
          
{/* 
          <Switch>
          <Route path="/autores" render = {() => 
          
            const = componente="<Autores/>" } >  
           
          </Route>
      
        </Switch>

*/}

        </div>

      </div>

  );
}


