import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Funcionarios from '../Funcionarios/Funcionarios';
import FuncionariosEditar from '../Funcionarios/FuncionariosEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/funcionarios" component={Funcionarios}></Route>
        <Route exact path="/funcionarios/:idAutor" component={FuncionariosEditar}></Route>
{/*
        <Route exact path="/livrossss"          component={AutoresEditar}></Route>

        <Route exact path="/autores/consultar/:codigo" component={AutoresEditar}></Route>

*/}


      </Switch>

    </div>
  );
}

