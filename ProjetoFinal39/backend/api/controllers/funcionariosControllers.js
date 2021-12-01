const models = require('../models/funcionariosModels.js');

module.exports = {
    funcionariosMenu,
    funcionariosGetAll,
    funcionariosGetById,
    funcionariosAtivoInativo,
    funcionariosNovo,
    funcionariosEditar,
}

function funcionariosMenu (req, res) {
    res.json('Rota Funcionarios Encontrada!!!');
    console.log('Rota Funcionarios Encontrada!!!');
}

function funcionariosGetAll(req, res) {
    console.log('Listar Funcionarios {M O D E L}');
    models.getAllFuncionarios(function (err, resposta) {
        console.log('Retorno de Funcionarios {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function funcionariosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdFuncionarios(id, function (err, resposta) {
        console.log('Retorno de Funcionarios Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

function funcionariosAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Funcionarios { M O D E L }')
    console.log('Ativar/Inativar Funcionarios { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdFuncionarios(id, function (err, resposta) {
        console.log('Retorno de funcionarios Id {M O D E L}', resposta)
        let p_ativo = resposta[0].fun_ativoinativo
        if (err) {
            throw err;
        } else {
            if (p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function (err, result) {
            if (err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
            //            res.redirect('/funcionarios/consultar/' + id);
        })
    })
}


function funcionariosNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Funcionarios...");
    console.log(req.body);
    dados.fun_codigo = null;
    console.log("Inserindo novo registro de Funcionarios...");
    models.newFuncionarios(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/funcionarios/listar');
    })
}


function funcionariosEditar(req, res) {
    var dados = req.body;

    console.log(req.body);
    console.log("Alterando Registro de Funcionarios...");

    models.funcionariosAutores(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/funcionarios/listar');
    });
}


