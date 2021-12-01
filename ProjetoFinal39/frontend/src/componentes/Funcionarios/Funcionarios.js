import React from "react"
import './Funcionarios.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaFuncionarios";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Funcionarios() {
  const [autores, setFuncionarios] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('funcionarios')
      .then(response => setFuncionarios(response.data));
  }, []
  )

  return (
    <>
        <div id="idFuncionarios" className="funcionarios">
          <div id="corpo_rel">
            <legend> Registros de Funcionarios Cadastrados</legend>
            <Link to="/funcionarios/0" value={'I'}>incluir Novo Funcionário</Link>

            <div>

              <Tabela
                items={Funcionarios}
                chave={'/funcionarios/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Funcionarios;

