import React from "react"
import './FuncionariosEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function FuncionariosEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    const [funcionarios, setFuncionarios] = useState([]);

    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');
    const [ativoInativo, setAtivo] = useState('');
    const [cargo, setCargo] = useState('');
    const [depto, setDepto] = useState('');
    const [registro, setRegistro] = useState('');
    
    const [checked, setChecked] = useState(false);
    const [nomePag, setNomePag] = useState(false);

    const { idPrefeitura } = useParams();

    function IfCrud() {
        let nomeCampo = '';
        //        console.log('Id Autor: ' + idAutor + ' - ' + idBoolean)
        if (idPrefeitura == 0) {
            nomeCampo = 'Inclusão de Prefeitura';
            idBoolean = true;
        } else {
            nomeCampo = 'Alteração de Funcionario';
        }
        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getFuncionarios() {
            if (idBoolean) {
                setChecked(true);
            } else {
                try {
                    const { data } = await urlapi.get('/funcionarios/' + codigo);
                    console.log(data)                    
                    setFuncionarios(data);
                    setCodigo(data.fun_codigo);                    
                    setNome(data.fun_nome);
                    setAtivo(data.fun_ativoinativo);
                    setCargo(data.fun_cargo);
                    setDepto(data.fun_depto);
                    setRegistro(data.fun_registro);
                    

    
    //                console.log(autor)
                    console.log(data[0].fun_nome)
    //                console.log(autor[0].aut_nome)

                } catch (error) {
                    alert("Ocorreu um erro...");
                }
            }
        }
        IfCrud();
        getFuncionarios();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleFuncionario(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (idBoolean) {
                    await urlapi.post('funcionarios', data);
                } else {
                    await urlapi.put('/funcionarios/' + codigo, data);
                }
                
                history.push('/funcionarios');
            }

        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>

            <main className="content">

            </main>
            <section className="sectionTable" >

                <form className="form-funcionario" onSubmit={handleFuncionario} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control" name="fun_codigo"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> A/I </label>
                            <input type="text" id="fun_ativoinativo" className="form-control"
                                name="fun_ativoinativo" 
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Funcionario </label>
                            <input type="text" className="form-control"
                                name="fun_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cargo </label>
                            <input type="text" className="form-control" name="fun_cargo"
                                id="fun_cargo" 
                                value={cargo} 
                                onChange={e => setCargo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Depto </label>
                            <input type="text" className="form-control" name="fun_depto"
                                id="fun_depto"
                                value={depto}
                                onChange={e => setDepto(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Registro </label>
                            <input type="text" className="form-control" name="fun_registro"
                                id="fun_registro" 
                                value={registro}
                                onChange={e => setRegistro(e.target.value)}
                            />
                        </div>
                    </div>

                   
                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/funcionarios" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
