import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Autores from '../Autores/Autores';
import AutoresEditar from '../Autores/AutoresEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/autores" component={Autores}></Route>
        <Route exact path="/autores/:idAutor" component={AutoresEditar}></Route>
{/*
        <Route exact path="/livrossss"          component={AutoresEditar}></Route>

        <Route exact path="/autores/consultar/:codigo" component={AutoresEditar}></Route>

*/}


      </Switch>

    </div>
  );
}

