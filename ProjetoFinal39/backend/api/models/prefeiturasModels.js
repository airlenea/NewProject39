const conexao = require("../../config/conexao.js");

module.exports = {
  getAllPrefeituras,
  getByIdPrefeituras,
  ativarInativar,
};

function getAllPrefeituras(callback) {
  conexao.query("select * from prefeituras", callback);
}

function getByIdPrefeituras(id, callback) {
  conexao.query("select * from prefeituras WHERE edt_codigo = " + id, callback);
}

function ativarInativar(id, ativo, callback) {
  console.log(
    "Prefeituras Ativando/Inativando Registro " + id + " - Status: " + ativo
  );

  const m_sql =
    "update prefeituras set pre_ativoinativo = '" +
    ativo +
    "' where pre_codigo = '" +
    id +
    "'";

  conexao.query(m_sql, callback);

  console.log(
    "Retornando { M O D E L } Prefeituras Ativando/Inativando Registro " +
      id +
      " - Status: " +
      ativo
  );
}
