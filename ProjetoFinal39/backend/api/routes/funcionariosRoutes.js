const controller = require("../controllers/funcionariosControllers.js");

//server.get('/autores', controller.autoresMenu)

server.get("/funcionarios", controller.funcionariosGetAll);
server.get("/funcionarios/:fun_codigo", controller.funcionariosGetById);

server.put(
  "/funcionarios/ativoInativo/:codigo",
  controller.funcionariosAtivoInativo
);

server.put("/funcionarios/:fun_codigo", controller.funcionariosEditar);
server.post("/funcionarios", controller.autoresNovo);
