import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Funcionarios from "../Funcionarios/Funcionarios";
import FuncionariosEditar from "../Funcionarios/FuncionariosEditar";

import "./AreaDados.css";

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/funcionarios" component={Funcionarios}></Route>
        <Route
          exact
          path="/funcionarios/:fun_codigo"
          component={FuncionariosEditar}
        ></Route>
        {/*
        <Route exact path="/livrossss"          component={AutoresEditar}></Route>

        <Route exact path="/autores/consultar/:codigo" component={AutoresEditar}></Route>

*/}
      </Switch>
    </div>
  );
}
